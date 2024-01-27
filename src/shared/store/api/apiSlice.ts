import { createApi } from '@reduxjs/toolkit/query/react'
import defaultFetch from '../helpers/default-fetch'

export const authAPI = createApi({
    reducerPath: 'AuthAPI',
    baseQuery: defaultFetch,
    endpoints: build => ({
        login: build.mutation<ILoginRes, ILogin>({
            query: body => ({
                method: 'POST',
                url: `/v1/users/jwt_create/`,
                body,
            }),
        }),
    }),
})

export const { useLoginMutation } = authAPI
