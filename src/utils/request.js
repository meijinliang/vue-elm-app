import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

console.log(process.env, process.env.VUE_APP_API)
const request = axios.create({
  // baseURL: process.env.VUE_APP_API,
  timeout: '10000'
})

request.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
})

request.interceptors.response.use(res => {
  return res.data
}, error => {
  return Promise.reject(error)
})

export default request
