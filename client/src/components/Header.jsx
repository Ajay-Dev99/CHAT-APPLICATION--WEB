import React from 'react'
import Themes from './Shared/Themes'
import { Link, useNavigate } from 'react-router'

function Header() {



    return (
        <div className="navbar  bg-base-300  sticky top-0 z-50">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow gap-3 text-black">
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/about'}><li>About</li></Link>
                        <Link to={'/blog'}><li>Blog</li></Link>
                        <Link to={'/pages'}><li>Pages</li></Link>
                        <Link to={'/contact'}><li>Contact</li></Link>

                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl font-bold">Chat App</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 font-bold">
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/about'}><li>About</li></Link>
                    <Link to={'/blog'}><li>Blog</li></Link>
                    <Link to={'/pages'}><li>Pages</li></Link>
                    <Link to={'/contact'}><li>Contact</li></Link>
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <Themes />
                <Link className="btn font-bold" to={'/login'}>Login</Link>
            </div>
        </div>
    )
}

export default Header
