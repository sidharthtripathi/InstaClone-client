import axios from "axios";
export default async function cancelRequest(id){
    try{
    const url = `http://localhost:3000/request/cancel/${id}`;
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