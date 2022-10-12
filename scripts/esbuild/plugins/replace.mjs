import { promises } from 'node:fs'
import MagicString from 'magic-string'
import { error } from '../../theme.mjs'

function isAllowedTS(name) {
  if (name.match('generated')) {
    return false
  }

  return name.match(/.tsx?$/) || name.match(/.ts?$/)
}

function isTSFile(fileName) {
  if (isAllowedTS(fileName)) {
    return true
  } else if (fileName.match(/.jsx?$/) || fileName.match(/.js?$/)) {
    return false
  } else {
    return false
  }
}

// public

export function replace(itemList = {}) {
  return {
    name: 'replace',
    setup(build) {
      function transformContents({ args, contents }) {
        const file = args.path
        const magicString = new MagicString(contents)
        const replaceListKeys = Object.keys(itemList)
        const usesTS = isTSFile(file)

        replaceListKeys.forEach((key) => {
          magicString.replaceAll(key, itemList[key])
        })

        return new Promise((resolve, reject) => {
          const result = magicString.toString()

          replaceListKeys.forEach((testKey) => {
            if (result.includes(testKey)) {
              reject(error(`${file} still includes key: ${testKey}: ${result}`))
            }
          })

          resolve({
            contents: result,
            loader: usesTS ? 'ts' : 'js',
          })
        })
      }

      build.onLoad({ filter: /.(js|jsx|ts|tsx)/ }, async (args) => {
        let contents = await promises.readFile(args.path, 'utf8')
        return transformContents({ args, contents })
      })
    },
  }
}
