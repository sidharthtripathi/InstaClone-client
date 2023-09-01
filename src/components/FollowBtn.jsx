import React from 'react'
import sendRequest from '../utils/sendRequest.js'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import Pending from './Pending.jsx'
function FollowBtn() {
    const {id} = useParams();
    const[sent,setSent] = useState(false);
    async function handleClick(id){
       const result = await sendRequest(id);
       if(!result.data.error) setSent(true);
    }
  return (
    <>
    {
        
        sent ? <Pending/> : <button className='text-white bg-blue-500 hover:bg-blue-400 absolute right-1 mt-2 px-2 py-1 rounded-md text-sm duration-100' onClick={()=>{handleClick(id)}}>Follow</button>
    }
    </>
  )
}

export default FollowBtn