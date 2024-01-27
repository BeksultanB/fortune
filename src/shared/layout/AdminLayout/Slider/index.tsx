import React, { useMemo, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Layout, Menu, MenuProps } from 'antd'

import styles from './Slider.module.scss'
import { sliderMenu } from 'shared/constants/menu'
import { ArrowLeftOutlined, BorderOuterOutlined } from '@ant-design/icons'
import classNames from 'classnames'

const { Sider } = Layout

const fullWidth = 286
const minWidth = 60

const Slider: React.FC = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const selectHandler: MenuProps['onClick'] = item => {
        navigate(item.key)
    }

    const rootPath = useMemo(() => pathname.split('/')?.[1], [pathname])

    return (
        <Sider
            theme="light"
            width={fullWidth}
            collapsedWidth={minWidth}
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            className={styles.wrapper}
            trigger={
                <div
                    className={classNames(
                        styles.trigger,
                        collapsed && styles.collapsed,
                    )}
                >
                    <ArrowLeftOutlined className={styles.icon} />

                    <span className={styles.hideText}>Свернуть меню</span>
                </div>
            }
        >
            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <BorderOuterOutlined />
                </div>

                <div className={styles.navWrapper}>
                    <Menu
                        mode="inline"
                        items={sliderMenu}
                        className={classNames(
                            styles.menuWrapper,
                            collapsed && styles.collapsed,
                        )}
                        onClick={selectHandler}
                        selectedKeys={[`/${rootPath}/`]}
                    />
                </div>
            </div>
        </Sider>
    )
}

export default Slider
