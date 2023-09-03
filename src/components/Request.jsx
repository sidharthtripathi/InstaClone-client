import React from 'react'
import acceptRequest from '../utils/acceptRequest'
import deleteRequest from '../utils/deleteRequest'

function Requests({ avatar, name, username , removeRequest }) {
    return (
    <div>
        <div className='flex space-x-2 items-center mb-1'>
            <a href={`/${username}`}>
            <img className = 'w-8 object-cover rounded-full' src = {avatar ? avatar : "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"} alt="userDP" />
            </a>
            <a href = {`/${username}`} className='text-white hover:underline decoration-blue-500 duration-100 hover:text-gray-300 '>{name}</a>
        </div>
        <div className='space-x-2'>
            <button className='bg-blue-500 text-xs hover:scale-95 duration-100 hover:bg-blue-400 text-white rounded-md px-2 py-1' onClick={()=>{acceptRequest(username,removeRequest)}}>Accept</button>
            <button className='text-white text-xs hover:scale-95 duration-100 bg-red-500 hover:bg-red-400 px-2 py-1 rounded-md' onClick={()=>{deleteRequest(username,removeRequest)}}>Reject</button>
        </div>

    </div >
  )
}

export default Requests