import React from 'react'
import type { MenuProps } from 'antd'

import { HomeOutlined } from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number]

const sliderMenu: MenuItem[] = [
    {
        label: 'Главная',
        key: '/main/',
        icon: React.createElement(HomeOutlined),
    },
]

export { sliderMenu }
