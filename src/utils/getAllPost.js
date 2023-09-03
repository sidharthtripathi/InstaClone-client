import axios from 'axios'
export default async function getAllPosts(id){
    try{
    const url = `http://localhost:3000/post/all/${id}`
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