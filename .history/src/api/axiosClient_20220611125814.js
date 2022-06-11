import axios from 'axios';

const axiosClient = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
    },
});

//Interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default axiosClient;
