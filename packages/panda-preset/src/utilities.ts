import type { UtilityConfig } from '@pandacss/types'

export function defineUtility<T extends UtilityConfig>(config: T) {
  return config
}

const pxi = defineUtility({
  pxi: {
    description:
      'x-axis padding shorthand - used to set inline padding at the start and end of an element',
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
