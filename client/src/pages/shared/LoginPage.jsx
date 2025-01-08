import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'

function LoginPage() {

    useEffect(() => {
        Aos.init()
    }, [])

    const navigate = useNavigate()
    return (
        <div className="hero bg-base-200 flex-1" data-aos="fade-down" data-aos-duration='1000'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Connect with the world in just a few clicks. Share your thoughts, anytime, anywhere.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={() => navigate('/chat')}>Login</button>
                        </div>
                        <p className='text-center'>Don't Have An Account?<Link to={'/register'} className='text-blue-600 underline'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
