import axios from 'axios'
import { API_BASE_URL } from '../config';
export default async function getUserData(id){
    try{
    const url = `${API_BASE_URL}/user/${id}`
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