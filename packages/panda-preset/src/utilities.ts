import type { UtilityConfig } from '@pandacss/types'

export function defineUtility<T extends UtilityConfig>(config: T) {
  return config
}

const pxi = defineUtility({
  pxi: {
    className: 'padding-inline-start-end',
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
    ...pxi,
  },
}
