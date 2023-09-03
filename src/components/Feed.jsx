import React from 'react'
import {useState,useEffect} from 'react'
import Post from '../components/Post'
import { useParams } from 'react-router-dom'
import getAllPosts from '../utils/getAllPost'

function Feed() {
    const [data,setData] = useState([])
    const { id } = useParams()
    async function getData(){
        const data = await getAllPosts(id);
        setData(data);
    }
    
    useEffect(()=>{
        getData();
    },[])
    return (
        <div className='p-2'>
            {
                data.map(d => {
                    return (
                        <Post key = {d._id} msg = {d.postData}/>
                    )
                })
            }
        </div>
    )
}

export default Feed