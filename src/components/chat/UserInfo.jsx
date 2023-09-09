import React from 'react'
import {useRecoilValue } from 'recoil';
import {GoDotFill} from 'react-icons/go'
import { connectionState } from '../../state/atoms/connectionState';
function UserInfo({ avatar, username, bio }) {
  const connected = useRecoilValue(connectionState);
  return (
    <div className='h-20 flex p-2'>
      <img className="h-full rounded-full" src={avatar || "https://www.elevenforum.com/data/attachments/45/45622-423967e182ed610e64465704d26689f8.jpg"} alt="userDP" />
      <div className='h-full flex items-center px-4'>
        <div>
          <p className='font-bold text-xl text-white'>{username || "Test Name"}</p> 
          <GoDotFill size = {24} color={connected ? "green" : "red"}/>
        </div>
      </div>
    </div>
    
  )
}

export default UserInfo