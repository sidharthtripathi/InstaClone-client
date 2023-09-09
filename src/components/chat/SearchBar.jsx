import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
function SearchBar() {
  return (
    <div className='h-12 flex items-center space-x-2 p-2 rounded-full'>
        <AiOutlineSearch size = {24} color = "white" />
        <input className= "px-3 w-full rounded-full py-2 outline-none border-none bg-gray-100" type="text"  placeholder = "Search friends here.. " />
    </div>
  )
}

export default SearchBar