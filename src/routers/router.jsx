
import { createBrowserRouter } from "react-router-dom";
import { Home, Login } from  '../pages';

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    }
])
export default Routers;