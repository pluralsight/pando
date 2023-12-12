import { focusStates, formStates } from './states'
import { action, danger, neutral } from './palettes'

export const buttonBase = {
  alignItems: 'center',
  appearance: 'none',
  borderStyle: 'none',
  display: 'inline-flex',
  fontSize: 'inherit',
  fontVariationSettings: "'wght' 600",
  gap: '1',
  justifyContent: 'center',
  lineHeight: '0',
  outline: 'none',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'none',
  transitionProperty: 'background-color, color',
  transitionDuration: 'fast',
  transitionTimingFunction: 'ease-in-out',
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',

  ...focusStates,
  ...formStates,
}

export const nonTextStates = {
  _hover: {
    bgColor: 'colorPalette.bg.hover',
    _disabled: {
      bgColor: 'colorPalette.bg.initial',
    },
  },
  _active: {
    bgColor: 'colorPalette.bg.active',
  },
}

export const buttonPalettes = {
  action,
  neutral,
  danger,
}
