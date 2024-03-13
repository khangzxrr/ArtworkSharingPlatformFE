
import { createBrowserRouter } from "react-router-dom";
import { ArtworkDetailPage, ArtworksPage, AuthenticationValidate, CreateArtworkPage, CreateArtworkSellingPage, CreateRequest, Home, LoggedHome, Login, MineArtworksPage, Profile, Request, RequestProgressPage, Requests, UpdateArtworkPage, Register } from '../pages';
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
        path: '/register',
        element: <Register />,
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
            },
            {
                path: '/mine/artworks',
                children: [
                    {
                        path: '/mine/artworks/:artworkId/sellings/create',
                        element: <CreateArtworkSellingPage />
                    }, 
                    {
                        path: '/mine/artworks',
                        element: <MineArtworksPage />,
                    }
                ]
            },
            {
                path: '/artworks/create',
                element: <CreateArtworkPage />
            },
            {
                path: '/artworks/:artworkId',
                element: <ArtworkDetailPage />
            },
            {
                path: '/artworks/:artworkId/update',
                element: <UpdateArtworkPage />
            },

        ]
    }
])
export default Routers;