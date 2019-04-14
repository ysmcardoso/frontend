import axios from 'axios';

const api = axios.create({
    baseURL : 'https://omnistack-backend-ysm.herokuapp.com',
});

export default api;