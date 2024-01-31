import { FC, ReactNode } from 'react'
import s from './style.module.scss'

interface Props {
    children?: ReactNode
}

const MainView: FC<Props> = ({ children }) => {
    return (
        <div className={s.main}>
            {children}
        </div>
    )
}

export default MainView