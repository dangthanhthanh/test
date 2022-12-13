import axios from "axios";

const appaxios = axios.create({
    baseURL: 'https://635a805b6f97ae73a62e923f.mockapi.io/comments',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
  })

  export default appaxios;