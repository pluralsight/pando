import { relative } from 'node:path'
import { promises } from 'node:fs'
import { loadOptions, transformAsync } from '@babel/core'

export function babel(options = {}) {
  return {
    name: 'babel',
    setup(build, { transform } = {}) {
      const { filter = /.*/, namespace = '' } = options

      const transformContents = ({ args, contents }) => {
        const babelOptions = loadOptions({
          ...options,
          filename: args.path,
          caller: {
            name: 'esbuild-plugin-babel',
            supportsStaticESM: true,
          },
        })

        if (!babelOptions) {
          return { contents }
        }

        if (babelOptions.sourceMaps) {
          const filename = relative(process.cwd(), args.path)
          babelOptions.sourceFileName = filename
        }

        return transformAsync(contents, babelOptions)
          .then((result) => {
            return { contents: result.code }
          })
          .catch((error) => {
            throw new Error(error)
          })
      }

      if (transform) {
        return transformContents(transform)
      }

      build.onLoad({ filter, namespace }, async (args) => {
        const contents = await promises.readFile(args.path, 'utf8')
        console.log('BABEL WORKING...')
        return transformContents({ args, contents })
      })
    },
  }
}
