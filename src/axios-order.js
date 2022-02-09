import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-burger-builder-90954-default-rtdb.firebaseio.com/'
});

export default instance;
