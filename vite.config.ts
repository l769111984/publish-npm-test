import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import { vitePluginMock } from './plugins/vite-plugin-mock' 
import mockData from './mock'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
export default defineConfig({
    server: {
        port: 8088
    },
    resolve: {
      alias: [
        { find: /^~@\//, replacement: path.join(__dirname, 'src/') },
        { find: /^@\//, replacement: path.join(__dirname, './src', import.meta.url) }
      ]
    },
    plugins: [
        vue(),
        vitePluginMock({
          entry: '/mock',
          defaultStr: 'mock',
          mockData
        }),
        Components({
          dts: true
        }),
        AutoImport({ 
          dts: true,
           eslintrc: {
            enabled: true
          },
          include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/, /\.vue\?vue/, // .vue
            /\.md$/ // .md
          ],
          imports: [
            // presets
            'vue',
            {
              'vue-router': [
                'useLink',
                'useRoute',
                'useRouter',
                'onBeforeRouteLeave', 
                'onBeforeRouteUpdate',
                'createRouter',
                'createWebHistory'
              ],
              'axios': [
                // default imports
                ['default', 'axios'] // import { default as axios } from 'axios',
              ]
            }
          ]
         })
    ],
    build: {
      outDir: 'viteDist',
      sourcemap: true
    }
})