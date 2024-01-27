import { useNavigate } from 'react-router'
import { Layout, Dropdown } from 'antd'
import type { MenuProps } from 'antd'

import styles from './Toolbar.module.scss'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumbs } from 'shared/ui'
import breadcrumbs from 'shared/constants/breadcrumbs'
import { LocalStorageKey } from 'shared/constants/locale-storage/localStorageKey'

const { Header } = Layout

enum MenuTypes {
    logout = 'logout',
}

const items: MenuProps['items'] = [
    {
        label: 'Выйти из аккаунта',
        key: MenuTypes.logout,
        icon: <LogoutOutlined />,
    },
]

const Toolbar = () => {
    const navigate = useNavigate()

    const dropdownHandler: MenuProps['onClick'] = e => {
        switch (e.key) {
            case MenuTypes.logout:
                localStorage.removeItem(LocalStorageKey)
                navigate('/auth/')
        }
    }

    return (
        <Header className={styles.wrapper}>
            <div className={styles.breadcrumbs}>
                <Breadcrumbs routes={breadcrumbs} />
            </div>

            <div className={styles.user}>
                <div className={styles.icon}>
                    <UserOutlined />
                </div>
            </div>

            <Dropdown
                menu={{
                    items,
                    onClick: dropdownHandler,
                }}
                trigger={['click']}
            >
                <span className={styles.userName}>Азамат</span>
            </Dropdown>
        </Header>
    )
}

export default Toolbar
