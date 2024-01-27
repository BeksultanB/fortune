import { createApi } from '@reduxjs/toolkit/query/react'
import baseQueryWithReAuth from '../helpers/baseQueryWithReAuth'

export const globalAPI = createApi({
    baseQuery: baseQueryWithReAuth,
    tagTypes: [],
    endpoints: () => ({}),
})
