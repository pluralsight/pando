import { focusStates, formStates } from './states'

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
