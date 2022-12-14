const ChangeCase = require('change-case')
const Color = require('tinycolor2')
const { DARK } = require('./vars.cjs')

const DEFAULT_OPTIONS = {
  transform: ChangeCase.camelCaseTransformMerge,
}

function _changeDefaultCaseTransform(caseFunction, default_options) {
  return (caseToChange, options) =>
    caseFunction(
      caseToChange,
      Object.assign({}, DEFAULT_OPTIONS, default_options, options)
    )
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
  const camelCase = _changeDefaultCaseTransform(ChangeCase.camelCase)
  return camelCase([options.prefix].concat(path).join(' '))
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
  composeValue,
  kebabCase,
  getTokenPath,
}
