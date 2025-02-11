import React from 'react'
import { useSelector } from 'react-redux'

function MessageHeader() {

    const selectedUser = useSelector((state) => state.selecteduser  .value)

    return (
        <div className="navbar rounded-md border border-[#fb8e0b] sticky top-0 z-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">{selectedUser?.name}</a>
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="rounded-full">
                            <img
                                alt="User profile picture"
                                src={selectedUser?.profilepic}
                                className='h-[80px] w-[70px] rounded-full' />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Block</a></li>
                        <li><a>Settings</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MessageHeader
