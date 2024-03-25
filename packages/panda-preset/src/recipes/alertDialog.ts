import { defineSlotRecipe } from '@pandacss/dev'
import {
  alertDialog as alertDialogStyles,
  dialogHeader,
  dialogFooter,
} from './shared/dialog'
import { buttonBase } from './shared/button.base'
import { fadeInDown } from './shared/animations'

const SLOTS = [
  'root',
  'closeButton',
  'header',
  'headerIcon',
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
      display: 'none',

      '&[open]': {
        ...fadeInDown,
        ...alertDialogStyles,
        position: 'fixed',
        left: '50%',
        top: '50%',
        translate: 'auto',
        translateX: '-50%',
        translateY: '-50%',
        w: 'fit-content',
        minWidth: '350px',
        maxWidth: '50ch',
        maxHeight: '100vh',
        overflow: 'scroll',
      },
    },
    closeButton: {
      ...buttonBase,
      position: 'absolute',
      right: '0',
      top: '0',
      h: '3rem',
      w: '3rem',
      pxi: '3',
      _hover: {
        scale: 1.1,
      },
    },
    header: {
      ...dialogHeader,
      textStyle: 'h4',
    },
    headerIcon: {
      marginRight: '10px',
      color: 'danger.text.100',
    },
    bodyContent: {
      h: 'initial',
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
