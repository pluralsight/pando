const { ensureDirSync, writeFileSync } = require('fs-extra')

// const _darkAppearance = {
//   appearance: 'luminosity',
//   value: 'dark',
// }

const _contents = {
  info: {
    author: 'xcode',
    version: 1,
  },
}

const _idiom = 'universal'

function generateColorsetsDo(dictionary, platform) {
  const assetPath = platform.buildPath

  ensureDirSync(assetPath)
  writeFileSync(
    `${assetPath}/Contents.json`,
    JSON.stringify(_contents, null, 2)
  )

  dictionary.allProperties.forEach((token) => {
    const colorsetPath = `${assetPath}/${token.name}.colorset`
    const { value } = token
    const colorset = {
      idiom: _idiom,
      color: {
        'color-space': 'srgb',
        components: value,
      },
      ..._contents,
    }

    if (value) {
      ensureDirSync(colorsetPath)
    }

    if (value) {
      writeFileSync(
        `${colorsetPath}/Contents.json`,
        JSON.stringify(colorset, null, 2)
      )
    }
  })
}

module.exports = {
  generateColorsetsDo,
}
