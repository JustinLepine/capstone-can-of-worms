import axios from 'axios';

const tools = {

    getInv: () => axios.get('/inventory'),

    addInv: () => axios.post('/inventory')

}