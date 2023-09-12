import axios from 'axios'
import { API_BASE_URL } from '../config';
async function fetchRequest(){
    try{
    const url = `${API_BASE_URL}/request/`
    const token = localStorage.getItem('auth-token');
    const headers = {
        "Auth-Token" : token
    }
    const result = await axios.get(url,{headers})
    return result;
}
catch(err){
    console.log(err)
}
}

export default fetchRequest;