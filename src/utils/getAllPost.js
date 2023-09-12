import axios from 'axios'
import { API_BASE_URL } from '../config';
export default async function getAllPosts(id){
    try{
    const url = `${API_BASE_URL}/post/all/${id}`
    const token = localStorage.getItem('auth-token');
    const headers = {
        'Auth-Token' : token     // Example custom header
      };
    const data = await axios.get(url,{headers})
    return data.data;
    }
    catch(err){
        return {error : "can't fetch"}
    }
}