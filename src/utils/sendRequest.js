import axios from "axios";
import { API_BASE_URL } from "../config";
export default async function sendRequest(id){
    try{
    const url = `${API_BASE_URL}/request/${id}`;
    const token = localStorage.getItem('auth-token');
    const headers = {
        'Auth-Token' : token     
      };
    const result =  await axios.post(url,{},{headers})
    return result;
    }
    catch(err){
        console.log(err);
        return err;
    }
}