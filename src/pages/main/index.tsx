import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import Fortune from 'widgets/fortune'


function MainPage() {
    return (
        <Routes>
            <Route element={<Main />}>
                <Route path={`/fortune`} element={<Fortune />} />
            </Route>
        </Routes>
    )
}

export default MainPage
