import { defineSlotRecipe } from '@pandacss/dev'
import { SLOTS } from './shared/circularProgress.base'

export const circularProgress = defineSlotRecipe({
  className: 'circular-progress',
  description: 'The styles for the Circular Progress component',
  slots: SLOTS,

  base: {
    root: {
      display: 'inline-block',
      fontFamily: 'inherit',
      position: 'relative',
      verticalAlign: 'middle',
    },
    circle: {
      animationName: 'loading',
      fill: 'transparent',
      stroke: 'action.border.initial',
      // animationDuration: '600ms',
      // transitionProperty: 'all',
      // animationTimingFunction: 'ease-in-out',
      // animationIterationCount: 'infinite',
    },
    now: {
      animationName: 'spin',
      stroke: 'colorPalette.text.initial',
    },
    text: {
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: '0.75rem',
      left: '50%',
      position: 'absolute',
      textAlign: 'center',
      top: '42%',
      translateX: '-50%',
      translateY: '-50%',
      width: '100%',
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          h: '1.125rem',
          w: '1.125rem',
        },
      },
      md: {
        root: {
          h: '3rem',
          w: '3rem',
        },
      },
    },
    cycle: {
      determinate: {
        circle: {
          animationName: 'none',
        },
      },
      indeterminate: {
        circle: {
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
    cycle: 'determinate',
  },
})
