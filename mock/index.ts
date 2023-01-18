// const mockJs = require('mockjs')
import mockJs from 'mockjs'
const data = mockJs.mock({
    'msg|5': [{
        'name|1-5': '@cname()',
        'number|1-100': 1,
        id: '@increment()',
        'time|5': '@time()'
    }]
})
// module.exports = [{
//     url: '/mock/list',
//     method: 'get',
//     timeout: 500,
//     statusCode: 200,
//     response: {
//       code: 200,
//       mesage: '数据请求成功',
//       data
//     }
// }]
export default [{
        url: '/mock/list',
        method: 'get',
        timeout: 500,
        statusCode: 200,
        response: {
          code: 200,
          mesage: '数据请求成功',
          data
        }
    }]