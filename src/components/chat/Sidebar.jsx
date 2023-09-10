import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import FriendsList from './FriendsList'
import { v4 as uuidv4 } from 'uuid';
const friendArr = [
    {
      username: "alan",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 1"
    },
    {
      username: "brian",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 2"
    },
    {
      username: "carol",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 3"
    },
    {
      username: "david",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 4"
    },
    {
      username: "emma",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 5"
    },
    {
      username: "alan",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 1"
    },
    {
      username: "brian",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 2"
    },
    {
      username: "carol",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 3"
    },
    {
      username: "david",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 4"
    },
    {
      username: "emma",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 5"
    },
    {
      username: "alan",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 1"
    },
    {
      username: "brian",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 2"
    },
    {
      username: "carol",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 3"
    },
    {
      username: "david",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 4"
    },
    {
      username: "emma",
      _id: uuidv4(),
      avatar: `https://robohash.org/random/${uuidv4()}`,
      bio: "Some bio 5"
    }
  ]
  
function Sidebar() {
  return (
    <div className='flex flex-col h-full justify-start border-r'>
        <Header/>
        <SearchBar/>
        <FriendsList friendArr={friendArr}/>
    </div>
  )
}

export default Sidebar