import { defineSlotRecipe } from '@pandacss/dev'
import {
  tooltipBase,
  tooltipWrapper,
  tooltipContentBase,
  tooltipTrigger,
} from './shared/tooltip'

const SLOTS = [
  'root',
  'wrapper',
  'content',
  'contentWithHeading',
  'header',
  'closeButtonWrapper',
  'trigger',
]

const popoverContent = {
  ...tooltipContentBase,
  bgColor: 'action.bg.100.initial',
  borderColor: 'action.border.initial',
  border: '1px solid',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
  color: 'action.text.initial',
  fontFamily: 'inherit',
  fontSize: '0.75em',
  fontVariationSettings: "'wght' 400",
  fontWeight: '400',
  lineHeight: '1.25',
  padding: '1rem 2.5rem 1rem 1rem',

  _after: {
    bgColor: 'action.bg.100.initial',
    borderColor:
      'transparent transparent action.border.initial action.border.initial;',
    border: '1px solid',
    content: '""',
    display: 'block',
    fontSize: '0.75rem',
    h: '1em',
    w: '1em',
    position: 'absolute',
    zIndex: 'popover',
  },
}

export const popover = defineSlotRecipe({
  className: 'popover',
  description: 'The styles for the Popover component',
  slots: SLOTS,

  base: {
    root: {
      ...tooltipBase,
      animationDelay: '100ms',
      maxWidth: 'none',
      minWidth: '17.5em',
      textAlign: 'start',
      zIndex: 'popover',
    },
    wrapper: { ...tooltipWrapper },
    content: popoverContent,
    contentWithHeading: { ...popoverContent, paddingTop: 0 },
    header: {
      alignItems: 'center',
      display: 'flex',
      fontVariationSettings: "'wght' 700",
      fontWeight: '700',
      minHeight: '2.5rem',
      whiteSpace: 'nowrap',
    },
    closeButtonWrapper: {
      alignItems: 'center',
      display: 'flex',
      h: '2.5rem',
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: '1601',
    },
    trigger: {
      ...tooltipTrigger,

      appearance: 'none',
      bg: 'none',
      border: 'none',
      borderRadius: 'sm',
      color: 'action.text.initial',
      fontFamily: 'inherit',
      outline: 'none',

      "&[aria-expanded='true'] + [data-popover]": {
        display: 'inline-block',
      },
    },
  },
})
