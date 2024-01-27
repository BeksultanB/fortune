import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

import { baseQuery, baseQueryNoToken } from './baseQueryToken'
import { RootState } from '..'
import { logout, refreshToken } from '../sllices/auth'
import { RouterConstants } from 'shared/constants/routerConstants'

const mutex = new Mutex()

const baseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const { getState } = api
    const state = getState() as RootState

    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                const refreshResult = await baseQueryNoToken(
                    {
                        url: 'users/refresh_token/',
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            refresh_token: state.auth?.tokens?.refresh,
                        }),
                    },
                    api,
                    extraOptions,
                )

                if (refreshResult.data) {
                    // refresh token
                    api.dispatch(refreshToken(refreshResult.data))
                    persistor.persist()

                    result = await baseQuery(args, api, extraOptions)
                } else {
                    api.dispatch(logout())
                    window.location.replace(RouterConstants.AUTH)
                }
            } finally {
                release()
            }
        } else {
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }

    if (!mutex.isLocked() && result.error) {
        if (typeof result.error?.data === 'object') {
            const data = result.error.data ?? {}

            const errorTexts = Object.values(data).map(errorMsg => {
                return <p>{errorMsg}</p>
                // toast.error(errorMsg + `\n ${url}`)
            })
        } else {
            if (result.error && 'originalStatus' in result.error) {
            }
        }
    }

    return result
}

export default baseQueryWithReAuth
