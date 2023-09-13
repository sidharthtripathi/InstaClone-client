import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getUserData from '../utils/getUserData'
import Error from './Error'
import FollowStatus from './FollowStatus';
import { BsChatFill } from 'react-icons/bs';
import axios from 'axios'
import { API_BASE_URL } from '../config';
function Header({setFollowingStat}) {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(false);
    const { name, username, avatar, coverImage, bio, followersCount, followingsCount, followingStatus} = userData;
    const fetchUserData = async () => {
        const data = await getUserData(id);
        if (data.error) {
            return setError(true)
        }
        setFollowingStat(data.followingStatus)
        setUserData(data);
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    async function handleChatting(){
        const url = `${API_BASE_URL}/chat/start`
        const myName = JSON.parse(localStorage.getItem('userInfo')).name
        console.log(myName)
        const headers = {
            'Auth-Token' : localStorage.getItem('auth-token')
        }
        const body = {
            message : `Hi, ${myName} here..`,
            reciever : userData._id
        }
        await axios.post(url,body,{headers})
        window.location = '/chat'
    }
    return (
        <div >
            {error && <Error msg="something wrong" className='text-white bg-red-500 outline outline-red-800 px-2 rounded-md animate__animated animate__headShake' />}
            <div className='relative h-32 mb-12'>
                <img className='h-full w-full object-cover' src={coverImage ? coverImage : "https://tokystorage.s3.amazonaws.com/images/default-cover.png"} alt="cover Pic" />
                <FollowStatus userId = {userData._id} status={followingStatus}/>
                {followingStatus !== 'current' && <BsChatFill color = 'white' size={25} className='absolute -bottom-8 right-20 cursor-pointer ' onClick={handleChatting}/>}
                <img className='border-2 border-black rounded-full w-24 absolute top-20' src={avatar ? avatar : "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"} alt="user pic" />
            </div>
           
            <div>
                <h1 className='font-bold text-lg'>{name}</h1>
        
                <h1 className='font-medium text-[10px] text-gray-400 mb-2'>@{username}</h1>
                {bio && <p className='text-medium text-[12px]'>{bio}</p>}
                <div className='flex space-x-4 mt-2'>
                    <p className='text-[9px] cursor-pointer '> <span className=' font-bold'>{followingsCount}</span> Followings </p>
                    <p className='text-[9px] cursor-pointer '> <span className=' font-bold'>{followersCount}</span> Followers</p>
                </div>
            </div>
        </div>
    )
}

export default Header