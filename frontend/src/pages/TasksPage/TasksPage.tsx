import { FC, useEffect, useState, useRef } from "react";
import { Page } from "@/components/Page.tsx";
import "./TasksPage.css";
import { taskApi } from "@/services/api";

interface Task {
  id: number;
  title: string;
  description: string;
  type: "daily" | "permanent";
  reward: number;
  condition_value: number;
  condition_type: string;
}

interface UserTask {
  id: number;
  task: Task;
  progress: number;
  is_completed: boolean;
  is_claimed: boolean;
}

export const TasksPage: FC = () => {
  const [activeTab, setActiveTab] = useState<"daily" | "permanent">("daily");
  const [tasks, setTasks] = useState<UserTask[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [claimingTask, setClaimingTask] = useState<number | null>(null);
  const currentDateRef = useRef<number>(new Date().getDate());

  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;

  // Проверка и сброс ежедневных заданий при необходимости
  const checkDailyReset = async () => {
    const now = new Date();
    const currentDay = now.getDate();
    
    // Если день изменился с момента последней проверки
    if (currentDay !== currentDateRef.current) {
      console.log("Day has changed - checking daily reset");
      currentDateRef.current = currentDay;
      
      try {
        await taskApi.checkDailyReset(userId);
      } catch (error) {
        console.error("Error checking daily reset:", error);
      }
    }
  };

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      
      // Проверяем сброс ежедневных заданий
      await checkDailyReset();
      
      // Проверяем прогресс заданий
      await taskApi.checkTasksProgress(userId);
      
      // Получаем обновленные задания
      const userTasks = await taskApi.getUserTasks(userId);
      setTasks(
        userTasks.map((userTask) => ({
          ...userTask,
          task: {
            ...userTask.task,
            type: userTask.task.type.toLowerCase() as "daily" | "permanent",
          },
        }))
      );
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    
    // Устанавливаем интервал для периодической проверки смены дня
    const intervalId = setInterval(() => {
      checkDailyReset();
    }, 60000); // Проверяем каждую минуту
    
    return () => {
      clearInterval(intervalId);
    };
  }, [userId]);

  // Функция для обработки нажатия на кнопку задания
  const handleTaskAction = async (userTask: UserTask) => {
    if (userTask.is_completed && !userTask.is_claimed) {
      try {
        setClaimingTask(userTask.id);
        // Вызываем API для получения награды
        const result = await taskApi.claimTaskReward(userId, userTask.id);
        if (result.success) {
          // Обновляем список заданий
          await fetchTasks();
        }
      } catch (error) {
        console.error("Error claiming reward:", error);
      } finally {
        setClaimingTask(null);
      }
    } else {
      // Если задание не выполнено, просто перенаправляем на главную страницу
      window.location.href = "/SpaceHunter/fly";
    }
  };

  // Фильтруем задания по активной вкладке и не полученные награды
  const filteredTasks = tasks.filter(
    (userTask) => 
      userTask.task.type === activeTab && 
      (!userTask.is_completed || (userTask.is_completed && !userTask.is_claimed))
  );

  return (
    <Page back={false}>
      <div className="tasks-page-container">
        <div className="tasks-tabs">
          <button
            className={`tab-button ${activeTab === "daily" ? "active" : ""}`}
            onClick={() => setActiveTab("daily")}
          >
            Daily
          </button>
          <button
            className={`tab-button ${activeTab === "permanent" ? "active" : ""}`}
            onClick={() => setActiveTab("permanent")}
          >
            Global
          </button>
        </div>

        {isLoading ? (
          <div className="loading">Loading tasks...</div>
        ) : filteredTasks.length === 0 ? (
          <div className="no-tasks">
            {activeTab === "daily" 
              ? "All daily tasks completed for today!" 
              : "All global tasks completed!"}
          </div>
        ) : (
          <div className="tasks-list-container">
            <div className="tasks-list">
              {filteredTasks.map((userTask) => (
                <div key={userTask.id} className="task-item">
                  <div className="task-info">
                    <div className="task-header">
                      <span className="task-description">{userTask.task.description}</span>
                      <span className="task-reward">
                        +{userTask.task.reward} CSM
                      </span>
                    </div>
                    <div className="task-progress-bar">
                      <div 
                        className="task-progress-fill"
                        style={{ 
                          width: `${Math.min(100, (userTask.progress / userTask.task.condition_value) * 100)}%` 
                        }}
                      ></div>
                      <span className="task-progress-text">
                        {userTask.progress}/{userTask.task.condition_value}
                      </span>
                    </div>
                  </div>
                  <button 
                    className={`task-button ${userTask.is_completed ? 'claim-ready' : ''} ${claimingTask === userTask.id ? 'loading' : ''}`}
                    onClick={() => handleTaskAction(userTask)}
                    disabled={claimingTask !== null}
                  >
                    {claimingTask === userTask.id 
                      ? '...' 
                      : userTask.is_completed 
                        ? 'Claim' 
                        : 'Go'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};