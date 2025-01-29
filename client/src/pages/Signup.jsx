
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { userRegisterApi } from '../services/userApi'
import toast from 'react-hot-toast'

function Signup() {
    const [values, setValues] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const navigate = useNavigate()

    const inputChange = (e) => {

        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const formSumbit = async (e) => {
        try {
            e.preventDefault()
            console.log(values, "values");

            const response = await userRegisterApi(values)
            console.log(response);
            if (response.status === 200) {
                navigate("/chat")
            }


        } catch (error) {

            toast.error(error.response ? error?.response?.data?.error : error)

        }
    }


    return (
        <div className="hero bg-base-200 flex-1" data-aos="fade-down" data-aos-duration='1500'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Join the conversation and make every moment memorable. Your journey starts here
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={formSumbit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required name='name' onChange={inputChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required name='email' onChange={inputChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required name='password' onChange={inputChange} />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" className="input input-bordered" required name='confirmPassword' onChange={inputChange} />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <p className='text-center'>Already have an account?<Link to={'/login'} className='underline text-blue-500 '>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
