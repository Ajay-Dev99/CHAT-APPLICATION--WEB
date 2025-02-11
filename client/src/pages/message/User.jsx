import React from 'react'

function User({ user }) {

    return (

        <div className="border-b-2  border-b-[#e5e7eb]  dark:bg-[#1d232a] flex px-4 py-2 my-2 items-center justify-center gap-5">

            <img src={user?.profilepic} alt="" className='h-[80px] w-[70px] rounded-full' />

            <div className='flex flex-col  w-full'>

                <div className="flex justify-between">
                    <span className='text-start'>{user?.name}</span>
                    <span className='text-start'>5.00pm</span>
                </div>
                <p className='text-start'>{'here where we  last message will show here'.slice(0, 15) + '...'}</p>
            </div>
        </div>
    )
}

export default User
