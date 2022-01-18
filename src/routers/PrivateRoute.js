import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)
    //usamos el path y search de la localizacion
    const { pathname, search } = useLocation()
    //lo guardamos en el localStorage para regresar a la ultima ruta
    localStorage.setItem('lastPath', pathname + search)

    return (
        (user.logged)
            ? children
            : <Navigate to='/login' />
    )
}
