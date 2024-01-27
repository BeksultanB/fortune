import React from 'react'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore'
import { setupStore } from 'shared/store'
import { PersistGate } from 'redux-persist/integration/react'

export const store = setupStore()
export const persistor = persistStore(store)

interface Props {
    children: React.ReactNode
}
export default function ReduxProvider({ children }: Props) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
        </Provider>
    )
}
