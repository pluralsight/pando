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
  'closeIcon',
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
        WebkitTransform: 'translate(-50%, -50%)',
        w: { base: '100%', md: 'fit-content' },
        minWidth: { base: 'inherit', md: '350px' },
        maxWidth: { base: 'inherit', md: '50ch' },
        maxHeight: '100vh',
        overflowY: 'auto',
      },
    },
    closeButton: {
      ...buttonBase,
      position: 'absolute',
      borderRadius: 'sm',
      right: '0',
      top: '0',
      marginTop: '1',
      marginRight: '1',
      h: '3rem',
      w: '3rem',
      margin: '1rem',
      _focus: {
        outline: 'none',
        border: '3px solid',
        borderColor: 'action.border.focus',
      },
    },
    closeIcon: {
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
