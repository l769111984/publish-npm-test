
import { defineConfig } from 'tsup'
export default defineConfig({
    name: 'tsup',
    target: 'node14',
    dts: {
      resolve: true,
      entry: './index.ts',
    }
  })