const ChangeCase = require('change-case')
const { ensureDirSync, writeFileSync } = require('fs-extra')
const { changeDefaultCaseTransform } = require('../transforms.cjs')
const { LIGHT, DARK } = require('../vars.cjs')

const _colorSpace = 'srgb'

const _contents = {
  info: {
    author: 'xcode',
    version: 1,
  },
}

const _darkAppearance = {
  appearance: 'luminosity',
  value: 'dark',
}

const _lightAppearance = {
  appearance: 'luminosity',
  value: 'light',
}

const _idiom = 'universal'

const _initialNormalizedData = {
  groupItems: [],
  groups: {},
}

function generateColorsetsDo(dictionary, platform) {
  const assetPath = platform.buildPath
  const normalizedTokens = getiOSThemeTokens(dictionary.allProperties).reduce(
    normalizeTokenData,
    _initialNormalizedData
  )
  const { groupItems, groups } = normalizedTokens

  ensureDirSync(assetPath)

  groupItems.forEach((sentiment) => {
    const sentimentPath = `${assetPath}/${sentiment}`
    const sentimentGroup = groups[sentiment]
    const tokenKeys = Object.keys(sentimentGroup)

    tokenKeys.forEach((token) => {
      const tokenData = sentimentGroup[token]
      const colorsetPath = `${sentimentPath}/${token}.colorset`
      const colorsetContent = {
        ..._contents,
        colors: [
          {
            idiom: _idiom,
            color: {
              'color-space': _colorSpace,
              components: tokenData.dark,
            },
          },
          {
            idiom: _idiom,
            appearances: [_darkAppearance],
            color: {
              'color-space': _colorSpace,
              components: tokenData.dark,
            },
          },
          {
            idiom: _idiom,
            appearances: [_lightAppearance],
            color: {
              'color-space': _colorSpace,
              components: tokenData.light,
            },
          },
        ],
      }

      ensureDirSync(colorsetPath)
      writeFileSync(
        `${colorsetPath}/Contents.json`,
        JSON.stringify(colorsetContent, null, 2)
      )
    })
  })
}

function getiOSThemeTokens(allTokens) {
  return allTokens.filter((token) => {
    const { attributes } = token
    if (attributes.name === LIGHT || attributes.name === DARK) {
      return token
    }
  })
}

function getTokenContent(tokenObj) {
  const { attributes, value } = tokenObj

  if (attributes.name === LIGHT) {
    return {
      light: value,
    }
  }

  return {
    dark: value,
  }
}

function normalizeTokenData(prev, current) {
  const currentGroupName = current.filePath.split('/')[3].split('.')[0]
  const prevGroup = prev.groups[currentGroupName]
  const path = current.path.slice(1, -1)
  const camelCase = changeDefaultCaseTransform(ChangeCase.camelCase)
  const tokenName = camelCase([].concat(path).join(' '))
  const tokenContent = getTokenContent(current)

  return {
    ...prev,
    groupItems: [...new Set([...prev.groupItems, currentGroupName])],
    groups: {
      ...prev.groups,
      [currentGroupName]: {
        ...prevGroup,
        [tokenName]: {
          ...prevGroup?.[tokenName],
          ...tokenContent,
        },
      },
    },
  }
}

module.exports = {
  generateColorsetsDo,
}
