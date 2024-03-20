import { defaultStates } from './states'

const inlineBlock = { display: 'inline-block' }

export const tooltipWrapper = {
  ...inlineBlock,
  position: 'relative',

  '&:is(:hover, :focus-within) > [data-tooltip]:not([disabled])': inlineBlock,
}

export const tooltipBase = {
  animation: 'fadeIn',
  display: 'none',
  opacity: 0,
  position: 'absolute',

  '&:not([disabled])': {
    _hover: inlineBlock,
  },
}

export const tooltipContentBase = {
  position: 'relative',
}

export const tooltipTrigger = {
  ...defaultStates,

  alignItems: 'center',
  display: 'inline-flex',
  gap: '0.25em',
}
