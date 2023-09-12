import axios from 'axios'
import { API_BASE_URL } from '../config';
export default async function acceptRequest(username,removeRequest) {
    try {
        const url = `${API_BASE_URL}/request/accept/${username}`
        const token = localStorage.getItem('auth-token');
        const headers = {
            'Auth-Token': token
        }
        const result = await axios.put(url, {}, { headers });
        removeRequest(username);

        return result;
    }
    catch (err) {
        return err
    }
}