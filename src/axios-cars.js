import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://homework66-js.firebaseio.com'
});

export default instance;