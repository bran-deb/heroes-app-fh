import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    } />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}