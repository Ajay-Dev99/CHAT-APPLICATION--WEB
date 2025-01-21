import React from 'react'

function Chatbubble() {
    return (
        <>
            <div className="chat chat-start my-4">
                <div className="chat-bubble w-full md:w-1/3 -z-10">
                    It's over Anakin
                </div>
            </div>
            <div className="chat chat-end ">
                <div className="chat-bubble w-full md:w-1/3 -z-10">You underestimate my power!</div>
            </div></>
    )
}

export default Chatbubble
