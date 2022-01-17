import React, { useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {
    //init para leer localStorage
    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false }
    }
    //mandamos nuestro reducer mediante el context
    const [user, dispatch] = useReducer(authReducer, {}, init)

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}