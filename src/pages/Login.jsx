import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom';


import { useRef, useState } from 'react'
import axios from 'axios'
import Error from '../components/Error'

export default function Login() {
    const [clickable, setClickable] = useState(true);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [passVisible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const sendLoginReq = async () => {
        const url = 'http://localhost:3000/auth/login'
        const postData = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        axios.post(url, postData)
            .then(data => {
                if (data.data.error) {
                    setErrorMessage(data.data.error);
                    setTimeout(() => { setErrorMessage('') }, 2000)
                    setClickable(p => !p);
                }
                else {
                    localStorage.setItem('auth-token', data.data['Auth-Token'])
                    localStorage.setItem('userId',data.data.userId);
                    // console.log(data.data);
                    const userInfo = {
                        username  : data.data.username,
                        userId : data.data.userId,
                        name : data.data.name,
                        avatar : data.data.avatar,
                        coverImage : data.data.coverImage,
                        public : data.data.public,
                        bio : data.data.bio,
                        email : data.data.email,
                        followersCount : data.data.followersCount,
                        followingsCount : data.data.followingsCount,

                    }
                    const savedInfo = JSON.stringify(userInfo)
                    localStorage.setItem('userInfo',savedInfo)
                     window.location.href = '/'
                }
            })
            .catch(err => console.log(err));
            
    }
     function handleSubmit(e) {
        setClickable(p => !p);
        e.preventDefault();
        sendLoginReq();
    }
    return (
        <section className="flex justify-center items-center h-screen w-screen p-10 bg-black text-white">

            {errorMessage && <Error className='absolute top-10 bg-red-500 outline outline-red-800 px-2 rounded-md animate__animated animate__headShake' msg={errorMessage} />}
            <div className='space-y-2'>
                <div>
                    <form className="space-y-2">
                        <BsTwitter className='w-8 h-8 icon-color' />
                        <h1 className='text-xl font-bold'>Login to Social</h1>
                        <div className='flex justify-start p-1 space-x-2 h-10 items-center border border-blue-100 rounded-md'>
                            <AiOutlineUser />
                            <input required className='bg-black outline-none border-none text-[12px] spellcheck-off' type='text' name="username" placeholder="username" ref={usernameRef} />
                        </div>

                        <div className='flex justify-start p-1 space-x-2 h-10 items-center border border-blue-100 rounded-md'>
                            <AiOutlineLock />
                            <input required className='bg-black outline-none border-none text-[12px]' type={passVisible ? "text" : "password"} name='password' placeholder="password" ref={passwordRef} />
                            {passVisible ? <AiOutlineEye onClick={() => { setVisible(!passVisible) }} /> : <AiOutlineEyeInvisible onClick={() => { setVisible(!passVisible) }} />}

                        </div>
                        <button className="hover:scale-95 bg-blue-500 hover:bg-blue-400 duration-100 w-full h-10 cursor-pointer rounded-md text-white font-semibold" onClick={handleSubmit} style={{ cursor: clickable ? "pointer" : "not-allowed" }} disabled={!clickable} >
                        Login

                        </button>

                    </form>
                </div>
                <div className='flex justify-center space-x-2'>
                    <Link to='/register' className="flex justify-center items-center bg-blue-500 grow hover:scale-95 hover:bg-blue-400 duration-100 h-10 cursor-pointer rounded-md text-white font-semibold">
                        <button>Sign up</button>
                    </Link>
                    <button className="bg-blue-500 hover:scale-95 hover:bg-blue-400 duration-100  grow h-10 cursor-pointer rounded-md text-white font-semibold" >Forgot</button>
                </div>
            </div>
        </section>
    )
}