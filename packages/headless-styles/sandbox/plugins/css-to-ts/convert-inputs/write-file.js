import prettier from 'prettier'
import path from 'path'
import { appendFileSync, existsSync, mkdirSync, writeFileSync } from 'fs'
import indentObject from '../utils/indentLine'

const generatedDisclaimer = `// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!
\n
`

const writeToFile = (outPath, convertedCss, outputType) => {
  let fileOutPath = outPath

  // Case: "SplitFile": Export input object key, values as exports to separate file
  if (outputType === 'splitFile') {
    // Create dir for generated split files
    if (path.extname(fileOutPath)) {
      fileOutPath = fileOutPath.slice(0, -3)
    } else {
      fileOutPath = path.join(fileOutPath, convertedCss.filename)
    }

    if (!existsSync(fileOutPath)) {
      mkdirSync(fileOutPath)
    }

    Object.entries(convertedCss.contents).forEach((key) => {
      const body = indentObject(key[1], 2)

      writeFileSync(path.join(fileOutPath, `${key[0]}.ts`), 'export default ')
      appendFileSync(path.join(fileOutPath, `${key[0]}.ts`), body)
    })
  } else {
    // Create file for generated simple file
    if (!path.extname(fileOutPath)) {
      fileOutPath = path.join(fileOutPath, `${convertedCss.filename}.ts`)
    }

    if (outputType === 'shakeFile') {
      // Case: "ShakeFile": Export input object key, values as exports to file
      writeFileSync(fileOutPath, '')
      Object.entries(convertedCss.contents).forEach((key) => {
        appendFileSync(
          fileOutPath,
          `export const ${key[0]} = ${JSON.stringify(key[1])};\n`
        )
      })
    } else {
      // Case: "File": Export input object to file
      const { imports, output } = buildComposedOutput(convertedCss.contents)

      const prettierOptions = prettier.resolveConfig.sync(fileOutPath)

      const fileContents =
        generatedDisclaimer + imports + '\nexport default' + output

      writeFileSync(fileOutPath, prettier.format(fileContents, prettierOptions))
    }
  }
}

export default writeToFile

function buildComposedOutput(body) {
  const importMap = new Map()
  let output = '{\n'

  for (const [className, value] of Object.entries(body)) {
    const classEntry = handleNestedProperties(value, importMap)

    output += buildTopLevelSelectorOutput(className, classEntry)
  }

  output += '}'

  let imports = [...importMap.entries()].map(
    ([file, name]) => `import ${name} from "${file}"`
  )

  return {
    imports: imports.join('\n') + '\n',
    output,
  }
}

function handleNestedProperties(value, importMap) {
  const classEntry = {
    directEntries: {},
    externalEntry: null,
  }

  for (const [innerSelector, innerValue] of Object.entries(value)) {
    if (typeof innerValue === 'string') {
      const match =
        innerSelector === 'composes' && innerValue.match(/(.+) from '(.+)'/)

      if (match) {
        classEntry.hasExternalComposition = true
        const [, valueName, file] = match
        const moduleReg = /(\.?\.\/)+(.+)\/(.+)\.module\.css/
        let generatedImportFileName = file.replace(
          moduleReg,
          '../$1$2/generated/$3.module'
        )

        let importName
        if (importMap.has(generatedImportFileName)) {
          importName = importMap.get(generatedImportFileName)
        } else {
          importName = file.match(moduleReg)[3]
          importMap.set(generatedImportFileName, importName)
        }
        classEntry.externalEntry = `${importName}.${valueName}` // { importName, valueName }
        continue
      }
    }

    classEntry.directEntries[innerSelector] = innerValue
  }
  return classEntry
}

function buildTopLevelSelectorOutput(className, classEntry) {
  let output = `${JSON.stringify(className)}:`

  if (classEntry.externalEntry) {
    output += `{\n...${classEntry.externalEntry},\n`
  } else {
    output += '{\n'
  }

  for (const [property, value] of Object.entries(classEntry.directEntries)) {
    const stringifiedPropName = JSON.stringify(property)
    if (classEntry.externalEntry && typeof value === 'object') {
      // TODO: Can this condition be statically resolved?
      output += `${stringifiedPropName}:{\n`
      output += `...(${stringifiedPropName} in ${classEntry.externalEntry} 
        && typeof ${classEntry.externalEntry}[${stringifiedPropName}] === 'object' 
        ? ${classEntry.externalEntry}[${stringifiedPropName}]: undefined),\n`

      for (const [innerKey, innerValue] of Object.entries(value)) {
        output += `${JSON.stringify(innerKey)}: ${JSON.stringify(
          innerValue
        )},\n`
      }
      output += '},\n'
    } else
      output += `${stringifiedPropName}: ${JSON.stringify(value, null, 2)},\n`
  }

  output += '},\n'
  // if (classEntry.externalEntry) {
  //   if (Object.keys(classEntry.directEntries).length > 0) {
  //     output += '}),\n'
  //   }
  // } else {
  //   output += '},\n'
  // }
  return output
}
