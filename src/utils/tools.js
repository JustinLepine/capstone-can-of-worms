import axios from 'axios';
import { useHistory } from "react-router-dom";

const history = useHistory()

const tools = {

    getInv: () => axios.get('/inventory'),

    addInv: () => axios
        .post('/inventory', {
            title: e.target.inputTitle.value,
            depth: e.target.inputDepth.value,
            target: e.target.inputTarget.value
    })
    .then(res => {
        console.log(res.data.id)
        history.push(`/`)
    })
}