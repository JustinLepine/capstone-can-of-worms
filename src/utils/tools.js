import axios from 'axios';
import { API_URL } from '../config/index.js'

const tools = {

    getInv: () => axios.get(`${API_URL}/inventory`),
    delInv: () => axios.delete(`${API_URL}/inventory`),

}

export default tools;