import { lazy } from 'react'

const Main = lazy(() => import(/* webpackChunkName: 'dashboard' */ './main'))
const Auth = lazy(() => import(/* webpackChunkName: 'auth' */ './auth'))

export { Main, Auth }
