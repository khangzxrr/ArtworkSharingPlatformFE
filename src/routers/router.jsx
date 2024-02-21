
import { createBrowserRouter } from "react-router-dom";
import { AuthenticationValidate, Home, LoggedHome, Login, Profile, Register, Request } from  '../pages';

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    // element: <AuthenticationValidate />,
    children: [
      // {
      //     path: '/logged-home',
      //     element: <LoggedHome />
      // },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/requests",
        element: <Request />,
      },
    ],
  },
]);
export default Routers;