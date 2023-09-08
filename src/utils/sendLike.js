import axios from 'axios'
export default async function sendLike(postId) {
    try {
        const url = `http://localhost:3000/post/like/${postId}`
        const token = localStorage.getItem('auth-token');
        const headers = {
            'Auth-Token': token
        };
        await axios.put(url, null, { headers })
    }
    catch (err) {
        console.log(err)
    }
}