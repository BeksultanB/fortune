import { RouterConstants } from 'shared/constants/routerConstants'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Admin, Auth, Main } from 'pages'

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={`${RouterConstants.MAIN}/*`}
                    element={
                        <Main />
                    }
                />
                <Route
                    path={RouterConstants.AUTH}
                    element={
                        <Auth />
                    }
                />
                <Route
                    path={RouterConstants.ADMIN}
                    element={
                        <Admin />
                    }
                />
                <Route
                    path="*"
                    element={
                        <Navigate to={`${RouterConstants.MAIN}/`} replace />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
