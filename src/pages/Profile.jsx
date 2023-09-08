import React from 'react'
import { useState } from 'react'
import MainScreen from '../components/MainScreen'
import RequestSection from '../components/RequestSection'
function Profile() {
    const [followingStat,setFollowingStat] = useState('')
    return (
        <div className='h-screen w-screen flex justify-center'>
            
            <MainScreen setFollowingStat = {setFollowingStat} />
            {followingStat === 'current' && <RequestSection/>}
        </div>
    )
}

export default Profile