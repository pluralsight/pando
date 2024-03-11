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

const activeBg = {
  bgColor: 'colorPalette.bg.active',
}

export const nonTextStates = {
  color: 'colorPalette.text.initial',
  _hover: {
    bgColor: 'colorPalette.bg.hover',
    _disabled: {
      bgColor: 'colorPalette.bg.initial',
    },
  },
  _active: activeBg,
}

export const textUsage = {
  color: 'colorPalette.text.100',
  _hover: {
    bgColor: 'colorPalette.bg.hover',
  },
  _active: {
    color: 'colorPalette.text.initial',
  },
  _disabled: {
    _active: {
      color: 'colorPalette.text.100',
    },
  },
}

export const filledUsage = {
  bgColor: 'colorPalette.bg.initial',
  ...nonTextStates,
  _active: activeBg,
}

export const outlineUsage = {
  border: '2px solid',
  borderColor: 'colorPalette.border.initial',
  ...nonTextStates,
  _active: activeBg,
}

export const buttonPalettes = {
  action,
  neutral,
  danger,
}
