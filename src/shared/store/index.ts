// import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./api";
// import reducers from "./reducers";

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     ...reducers,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authSlice } from './sllices/auth'
import { authAPI, globalAPI } from './api'

const persistConfig = {
    key: 'simplify',
    version: 1,
    storage,
    whitelist: ['auth'],
}

const rootReducer = combineReducers({
    auth: authSlice,
    [authAPI.reducerPath]: authAPI.reducer,
    [globalAPI.reducerPath]: globalAPI.reducer,
})

const middlewares = [authAPI.middleware, globalAPI.middleware]
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: true,
            }).concat(middlewares),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
