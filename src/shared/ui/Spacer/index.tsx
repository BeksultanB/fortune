import React from 'react'
import { palette } from 'shared/styles/palette'

interface Spacer {
    margin?: number[]
    padding?: number[]
    children: React.ReactNode
    flex?: boolean
    flexEnd?: boolean
    flexStart?: boolean
    center?: boolean
    background?: string
}

const Spacer: React.FC<Spacer> = props => {
    const {
        children,
        margin = [20, 0],
        padding = [],
        flex,
        flexEnd,
        flexStart,
        center,
        background,
    } = props

    const marginStyles = margin.map(number => `${number}px`).join(' ')
    const paddingStyles = padding.map(number => `${number}px`).join(' ')
    const backgroundColor = !background
        ? padding.length
            ? palette.$white
            : palette.$transparent
        : background
    const justifyContent =
        (flexEnd && 'flex-end') ||
        (flexStart && 'flex-start') ||
        (center && 'center')
    return (
        <div
            style={{
                margin: marginStyles,
                padding: paddingStyles,
                display: flex ? 'flex' : 'block',
                justifyContent,
                backgroundColor,
            }}
        >
            {children}
        </div>
    )
}

export default Spacer
