import React, { useState } from 'react'
import FollowBtn from './FollowBtn'
import unfollow from '../utils/unfollow'
function Unfollow({userId}) {
  const [change,setChange] = useState(false)
  async function handleClick(){
    const data = await unfollow(userId);
    console.log('done fetching')
    console.log(data)
    if(data.data.success) return setChange(true);
  }
  return (
    <>
{   change===false ?
 <button className='text-white bg-red-500 hover:bg-red-600 absolute right-1  mt-2 px-2 py-1 rounded-md text-sm duration-100' onClick={handleClick}>Remove</button>
 : 
  <FollowBtn/>
}    </>
  )
}

export default Unfollow