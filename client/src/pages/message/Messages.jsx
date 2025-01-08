import React from 'react'
import Chatbubble from './Chatbubble'

function Messages() {
    const Usermessges = new Array(20).fill(null)

    return (
        <>
            {
                Usermessges.map((message, i) => <Chatbubble key={i} />)
            }
        </>
    )
}

export default Messages
