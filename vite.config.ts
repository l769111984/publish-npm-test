import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import { vitePluginMock } from './plugins/vite-plugin-mock' 
import mockData from './mock'
import path from 'path'
export default defineConfig({
    server: {
        port: 8088,
    },
    resolve: {
      alias: [
        { find: /^~@\//, replacement: path.join(__dirname, 'src/') },
        { find: /^@\//, replacement: path.join(__dirname, './src', import.meta.url)}
      ],
    },
    plugins:[
        vue(),
        vitePluginMock({
          entry: '/mock',
          defaultStr: 'mock',
          mockData
        })
    ],
    build: {
      outDir: 'viteDist',
      sourcemap: true
    }
})