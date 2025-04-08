import {Route, Routes} from "react-router-dom";
import {FlyPage} from "@/pages/FlyPage/FlyPage.tsx";
import {BoostPage} from "@/pages/BoostPage/BoostPage.tsx";
import {TasksPage} from "@/pages/TasksPage/TasksPage.tsx";
import {MePage} from "@/pages/MePage/MePage.tsx";
import {DropPage} from "@/pages/DropPage/DropPage.tsx";
import {ErrorPage} from "@/pages/ErrorPage/ErrorPage.tsx";


export function AppRouter() {
    return (
        <Routes>
            <Route path="/SpaceHunter/fly" element={<FlyPage />} />
            <Route path="/SpaceHunter/boost" element={<BoostPage />} />
            <Route path="/SpaceHunter/tasks" element={<TasksPage />} />
            <Route path="/SpaceHunter/me" element={<MePage />} />
            <Route path="/SpaceHunter/drop" element={<DropPage />} />
            <Route path="/SpaceHunter/error" element={<ErrorPage />} />
            <Route path="*" element={<FlyPage />} />
        </Routes>
    )
}