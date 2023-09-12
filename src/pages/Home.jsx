import React from 'react'
import CreatePost from '../components/CreatePost'
import HomeFeed from '../components/HomeFeed'
function Home() {
  if(!localStorage.getItem('auth-token')) window.location = '/login'
  return (
    <div className='h-full w-full flex justify-center'>
      <main className='w-1/2 h-full overflow-y-scroll'>
        <CreatePost />
        <HomeFeed/>
      </main>

    </div>
  )
}

export default Home