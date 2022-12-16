const ChangeCase = require('change-case')
const Color = require('tinycolor2')
const { DARK } = require('./vars.cjs')

const DEFAULT_OPTIONS = {
  transform: ChangeCase.camelCaseTransformMerge,
}

function getTokenPath(path) {
  // remove '-<theme>' from token name
  return path.slice(0, -1)
}

function addColorCTI(token) {
  return {
    ...token,
    attributes: {
      ...token.attributes,
      category: 'color',
    },
  }
}

function camelCase(token, options) {
  const darkTheme = token.name === DARK
  const path = darkTheme ? getTokenPath(token.path) : token.path
  const camelCase = changeDefaultCaseTransform(ChangeCase.camelCase)
  return camelCase([options.prefix].concat(path).join(' '))
}

function changeDefaultCaseTransform(caseFunction, default_options) {
  return (caseToChange, options) =>
    caseFunction(
      caseToChange,
      Object.assign({}, DEFAULT_OPTIONS, default_options, options)
    )
}

function colorRGB(token) {
  const { r, g, b, a } = Color(token.value).toRgb()
  return {
    alpha: a.toFixed(4),
    blue: (b / 255).toFixed(4),
    red: (r / 255).toFixed(4),
    green: (g / 255).toFixed(4),
  }
}

function composeValue(prop) {
  const str = Color(prop.value).toHex8()
  return 'Color(0x' + str.slice(6) + str.slice(0, 6) + ')'
}

function kebabCase(token, options) {
  const path = getTokenPath(token.path)
  return ChangeCase.paramCase([options.prefix].concat(path).join(' '))
}

module.exports = {
  addColorCTI,
  camelCase,
  changeDefaultCaseTransform,
  colorRGB,
  composeValue,
  kebabCase,
  getTokenPath,
}
