import { FC, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Добавлен useLocation
import FlyPageIcon from '../icons/FlyPageIcon/FlyPageIcon';
import BoostPageIcon from '../icons/BoostPageIcon/BoostPageIcon';
import TasksPageIcon from '../icons/TasksPageIcon/TasksPageIcon';
import MePageIcon from '../icons/MePageIcon/MePageIcon';
import DropPageIcon from '../icons/DropPageIcon/DropPageIcon';



// Enum для страниц
enum Page {
    Fly = 'Fly',
    Boost = 'Boost',
    Tasks = 'Tasks',
    Me = 'Me',
    Drop = 'Drop',
}

export const NavigationBar: FC = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Добавлен useLocation для определения текущего пути
    const [currentPage, setCurrentPage] = useState<Page | null>(null);

    // Определяем текущую страницу на основе пути
    const getCurrentPageFromPath = (path: string): Page | null => {
        const page = Object.values(Page).find(
            (p) => path.toLowerCase() === `/spacehunter/${p.toLowerCase()}`
        );
        return page || null;
    };


    // Обновляем currentPage при изменении пути
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
        <nav
            className="bg-purple-900 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px] h-16 rounded-2xl flex items-center justify-around shadow-lg">

            <button key={'Fly'}
                    onClick={() => handlePageClick(pages[0].id)}
                    className={`flex flex-col items-center justify-center gap-1 p-2 w-15 h-15 rounded-2xl ${
                        currentPage === 'Fly' ? 'bg-purple-600 text-white' : 'bg-purple-900 text-white'}`}>
                <span className={"text-xs"}>FLY</span>
            </button>

            <button key={'Boost'}
                    onClick={() => handlePageClick(pages[1].id)}
                    className={`flex flex-col items-center justify-center gap-1 p-2 w-15 h-15 rounded-2xl ${
                        currentPage === 'Boost' ? 'bg-purple-600 text-white' : 'bg-purple-900 text-white'}`}>
                <span className={"text-xs"}>Boost</span>
            </button>

            <button key={'Tasks'}
                    onClick={() => handlePageClick(pages[2].id)}
                    className={`flex flex-col items-center justify-center gap-1 p-2 w-15 h-15 rounded-2xl ${
                        currentPage === 'Tasks' ? 'bg-purple-600 text-white' : 'bg-purple-900 text-white'}`}>
                <span className={"text-xs"}>TASKS</span>
            </button>

            <button key={'Me'}
                    onClick={() => handlePageClick(pages[3].id)}
                    className={`flex flex-col items-center justify-center gap-1 p-2 w-15 h-15 rounded-2xl ${
                        currentPage === 'Me' ? 'bg-purple-600 text-white' : 'bg-purple-900 text-white'}`}>
                <span className={"text-xs"}>ME</span>
            </button>

            <button key={'Drop'}
                    onClick={() => handlePageClick(pages[4].id)}
                    className={`flex flex-col items-center justify-center gap-1 p-2 w-15 h-15 rounded-2xl ${
                        currentPage === 'Drop' ? 'bg-purple-600 text-white' : 'bg-purple-900 text-white'}`}>
                <span className={"text-xs"}>DROP</span>
            </button>


        </nav>
    );
};