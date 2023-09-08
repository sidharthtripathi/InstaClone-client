import React from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Post from './Post'
function MainScreen({setFollowingStat}) {
    return (
        <div className='h-full w-1/2 border-x space-y-4 px-4 overflow-y-scroll'>
            <Header setFollowingStat = {setFollowingStat} />
            <Feed/>
        </div>
    )
}

export default MainScreen