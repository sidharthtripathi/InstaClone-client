import React from 'react'
import FriendProfile from './FriendProfile'
import {v4 as uuidv4} from 'uuid'
import {useRecoilValue} from 'recoil'
import { convoSelector } from '../../state/selectors/convoSelector'
function FriendsList() {
  const convos = useRecoilValue(convoSelector);
  return (
    <div className='overflow-y-scroll grow'>
        {
            Object.keys(convos).map(friendId=>(
              
              <FriendProfile
              key = {uuidv4()}
              avatar = {convos[friendId][0].sender._id===friendId ? convos[friendId][0].sender.avatar: convos[friendId][0].reciever.avatar}
              username = {convos[friendId][0].sender._id===friendId ? convos[friendId][0].sender.username: convos[friendId][0].reciever.username}
              userId = {friendId}
              lastMsg = {convos[friendId][convos[friendId].length-1].message}
              />
            ))
        }
    </div>
  )
}

export default FriendsList