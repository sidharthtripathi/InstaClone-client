import axios from "axios";
import { API_BASE_URL } from "../config";
export default async function sendPost(data){
    try{ 
        const postData = {
            postData : data
        }
        const headers = {
            'Auth-Token' : localStorage.getItem('auth-token')
        }
        const url = `${API_BASE_URL}/post/create`;
        const result = await axios.post(url,postData,{headers})
        return result;
    }
    catch(err){
        console.log(err)
        return err;
    }
}