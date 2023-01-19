import type { Plugin } from 'vite'

interface Config {
  entry: string
  defaultStr: string
  mockData: any[]
}
const setHeader = (res: any) => {
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
}
export const vitePluginMock = (opt:Config = { entry: '/mock', defaultStr: 'mock', mockData: [] }): Plugin => {
  opt.entry = opt.entry || '/mock' // mock文件的默认目录 默认为根目录下的mock
  opt.defaultStr = opt.defaultStr || 'mock' // 根据哪些字符匹配Url 默认为mock
  if (!opt.mockData || opt.mockData.length === 0) {
    throw new Error('必须传入模拟数据')
  }
  const mockData = opt.mockData
  return {
    name: 'vite-plugin-mock',
    configureServer(server) {
      server.middlewares.use(async(req, res, next) => {
        if (req.url!.indexOf(opt.defaultStr) > -1) {
          const data = mockData.find((v: { url: any }) => req.url!.indexOf(v.url) > -1)
          setHeader(res)
          res.end(JSON.stringify(data.response))
        } else {
          next()
        }
      })
    }
  }
}
