import { convert } from './css-to-ts/index.mjs'
import { readSync } from 'node:fs'
import { basename } from 'node:path'
import sass from 'sass'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

async function cssToTs() {
  const filePaths = getFilePaths()

  await Promise.all(
    filePaths.map(async (filePath) => {
      const css = getCss(filePath)

      await postcss([autoprefixer])
        .process(css, { from: filePath })
        .then((postcssResult) => compileFileToTS(filePath, postcssResult.css))
    })
  )
}

function getFilePaths() {
  if (process.argv.length < 3) {
    console.warn('CSS-To-JS: No files specified.')
    return []
  }

  const [, , ...filePaths] = process.argv

  return filePaths.filter((filePath) => fileShouldBeProcessed(filePath))
}

function fileShouldBeProcessed(filePath) {
  const file = basename(filePath)

  if (file.endsWith('.scss')) {
    return !file.startsWith('_')
  } else if (file.endsWith('.css')) {
    return true
  }
}

function getCss(filePath) {
  return isSassFile(filePath) ? sass.compile(filePath).css : readSync(filePath)
}

function isSassFile(filePath) {
  return filePath.endsWith('.scss') || filePath.endsWith('.sass')
}

function compileFileToTS(filePath, content) {
  convert(content, {
    id: filePath,
    outputType: 'file',
    outputPath: getOutputPath(filePath),
  })
}

function getOutputPath(filePath) {
  const splitPath = filePath.split('/')

  splitPath.pop()
  splitPath.push('generated')

  return splitPath.join('/')
}

cssToTs()
