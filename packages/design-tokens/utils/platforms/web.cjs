const { BUILD_PATH, DARK } = require('../vars.cjs')
const {
  cssTransforms,
  getDefaultFileConfig,
  jsTransforms,
} = require('../configOptions/baseOptions.cjs')
const { webTransforms } = require('../configOptions/transforms.cjs')
const { webFormats } = require('../configOptions/formats.cjs')

function getThemeSelector(theme) {
  return `html[data-theme="${theme}"], .${theme}`
}

function getWebConfig(theme) {
  const notDefaultTheme = theme !== DARK
  const THEME_PATH = `${BUILD_PATH}${theme}/`

  return {
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
      buildPath: notDefaultTheme ? THEME_PATH : BUILD_PATH,
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
      buildPath: notDefaultTheme ? THEME_PATH : BUILD_PATH,
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
      buildPath: notDefaultTheme ? THEME_PATH : BUILD_PATH,
      files: [
        {
          ...getDefaultFileConfig(theme),
          destination: notDefaultTheme ? `${theme}.d.ts` : 'index.d.ts',
          format: webFormats.tsDeclarations,
        },
      ],
    },
    metaJS: {
      transformGroup: webTransforms.es,
      transforms: jsTransforms,
      buildPath: `${BUILD_PATH}meta/`,
      files: [
        {
          ...getDefaultFileConfig(theme),
          destination: 'cssProperties.mjs',
          format: 'js/token-data',
        },
        {
          ...getDefaultFileConfig(theme),
          destination: 'cssProperties.js',
          format: 'common/token-data',
        },
        {
          ...getDefaultFileConfig(theme),
          destination: 'normalize.json',
          format: 'json/token-normalize',
        },
      ],
    },
    metaTS: {
      transformGroup: webTransforms.ts,
      transforms: jsTransforms,
      buildPath: `${BUILD_PATH}meta/`,
      files: [
        {
          ...getDefaultFileConfig(theme),
          destination: 'cssProperties.d.ts',
          format: webFormats.tsDeclarations,
        },
      ],
    },
  }
}

module.exports = {
  getWebConfig,
}
