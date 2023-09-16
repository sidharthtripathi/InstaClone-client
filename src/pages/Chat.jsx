import React, { useEffect } from 'react'
import axios from 'axios'
import socket from '../services/index.js'
import { useSetRecoilState } from 'recoil'
import { connectionState } from '../state/atoms/connectionState.js'
import { chatdbState } from '../state/atoms/chatdbState.js'
import Sidebar from '../components/chat/Sidebar.jsx'
import ChatBox from '../components/chat/ChatBox.jsx'
import {API_BASE_URL} from '../config.js'
import { activeChatState } from '../state/atoms/activeChatState'
import { useRecoilValue} from 'recoil'
function Chat() {
  if (!localStorage.getItem('auth-token')) return window.location = '/login'
  const setChatDB = useSetRecoilState(chatdbState);
  const setConnection = useSetRecoilState(connectionState);
  async function getChats() {
    try {
      const token = localStorage.getItem('auth-token');
      const url = `${API_BASE_URL}/chats`
      const headers = {
        'Auth-Token': token
      }
      const data = await axios.get(url, { headers })
      console.log('fetching done')
      setChatDB(data.data)  
    }
    catch (err) {
      console.log(err)
    }
  }
  socket.on('personal-msg',(msg)=>{
    setChatDB((p)=>([...p,{message : msg.message , sender : {_id : msg.from.userId} , reciever : {_id : msg.to.userId}}]))
  })
  socket.on('connect', () => {
    setConnection(true);
  })
  socket.on('disconnect', () => {
    setConnection(false);
  })
  useEffect(() => {
    getChats();
  }, [])
  const activeChat = useRecoilValue(activeChatState);
  const activeId = activeChat.userId;
  return (

    <main className='flex items-start h-full'>
      {!activeId && <Sidebar />}
      {activeId && <ChatBox />}
    </main>
  )
}

export default Chat