import axios from 'axios'
async function fetchRequest(){
    try{
    const url = 'http://localhost:3000/request/'
    const token = localStorage.getItem('auth-token');
    const headers = {
        "Auth-Token" : token
    }
    const result = await axios.get(url,{headers})
    return result;
}
catch(err){
    console.log(err)
}
}

export default fetchRequest;