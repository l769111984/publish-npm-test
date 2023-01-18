
import { defineConfig } from 'tsup'
export default defineConfig({
    name: 'tsup',
    target: 'node14',
    entry: ['index.ts'],
    dts: {
      resolve: true,
      entry: './index.ts',
      banner: 'hello world'
    },
    format: ['esm', 'cjs', 'iife'],
    watch: true,
    clean: true
  })