import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from "react-router-dom";
import { userCheckUserApi } from '../services/userApi';

function UserLayout() {
    const navigate = useNavigate()
    const checkUser = async () => {
        try {
            const { data } = await userCheckUserApi()
            if (data.message) {
                navigate("/chat")
            }
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        checkUser()
    }, [])
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
