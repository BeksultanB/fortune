import React from 'react'

import { Alert, Button } from 'antd'
import { Spacer } from '..'
import { ErrorResponse } from 'shared/types'

interface ErrorProps {
    error: ErrorResponse
    onRefetch?: () => void
}

const ErrorInfo: React.FC<ErrorProps> = props => {
    const { error, onRefetch } = props

    return (
        <Spacer>
            <Alert
                showIcon
                message={error?.message}
                description={
                    error?.response?.data.message || error?.response?.statusText
                }
                type="error"
            />

            {onRefetch && (
                <Spacer flex center>
                    <Button onClick={onRefetch}>Обновить</Button>
                </Spacer>
            )}
        </Spacer>
    )
}

export default React.memo(ErrorInfo)
