import { defineSlotRecipe } from '@pandacss/dev'

const SLOTS = [
  'root',
  'wrapper',
  'content',
  'header',
  'closeButtonWrapper',
  'closeButton',
  'trigger',
]

const inlineBlock = { display: 'inline-block' }

export const popover = defineSlotRecipe({
  className: 'popover',
  description: 'The styles for the Popover component',
  slots: SLOTS,

  base: {
    root: {
      animationName: 'fadeIn',
      display: 'none',
      opacity: 0,
      position: 'absolute',
      animationDelay: '100ms',
      maxWidth: 'none',
      minWidth: '17.5em',
      textAlign: 'start',
      zIndex: 'popover',

      _expanded: inlineBlock,
      _hover: inlineBlock,
      _disabled: { _hover: { display: 'none' } },
    },
    wrapper: {
      ...inlineBlock,
      position: 'relative',
      _hover: inlineBlock,
      _focusWithin: inlineBlock,
      _disabled: { _hover: { display: 'none' } },
    },
    content: {
      position: 'relative',
      bgColor: 'action.bg.100.initial',
      border: '1px solid',
      borderColor: 'action.border.initial',
      color: 'action.text.initial',
      borderRadius: 'sm',
      boxShadow:
        '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);',
      fontFamily: 'inherit',
      fontSize: '0.75rem',
      fontVariationSettings: "'wght' 400",
      fontWeight: 400,
      lineHeight: '1.25',
      padding: '1rem 2.5rem 1rem 1rem',
    },
    header: {},
    closeButtonWrapper: {},
    closeButton: {},
    trigger: {},
  },

  variants: {},

  defaultVariants: {
    size: 'md',
    cycle: 'determinate',
  },
})
