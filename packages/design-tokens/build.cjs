const StyleDictionary = require('style-dictionary')
const { camelCase, kebabCase } = require('./utils/transforms.cjs')
const { DARK, LIGHT, WEB } = require('./utils/vars.cjs')
const { parsers } = require('./utils/configOptions/baseOptions.cjs')
const { getWebConfig } = require('./utils/platforms/web.cjs')

function generateConfig(brand, platform, theme) {
  return {
    parsers,
    source: ['./tokens/base/*.yaml'],
    platforms: platform === WEB ? getWebConfig(theme) : null,
  }
}

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

const brands = {
  items: ['skills', 'flow'],
  results: {
    skills: {
      platforms: [WEB],
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
