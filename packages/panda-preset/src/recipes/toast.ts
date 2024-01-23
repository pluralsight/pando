import { defineSlotRecipe } from '@pandacss/dev'
import { SLOTS, toastPalettes } from './shared/toast.base'

export const toast = defineSlotRecipe({
  className: 'toast',
  description: 'The styles for the Toast component',
  slots: SLOTS,

  base: {
    root: {
      display: 'inline-block',
      pointerEvents: 'none',
      position: 'fixed',
      right: '4',
      top: '4',
      zIndex: 'toast',
    },
    container: {
      alignItems: 'center',
      animationName: 'fadeIn',
      animationDuration: '150ms',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      bgColor: 'colorPalette.surface.initial',
      color: 'colorPalette.surface.text.initial',
      rounded: 'sm',
      display: 'flex',
      paddingInlineEnd: '4rem',
      position: 'relative',
      width: 'full',
    },
    featureIcon: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      pxi: '6',
    },
    heading: {
      paddingBottom: '1',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minH: '5.25rem',
      paddingBottom: '1rem',
      paddingInlineEnd: '3.5',
      paddingTop: '1rem',
      textAlign: 'left',
      width: '17rem',
    },
    closeRoot: {
      display: 'inline-block',
      pointerEvents: 'initial',
      position: 'absolute',
      right: '0',
      top: '0',
    },
  },

  variants: {
    palette: toastPalettes,
  },

  defaultVariants: {
    palette: 'info',
  },
})
