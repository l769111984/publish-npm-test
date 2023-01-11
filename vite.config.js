import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'index.js'),
            name: 'MyMockPlugin',
            // the proper extensions will be added
            fileName: 'my-mock-plugin',
            formats: ['es','cjs']
        },
        rollupOptions: {
            external:['fs', 'path']
        }
    },
    plugins: [
    ],
    

})