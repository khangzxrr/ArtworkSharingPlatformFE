
import { createBrowserRouter } from "react-router-dom";
import { AuthenticationValidate, Home, LoggedHome, Login, Profile, Register, Request , Artwork, Auction} from  '../pages';
import AuctionDetail from "../pages/auction/detail";

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
        element: <Artwork />,
      },
      {
        path: "/auction",
        element: <Auction />,
      },
      {
        path: "/auction/detail",
        element: <AuctionDetail />,
      },
    ],
  },
]);
export default Routers;