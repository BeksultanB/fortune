import ReduxProvider from 'shared/providers/ReduxProvider'
import Routing from './routing'
import 'shared/styles/globals.scss'

export default function App() {
    return (
        <ReduxProvider>
            <Routing />
        </ReduxProvider>
    )
}
