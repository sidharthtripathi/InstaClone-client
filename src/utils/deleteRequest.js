import axios from 'axios'
import { API_BASE_URL } from '../config';
export default async function deleteRequest(username,removeRequest){
    try{
        const url = `${API_BASE_URL}/request/delete/${username}`;
        const token = localStorage.getItem('auth-token');
        const headers = {
            'Auth-Token' : token     // Example custom header
          };
        const result =  await axios.delete(url,{headers})
        removeRequest(username);
        return result;
        }
        catch(err){
            console.log(err);
            return err;
        }
}