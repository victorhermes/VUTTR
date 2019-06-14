import axios from 'axios';

const api = axios.create({
  baseURL: 'https://very-useful-tools-to-remember.herokuapp.com/',
});

export default api;
