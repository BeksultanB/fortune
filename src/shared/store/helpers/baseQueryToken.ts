import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { API_BASE_URL } from '../constants/api-base-url'
import { RootState } from '..'

export const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth?.tokens?.access

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
})

export const baseQueryNoToken = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, {}) => {
        return headers
    },
})
