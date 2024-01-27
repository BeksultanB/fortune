import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../constants/api-base-url'

const defaultFetch: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const defaultQuery = fetchBaseQuery({
        baseUrl: API_BASE_URL,
    })

    const result = await defaultQuery(args, api, extraOptions)

    if (result.error) {
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

export default defaultFetch
