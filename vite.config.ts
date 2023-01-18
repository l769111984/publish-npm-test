import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import { vitePluginMock } from './plugins/vite-plugin-mock' 
import mockData from './mock'
console.log(111,new URL('./src', import.meta.url))
export default defineConfig({
    server: {
        port: 8088,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
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