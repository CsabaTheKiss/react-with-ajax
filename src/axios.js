import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// overrinding some settings for axios in given components
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN INSTANCE';

export default instance;
