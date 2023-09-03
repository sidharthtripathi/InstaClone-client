import React from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'
function MainScreen() {
    return (
        <div className='h-full w-1/2 border-x'>
            <Header />
            <Feed/>
        </div>
    )
}

export default MainScreen