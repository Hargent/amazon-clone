import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-2bf0a/us-central1/api'//the Api (cloud function) url
});


export default instance;