import { promises } from 'node:fs'
import MagicString from 'magic-string'

// const toFunction = (functionOrValue) => {
//   if (typeof functionOrValue === 'function') return functionOrValue
//   return () => functionOrValue
// }

// const escape = (str) => str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&')

// const longest = (a, b) => b.length - a.length

// const mapToFunctions = (options) => {
//   const values = options.values
//     ? Object.assign({}, options.values)
//     : Object.assign({}, options)
//   delete values.delimiters
//   delete values.include
//   delete values.exclude

//   return Object.keys(values).reduce((fns, key) => {
//     const functions = Object.assign({}, fns)
//     functions[key] = toFunction(values[key])
//     return functions
//   }, {})
// }

// const generateFilter = (options) => {
//   let include = /.*/
//   let exclude = null
//   let hasValidInclude = false

//   if (options.include) {
//     if (Object.prototype.toString.call(options.include) !== '[object RegExp]') {
//       console.warn(
//         `Options.include must be a RegExp object, but gets an '${typeof options.include}' type.`
//       )
//     } else {
//       hasValidInclude = true
//       include = options.include
//     }
//   }

//   if (options.exclude) {
//     if (Object.prototype.toString.call(options.exclude) !== '[object RegExp]') {
//       console.warn(
//         `Options.exclude must be a RegExp object, but gets an '${typeof options.exclude}' type.`
//       )
//     } else if (!hasValidInclude) {
//       // Only if `options.include` not set, take `options.exclude`
//       exclude = options.exclude
//     }
//   }

//   return { include, exclude }
// }

async function replaceCode(code, replaceList) {
  const magicString = new MagicString(code)
  const replaceListKeys = Object.keys(replaceList)

  replaceListKeys.forEach((key) => {
    magicString.replace(key, replaceList[key])
  })

  return magicString.toString()
}

// export const replace = (options = {}) => {
//   const { include, exclude } = generateFilter(options)
//   const functionValues = mapToFunctions(options)
//   const empty = Object.keys(functionValues).length === 0
//   const keys = Object.keys(functionValues).sort(longest).map(escape)
//   const { delimiters } = options
//   const pattern = delimiters
//     ? new RegExp(
//         `${escape(delimiters[0])}(${keys.join('|')})${escape(delimiters[1])}`,
//         'g'
//       )
//     : new RegExp(`\\b(${keys.join('|')})\\b`, 'g')

//   return {
//     name: 'replace',
//     setup(build) {
//       build.onLoad({ filter: include }, async (args) => {
//         // if match exclude, skip
//         if (exclude && args.path.match(exclude)) {
//           return
//         }
//         const source = await promises.readFile(args.path, 'utf8')
//         const contents = empty
//           ? source
//           : replaceCode(source, args.path, pattern, functionValues)

//         console.log('contents', contents)

//         return { contents, loader: args.path.match(/tsx?$/) ? 'ts' : 'js' }
//       })
//     },
//   }
// }

export function replace(itemList = {}) {
  return {
    name: 'replace',
    setup(build) {
      // build.onResolve({ filter: /^featureFlags\.ts$/ }, args => ({
      //   path: args.path,
      //   namespace: 'replace-ns',
      // }))

      build.onLoad({ filter: /\.(js|jsx|ts|tsx)`$/ }, async (args) => {
        let file = await promises.readFile(args.path, 'utf8')
        const contents = await replaceCode(file, itemList)

        return {
          contents,
          loader: 'ts',
        }
      })
    },
  }
}
