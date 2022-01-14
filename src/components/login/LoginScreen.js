import React from 'react'
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        //remplaza la ruta anterior por la ruta de destino
        navigate("/", { replace: true });
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
