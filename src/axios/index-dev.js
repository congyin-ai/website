import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000
})

instance.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = 'Bearer ' + window.sessionStorage.getItem('token')
  return config
})

export default instance
