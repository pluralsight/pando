import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import transformCSStoTS from './plugins/transformCSStoTS'

const cssRegex = /\/components\/.*\.css$/

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), transformCSStoTS(cssRegex)],

    resolve: {
      alias: {
        '@pluralsight/shared': resolve(__dirname, '../../shared/src/index.ts'),
      },
    },

    define: {
      'process.env': { ...env },
    },
  }
})
