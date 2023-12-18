import { mapObject } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const scrollableConfig = {
  transform(props) {
    const { direction, hideScrollbar, ...rest } = props
    return {
      overflow: 'auto',
      height: direction === 'horizontal' ? '100%' : 'auto',
      width: direction === 'vertical' ? '100%' : 'auto',
      scrollbarWidth: hideScrollbar ? 'none' : 'auto',
      WebkitOverflowScrolling: 'touch',
      '&::-webkit-scrollbar': {
        display: hideScrollbar ? 'none' : 'auto',
      },
      ...rest,
    }
  },
}

export const getScrollableStyle = (styles = {}) =>
  scrollableConfig.transform(styles, { map: mapObject })

export const scrollable = (styles) => css(getScrollableStyle(styles))
scrollable.raw = getScrollableStyle
