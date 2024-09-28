import React from 'react'
import Navibar from '../components/Navibar'
import { Outlet } from 'react-router-dom'

export default function SharedComponents() {
    return (
        <>

            <Navibar />
            <Outlet />
        </>
    )
}