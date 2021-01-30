import axios from '../../../server/node_modules/axios';

export default ()=>{
return axios.create({
    baseURL: `http://localhost:8081/`
})
}

