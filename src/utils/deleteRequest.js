import axios from 'axios'
export default async function deleteRequest(username,removeRequest){
    try{
        const url = `http://localhost:3000/request/delete/${username}`;
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