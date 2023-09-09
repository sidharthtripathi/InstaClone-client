import React from 'react'
import socket from '../services/index.js'
import { useSetRecoilState } from 'recoil'
import { connectionState } from '../state/atoms/connectionState.js'
import Sidebar from '../components/chat/Sidebar.jsx'
import ChatBox from '../components/chat/ChatBox.jsx'
function Chat() {
    const setConnection = useSetRecoilState(connectionState)
    socket.on('connect',()=>{
      setConnection(true);
    })
    socket.on('disconnect',()=>{
      setConnection(false);
    })
  return (
    <main className='flex items-start h-full'>
    <Sidebar/>
    <ChatBox/> 
  </main>
  )
}

export default Chat