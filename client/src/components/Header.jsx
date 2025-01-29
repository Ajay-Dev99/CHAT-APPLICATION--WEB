import React from 'react'
import Themes from './Shared/Themes'
import { Link, useNavigate } from 'react-router'

function Header() {



    return (
        <div className="navbar  bg-base-300  sticky top-0 z-50">
            <div className="navbar-start">

                <Link to={'/'} className="btn btn-ghost text-xl font-bold">Chat App</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 font-bold">
                    {/* <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/about'}><li>About</li></Link> */}
                    {/* <Link to={'/blog'}><li>Blog</li></Link>
                    <Link to={'/pages'}><li>Pages</li></Link>
                    <Link to={'/contact'}><li>Contact</li></Link> */}
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
