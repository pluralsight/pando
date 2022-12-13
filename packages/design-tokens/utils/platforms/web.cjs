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

// need to generate css meta

function getWebConfig(theme) {
  const notDefaultTheme = theme !== DARK

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
  }
}

module.exports = {
  getWebConfig,
}
