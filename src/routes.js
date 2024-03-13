import { ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, DRESS_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Admin from './pages/Admin'
import Shop from './pages/Shop'
import Basket from './pages/Basket'
import DressPage from './pages/DressPage'
import Auth from './pages/Auth'


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: DRESS_ROUTE + '/:id',
        Component: DressPage
    }
]
    