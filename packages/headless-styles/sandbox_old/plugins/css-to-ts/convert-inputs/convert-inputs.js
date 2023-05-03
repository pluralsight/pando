import { readFileSync, readdirSync, statSync } from 'node:fs'
import { basename, join } from 'node:path'
import convertToJS from '../convert-rules/convertToJS'
import reverseMediaQueries from '../utils/mediaReverse'

export const convertStringToJson = (input, mediaReverse) => {
  let contents = convertToJS(input)
  if (mediaReverse) {
    contents = reverseMediaQueries(contents)
  }
  return { contents }
}

export const convertFileToJson = (inputFile, mediaReverse) => {
  const css = readFileSync(inputFile, 'utf8')

  let contents = convertToJS(css)
  if (mediaReverse) {
    contents = reverseMediaQueries(contents)
  }
  const filename = basename(inputFile, '.css')
  return { contents, filename }
}

export const convertDirToJson = (inputLocation, mediaReverse) => {
  const files = readdirSync(inputLocation)
  return files
    .filter((file) => {
      if (statSync(join(inputLocation, file)).isDirectory()) {
        console.warn(`Nested directories not supported, skipping ${file}`)
        return false
      }
      return true
    })
    .map((file) => convertFileToJson(join(inputLocation, file), mediaReverse))
}
