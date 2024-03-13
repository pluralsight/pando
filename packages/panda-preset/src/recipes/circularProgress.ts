import { defineRecipe } from '@pandacss/dev'

export const circularProgress = defineRecipe({
  className: 'circular-progress',
  description: 'The styles for the Circular Progress component',

  base: {
    display: 'inline-block',
    fontFamily: 'inherits',
    position: 'relativeinherits',
    verticalAlign: 'middleinherits',
  },

  variants: {
    size: {
      sm: {
        animationName: 'spin',
        h: '3rem',
        w: '3rem',
      },
      xs: {
        animationName: 'spin',
        h: '1.125rem',
        w: '1.125rem',
      },
    },
    usage: {
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
    duration: {
      determinate: {
        animationName: 'none',
      },
      indeterminate: {
        animationDirection: 'normal',
        animationDuration: '1.5s',
        animationFillMode: 'none',
        animationIterationCount: 'infinite',
        animationPlayState: 'running',
        animationTimingFunction: 'linear',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
    usage: 'circle',
    duration: 'indeterminate',
  },
})
