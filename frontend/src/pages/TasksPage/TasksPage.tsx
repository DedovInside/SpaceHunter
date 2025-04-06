import { FC, useState } from 'react';
import { Page } from '@/components/Page.tsx';
import './TasksPage.css';

interface Task {
  id: number;
  reward: number;
  description: string;
  isCompleted: boolean;
}

const dailyTasks: Task[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  reward: 100,
  description: 'Something daily...',
  isCompleted: false,
}));

const globalTasks: Task[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  reward: 100,
  description: 'Something global...',
  isCompleted: false,
}));

export const TasksPage: FC = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'global'>('daily');

  return (
    <Page back={false}>
      <div className="tasks-page-container">
        {/* Tabs */}
        <div className="tasks-tabs">
          <button 
            className={`tab-button ${activeTab === 'daily' ? 'active' : ''}`}
            onClick={() => setActiveTab('daily')}
          >
            Daily
          </button>
          <button 
            className={`tab-button ${activeTab === 'global' ? 'active' : ''}`}
            onClick={() => setActiveTab('global')}
          >
            Global
          </button>
        </div>

        {/* Tasks List */}
        <div className="tasks-list-container">
          <div className="tasks-list">
            {(activeTab === 'daily' ? dailyTasks : globalTasks).map((task) => (
              <div key={task.id} className="task-item">
                <div className="task-info">
                  <span className="task-description">{task.description}</span>
                  <span className="task-reward">+{task.reward} CSM</span>
                </div>
                <button 
                  className="task-button"
                  onClick={() => {
                    console.log('Task clicked:', task.id);
                  }}
                >
                  Go
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}