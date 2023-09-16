import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import FriendsList from './FriendsList'
  
function Sidebar() {
  return (
    <div className='flex flex-col h-full justify-start border-r grow'>
        <Header/>
        <SearchBar/>
        <FriendsList />
    </div>
  )
}

export default Sidebar