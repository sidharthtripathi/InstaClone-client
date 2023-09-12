import {io} from 'socket.io-client'
import { API_BASE_URL } from '../config';
const url = `${API_BASE_URL}`
const socket = io.connect(url,{
    query : {
        token : localStorage.getItem('auth-token')
    }
});
socket.on('connect_error',(err)=>{
    console.log(`Error connecting to socket`)
})



// getting a pm
socket.on('personal-msg',(msg)=>{
    console.log(msg);
})
export default socket