import React, { useState } from 'react'
import fetchRequest from '../utils/fetchRequest'
import Request from './Request';
import {v4 as uuidv4} from 'uuid'

function RequestSection() {
    const [data,setData] = useState([]);
    async function getData(){
        try{
        const result = await fetchRequest();
        setData(result.data);
        }
        catch(err){
            console.log(err)
        }
    }


    function removeRequest(username){
        const newData = data.filter(user=>(user.username!==username))
        setData(newData);
    }
    useState(()=>{
        getData();
    },[])
  return (
    <div className='grow p-2 space-y-2'>
        <h1 className='text-white'>Incoming Requests</h1>
       { data.map(user=>{
            return <Request key={uuidv4()} removeRequest = {removeRequest} avatar={user.avatar} name = {user.name} username = {user.username}/>
        })}
    </div>
  )
}

export default RequestSection