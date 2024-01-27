import { Navigate, Route, Routes } from 'react-router-dom'
import { RouterConstants } from 'shared/constants/routerConstants'
import MainView from './ui/MainView'

import AdminLayout from 'shared/layout/AdminLayout'

function Main() {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path={`/dashboard/*`} element={<MainView />} />
                <Route
                    path={`*`}
                    element={
                        <Navigate to={RouterConstants.DASHBOARD} replace />
                    }
                />
            </Route>
        </Routes>
    )
}

export default Main
