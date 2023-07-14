import axios from 'axios'
import type {
  AxiosInstance,
  AxiosResponse,
  // AxiosRequestConfig,
  AxiosError
} from 'axios'

const service: AxiosInstance = axios.create({
  timeout: 200000
})

// 请求拦截器
axios.interceptors.request.use(
  (config: any) => {
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response
    }
    return response
  },
  (error: AxiosError) => {
    const { response } = error
    if (response) {
      // ElMessage.error(showCodeMessage(response.status))
      return Promise.reject(response.data)
    }
    return Promise.reject(error)
  }
)

export default service
