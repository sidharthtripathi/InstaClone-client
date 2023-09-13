import axios from "axios";
import { API_BASE_URL } from "../config";
export default async function unfollow(userId) {
    try {
        const url = `${API_BASE_URL}/user/unfollow/${userId}`
        const token = localStorage.getItem('auth-token');
        const headers = {
            'Auth-Token': token
        }
        const response = await axios.put(url, {}, { headers });
        return response;
    }
    catch (err) {
        console.log(err);
        return err;
    }

}