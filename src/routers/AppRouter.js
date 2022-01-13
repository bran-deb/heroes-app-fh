import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { DcScreen } from '../components/dc/DcScreen';

import { LoginScreen } from '../components/login/LoginScreen';
import { Marvel } from '../components/Marvel/Marvel';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Marvel />} />
                    <Route path='/marvel' element={<Marvel />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/*" element={<LoginScreen />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}