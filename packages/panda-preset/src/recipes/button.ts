import { defineRecipe } from '@pandacss/dev'
import { buttonBase, buttonPalettes, nonTextStates } from './shared/button.base'

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',

  base: buttonBase,

  variants: {
    palette: buttonPalettes,
    size: {
      md: {
        fontSize: '0.875rem',
        h: '2',
        minW: '2.5rem',
        pxi: '1.125rem',
      },
      lg: {
        h: '3rem',
        minW: '2.5rem',
        pxi: '1.5rem',
      },
    },

    usage: {
      text: {
        color: 'colorPalette.text.100',
        textDecoration: 'underline',
        _hover: {
          textDecoration: 'none',
        },
        _active: {
          color: 'colorPalette.text.initial',
        },
        _disabled: {
          _hover: {
            textDecoration: 'underline',
          },
          _active: {
            color: 'colorPalette.text.100',
          },
        },
      },
      outline: {
        border: '2px solid',
        borderColor: 'colorPalette.border.initial',
        borderRadius: '0.375rem',
        ...nonTextStates,
      },
      filled: {
        bgColor: 'colorPalette.bg.initial',
        borderRadius: '0.375rem',
        ...nonTextStates,
        _active: {
          bgColor: 'colorPalette.bg.active',
        },
      },
    },
  },

  defaultVariants: {
    palette: 'action',
    size: 'lg',
    usage: 'filled',
  },
})
