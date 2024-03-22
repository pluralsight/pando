import { defineSlotRecipe } from '@pandacss/dev'
import {
  alertDialog as alertDialogStyles,
  dialogHeader,
  dialogFooter,
} from './shared/dialog'
import { fadeInDown } from './shared/animations'

const SLOTS = [
  'root',
  'closeButton',
  'header',
  'bodyContent',
  'footer',
  'inputWrapper',
]

export const alertDialog = defineSlotRecipe({
  className: 'alertDialog',
  description: 'The styles for the Alert Dialog component',
  slots: SLOTS,

  base: {
    root: {
      ...alertDialogStyles,
      position: 'fixed',
      left: '50%',
      top: '50%',
      translate: 'auto',
      translateX: '-50%',
      translateY: '-50%',
      w: '400px',

      '&[open]': {
        ...fadeInDown,
      },
    },
    closeButton: {
      position: 'absolute',
      right: '0',
      top: '0',
    },
    header: {
      ...dialogHeader,
      marginTop: '40px',
      textStyle: 'h4',
    },
    bodyContent: {
      h: 'initial',
      paddingInlineEnd: '1.5rem',
      zIndex: 'modal',
    },
    footer: dialogFooter,
    inputWrapper: {
      marginTop: '1rem',
    },
  },

  variants: {},

  defaultVariants: {},
})
