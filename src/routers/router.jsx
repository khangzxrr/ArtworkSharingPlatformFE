
import { createBrowserRouter } from "react-router-dom";
import { AuthenticationValidate, Home, LoggedHome, Login, Profile, Register, Request , Artwork} from  '../pages';

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
      {
        path: "/artworks", 
        element: <Artwork/>
      }
    ],
  },
]);
export default Routers;