import { RouterConstants } from 'shared/constants/routerConstants'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Auth, MainPage } from 'pages'
import React from 'react'
import ContentLoader from 'shared/ui/ContentLoader'

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={`${RouterConstants.MAIN}/*`}
                    element={
                        <MainPage />
                    }
                />
                <Route
                    path={RouterConstants.AUTH}
                    element={
                        <Auth />
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
