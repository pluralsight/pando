const { getTokenPath } = require('../transforms.cjs')

const initialNormalizeObj = {
  groupItems: [],
  groups: {},
}

function cssPropAsValue({ dictionary }) {
  return dictionary.allTokens
    .map((token) => {
      return `export const ${token.name} = 'var(--${getTokenPath(
        token.path
      ).join('-')})';`
    })
    .join('\n')
}

function cssPropAsValueCommon({ dictionary }) {
  return `module.exports = {
    ${dictionary.allTokens
      .map((token) => {
        return `${token.name}: 'var(--${getTokenPath(token.path).join('-')})',`
      })
      .join('\n')}
  }`
}

function normalize({ dictionary }) {
  const groupData = dictionary.allTokens.reduce((prev, current) => {
    const currentGroupName = current.filePath.split('/')[3].split('.')[0]
    const prevGroup = prev.groups[currentGroupName]
    const cssToken = getTokenPath(current.path).join('-')
    const jsToken = current.name

    return {
      ...prev,
      groupItems: [...new Set([...prev.groupItems, currentGroupName])],
      groups: {
        ...prev.groups,
        [currentGroupName]: {
          ...prevGroup,
          [jsToken]: {
            id: jsToken,
            cssName: `--${cssToken}`,
            sassName: `$${cssToken}`,
            jsName: jsToken,
            value: current.value,
          },
        },
      },
    }
  }, initialNormalizeObj)

  return JSON.stringify(groupData, null, 2)
}

module.exports = {
  cssPropAsValue,
  cssPropAsValueCommon,
  normalize,
}
