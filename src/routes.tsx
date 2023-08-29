import { createBrowserRouter } from 'react-router-dom'
import MainPage from './main/MainPage'
import Search from './main/Search'
import Profile from './profile/Profile'
import Liked from './profile/Liked'
import Cart from './profile/Cart'
import Settings from './profile/Settings'
import { Navigate } from 'react-router-dom'
import SignUp from './profile/SignUp'
import LogIn from './profile/LogIn'
import Product from './main/Product'
import AddProducts from './profile/AddProducts'
import Error from './main/Error'

const publicRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/SignUp',
        element: <SignUp />
    },
    {
        path: '/LogIn',
        element: <LogIn />
    },
    {
        path: '/search/:text',
        element: <Search />
    },
    {
        path: '/products/:id',
        element: <Product />
    },
    {
        path: '*',
        element: <Error />
    },
    {
        path: '/profile',
        element: <Navigate to={'/SignUp'} />
    },
    {
        path: '/liked',
        element: <Navigate to={'/SignUp'} />
    },
    {
        path: '/cart',
        element: <Navigate to={'/SignUp'} />
    },
    {
        path: '/settings',
        element: <Navigate to={'/SignUp'} />
    },
    {
        path: '/createProduct',
        element: <Navigate to={'/SignUp'} />
    }
])

const privateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/search/:text',
        element: <Search />
    },
    {
        path: '/products/:id',
        element: <Product />
    },
    {
        path: '/SignUp',
        element: <Navigate to={'/profile'} />
    },
    {
        path: '/LogIn',
        element: <Navigate to={'/profile'} />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/liked',
        element: <Liked />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/settings',
        element: <Settings />
    },
    {
        path: '/createProduct',
        element: <AddProducts />
    },    
    {
        path: '*',
        element: <Error />
    }
])
export { publicRouter, privateRouter }