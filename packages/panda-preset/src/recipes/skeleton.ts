import { defineRecipe } from '@pandacss/dev'

export const skeleton = defineRecipe({
  className: 'skeleton',
  description: 'The styles for the Skeleton component',

  base: {
    animationDirection: 'alternate',
    animationDuration: '800ms',
    animationFillMode: 'none',
    animationIterationCount: 'infinite',
    animationName: 'fadeIn',
    animationPlayState: 'running',
    animationTimingFunction: 'linear',
    backgroundColor: 'neutral.bg.initial',
    borderRadius: '2px',
    color: 'transparent',
    cursor: 'default',
    opacity: '0.7',
    pointerEvents: 'none',
    userSelect: 'none',
    width: 'full',
  },

  variants: {
    usage: {
      content: {
        [':is(button, input, textarea, select)']: {
          visibility: 'hidden',
        },
      },
      circle: {
        rounded: 'full',
      },
      text: {
        height: '1.25rem',
        mb: '2',
      },
    },
  },

  defaultVariants: {
    usage: 'content',
  },
})
