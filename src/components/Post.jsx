import React from 'react'
import { useState } from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import sendLike from '../utils/sendLike'
import {Link} from 'react-router-dom'
function Post({ msg, imgArr, avatar, username ,postId }) {
  const [liked,setLiked] = useState(false)
  async function handleLike(postId){
    await sendLike(postId)
    setLiked(true)
  }
  return (
    <div className="space-y-3 py-2 border-b text-white">
      <div className="flex items-center space-x-4 ">
        <img className=" w-10 h-10 object-cover rounded-full" src= {avatar ? avatar : "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"} alt="" />
        <Link to = {`/${username}`} className="font-semibold border-b border-transparent hover:border-blue-500 duration-300">{username}</Link>
      </div>
      <div>
        <p>{msg}</p>
      </div>
      <div>
        {
          imgArr.map(img=>(<img src = {img}/>))
        }
      </div>
      {/* For interaction */}
      <div className='flex w-full items-center justify-start mt-10 space-x-10'>
       { liked ?  <AiFillHeart size={25} color="f91880" className='cursor-pointer' /> : <AiOutlineHeart size={25} className='cursor-pointer' onClick={()=>{handleLike(postId)}}/>}
       <BiCommentDetail size={25} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Post