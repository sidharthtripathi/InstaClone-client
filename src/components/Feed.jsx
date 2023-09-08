import React from 'react'
import {useState,useEffect} from 'react'
import Post from '../components/Post'
import { useParams } from 'react-router-dom'
import getAllPosts from '../utils/getAllPost'

function Feed() {
    const [data,setData] = useState([]);
    const [user,setUser] = useState({});
    const { id } = useParams()
    const emptyImg = [];
    async function getData(){
        const data = await getAllPosts(id);
        if(data.error) return;
        setData(data.allPost);
        setUser(data.user);
    }
    
    useEffect(()=>{
        getData();
    },[])
    return (
        <div className='space-y-3'>
            {
                data.reverse().map(d => {
                    return (
                        <Post key = {d._id} postId = {d._id} msg = {d.postData} imgArr = {d.postImages ? d.postImages : [] } username = {user.username} avatar={user.avatar}/>
                    )
                })
            }
        </div>
    )
}

export default Feed