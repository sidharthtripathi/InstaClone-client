import React from 'react'

import MainScreen from '../components/MainScreen'
import RequestSection from '../components/RequestSection'
function Profile() {
 
    return (
        <div className='h-screen w-screen flex justify-center'>
            
            <MainScreen />
            <RequestSection/>
        </div>
    )
}

export default Profile