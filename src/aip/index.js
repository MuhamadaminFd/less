import axios from 'axios';



const instance = axios.create({
    baseURL: 'http://localhost:5000/',
})

const getUsers = () => instance.get('/users');


const aip = {
    getUsers,
}

export default aip