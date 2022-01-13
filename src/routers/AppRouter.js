import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/*" element={<DashboardRoutes />} />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}