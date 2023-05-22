/*eslint no-negated-condition: "off"*/

import camelize from '../utils/camelize.mjs'
import sanitize, { sanitizeWhitespace } from '../utils/sanitize.mjs'
import addProperty from '../utils/addProperty.mjs'

const standard = (rule, result) => {
  const obj = {}
  let retObj = {}
  rule.declarations
    .filter((declaration) => declaration.type === 'declaration')
    .forEach((declaration) => {
      const cssProperty = camelize(declaration.property)
      obj[cssProperty] = sanitizeWhitespace(declaration.value)
    })
  rule.selectors.forEach((selector) => {
    let name

    // Check if selector contains a pseudo selector
    const pseudoSelectorIndex = selector.indexOf(':')
    const attributeSelectorIndex = selector.indexOf('[')
    if (pseudoSelectorIndex !== -1) {
      // Find end of pseudo selector
      let endPseudoSelectorIndex = selector.indexOf(' ', pseudoSelectorIndex)
      if (endPseudoSelectorIndex === -1)
        endPseudoSelectorIndex = selector.length

      // Split selector
      const primarySelector = selector.slice(0, pseudoSelectorIndex)
      const pseudoSelector = selector.slice(
        pseudoSelectorIndex,
        endPseudoSelectorIndex
      )
      const secondarySelector = selector.slice(
        endPseudoSelectorIndex,
        selector.length
      )

      const pseudoObj = {}
      pseudoObj[sanitizeWhitespace(`&${pseudoSelector}${secondarySelector}`)] =
        obj

      name = sanitize(primarySelector)

      if (name) {
        retObj = addProperty(result, name, pseudoObj)
      } else {
        const pseudoSelectorWithoutColon = pseudoSelector.replace(/^:+/, '')

        retObj = addProperty(
          result,
          `${pseudoSelectorWithoutColon}${secondarySelector}`,
          obj
        )
      }
    } else if (attributeSelectorIndex !== -1 && attributeSelectorIndex > 0) {
      // Split selector
      const primarySelector = selector.slice(0, attributeSelectorIndex)
      const attributeSelector = selector.slice(attributeSelectorIndex)

      const attrObj = {}
      attrObj[`&${attributeSelector}`] = obj

      name = sanitize(primarySelector)
      retObj = addProperty(result, name, attrObj)
    } else {
      name = sanitize(selector)
      retObj = addProperty(result, name, obj)
    }
  })

  return retObj
}

export default standard
