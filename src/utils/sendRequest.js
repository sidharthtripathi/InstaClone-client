import axios from "axios";
export default async function sendRequest(id){
    try{
    const url = `http://localhost:3000/request/${id}`;
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