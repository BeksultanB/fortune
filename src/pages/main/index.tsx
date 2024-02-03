import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'
import MainPage from './MainPage'
import FortunePage from 'pages/fortune';


function Main() {
    const { pathname } = useResolvedPath("");

    return (
        <Routes>
            <Route element={<MainPage />}>
                <Route path={`/fortune`} element={<FortunePage />} />
                <Route path={`/*`} element={<Navigate to={`${pathname}/fortune`} />} />
            </Route>
        </Routes>
    )
}

export default Main
