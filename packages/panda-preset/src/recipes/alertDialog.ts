import { defineSlotRecipe } from '@pandacss/dev'
import {
  alertDialog as alertDialogStyles,
  dialogHeader,
  dialogTitleIcon,
  dialogFooter,
} from './shared/dialog'
import { fadeInDown } from './shared/animations'

const SLOTS = [
  'root',
  'header',
  'popover',
  'titleIcon',
  'iconButtonWrapper',
  'label',
  'inputWrapper',
  'footer',
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
    header: {
      ...dialogHeader,
      marginTop: '40px',
      textStyle: 'h4',
    },
    popover: {
      h: 'initial',
      paddingInlineEnd: '1.5rem',
      zIndex: 'modal',
    },
    titleIcon: dialogTitleIcon,
    iconButtonWrapper: {
      position: 'absolute',
      right: '0',
      top: '0',
    },
    label: {
      display: 'block',
      fontVariationSettings: "'wght' 500",
      fontWeight: '500',
      marginTop: '1.2rem',
    },
    inputWrapper: {
      marginTop: '1rem',
    },
    footer: dialogFooter,
  },

  variants: {},

  defaultVariants: {},
})
