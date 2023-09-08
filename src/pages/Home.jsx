import React from 'react'
import CreatePost from '../components/CreatePost'
import HomeFeed from '../components/HomeFeed'
function Home() {
  if(!localStorage.getItem('auth-token')) window.location = '/login'
  return (
    <div className='h-screen w-screen flex justify-center'>
      <main className='w-1/2  overflow-y-scroll'>
        <CreatePost />
        <HomeFeed/>
      </main>

    </div>
  )
}

export default Home