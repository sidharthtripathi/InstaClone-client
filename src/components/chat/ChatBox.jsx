import React from 'react'
import ChatHeader from './ChatHeader.jsx'
import ChatSection from './ChatSection'
import MsgBox from './MsgBox'
import { activeChatState } from '../../state/atoms/activeChatState'
import { useRecoilValue} from 'recoil'

function ChatBox() {
  const activeChat = useRecoilValue(activeChatState);
  const activeId = activeChat.userId;
  return (
    <div className='grow h-full flex flex-col justify-between'>
      {/* requires avatar username and active */}
      {activeId && <ChatHeader />}
      {/* requires chat data */}
      
        <ChatSection/>
        {activeId && <MsgBox/>}
      
    </div>
  )
}

export default ChatBox