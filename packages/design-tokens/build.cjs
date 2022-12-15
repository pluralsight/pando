const StyleDictionary = require('style-dictionary')
const { generateColorsetsDo } = require('./utils/actions/iOS.cjs')
const {
  addColorCTI,
  camelCase,
  composeValue,
  kebabCase,
  colorRGB,
} = require('./utils/transforms.cjs')
const { DARK, LIGHT, MOBILE, WEB } = require('./utils/vars.cjs')
const { parsers } = require('./utils/configOptions/baseOptions.cjs')
const { getWebConfig } = require('./utils/platforms/web.cjs')
const { getMobileConfig } = require('./utils/platforms/mobile.cjs')
const {
  cssPropAsValue,
  cssPropAsValueCommon,
  normalize,
} = require('./utils/formats/dataSources.cjs')

function getConfigByPlatform(platform, theme) {
  switch (platform) {
    case WEB:
      return getWebConfig(theme)

    case MOBILE:
      return getMobileConfig(theme)

    default:
      throw new Error('Unsupported platform passed into getConfigByPlatform.')
  }
}

function generateConfig(brand, platform, theme) {
  return {
    parsers,
    source: ['./tokens/base/*.yaml'],
    platforms: getConfigByPlatform(platform, theme),
  }
}

// formats

StyleDictionary.registerFormat({
  name: 'js/token-data',
  formatter: cssPropAsValue,
})

StyleDictionary.registerFormat({
  name: 'common/token-data',
  formatter: cssPropAsValueCommon,
})

StyleDictionary.registerFormat({
  name: 'json/token-normalize',
  formatter: normalize,
})

// actions

StyleDictionary.registerAction({
  name: 'create_colorsets',
  do: generateColorsetsDo,
  undo: () => null,
})

// transforms

StyleDictionary.registerTransform({
  type: 'attribute',
  name: 'attribute/ps-cti',
  transformer: addColorCTI,
})

StyleDictionary.registerTransform({
  type: 'name',
  name: 'name/cti/ps-kebab',
  transformer: kebabCase,
})

StyleDictionary.registerTransform({
  type: 'name',
  name: 'name/cti/ps-camel',
  transformer: camelCase,
})

StyleDictionary.registerTransform({
  type: 'value',
  name: 'color/ps-compose',
  transformer: composeValue,
})

StyleDictionary.registerTransform({
  type: 'value',
  name: 'color/ps-rgb',
  transformer: colorRGB,
})

// run

const brands = {
  items: ['skills', 'flow'],
  results: {
    skills: {
      platforms: [WEB, MOBILE],
      themes: [LIGHT, DARK],
    },
    flow: {
      platforms: [],
      themes: [],
    },
  },
}

brands.items.map((brandName) => {
  const brand = brands.results[brandName]

  brand.platforms.map((platform) => {
    brand.themes.map((theme) => {
      const styleDictionary = StyleDictionary.extend(
        generateConfig(brandName, platform, theme)
      )
      styleDictionary.buildAllPlatforms()
    })
  })
})
