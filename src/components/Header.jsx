import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getUserData from '../utils/getUserData'
import Error from './Error'
function Header() {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(false);
    const { name, username, avatar, coverImage, bio, followersCount, followingsCount } = userData;
    const fetchUserData = async () => {
        const data = await getUserData(id);
        if (data.error) {
            return setError(true)
        }
        setUserData(data);
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    return (
        <div className='text-white px-4'>
            {error && <Error msg="something wrong" className='text-white bg-red-500 outline outline-red-800 px-2 rounded-md animate__animated animate__headShake' />}
            <div className='relative mb-12'>
                <img className='h-32 w-full object-cover' src={coverImage ? coverImage : "https://tokystorage.s3.amazonaws.com/images/default-cover.png"} alt="cover Pic" />
            </div>
            <div>
                <img className='border-2 border-black rounded-full w-24 absolute top-20' src={avatar ? avatar : "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"} alt="user pic" />
                <h1 className='font-bold text-lg'>{name}</h1>
                <h1 className='font-medium text-[10px] text-gray-400 mb-2'>@{username}</h1>
                {bio && <p className='text-medium text-[12px]'>{bio}</p>}
                <div className='flex space-x-4 mt-2'>
                    <p className='text-[9px] cursor-pointer text-gray-400'> <span className=' text-white font-bold'>{followingsCount}</span> Followings </p>
                    <p className='text-[9px] cursor-pointer text-gray-400'> <span className=' text-white font-bold'>{followersCount}</span> Followers</p>
                </div>
            </div>
        </div>
    )
}

export default Header