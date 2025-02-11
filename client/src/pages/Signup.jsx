import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userRegisterApi } from '../services/userApi';
import toast from 'react-hot-toast';
import { FaCamera } from 'react-icons/fa';

function Signup() {
    const [values, setValues] = useState({
        name: '', email: '', password: '', confirmPassword: '', image: null
    });
    const navigate = useNavigate();

    const inputChange = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e) => {
        setValues((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const formSumbit = async (e) => {
        try {
            e.preventDefault();
            if (values.image === null) {
                return toast.error("Profile image is required")
            }
            if (values.password !== values.confirmPassword) {
                return toast.error("Passwords does not match")
            }

            const formData = new FormData();
            // formData.append('name', values.name);
            // formData.append('email', values.email);
            // formData.append('password', values.password);
            // formData.append('confirmPassword', values.confirmPassword);
            // formData.append('image', values.image); // Appending the image file

            // console.log(formData, "formData>>>>");

            Object.keys(values).forEach((key) => {
                const value = values[key];
                if (key === 'image' && value) {
                    formData.append(key, value);
                } else {
                    formData.append(key, value);
                }
            });

            // Log FormData contents
            for (let pair of formData) {
                console.log(pair);
            }

            const response = await userRegisterApi(formData);
            if (response.status === 200) {
                navigate("/chat");
            }
        } catch (error) {
            toast.error(error.response ? error?.response?.data?.error : error);
        }
    };

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
                        {/* Profile Picture Section moved here */}
                        <div className=" mb-4 flex items-center justify-center   relative">
                            <img
                                src={values.image ? URL.createObjectURL(values.image) : 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'}
                                alt="profile picture"
                                className="w-32 h-32 rounded-full object-contain border border-black "
                            />
                            <label htmlFor="profile-pic-upload" className="absolute bottom-0  rounded-full shadow-lg cursor-pointer">
                                <FaCamera size={24} color="#000" />
                            </label>
                            <input
                                id="profile-pic-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                                name="name"
                                onChange={inputChange}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                name="email"
                                onChange={inputChange}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                                name="password"
                                onChange={inputChange}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="input input-bordered"
                                required
                                name="confirmPassword"
                                onChange={inputChange}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <p className="text-center">
                            Already have an account?{' '}
                            <Link to="/login" className="underline text-blue-500">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
