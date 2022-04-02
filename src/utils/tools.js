import axios from 'axios';

const tools = {

    getInv: () => axios.get('http://localhost:8080/inventory'),

}

export default tools;