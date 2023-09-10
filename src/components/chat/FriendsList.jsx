import React from 'react'
import FriendProfile from './FriendProfile'
import {v4 as uuidv4} from 'uuid'
import {useRecoilValue} from 'recoil'
import { convoSelector } from '../../state/selectors/convoSelector'
function Empty(){
  return (
    <p className='text-white text-xl font-bold text-center relative inset-y-2/4 '>
      Your Conversations..
    </p>
  )
}
function FriendsList({friendArr = []}) {
  const myId = localStorage.getItem('userId');
  const convos = useRecoilValue(convoSelector);
  return (
    <div className='overflow-y-scroll grow'>
    {!friendArr.length && <Empty/>}
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