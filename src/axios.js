import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: `https://fe-task.getsandbox.com/`,
})