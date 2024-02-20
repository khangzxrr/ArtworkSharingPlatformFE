import React from 'react'
import { useAuthenticationStore } from '../../stores/authenticationStore'
import { Navigate, Outlet } from 'react-router-dom'
import { LoggedLayout } from '../../layouts'

const Index = () => {

    const accessToken = useAuthenticationStore((state) => state.accessToken)

    console.log(accessToken)

    return accessToken != undefined ? <LoggedLayout /> : <Navigate to='/login' />
}

export default Index