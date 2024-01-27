import { RouterConstants } from 'shared/constants/routerConstants'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Auth, Main } from 'pages'
import React from 'react'
import ContentLoader from 'shared/ui/ContentLoader'

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={`${RouterConstants.MAIN}/*`}
                    element={
                        <React.Suspense fallback={<ContentLoader />}>
                            <Main />
                        </React.Suspense>
                    }
                />
                <Route
                    path={RouterConstants.AUTH}
                    element={
                        <React.Suspense fallback={<ContentLoader />}>
                            <Auth />
                        </React.Suspense>
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
