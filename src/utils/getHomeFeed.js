import axios from 'axios'
import { API_BASE_URL } from '../config'
export default async function getHomeFeed(){
    try{
    const url = `${API_BASE_URL}/post/feed`
    const token = localStorage.getItem('auth-token')
    const headers = {
        "Auth-Token" : token
    }
    const data = await axios.get(url,{headers})
    return data;
    }
    catch(err){
        return {error : "can't find"}
    }

}