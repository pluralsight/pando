const initialNormalizeObj = {
  groupItems: [],
  groups: {},
}

function cssPropAsValue({ dictionary }) {
  return dictionary.allTokens
    .map((token) => {
      console.log(token)
      return `export const ${token.name} = 'var(--${token.path.join('-')})';`
    })
    .join('\n')
}

function normalize({ dictionary }) {
  const groupData = dictionary.allTokens.reduce((prev, current) => {
    console.log(prev)
    // console.log(current);
    const groupId = current.original.value.split('.')
    const currentGroupName = groupId[1]
    const prevGroup = prev.groups[currentGroupName]
    const cssToken = current.path.join('-')
    const jsToken = current.name

    return {
      ...prev,
      groupItems: [...new Set([...prev.groupItems, currentGroupName])],
      groups: {
        ...prev.groups,
        [currentGroupName]: {
          ...prevGroup,
          [jsToken]: {
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
  normalize,
}
