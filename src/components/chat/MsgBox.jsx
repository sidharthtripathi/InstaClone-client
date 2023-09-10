import React ,{useRef}from 'react'
import { AiOutlineCamera, AiOutlinePaperClip , AiOutlineSend } from 'react-icons/ai'
import {RiEmojiStickerLine} from 'react-icons/ri'
import {BsMic} from 'react-icons/bs'
import socket from '../../services/index'
import {useRecoilValue,useSetRecoilState} from 'recoil'
import { activeChatState } from '../../state/atoms/activeChatState'
import { chatdbState } from '../../state/atoms/chatdbState'

function MsgBox() {
    const currentPersonId = useRecoilValue(activeChatState).userId
    const setChatdb = useSetRecoilState(chatdbState)
    const msgRef = useRef(null)
    const user = JSON.parse(localStorage.getItem('userInfo'))
    function handleSend(){
        if(!currentPersonId || !msgRef.current.value) return ;
        const data = {
            message : msgRef.current.value,
            from : {
                avatar : user.avatar
            },
            to : {
                userId : currentPersonId
            }
        } 
        msgRef.current.value = "";
        setChatdb((p)=>([...p,{message : data.message, sender : {_id : user.userId} , reciever : {_id : currentPersonId}}]))
        socket.emit('personal-msg',data)
    }
  return (
        <div className='flex items-center my-4 mx-2 rounded-full justify-around bg-gray-700'>
            <div className='flex space-x-3 items-center grow pl-3'>
                <BsMic size = {24} className='text-white cursor-pointer'/>
                <input ref = {msgRef} className = "bg-gray-700 h-8 w-full px-2 outline-none border-none text-white" type="text" placeholder='write something...' />
            </div>
            <div className='flex space-x-3 items-center'>
                <AiOutlinePaperClip size = {35} className='text-white cursor-pointer'/>
                <AiOutlineCamera size = {35} className='text-white cursor-pointer'/>
                <RiEmojiStickerLine size = {35} className='text-white cursor-pointer'/>
                <AiOutlineSend size = {40}className='bg-blue-500 p-2 rounded-full text-white relative cursor-pointer' onClick={handleSend}/>
            </div>

        </div>

  
  )
}

export default MsgBox