import { useRef,useState } from "react"
import sendPost from "../utils/sendPost"
function CreatePost({ avatar }) {
    const [data,setData] = useState('');
    const [clickable,setClickable] = useState(false);
    const inputRef = useRef(null);
    async function handleClick(){
        if(!inputRef.current.value) return
        const result = await sendPost(inputRef.current.value);
        inputRef.current.value = ""
    }

    return (

        <div className='border p-2 space-y-2 rounded-md'>
            <div className='flex justify-start items-start space-x-2'>
                <img className="w-8 rounded-full object-cover " src={avatar ? avatar : "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"} alt="userDP" />
                <div className='grow'>
                    <div className="p-x-1">
                    <input ref = {inputRef} placeholder = {`What's Happpening...`} type="text" className="outline-none text-xs w-full" />
                    </div>
                    <button className='text-white mt-1 bg-blue-500 hover:bg-blue-400 px-2 py-1 rounded-md text-xs duration-100' onClick={handleClick}>Post</button>
                </div>
            </div>

        </div>

    )
}

export default CreatePost