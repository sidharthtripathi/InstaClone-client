import axios from 'axios'
export default async function acceptRequest(username,removeRequest) {
    try {
        const url = `http://localhost:3000/request/accept/${username}`
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