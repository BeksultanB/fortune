import React from 'react'

import { Alert } from 'antd'
import { Button, Spacer } from 'shared/ui'

type Props = {
    children: React.ReactNode
    path: string
}

type State = {
    errorText: string
    crashData: string
    isOpenDetail: boolean
}

class ErrorHoc extends React.Component<Props, State> {
    constructor(props) {
        super(props)

        this.state = {
            errorText: null,
            crashData: null,
            isOpenDetail: false,
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({
            errorText: error.message,
            crashData: errorInfo.componentStack,
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.path !== this.props.path) {
            this.setState({
                errorText: null,
                crashData: null,
                isOpenDetail: false,
            })
        }
    }

    toggleIsOpenDetail = () => {
        this.setState(prev => ({
            ...prev,
            isOpenDetail: !this.state.isOpenDetail,
        }))
    }

    onReload = () => {
        window.location.reload()
    }

    render() {
        const { errorText, isOpenDetail, crashData } = this.state

        const { path } = this.props

        if (errorText) {
            return (
                <Spacer>
                    <Alert
                        showIcon
                        message={errorText}
                        description={
                            isOpenDetail && (
                                <Spacer>
                                    Браузери и ОС: {navigator.appVersion}
                                    <br />
                                    Разрешение экрана: {
                                        window.screen.width
                                    } на {window.screen.height}
                                    <br />
                                    Путь: {path}
                                    <br />
                                    Отладка: {crashData}
                                </Spacer>
                            )
                        }
                        type="error"
                        action={
                            <Spacer>
                                <Button onClick={this.toggleIsOpenDetail}>
                                    Детали
                                </Button>
                            </Spacer>
                        }
                    />

                    <Spacer flex center>
                        <Button type="primary" onClick={this.onReload}>
                            Обновить
                        </Button>
                    </Spacer>
                </Spacer>
            )
        }

        return this.props.children
    }
}

export default ErrorHoc
