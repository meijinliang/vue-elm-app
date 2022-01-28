import axios from 'axios'
import { config } from 'vue/types/umd'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create({
  baseURL: 'elm.cangdu.org',
  timeout: '10000'
})

request.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error);
})

request.interceptors.response.use(res => {
  return res.data
}, error => {
  return Promise.reject(error)
})

export default request