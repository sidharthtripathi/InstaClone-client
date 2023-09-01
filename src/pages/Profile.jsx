import React from 'react'
import { useParams } from 'react-router-dom'
import MainScreen from '../components/MainScreen'
function Profile() {
    const { id } = useParams()
    return (
        <div className='h-screen w-screen flex justify-center'>
            <MainScreen />
        </div>
    )
}

export default Profile