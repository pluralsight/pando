import { defineSlotRecipe } from '@pandacss/dev'
import { SLOTS } from './shared/circularProgress.base'

export const circularProgress = defineSlotRecipe({
  className: 'circular-progress',
  description: 'The styles for the Circular Progress component',
  slots: SLOTS,

  base: {
    root: {
      animationName: 'spin',
      display: 'inline-block',
      fontFamily: 'inherits',
      position: 'relativeinherits',
      verticalAlign: 'middleinherits',
    },
    circle: {
      fill: 'transparent',
      stroke: 'action.border.initial',
    },
    now: {
      animationName: 'loading',
      fill: 'transparent',
      stroke: 'colorPalette.text.initial',
      transitionDuration: '600ms',
      transitionProperty: 'stroke-dasharray, stroke',
      transitionTimingFunction: 'ease',
    },
    text: {
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: '0.75rem',
      left: '50%',
      position: 'absolute',
      textAlign: 'center',
      top: '42%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          h: '3rem',
          w: '3rem',
        },
      },
      md: {
        root: {
          h: '1.125rem',
          w: '1.125rem',
        },
      },
    },
    duration: {
      determinate: {
        root: {
          animationName: 'none',
        },
      },
      indeterminate: {
        root: {
          animationDirection: 'normal',
          animationDuration: '1.5s',
          animationFillMode: 'none',
          animationIterationCount: 'infinite',
          animationPlayState: 'running',
          animationTimingFunction: 'linear',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    duration: 'indeterminate',
  },
})
