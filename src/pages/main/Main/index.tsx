import { Outlet } from "react-router-dom"
import MainView from "./MainView"

function Main() {
    return (
        <MainView>
            <Outlet />
        </MainView>
    )
}

export default Main
