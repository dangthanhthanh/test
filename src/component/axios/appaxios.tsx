import axios from "axios";

const appaxios = axios.create({
    baseURL: 'https://635a805b6f97ae73a62e923f.mockapi.io/comments',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
  })

  // Add a request interceptor
appaxios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
appaxios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
  export default appaxios;