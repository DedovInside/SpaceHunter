import { FC, useEffect, useState } from "react";
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
}

export const TasksPage: FC = () => {
  const [activeTab, setActiveTab] = useState<"daily" | "permanent">("daily");
  const [tasks, setTasks] = useState<UserTask[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
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

    fetchTasks();
  }, [userId]);

  const filteredTasks = tasks.filter(
    (userTask) => userTask.task.type === activeTab
  );

  return (
    <Page back={false}>
      <div className="tasks-page-container">
        {/* Tabs */}
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
        ) : (
          <div className="tasks-list-container">
            <div className="tasks-list">
            {filteredTasks.map((userTask) => (
              <div key={userTask.id} className="task-item">
                <div className="task-info">
                    <span className="task-description">{userTask.task.description}</span>
                    <span className="task-reward">
                      +{userTask.task.reward} CSM
                    </span>
                  </div>
                  <button 
                    className="task-button"
                    onClick={() => {
                      console.log('Task clicked:', userTask.id);
                    }}
                  >
                    Go
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
