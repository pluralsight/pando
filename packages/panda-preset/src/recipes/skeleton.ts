import { defineRecipe } from '@pandacss/dev'

export const skeleton = defineRecipe({
  className: 'skeleton',
  description: 'The styles for the Skeleton component',

  base: {
    animationName: 'pulse',
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    bgColor: 'neutral.bg.initial',
    color: 'transparent',
    cursor: 'default',
    pointerEvents: 'none',
    userSelect: 'none',
    width: 'full',
  },

  variants: {
    shape: {
      circle: {
        rounded: 'full',
      },
      block: {
        rounded: 'sm',
        mb: '2',
      },
    },
    size: {
      sm: {
        h: '4',
      },
      md: {
        h: '8',
      },
      lg: {
        h: '10',
      },
      xl: {
        h: '20',
      },
    },
  },

  compoundVariants: [
    {
      shape: 'circle',
      size: 'sm',
      css: {
        h: '3rem',
        w: '3rem',
      },
    },
    {
      shape: 'circle',
      size: 'md',
      css: {
        h: '5rem',
        w: '5rem',
      },
    },
    {
      shape: 'circle',
      size: 'lg',
      css: {
        h: '7.5rem',
        w: '7.5rem',
      },
    },
    {
      shape: 'circle',
      size: 'xl',
      css: {
        h: '10rem',
        w: '10rem',
      },
    },
  ],

  defaultVariants: {
    shape: 'block',
    size: 'md',
  },
})
