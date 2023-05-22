/*eslint no-negated-condition: "off"*/

import fs from 'fs'
import path from 'path'
import writeToFile from './convert-inputs/write-file.mjs'
import {
  convertStringToJson,
  convertFileToJson,
  convertDirToJson,
} from './convert-inputs/convert-inputs.mjs'

//Input can be a Dir, File, String
export const convert = (input, config = {}) => {
  const outputType = config.outputType
  const outputPath = config.outputPath
  let convertedCss

  try {
    if (fs.statSync(input).isDirectory()) {
      convertedCss = convertDirToJson(input, config)
    } else {
      convertedCss = convertFileToJson(input, config)
    }
  } catch (err) {
    convertedCss = convertStringToJson(input, config)
    convertedCss.filename = path.basename(config.id, path.extname(config.id))
  }

  if (!outputType) {
    if (Array.isArray(convertedCss)) {
      return convertedCss.map((obj) => obj.contents)
    } else {
      return convertedCss.contents
    }
  } else {
    const writeRecur = (converted) => {
      if (Array.isArray(converted)) {
        converted.forEach((obj) => {
          writeRecur(obj)
        })
      } else {
        return writeToFile(outputPath, converted, outputType)
      }
    }

    writeRecur(convertedCss)
  }
}
