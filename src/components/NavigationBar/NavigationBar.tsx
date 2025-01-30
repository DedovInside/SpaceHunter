import { FC } from 'react';
import { useState } from 'react';
import FlyPageIcon from '../icons/FlyPageIcon/FlyPageIcon';
import BoostPageIcon from '../icons/BoostPageIcon/BoostPageIcon';
import TasksPageIcon from '../icons/TasksPageIcon/TasksPageIcon';
import MePageIcon from '../icons/MePageIcon/MePageIcon';
import DropPageIcon from '../icons/DropPageIcon/DropPageIcon';

export const NavigationBar: FC = () => {
    const [currentPage, setCurrentPage] = useState('Fly');
    const pages = [
        { id: 'Fly', icon: FlyPageIcon, title: 'FLY' },
        { id: 'Boost', icon: BoostPageIcon, title: 'BOOST' },
        { id: 'Tasks', icon: TasksPageIcon, title: 'TASKS' },
        { id: 'Me', icon: MePageIcon, title: 'ME' },
        { id: 'Drop', icon: DropPageIcon, title: 'DROP' },
    ];

    return (
      <nav className="bg-purple-900 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px] h-16 rounded-2xl flex items-center justify-around shadow-lg">
        {pages.map(({ id, icon: Icon, title }) => (
          <button
            key={id}
            onClick={() => setCurrentPage(id)}
            className={`flex flex-col items-center justify-center gap-1 p-2 w-15 h-15 rounded-2xl ${
              currentPage === id ? 'bg-purple-600 text-white'  : 'bg-purple-900 text-white'
            }`}
          >
            <Icon className="w-130 h-130" />
            <span className="text-xs">{title}</span>
          </button>
        ))}
      </nav>
  );

}