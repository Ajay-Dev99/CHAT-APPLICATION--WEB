import React from 'react'

function Banner() {
    return (
        <div className='flex flex-wrap flex-grow container mx-auto'>
            <div className="w-full  md:w-1/2  items-center justify-center text-center px-1 flex flex-col gap-4 md:gap-8">
                <h1 className='text-3xl text-wrap sm:text-6xl'>Start chatting with Friends, anytime, anywhere with Chat App</h1>
                <p className='md:text-[22px] text-wrap px-3'>Great software that allows you to chat from any <br></br> place at any time without any interruption.</p>
                <button className='flex items-center bg-[#FB8E0B] text-white rounded-md py-2 px-4'>Start Chatting Now <span className='text-[25px] text-center'>→</span></button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img className='h-[300px] md:h-[500px]' src='/images/BannerImage.png' alt="bannerimage" />
            </div>
        </div>
    )
}

export default Banner
