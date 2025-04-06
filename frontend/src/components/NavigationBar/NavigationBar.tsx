import { FC, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FlyPageIcon from '../icons/FlyPageIcon/FlyPageIcon.svg';
import BoostPageIcon from '../icons/BoostPageIcon/BoostPageIcon.svg';
import TasksPageIcon from '../icons/TasksPageIcon/TasksPageIcon.svg';
import MePageIcon from '../icons/MePageIcon/MePageIcon.svg';
import DropPageIcon from '../icons/DropPageIcon/DropPageIcon.svg';
import './NavigationBar.css';

enum Page {
    Fly = 'Fly',
    Boost = 'Boost',
    Tasks = 'Tasks',
    Me = 'Me',
    Drop = 'Drop',
}

export const NavigationBar: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<Page | null>(null);

    const getCurrentPageFromPath = (path: string): Page | null => {
        const page = Object.values(Page).find(
            (p) => path.toLowerCase() === `/spacehunter/${p.toLowerCase()}`
        );
        return page || null;
    };

    useEffect(() => {
        setCurrentPage(getCurrentPageFromPath(location.pathname));
    }, [location.pathname]);

    const pages = [
        { id: Page.Fly, icon: FlyPageIcon, title: 'FLY' },
        { id: Page.Boost, icon: BoostPageIcon, title: 'BOOST' },
        { id: Page.Tasks, icon: TasksPageIcon, title: 'TASKS' },
        { id: Page.Me, icon: MePageIcon, title: 'ME' },
        { id: Page.Drop, icon: DropPageIcon, title: 'DROP' },
    ];

    const handlePageClick = (id: Page) => {
        setCurrentPage(id);
        navigate(`/SpaceHunter/${id.toLowerCase()}`);
        console.log(id);
    };

    return (
        <nav className="navbar">
            {pages.map((page) => (
                <button
                    key={page.id}
                    onClick={() => handlePageClick(page.id)}
                    className={`navbar-button ${currentPage === page.id ? 'active' : 'inactive'}`}
                >
                    <img src={page.icon} alt={`${page.title} icon`} className="w-5 h-5" />
                    <span>{page.title}</span>
                </button>
            ))}
        </nav>
    );
};