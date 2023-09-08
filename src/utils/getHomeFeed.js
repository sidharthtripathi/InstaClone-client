import axios from 'axios'
export default async function getHomeFeed(){
    try{
    const url = "http://localhost:3000/post/feed"
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