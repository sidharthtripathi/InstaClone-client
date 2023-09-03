import axios from "axios";
export default async function sendPost(data){
    try{ 
        const postData = {
            postData : data
        }
        const headers = {
            'Auth-Token' : localStorage.getItem('auth-token')
        }
        const url = 'http://localhost:3000/post/create';
        const result = await axios.post(url,postData,{headers})
        return result;
    }
    catch(err){
        console.log(err)
        return err;
    }
}