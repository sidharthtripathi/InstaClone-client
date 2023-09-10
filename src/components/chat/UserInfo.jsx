import React from 'react'
import {useRecoilValue } from 'recoil';
import {GoDotFill} from 'react-icons/go'
import { connectionState } from '../../state/atoms/connectionState';
function UserInfo() {
  const connected = useRecoilValue(connectionState);
  const user = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <div className='h-20 flex p-2'>
      <img className="h-full rounded-full" src={user.avatar || "https://www.elevenforum.com/data/attachments/45/45622-423967e182ed610e64465704d26689f8.jpg"} alt="userDP" />
      <div className='h-full flex items-center px-4'>
        <div>
          <p className='font-bold text-xl text-white'>{user.name || "Test Name"}</p> 
          <p>{user.bio}</p>
          <GoDotFill size = {24} color={connected ? "green" : "red"}/>
        </div>
      </div>
    </div>
    
  )
}

export default UserInfo