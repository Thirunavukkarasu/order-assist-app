import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// Add a request interceptor
axios.interceptors.request.use( (config) => {
    const accessToken = `Bearer ${localStorage.getItem('access_token')}`;
    config!.headers!.Authorization =  accessToken;

    return config;
})