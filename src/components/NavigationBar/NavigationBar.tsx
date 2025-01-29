import { FC } from 'react';
import FlyPageIcon from '@/components/icons/FlyPageIcon.svg';
import BoostPageIcon from '@/components/icons/BoostPageIcon.svg';
import TasksPageIcon from '@/components/icons/TasksPageIcon.svg';
import MePageIcon from '@/components/icons/MePageIcon.svg';
import DropPageIcon from '@/components/icons/DropPageIcon.svg';

interface NavigationBarProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

export const NavigationBar: FC<NavigationBarProps> = ({ currentPage, onNavigate }) => {
    const pages = [
        { id: 'Fly', icon: FlyPageIcon, title: 'Fly' },
        { id: 'Boost', icon: BoostPageIcon, title: 'Boost' },
        { id: 'Tasks', icon: TasksPageIcon, title: 'Tasks' },
        { id: 'Me', icon: MePageIcon, title: 'Me' },
        { id: 'Drop', icon: DropPageIcon, title: 'Drop' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-gray-900 flex items-center justify-around px-4">
          {pages.map(({ id, icon: Icon, title }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                currentPage === id ? 'text-blue-400' : 'text-gray-400'
              }`}
            >
              <img src={Icon} alt={title} className="w-6 h-6" />
              <span className="text-xs">{}</span>
            </button>
          ))}
        </nav>
    );

}