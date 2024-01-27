import React from 'react'

import { Button, ConfigProvider, ButtonProps } from 'antd'

import styles from './AppButton.module.scss'
import { palette } from 'shared/styles/palette'

const AppButton: React.FC<ButtonProps> = props => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: palette.$siren,
                    colorBorder: palette.$siren,
                    fontSize: 12,
                    fontWeightStrong: 500,
                },
                components: {
                    Button: {
                        defaultBg: palette.$siren_light,
                        defaultColor: palette.$siren,
                    },
                },
            }}
        >
            <Button {...props} className={styles.wrapper}>
                {props.children}
            </Button>
        </ConfigProvider>
    )
}

export default AppButton
