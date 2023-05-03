import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function createWorkspaceAlias(packageName: string, file: string) {
  const packageAlias = `@pluralsight/${packageName}`
  return {
    [packageAlias]: resolve(__dirname, `../${packageName}/src/${file}`),
  }
}

function createReactDevAlias() {
  const packageAlias = createWorkspaceAlias('react', 'index.ts')
  const workspace = Object.keys(packageAlias)[0]
  const devPath = `${workspace}/dev`

  return {
    [devPath]: packageAlias[workspace],
  }
}

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      ...createWorkspaceAlias('headless-styles', 'index.ts'),
      ...createWorkspaceAlias('headless-styles/types', 'types.ts'),
      ...createReactDevAlias(),
      ...createWorkspaceAlias('react-utils', 'index.ts'),
      ...createWorkspaceAlias('shared', 'index.ts'),
    },
  },

  server: {
    port: 3000,
  },
})
