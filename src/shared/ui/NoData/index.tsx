import React from 'react'
import { Empty, EmptyProps } from 'antd'

const NoData: React.FC<EmptyProps> = props => {
    return (
        <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{ margin: 0 }}
            description="Результатов не найдено"
            {...props}
        />
    )
}

export default React.memo(NoData)
