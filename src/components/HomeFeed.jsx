import React ,{useEffect, useState} from 'react'
import getHomeFeed from '../utils/getHomeFeed'
import Post from './Post';
function HomeFeed() {
    const [data,setData] = useState([])
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
    async function getData(){
        const result = await getHomeFeed();
        if(isEmpty(result.data)) return;
        setData(result.data)
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        {
            data.map(p=>(
               <Post key = {p._id} postId={p._id} msg = {p.postData} imgArr={p.postImages} username = {p.author.username} avatar={p.author.avatar} /> 
            ))
        }

    </div>
  )
}

export default HomeFeed