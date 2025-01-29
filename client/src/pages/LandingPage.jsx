
import React, { useEffect } from 'react'
import { IoIosVideocam, IoIosClock } from "react-icons/io";
import { MdOutlineSignalWifi4BarLock } from "react-icons/md";
import { useNavigate } from 'react-router';

function Banner() {



    const navigate = useNavigate()


    return (
        <div className='flex flex-col gap-16 flex-1 container mx-auto px-8'>
            <section data-aos="fade-down" data-aos-duration='1000' className='flex flex-wrap h-screen  space-y-2'>
                <div className="w-full  md:w-1/2  items-center justify-center text-center px-1 flex flex-col gap-4 md:gap-8" >
                    <h1 className='text-3xl text-wrap lg:text-6xl font-bold'>Start chatting with Friends, anytime, anywhere with Chat App</h1>
                    <p className='md:text-[22px] text-wrap px-3'>Great software that allows you to chat from any <br></br> place at any time without any interruption.</p>
                    <button className='flex items-center bg-[#FB8E0B] text-white rounded-md py-2 px-4' onClick={() => navigate('/login')}>Start Chatting Now <span className='text-[25px] text-center'>→</span></button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center ">
                    <div className="border border-orange-500 p-5 rounded-full" data-aos="fade-down" data-aos-duration='1000'>
                        <img className='h-[300px] md:h-[500px]' src='/images/BannerImage.png' alt="bannerimage" />
                    </div>
                </div>
            </section>

            <section className='flex flex-col  space-y-6 ' data-aos="fade-down" data-aos-duration='1000'>
                <h1 className='text-2xl text-wrap sm:text-4xl text-center font-bold'>Features for a better experience</h1>
                <div className=" w-full flex flex-col md:flex-row justify-between items-center gap-4 py-5 px-5">
                    <div className="w-full md:w-1/3 px-5  flex flex-col lg:flex-row justify-center items-center space-x-3 text-center space-y-2">

                        <div className='flex'>
                            <div className='bg-[#FFC5A5] rounded-full p-2'>
                                <IoIosVideocam className='text-3xl text-[#F23936]' />
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2 '>
                            <h2 className='text-lg font-bold'>Video Messaging</h2>
                            <p className='text-sm text-wrap'>This software is very easy for you to manage. You can use it as you wish.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-5  flex flex-col lg:flex-row justify-center items-center space-x-3 text-center space-y-2">
                        <div className='flex   '>
                            <div className='bg-[#DBEDDC] rounded-full p-2'>
                                <IoIosClock className='text-3xl text-[#4DA44E]' />
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 '>
                            <h2 className='text-lg font-bold'>Save your time</h2>
                            <p className='text-sm text-wrap'>This software is very easy for you to manage. You can use it as you wish.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-5  flex flex-col lg:flex-row justify-center items-center space-x-3 text-center space-y-2">
                        <div className='flex '>
                            <div className='bg-[#FDD6A7] rounded-full p-2'>
                                <MdOutlineSignalWifi4BarLock className='text-3xl text-[#FB8E0B]' />
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='text-lg font-bold'>Keep safe & private</h2>
                            <p className='text-sm text-wrap'>This software is very easy for you to manage. You can use it as you wish.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section data-aos="fade-down" data-aos-duration='1000' className='space-y-2  md:px-8  mt-5  justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className="flex justify-center ">
                    <img src="/images/Videocall.jpg" alt="" className='h-auto md:h-[300px] w-auto' /></div>
                <div className="px-1 lg:px-8 flex flex-col justify-center items-center ">
                    <h2 className='text-2xl text-wrap text-center font-bold'>Meet your Friends, with live video chat</h2>
                    <p className='text-center text-wrap'>Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.Get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits</p>
                </div>
            </section>

            <section data-aos="fade-down" data-aos-duration='1000' className=''>
                <div className='flex flex-col text-center bg-[#FB8E0B] p-5 items-center '>
                    <h1 className='text-2xl text-wrap sm:text-4xl text-center font-bold text-white'>Our blessed client said about us 😍</h1>
                    <div className='flex flex-col md:flex-row mt-5 gap-5'>
                        <div className="w-full md:w-1/2 ">
                            <div className='border bg-white p-3 rounded'>
                                <h1 className='text-[#FB8E0B] font-bold'>“Incredible Experience”</h1>
                                <p className='font-semibold text-wrap p-3'>We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 border bg-white p-3 rounded"><div>
                            <h1 className='text-[#FB8E0B] font-bold'>“Dependable, Responsive, Professional”</h1>
                            <p className='font-semibold text-wrap p-3'>Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-down" data-aos-duration='1000' className='flex justify-center flex-col items-center gap-4 mb-10'>
                <h1 className='text-3xl text-wrap  lg:text-5xl font-bold text-center'>
                    Ready to grow your Connection?
                    Start with Chat App, become faster
                    every second</h1>


                <button className='flex items-center bg-[#FB8E0B] text-white rounded-md py-2 px-4' onClick={() => navigate('/login')}>Start Chatting Now <span className='text-[25px] text-center'>→</span></button>
            </section>

            {/* <section className=' flex justify-between  py-4 items-center'>
                <div className=' w-1/3'>
                    <span className='text-lg font-bold text-[#FB8E0B]'>Chat App</span>
                </div>
                <div className='w-1/3'>
                    <ul className='flex gap-4 font-bold justify-center'>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className=' w-1/3'>
                    <ul className='flex gap-4 justify-end'>
                        <li>Icons</li>
                        <li>Icons</li>
                        <li>Icons</li>
                        <li>Icons</li>
                    </ul>
                </div>
            </section> */}
        </div>

    )
}

export default Banner
