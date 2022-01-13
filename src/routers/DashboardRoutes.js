import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'

import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-2'>
                <Routes>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/heroe/:heroeId" element={<HeroScreen />} />

                    <Route path="/*" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}
