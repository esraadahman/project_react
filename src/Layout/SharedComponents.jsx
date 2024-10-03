import React from 'react'
import Navibar from '../components/Navibar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function SharedComponents() {
    return (
        <>

            <Navibar />
            <Outlet />
            <Footer />
        </>
    )
}