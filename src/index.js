import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// default anyways, just showing that we can set this as well in the headers
axios.defaults.headers.post['Content-Type'] = 'application/json';

// config will share in all components, which use axios
axios.interceptors.request.use(request => {
    console.log(request);
    return request; // must return the request, otherwise we block it
}, error => {
    console.log(error);
    return Promise.reject(error); // need to return, to pass the control flow
});

axios.interceptors.response.use(response => {
    console.log('Response in the interceptor', response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error); // need to return, to pass the control flow
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
