import fs from 'fs'
import path from 'path'
const geMockData = (opt) => {
  // 获取文件或者目录对应的绝对路径
  const absPath = path.resolve(process.cwd()) + opt.entry
  // 判断是否是一个目录
  const isDirectory = fs.statSync(absPath).isDirectory()
  if (isDirectory) {
    const mockData = require(absPath)
    return mockData
  }
  throw new Error('必须导入一个目录')
}
const setHeader = (res) => {
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
}
export const vitePluginMock = (opt = {}) => {
  opt.entry = opt.entry || '/mock' // mock文件的默认目录 默认为根目录下的mock
  opt.defaultStr = opt.defaultStr || 'mock' // 根据哪些字符匹配Url 默认为mock
  const mockData = geMockData(opt)
  return {
    name: 'vite-plugin-mock',
    configureServer (server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.indexOf(opt.defaultStr) > -1) {
          const data = mockData.find((v) => req.url.indexOf(v.url) > -1 && v.method === req.method.toLowerCase())
          setHeader(res)
          res.end(JSON.stringify(data.response))
        } else {
          next()
        }
      })
    }
  }
}
