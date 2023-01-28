import axios from "axios"
import type { AxiosInstance } from 'axios'
const http:AxiosInstance = axios.create({
    baseURL: 'http://localhost:8088/',
    timeout: 30000,
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
})
http.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})
http.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})
export default http