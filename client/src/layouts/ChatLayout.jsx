import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import UserList from '../pages/message/MessageList'
import ChatHeader from '../components/ChatHeader'

function ChatLayout() {
    return (
        // <div className='flex flex-col min-h-screen '>
        //     <div className='fixed top-0 w-full'>
        //         <Header />
        //     </div>
        //     <div className=' flex-grow   overflow-x-auto '>
        //         <Outlet />
        //     </div>
        //     <div className='fixed bottom-0 w-full'>
        //         <Footer />
        //     </div>
        // </div>
        <div className="flex flex-col h-screen ">

            <div className="fixed top-0 left-0 w-full z-10">
                <ChatHeader />
            </div>

            {/* Main Content (List of Users) */}
            <div className="flex-1 overflow-y-auto mt-16 p-1 md:p-4 ">
                <Outlet />
            </div>

            {/* Footer */}

        </div>
    )
}

export default ChatLayout
