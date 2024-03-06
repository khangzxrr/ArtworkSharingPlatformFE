
import { createBrowserRouter } from "react-router-dom";
import { ArtworksPage, AuthenticationValidate, CreateRequest, Home, LoggedHome, Login, Profile, Request, RequestProgressPage, Requests } from  '../pages';
import React from "react";

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
            },
            {
                path: '/requests/:requestId/progress',
                element: <RequestProgressPage />
            },
            {
                path: '/artworks',
                element: <ArtworksPage />
            }
        ]
    }
])
export default Routers;