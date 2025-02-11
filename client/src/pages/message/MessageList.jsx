import React, { useEffect, useState } from 'react'
import User from './User'
import { userListingApi } from '../../services/userApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/features/selectedChat/selectedUser';

function MessageList({ selectuser }) {
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const listUsers = async () => {
        try {
            const { data } = await userListingApi()
            setUsers(data)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        listUsers()
    }, [])



    return (
        <div className='text-center   my-2 flex-grow  overflow-x-auto'>
            <label className="input input-bordered border-[#fb8e0b] flex items-center gap-2 sticky top-0">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
            <div className='users'>

                {
                    users.map((user) => (
                        <div key={user._id} className='hover:bg-base-200 cursor-pointer ' onClick={() => dispatch(addUser(user))}>
                            <User user={user} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MessageList
