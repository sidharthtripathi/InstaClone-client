import React from 'react'
import ChatHeader from './ChatHeader.jsx'
import ChatSection from './ChatSection'
import MsgBox from './MsgBox'
function ChatBox() {
  return (
    <div className='grow h-full flex flex-col justify-between'>
        {/* requires avatar username and active */}
        <ChatHeader/>
        {/* requires chat data */}
        <ChatSection/>
        <MsgBox/>
    </div>
  )
}

export default ChatBox