import React from 'react'
import CreatePost from '../components/CreatePost'
function Home() {
  return (
    <div className='h-screen w-screen flex justify-center'>
      <main className='w-1/3 p-2'>
        <CreatePost />
      </main>

    </div>
  )
}

export default Home