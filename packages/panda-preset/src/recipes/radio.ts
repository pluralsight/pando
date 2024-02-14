import { defineSlotRecipe } from '@pandacss/dev'
import { focusStates, formStates } from './shared/states'
import { inputControl } from './shared/input.base'

const DANGER_SURFACE_TOKEN = 'danger.surface.initial'

export const radio = defineSlotRecipe({
  className: 'radio',
  description: 'The styles for the Radio component',
  slots: ['root', 'container', 'control'],

  base: {
    root: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'inline-flex',
      marginInlineStart: '4',
      verticalAlign: 'top',
    },
    container: {
      ...focusStates,
      alignItems: 'center',
      bg: 'inherit',
      border: '2px solid',
      borderColor: 'action.border.initial',
      borderImage: 'initial',
      borderRadius: '50%',
      color: 'neutral.text.initial',
      display: 'inline-flex',
      flexShrink: '0',
      height: '1.125rem',
      justifyContent: 'center',
      marginBottom: '2px',
      marginInlineEnd: '0.437rem',
      transitionDuration: '150ms',
      transitionProperty: 'background, box-shadow',
      width: '1.125rem',
      _peerChecked: {
        background: 'action.bg.initial',
        borderColor: 'action.bg.initial',
        borderWidth: 'initial',
        _before: {
          background: 'action.text.initial',
          borderRadius: '50%',
          content: "''",
          display: 'inline-block',
          height: '50%',
          position: 'relative',
          w: '50%',
        },
      },
      _hover: {
        bg: 'neutral.bg.hover',
        _disabled: {
          bg: 'inherit',
        },
        _peerChecked: {
          background: 'action.bg.hover',
          borderColor: 'action.bg.hover',
        },
        _peerInvalid: {
          bg: DANGER_SURFACE_TOKEN,
          borderColor: DANGER_SURFACE_TOKEN,
        },
        _peerReadOnly: {
          bg: 'initial',
        },
      },
      _peerInvalid: {
        bg: DANGER_SURFACE_TOKEN,
        borderColor: DANGER_SURFACE_TOKEN,
        color: 'danger.text.inverse',
      },
      _peerDisabled: {
        bg: 'neutral.surface.initial',
        borderColor: 'neutral.surface.initial',
        ...formStates._disabled,
      },
    },
    control: {
      ...inputControl,
      border: '0',
      clip: 'rect(0, 0, 0, 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    },
  },

  variants: {},

  defaultVariants: {},
})
