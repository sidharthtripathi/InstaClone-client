import React from 'react'
import cancelRequest from '../utils/cancelRequest'
import FollowBtn from './FollowBtn';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
function Pending() {
  const [sent,setSent] = useState(false);
  const {id} = useParams();
  async function handleClick(id){
    await cancelRequest(id);
    setSent(!sent);

  }

  return (
    <>
    {sent ? <FollowBtn/> : <button className='text-white bg-red-500 hover:bg-red-400 absolute right-1 mt-2 px-2 py-1 rounded-md text-sm duration-100' onClick={()=>{handleClick(id)}}>Pending</button>}
    </>
  )
}

export default Pending