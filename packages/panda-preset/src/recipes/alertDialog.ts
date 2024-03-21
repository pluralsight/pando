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
      _open: {
        ...fadeInDown,
      },
    },
    header: {
      ...dialogHeader,
      marginTop: '1.2rem',
    },
    popover: {
      ...alertDialogStyles,
      display: 'none',
      h: 'initial',
      w: '17.5rem',
      paddingInlineEnd: '2.5rem',
      position: 'absolute',
      zIndex: 'modal',

      _open: {
        animationName: 'fadeIn',
        display: 'inline-block',
      },
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
