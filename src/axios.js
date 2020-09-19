import axios from 'axios';

const instance = axios.create ({
    baseURL: 'http://localhost:5001/clone-792ac/us-central1/api',
});

export default axios;