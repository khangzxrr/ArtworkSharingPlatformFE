
import { createBrowserRouter } from "react-router-dom";
import { AuthenticationValidate, Home, LoggedHome, Login } from  '../pages';

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
            {
                path: '/logged-home',
                element: <LoggedHome />
            }
        ]
    }
])
export default Routers;