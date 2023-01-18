import http from '../utils/request'
export const getList = (url: string = '/mock/list') => http.get(url)
