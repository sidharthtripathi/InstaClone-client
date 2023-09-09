import React from 'react'
import { AiOutlineCamera, AiOutlinePaperClip , AiOutlineSend } from 'react-icons/ai'
import {RiEmojiStickerLine} from 'react-icons/ri'
import {BsMic} from 'react-icons/bs'
function MsgBox() {
  return (
        <div className='flex items-center my-4 mx-2 rounded-full justify-around bg-gray-700'>
            <div className='flex space-x-3 items-center grow pl-3'>
                <BsMic size = {24} className='text-white cursor-pointer'/>
                <input className = "bg-gray-700 h-8 w-full px-2 outline-none border-none text-white" type="text" placeholder='write something...' />
            </div>
            <div className='flex space-x-3 items-center'>
                <AiOutlinePaperClip size = {35} className='text-white cursor-pointer'/>
                <AiOutlineCamera size = {35} className='text-white cursor-pointer'/>
                <RiEmojiStickerLine size = {35} className='text-white cursor-pointer'/>
                <AiOutlineSend size = {40}className='bg-blue-500 p-2 rounded-full text-white relative cursor-pointer'/>
            </div>

        </div>

  
  )
}

export default MsgBox