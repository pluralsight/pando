export const RELEASE_CHANNEL = process.env.RELEASE_CHANNEL

export const EXPERIMENTAL =
  typeof RELEASE_CHANNEL === 'string'
    ? RELEASE_CHANNEL === 'experimental'
    : true

export const channel = EXPERIMENTAL ? 'experimental' : 'stable'

export const formats = {
  es: {
    outputDir: 'browser',
    module: 'es',
    selector: 'es',
  },
  commonjs: {
    outputDir: 'node',
    module: 'cjs',
    selector: 'commonjs',
  },
}

export function getOutputDir(formatType) {
  const folder = formats[formatType].outputDir
  return `npm/${folder}`
}
