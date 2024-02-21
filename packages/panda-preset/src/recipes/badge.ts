import { defineRecipe } from '@pandacss/dev'
import { badgePalettes } from './shared/badge.base'

export const badge = defineRecipe({
  className: 'badge',
  description: 'The styles for the Badge component',

  base: {
    alignItems: 'center',
    borderRadius: '1px',
    color: 'colorPalette.text.initial',
    display: 'inline-flex',
    fontVariationSettings: "'wght' 600",
    gap: '4px',
    lineHeight: 'initial',
    maxW: 'initial',
    pxi: '8px',
    textTransform: 'uppercase',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  },

  variants: {
    palette: badgePalettes,
    size: {
      lg: {
        fontSize: 'xs',
        h: '1.5rem',
      },
      md: {
        fontSize: 'xs',
        h: '1.125rem',
      },
    },
    usage: {
      filled: {
        bgColor: 'colorPalette.surface.initial',
      },
      outline: {
        border: '1px solid',
        borderColor: 'colorPalette.border.initial',
      },
    },
  },

  defaultVariants: {
    palette: 'neutral',
    size: 'lg',
    usage: 'filled',
  },
})
