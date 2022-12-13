const StyleDictionary = require('style-dictionary')
const { camelCase, kebabCase } = require('./utils/transforms.cjs')
const {
  BUILD_PATH,
  cssTransforms,
  getDefaultFileConfig,
  jsTransforms,
  parsers,
} = require('./utils/configOptions/baseOptions.cjs')
const { webTransforms } = require('./utils/configOptions/transforms.cjs')
const { webFormats } = require('./utils/configOptions/formats.cjs')

// need to generate unique light tokens for CSS theme & JS output
// need to generate css meta

function generateConfig(brand, platform, theme) {
  if (platform === 'web') {
    return {
      parsers,
      source: ['./tokens/base/*.yaml'],
      platforms: {
        css: {
          transformGroup: webTransforms.css,
          transforms: cssTransforms,
          buildPath: `${BUILD_PATH}css/`,
          files: [
            {
              ...getDefaultFileConfig(theme),
              destination: 'variables.css',
              format: webFormats.cssVars,
            },
          ],
        },
        scss: {
          transformGroup: webTransforms.scss,
          transforms: cssTransforms,
          buildPath: `${BUILD_PATH}scss/`,
          files: [
            {
              ...getDefaultFileConfig(theme),
              destination: '_variables.scss',
              format: webFormats.scss,
            },
          ],
        },
        es: {
          transformGroup: webTransforms.es,
          transforms: jsTransforms,
          buildPath: BUILD_PATH,
          files: [
            {
              // ...jsFileConfig,
              ...getDefaultFileConfig(theme),
              destination: 'wrapper.mjs',
              format: webFormats.es6,
            },
          ],
        },
        cjs: {
          transformGroup: webTransforms.cjs,
          transforms: jsTransforms,
          buildPath: BUILD_PATH,
          files: [
            {
              // ...jsFileConfig,
              ...getDefaultFileConfig(theme),
              destination: 'index.cjs',
              format: webFormats.cjs,
            },
          ],
        },
        ts: {
          transformGroup: webTransforms.ts,
          transforms: jsTransforms,
          buildPath: BUILD_PATH,
          files: [
            {
              // ...jsFileConfig,
              ...getDefaultFileConfig(theme),
              destination: 'index.d.ts',
              format: webFormats.tsDeclarations,
            },
          ],
        },
      },
    }
  }

  return {}
}

console.log('Starting Build...')

const brands = {
  items: ['skills', 'flow'],
  results: {
    skills: {
      platforms: ['web'],
      themes: ['light', 'dark'],
    },
    flow: {
      platforms: [],
      themes: [],
    },
  },
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
