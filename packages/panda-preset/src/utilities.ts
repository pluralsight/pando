import type { UtilityConfig } from '@pandacss/types'

export function defineUtility<T extends UtilityConfig>(config: T) {
  return config
}

const spacing = defineUtility({
  pse: {
    className: 'padding-inline-start',
    values: 'spacing',
    transform(value) {
      return {
        paddingInlineStart: value,
        paddingInlineEnd: value,
      }
    },
  },
})

export const utilities = {
  extend: {
    ...spacing,
  },
}
