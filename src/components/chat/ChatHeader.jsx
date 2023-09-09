import React from 'react'
import { AiOutlineSearch, AiOutlineHeart,AiOutlineBell } from 'react-icons/ai'

function ChatHeader({ username, avatar, active }) {
    return (
        <div className='flex items-center justify-between rounded-md bg-blue-500'>
            <div className='h-16 flex p-2'>
                <img className="h-full rounded-full" src={avatar || "https://www.elevenforum.com/data/attachments/45/45622-423967e182ed610e64465704d26689f8.jpg"} alt="userDP" />
                <div className='h-full flex items-center px-3'>
                    <div className='flex items-center space-x-3'>
                        <p className='font-bold text-white'>{username || "Test Name"}</p>
                        <span className='w-3 h-3 rounded-full' style={{ backgroundColor: active ? "green" : "#ff0000" }} />
                    </div>
                </div>
            </div>
            <div className='flex w-1/4 justify-evenly'>
                <AiOutlineSearch size = {28} color = "white" className='cursor-pointer'/>
                <AiOutlineHeart size = {28} color = "white" className='cursor-pointer'/>
                <AiOutlineBell size = {28} color = "white" className='cursor-pointer'/>
            </div>
        </div>


    )
}

export default ChatHeader