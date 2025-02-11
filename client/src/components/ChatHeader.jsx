import React from 'react'
import Themes from './Shared/Themes'
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import { LuUserRoundCog } from "react-icons/lu";
import { useNavigate } from 'react-router';
import { userLogoutApi } from '../services/userApi';
import { persistor } from '../redux/store';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/features/selectedChat/selectedUser';

function ChatHeader() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = async () => {
        try {
            const { data } = await userLogoutApi()
            if (data.message) {
                dispatch(addUser({}))
                persistor.purge()
                navigate("/")
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Chatapp</a>
            </div>

            <div className="navbar-end ">
                <div className="navbar-center flex gap-3 px-2 group items-center justify-center">

                    <div className='transition-transform duration-200 hover:scale-125 h-7 w-7'><Themes /></div>
                    {/* Profile */}
                    <button className="tooltip tooltip-bottom transition-transform duration-200 hover:scale-125" data-tip="Profile">
                        <LuUserRoundCog className="text-black dark:text-white w-6 h-6 font-extrabold" />
                    </button>

                    {/* Settings */}
                    <button className="tooltip tooltip-bottom transition-transform duration-200 hover:scale-125" data-tip="Settings">
                        <IoMdSettings className="text-black dark:text-white w-6 h-6 font-extrabold" />
                    </button>

                    {/* Logout */}
                    <button className="tooltip tooltip-left transition-transform duration-200 hover:scale-125" data-tip="Logout" onClick={logout}>
                        <IoIosLogOut className="text-black dark:text-white w-6 h-6 font-extrabold" />
                    </button>
                </div>

                {/* <button className="btn">Log out</button> */}
            </div>
        </div>
    )
}

export default ChatHeader
