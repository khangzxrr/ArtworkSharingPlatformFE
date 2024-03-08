
import { createBrowserRouter } from "react-router-dom";
import { ArtworkDetailPage, ArtworksPage, AuthenticationValidate, CreateArtworkPage, CreateRequest, Home, LoggedHome, Login, MineArtworksPage, Profile, Request, RequestProgressPage, Requests } from  '../pages';
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
            },
            {
                path: '/mine/artworks',
                element: <MineArtworksPage />
            },
            {
                path: '/artworks/create',
                element: <CreateArtworkPage />
            },
            {
                path: '/artworks/:artworkId',
                element: <ArtworkDetailPage />
            },
        ]
    }
])
export default Routers;