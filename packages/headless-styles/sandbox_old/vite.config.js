import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      'process.env': { ...env },
      __EXPERIMENTAL__: true,
    },

    plugins: [react()],

    resolve: {
      alias: {
        '@pluralsight/headless-styles': resolve(__dirname, '../src/index.ts'),
        '@pluralsight/headless-styles/types': resolve(
          __dirname,
          '../src/types.ts'
        ),
        '@pluralsight/react-utils': resolve(
          __dirname,
          '../../react-utils/src/index.ts'
        ),
        '@pluralsight/shared': resolve(__dirname, '../../shared/src/index.ts'),
      },
    },

    server: {
      port: 3000,
    },
  }
})
