import React, { Suspense, useEffect } from 'react'
import UserList from './MessageList'
import SendMessage from './SendMessage'
import User from './User'
import Loading from '../../components/Shared/Loading'
import { useSelector } from 'react-redux'

function Chatpage() {

    const selectedChat = useSelector((state) => state.selecteduser.value)

    return (
        <div className='flex flex-col md:flex-row flex-grow container mx-auto px-3 gap-2 h-full '>
            <div className="hidden flex-1 md:flex flex-col w-full  md:w-1/4 " data-aos="fade-down" data-aos-duration='1000' >
                <h1 className='text-lg font-semibold '>MESSAGES</h1>
                <Suspense fallback={<Loading />}>
                    <UserList />
                </Suspense>
            </div>
            <div className='block md:hidden'>
                <MobileUserList />
            </div>
            <div className='w-full h-full md:w-3/4 border border-base-300 p-1 md:p-3 overflow-hidden' data-aos="fade-down" data-aos-duration='1000' >
                {Object.keys(selectedChat).length ? <SendMessage /> : <SelectUser />}
            </div>
        </div>
    )
}

export default Chatpage


function MobileUserList() {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn  drawer-button">All Messages</label>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <User />
                </ul>
            </div>
        </div>
    )
}

function SelectUser() {
    return (
        <div className=' flex flex-col justify-center items-center h-full'>
            <img src="/images/Chat-03-512.webp" alt="" className='h-1/2 w-1/2 bg-base-100' />
            <span className='font-bold'>Choose a user to begin the conversation.</span>
        </div>
    )
}