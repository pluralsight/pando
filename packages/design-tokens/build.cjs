const StyleDictionary = require('style-dictionary')
const { camelCase, kebabCase } = require('./utils/transforms.cjs')
const { BUILD_PATH, DARK, LIGHT, WEB } = require('./utils/vars.cjs')
const {
  cssTransforms,
  getDefaultFileConfig,
  jsTransforms,
  parsers,
} = require('./utils/configOptions/baseOptions.cjs')
const { webTransforms } = require('./utils/configOptions/transforms.cjs')
const { webFormats } = require('./utils/configOptions/formats.cjs')

// need to generate unique light tokens for CSS theme & JS output
// need to generate css meta

function getThemeSelector(theme) {
  return `html[data-theme="${theme}"], .${theme}`
}

function generateConfig(brand, platform, theme) {
  const notDefaultTheme = theme !== DARK

  if (platform === WEB) {
    return {
      parsers,
      source: ['./tokens/base/*.yaml'],
      platforms: {
        css: {
          transformGroup: webTransforms.css,
          transforms: cssTransforms,
          buildPath: notDefaultTheme
            ? `${BUILD_PATH}/themes/`
            : `${BUILD_PATH}css/`,
          files: [
            {
              ...getDefaultFileConfig(theme),
              format: webFormats.cssVars,
              destination: notDefaultTheme ? `${theme}.css` : 'variables.css',
              options: {
                selector: notDefaultTheme ? getThemeSelector(theme) : null,
              },
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
              destination: `_${theme}-variables.scss`,
              format: webFormats.scss,
            },
          ],
        },
        es: {
          transformGroup: webTransforms.es,
          transforms: jsTransforms,
          buildPath: notDefaultTheme ? `${BUILD_PATH}/es/` : BUILD_PATH,
          files: [
            {
              ...getDefaultFileConfig(theme),
              destination: notDefaultTheme ? `${theme}.mjs` : 'wrapper.mjs',
              format: webFormats.es6,
            },
          ],
        },
        cjs: {
          transformGroup: webTransforms.cjs,
          transforms: jsTransforms,
          buildPath: notDefaultTheme ? `${BUILD_PATH}/cjs/` : BUILD_PATH,
          files: [
            {
              ...getDefaultFileConfig(theme),
              destination: notDefaultTheme ? `${theme}.cjs` : 'index.cjs',
              format: webFormats.cjs,
            },
          ],
        },
        ts: {
          transformGroup: webTransforms.ts,
          transforms: jsTransforms,
          buildPath: notDefaultTheme ? `${BUILD_PATH}types/` : BUILD_PATH,
          files: [
            {
              ...getDefaultFileConfig(theme),
              destination: notDefaultTheme ? `${theme}.d.ts` : 'index.d.ts',
              format: webFormats.tsDeclarations,
            },
          ],
        },
      },
    }
  }

  return {}
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
