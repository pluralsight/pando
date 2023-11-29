import { defineConfig, type Options } from 'tsup'
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions'

function modernConfig(options: Options) {
  return {
    entry: options.entry,
    format: ['cjs', 'esm'],
    target: ['chrome91', 'firefox90', 'edge91', 'safari15', 'ios15', 'opera77'],
    outDir: 'build/modern',
    sourcemap: true,
    clean: true,
    esbuildPlugins: [esbuildPluginFilePathExtensions({ esmExtension: 'js' })],
  } as unknown as Options
}

function legacyConfig(options: Options) {
  return {
    entry: options.entry,
    format: ['cjs', 'esm'],
    target: ['es2020', 'node16'],
    outDir: 'build/legacy',
    sourcemap: true,
    clean: true,
    esbuildPlugins: [esbuildPluginFilePathExtensions({ esmExtension: 'js' })],
  } as unknown as Options
}

export default defineConfig([
  modernConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'] }),
  legacyConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'] }),
])
