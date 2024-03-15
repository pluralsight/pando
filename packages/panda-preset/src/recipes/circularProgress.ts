import { defineSlotRecipe } from '@pandacss/dev'

const SLOTS = ['root', 'baseCircle', 'secondaryCircle', 'text']

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
    secondaryCircle: {
      stroke: 'action.border.initial',
      fill: 'transparent',
    },
    baseCircle: {
      stroke: 'neutral.text.initial',
      fill: 'transparent',
      transitionDuration: '600ms',
      transitionProperty: 'stroke-dasharray, stroke',
      transitionTimingFunction: 'ease-in',
    },
    text: {
      display: 'inline-block',
      fontFamily: 'inherit',
      textStyle: 'xs',
      position: 'absolute',
      textAlign: 'center',
      top: '32%',
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
          h: '40px',
          w: '40px',
        },
      },
    },
    cycle: {
      determinate: {
        secondaryCircle: {
          animationName: 'none',
        },
      },
      indeterminate: {
        secondaryCircle: {
          animationName: 'loading',
          animationDirection: 'normal',
          animationDuration: '1.5s',
          animationFillMode: 'none',
          animationIterationCount: 'infinite',
          animationPlayState: 'running',
          animationTimingFunction: 'linear',
        },
        now: {
          animationName: 'loading',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    cycle: 'determinate',
  },
})
