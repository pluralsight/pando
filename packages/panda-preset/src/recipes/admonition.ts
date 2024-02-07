import { defineSlotRecipe } from '@pandacss/dev'
import { SLOTS, admonitionPalettes } from './shared/admonition.base'

export const admonition = defineSlotRecipe({
  className: 'admonition',
  description: 'The styles for the Admonition component',
  slots: SLOTS,

  base: {
    root: {
      alignItems: 'flex-start',
      bgColor: 'colorPalette.surface.initial',
      color: 'colorPalette.text.initial',
      rounded: 'sm',
      display: 'flex',
      overflow: 'hidden',
      paddingBottom: '3.5',
      paddingInlineEnd: '0',
      paddingInlineStart: '3.5',
      paddingTop: '0',
      position: 'relative',
      width: 'full',
      _before: {
        bgColor: 'colorPalette.border.initial',
        borderBottomLeftRadius: 'sm',
        borderTopLeftRadius: 'sm',
        content: '""',
        h: 'full',
        left: '0.5px',
        position: 'absolute',
        top: '0',
        w: '4px',
        zIndex: 'decorator',
      },
    },
    featureIcon: {
      color: 'colorPalette.text.100',
      display: 'inline-block',
      marginInlineEnd: '3.5',
      paddingTop: '3.5',
    },
    main: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
    },
    heading: {
      color: 'inherit',
      textAlign: 'left',
      fontVariationSettings: "'wght' 700",
      paddingTop: '3.5',
    },
    description: {
      color: 'inherit',
      textAlign: 'left',
      marginTop: '1',
    },
  },

  variants: {
    palette: admonitionPalettes,
  },

  defaultVariants: {
    palette: 'info',
  },
})
