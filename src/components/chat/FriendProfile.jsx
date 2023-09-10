import React, { useState } from 'react'
import {useSetRecoilState} from 'recoil'
import { activeChatState } from '../../state/atoms/activeChatState'
function FriendProfile({avatar,userId,username,lastMsg,pendingMsgCount=0}) {
  const [pending,setPending] = useState(false)
  const setCurrentChat = useSetRecoilState(activeChatState)
  return (
    <div className='h-16 flex p-2 hover:bg-blue-500 duration-100 rounded-md' onClick = {()=>{setCurrentChat({userId,username,avatar})}}>
    <img className="h-full rounded-full" src={avatar || "https://www.elevenforum.com/data/attachments/45/45622-423967e182ed610e64465704d26689f8.jpg"} alt="userDP" />
    <div className='h-full flex items-center px-4'>
      <div>
        <p className='font-bold  text-white'>{username || "Test Name"}</p>
        <span className='font-light text-sm text-white'>{lastMsg || "A testing bio"}</span>
      </div>
    </div>
    {pending && <span className='bg-blue-500 text-white text-sm w-7 text-center align-middle p-1 rounded-full absolute right-3 bottom-2'>{pendingMsgCount}</span>}
  </div>
  )
}

export default FriendProfile