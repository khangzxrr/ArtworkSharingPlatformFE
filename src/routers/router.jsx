
import { createBrowserRouter } from "react-router-dom";
import { AuthenticationValidate, CreateRequest, Home, LoggedHome, Login, Profile, Request, Requests } from  '../pages';

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        element: <AuthenticationValidate />,
        children: [
            // {
            //     path: '/logged-home',
            //     element: <LoggedHome />
            // },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/requests',
                element: <Requests />
            },
            {
                path: '/requests/:requestId',
                element: <Request />
            },
            {
                path: '/create-request',
                element: <CreateRequest />
            }
        ]
    }
])
export default Routers;