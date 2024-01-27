import React from 'react'
import { Spin } from 'antd'
import NoData from 'shared/ui/NoData'
import ErrorInfo from 'shared/ui/ErrorInfo'
import { ErrorResponse } from 'shared/types'

interface LoadingAreaProps {
    children: React.ReactNode
    isLoading?: boolean
    overlay?: boolean
    showNoData?: boolean
    error?: ErrorResponse
    onRefetch?: () => void
}

const LoadingArea: React.FC<LoadingAreaProps> = props => {
    const { isLoading, overlay, error, children, showNoData, onRefetch } = props

    if (isLoading && !overlay) return <Spin spinning />

    if (isLoading && overlay) {
        return <Spin spinning>{children}</Spin>
    }

    if (!isLoading && error)
        return <ErrorInfo error={error} onRefetch={onRefetch} />

    if (showNoData) return <NoData />

    return <>{children}</> || null
}

export default LoadingArea
