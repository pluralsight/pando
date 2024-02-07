import { defineSlotRecipe } from '@pandacss/dev'
import { SLOTS, avatarPalettes } from './shared/avatar.base'
import { focusStates } from './shared/states'

export const avatar = defineSlotRecipe({
  className: 'avatar',
  description: 'The styles for the Avatar component',
  slots: SLOTS,

  base: {
    root: {
      alignItems: 'center',
      appearance: 'none',
      aspectRatio: '1/1',
      bgColor: 'colorPalette.bg.initial',
      border: 'none',
      rounded: 'full',
      display: 'inline-flex',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '0',
      position: 'relative',
      userSelect: 'none',
      ...focusStates,
    },
    image: {
      animationName: 'fadeIn',
      animationDuration: '350ms',
      animationTimingFunction: 'ease-in',
      animationFillMode: 'forwards',
      h: 'full',
      left: '0',
      objectFit: 'cover',
      position: 'absolute',
      top: '0',
      w: 'full',
    },
    label: {
      color: 'colorPalette.text.100',
      fontVariationSettings: "'wght' 500",
      textTransform: 'uppercase',
    },
  },

  variants: {
    palette: avatarPalettes,
    size: {
      xs: {
        root: {
          h: '2rem',
          w: '2rem',
        },
        label: {
          fontSize: 'sm',
          lineHeight: '0',
        },
      },
      sm: {
        root: {
          h: '3rem',
          w: '3rem',
        },
        label: {
          fontSize: 'xl',
        },
      },
      md: {
        root: {
          h: '5rem',
          w: '5rem',
        },
        label: {
          fontSize: '4xl',
        },
      },
      lg: {
        root: {
          h: '7.5rem',
          w: '7.5rem',
        },
        label: {
          fontSize: '5xl',
        },
      },
      xl: {
        root: {
          h: '10rem',
          w: '10rem',
        },
        label: {
          fontSize: '6xl',
        },
      },
    },
  },

  defaultVariants: {
    palette: 'neutral',
    size: 'md',
  },
})
