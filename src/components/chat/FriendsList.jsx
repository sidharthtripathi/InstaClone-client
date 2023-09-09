import React from 'react'
import FriendProfile from './FriendProfile'
import { v4 as uuidv4 } from 'uuid';
function FriendsList({friendArr = []}) {


  return (
    <div className='overflow-y-scroll grow'>
        {
            friendArr.map(f=>(
                <FriendProfile key = {uuidv4()} avatar = {f.avatar} username = {f.username} lastMsg = {f.bio}/>
            ))
        }
    </div>
  )
}

export default FriendsList