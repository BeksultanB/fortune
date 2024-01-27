import { Outlet, useLocation } from 'react-router-dom'
import { ErrorHoc } from '../../providers'
import { Layout } from 'antd'

import Slider from './Slider'
import s from './style.module.scss'
import { LoadingArea } from '..'
import React from 'react'
import Toolbar from './Toolbar'

const { Content } = Layout

export default function AdminLayout() {
    const { pathname } = useLocation()

    React.useEffect(() => {
        window.addEventListener('storage', () => {
            window.location.reload()
        })
    }, [])

    return (
        <LoadingArea isLoading={false}>
            <Layout className={s.wrapper}>
                <Slider />
                <Layout className={s.layout}>
                    <Toolbar />
                    <Content className={s.content}>
                        <ErrorHoc path={pathname}>
                            <Outlet />
                        </ErrorHoc>
                    </Content>
                </Layout>
            </Layout>
        </LoadingArea>
    )
}
