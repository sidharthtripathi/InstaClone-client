import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import FriendsList from './FriendsList'
const friendArr = [
    {
      username: "alan",
      id: "someId1",
      avatar: "https://example.com/avatar1.jpg",
      bio: "Some bio 1"
    },
    {
      username: "brian",
      id: "someId2",
      avatar: "https://example.com/avatar2.jpg",
      bio: "Some bio 2"
    },
    {
      username: "carol",
      id: "someId3",
      avatar: "https://example.com/avatar3.jpg",
      bio: "Some bio 3"
    },
    {
      username: "david",
      id: "someId4",
      avatar: "https://example.com/avatar4.jpg",
      bio: "Some bio 4"
    },
    {
      username: "emma",
      id: "someId5",
      avatar: "https://example.com/avatar5.jpg",
      bio: "Some bio 5"
    },
    {
      username: "alan",
      id: "someId1",
      avatar: "https://example.com/avatar1.jpg",
      bio: "Some bio 1"
    },
    {
      username: "brian",
      id: "someId2",
      avatar: "https://example.com/avatar2.jpg",
      bio: "Some bio 2"
    },
    {
      username: "carol",
      id: "someId3",
      avatar: "https://example.com/avatar3.jpg",
      bio: "Some bio 3"
    },
    {
      username: "david",
      id: "someId4",
      avatar: "https://example.com/avatar4.jpg",
      bio: "Some bio 4"
    },
    {
      username: "emma",
      id: "someId5",
      avatar: "https://example.com/avatar5.jpg",
      bio: "Some bio 5"
    },
    {
      username: "alan",
      id: "someId1",
      avatar: "https://example.com/avatar1.jpg",
      bio: "Some bio 1"
    },
    {
      username: "brian",
      id: "someId2",
      avatar: "https://example.com/avatar2.jpg",
      bio: "Some bio 2"
    },
    {
      username: "carol",
      id: "someId3",
      avatar: "https://example.com/avatar3.jpg",
      bio: "Some bio 3"
    },
    {
      username: "david",
      id: "someId4",
      avatar: "https://example.com/avatar4.jpg",
      bio: "Some bio 4"
    },
    {
      username: "emma",
      id: "someId5",
      avatar: "https://example.com/avatar5.jpg",
      bio: "Some bio 5"
    }
  ]
  
function Sidebar() {
  return (
    <div className='flex flex-col h-full justify-start'>
        <Header/>
        <SearchBar/>
        <FriendsList friendArr={friendArr}/>
    </div>
  )
}

export default Sidebar