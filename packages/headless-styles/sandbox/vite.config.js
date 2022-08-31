import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import transformCSStoTS from './plugins/transformCSStoTS'

const cssRegex = /\/components\/.*\.css$/

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), transformCSStoTS(cssRegex)],

    define: {
      'process.env': { ...env },
    },
  }
})
