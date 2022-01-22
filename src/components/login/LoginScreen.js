import React from 'react'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
    //toma la ultima ruta del localStorage
    const lastPath = localStorage.getItem('lastPath') || '/'

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        //remplaza la ruta anterior por la ruta de destino
        dispatch({
            type: types.login,
            payload: {
                name: 'brand'
            }
        })
        //navega a la ultima ruta (lastPath)
        navigate(lastPath, { replace: true });
    }

    return (
        <div className='container mt-5 animate__animated animate__fadeIn'>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                login
            </button>
        </div>
    )
}
