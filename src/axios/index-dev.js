import axios from 'axios'
import { getToken } from '@/utils/auth'


const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // console.log(config)
  const isToken = (config.headers || {}).isToken === false
  // 是否需要防止数据重复提交
  // const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
  if (getToken() && !isToken) {
    // console.log(`output->`,name)
    // console.log(`output->token`)
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
})

export default instance
