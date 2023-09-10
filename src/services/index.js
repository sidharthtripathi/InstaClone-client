import {io} from 'socket.io-client'
const url = "http://localhost:3000"
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