import { createSlice } from '@reduxjs/toolkit'
import { authAPI } from 'shared/store/api'

interface Props {
    tokens: null
    user: null
}

const initialState: Props = {
    tokens: null,
    user: null,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.tokens = null
            state.user = null
        },
        refreshToken: (state, actions) => {
            state.tokens = actions.payload
        },
        updateUserData: (state, actions) => {
            state.user = { ...state.user, ...actions.payload }
        },
    },
    extraReducers: builder => {
        builder.addMatcher(
            authAPI.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                if (payload) {
                    state.tokens = payload.tokens
                    state.user = payload.user
                }
            },
        )
        // builder.addMatcher(
        //     authAPI?.endpoints?.refresh?.matchFulfilled,
        //     (state, { payload }) => {
        //         if (payload) {
        //             state.tokens = payload.tokens
        //             state.user = payload.user
        //         }
        //     },
        // )
    },
})

export const { logout, refreshToken, updateUserData } = AuthSlice.actions

export const authSlice = AuthSlice.reducer
