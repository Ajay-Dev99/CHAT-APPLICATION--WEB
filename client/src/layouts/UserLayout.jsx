import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";

function UserLayout() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex-grow flex'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout
