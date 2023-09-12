import axios from 'axios'
import { API_BASE_URL } from '../config';
export default async function sendLike(postId) {
    try {
        const url = `${API_BASE_URL}/post/like/${postId}`
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