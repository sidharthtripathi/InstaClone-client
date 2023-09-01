
import { AiOutlineUser, AiOutlineLock, AiOutlineMail,AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BsTwitter } from 'react-icons/bs'
import axios from 'axios';
import { useRef, useState } from 'react';
import Error from '../components/Error';
import Success from '../components/Success'
import 'animate.css'

function Register() {
    const [error,setError] = useState(false)
    const [errorData,setErrorData] = useState('');
    const [passError,setPassError] = useState(false);
    const[success , setSuccess] = useState(false);
    const[passVisible,setVisible] = useState(false);
    const [successMessasge,setSuccessMessage] = useState('');
    const nameRef = useRef(null)
    const passRef = useRef(null)
    const confirmPassRef = useRef(null)
    const usernameRef = useRef(null)
    const emailRef = useRef(null)

    async function sendRegisterReq(){
        const postData = {
            name : nameRef.current.value,
            username : usernameRef.current.value,
            password : passRef.current.value,
            email : emailRef.current.value,
        }
        if(postData.password !== confirmPassRef.current.value){
            setError(true);
            setPassError(true);
            setErrorData("Password doesn't matches")
            setTimeout(()=>{setError(false)},2000)
            return;
        }
        else if(postData.password.length<8){
            setError(true);
            setPassError(true);
            setErrorData("Password length is smaller")
            setTimeout(()=>{setError(false)},2000)
            return;
        }
        const url = 'http://localhost:3000/auth/register'
        axios.post(url,postData)
        .then(data=>{
            if(data.data.error){
                setError(true)
                setErrorData(data.data.error)
                setTimeout(()=>{setError(false)},2000)
            }
            else{
                setSuccess(true)
                setSuccessMessage("You are registered");
                setTimeout(()=>{setSuccess(false)},2000)
            }

        })
        .catch(err=>console.log(err));
    
    }
    async function handleSubmit(e){
        e.preventDefault();
        await sendRegisterReq();
    }
    return (
        <section className="flex relative justify-center items-center h-screen w-screen p-10 bg-black text-white">
            {error && <Error className= 'absolute top-10 bg-red-500 outline outline-red-800 px-2 rounded-md animate__animated animate__headShake' msg = {errorData}/>}
            {success && <Success className= 'absolute top-10 bg-green-500 outline outline-green-800 px-2 rounded-md ' msg = {successMessasge}/>}
            <form action= '/auth/register' method = 'post' className="space-y-2">
                <BsTwitter className='w-8 h-8 icon-color' />
                <h1 className='text-xl font-bold'>Register to Social</h1>
                <div className='flex justify-start p-1 space-x-2 h-10 items-center border border-blue-100 rounded-md'>
                    <AiOutlineUser />
                    <input required className='bg-black outline-none border-none text-[12px] ' spellCheck = {false} type='text' name="name" placeholder="full name" ref = {nameRef}/>
                </div>
                <div className='flex justify-start p-1 space-x-2 h-10 items-center border border-blue-100 rounded-md'>
                    <AiOutlineUser />
                    <input required className='bg-black outline-none border-none text-[12px] ' spellCheck = {false} type='text' name="username" placeholder="username" ref = {usernameRef} />
                </div>
                <div className='flex justify-start p-1 space-x-2 h-10 items-center border border-blue-100 rounded-md'>
                    <AiOutlineMail />
                    <input required className='bg-black outline-none border-none text-[12px] spellcheck-off' type='email' name="email" placeholder="email" ref = {emailRef} spellCheck = {false}/>
                </div>
               
                <div className='flex justify-start p-1 space-x-2 h-10 items-center border border-blue-100 rounded-md'>
                    <AiOutlineLock color = {passError ? 'red' : 'white'} />
                    <input required className='bg-black outline-none border-none text-[12px]' type = {passVisible ? 'text': "password"} name='password' placeholder="password" ref = {passRef}/>
                    {passVisible ? <AiOutlineEye onClick={()=>{setVisible(!passVisible)}}/> : <AiOutlineEyeInvisible onClick={()=>{setVisible(!passVisible)}}/>}
                </div>
                <div className='flex justify-start p-1 space-x-2 h-10 items-center border border-blue-100 rounded-md'>
                    <AiOutlineLock color = {passError ? 'red' : 'white'} />
                    <input required className='bg-black outline-none border-none text-[12px]' type = {passVisible ? 'text': "password"} name='confirmPassword' placeholder="confirm password"  ref = {confirmPassRef}/>
                    {passVisible ? <AiOutlineEye onClick={()=>{setVisible(!passVisible)}}/> : <AiOutlineEyeInvisible onClick={()=>{setVisible(!passVisible)}}/>}
                </div>
                <div className='flex items-center justify-center space-x-2'>
                    <button className="bg-blue-500 hover:scale-95 hover:bg-blue-400 duration-100  grow h-10 cursor-pointer rounded-md text-white font-semibold" onClick={handleSubmit}>Sign Up</button>
                    <Link to='/login' className="flex justify-center items-center bg-blue-500 grow hover:scale-95 hover:bg-blue-400 duration-100 h-10 cursor-pointer rounded-md text-white font-semibold">
                        <button>Login</button>
                    </Link>
                </div>
                
            </form>
        </section>
    )
}

export default Register