import type { CssKeyframes } from '@pandacss/types'

export function defineKeyframes<T extends CssKeyframes>(config: T) {
  return config
}

export const keyframes = defineKeyframes({
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  loading: {
    '0%': { strokeDasharray: '1, 400', strokeDashoffset: '0' },
    '50%': { strokeDasharray: '400, 400', strokeDashoffset: '-100' },
    '100%': { strokeDasharray: '400, 400', strokeDashoffset: '-260' },
  },
  fadeInDownAnimation: {
    '0%': {
      opacity: '0',
      transform: 'translate3d(0, -5px, 0)',
    },
    '100%': {
      opacity: '1',
      transform: 'translate3d(0, 0, 0)',
    },
  },
})
