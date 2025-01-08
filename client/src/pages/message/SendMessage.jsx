import React from 'react'
import MessageHeader from './MessageHeader'
import Messages from './Messages'
import ChatInput from './ChatInput'

function Message() {
    return (
        <div className='h-full w-full rounded-lg flex flex-col gap-2 ' >
            <MessageHeader />

            <div className="flex-1 overflow-auto ">
                <Messages />
            </div>
            <div className='w-full '>
                <ChatInput />
            </div>

        </div>
    )
}

export default Message
