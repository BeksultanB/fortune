import React from 'react'

import styles from './ContentLoader.module.scss'
import { HomeOutlined } from '@ant-design/icons'

const ContentLoader = () => {
    return (
        <div className={styles.wrapper}>
            <HomeOutlined />
        </div>
    )
}

export default React.memo(ContentLoader)
