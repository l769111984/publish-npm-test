import http from '../utils/request'
export const getList = (url = '/mock/list') => http.get(url)
