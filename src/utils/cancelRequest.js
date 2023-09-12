import axios from "axios";
import { API_BASE_URL } from "../config";
export default async function cancelRequest(id){
    try{
    const url = `${API_BASE_URL}/request/cancel/${id}`;
    const token = localStorage.getItem('auth-token');
    const headers = {
        'Auth-Token' : token     // Example custom header
      };
    const result =  await axios.delete(url,{headers})
    return result;
    }
    catch(err){
        console.log(err);
        return err;
    }
}