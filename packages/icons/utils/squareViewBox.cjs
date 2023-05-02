'use strict'

const name = 'squareViewBox'
const type = 'visitor'
const active = true
const description = 'Adjusts viewbox to be a square if it is not'

function squareViewBox() {
  return {
    element: {
      enter: (node, parentNode) => {
        if (
          node.name === 'svg' &&
          parentNode.type === 'root' &&
          node.attributes.viewBox
        ) {
          const viewbox = node.attributes.viewBox
          let [xOffset, yOffset, width, height] = viewbox
            .split(/\s+/)
            .map(Number)

          if (width > height) {
            yOffset += (height - width) / 2
            height = width
          } else if (height > width) {
            xOffset += (width - height) / 2
            width = height
          }

          node.attributes.viewBox = [xOffset, yOffset, width, height].join(' ')
        }
      },
    },
  }
}

module.exports = {
  name,
  type,
  active,
  description,
  fn: squareViewBox,
}
