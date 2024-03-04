import { defineSlotRecipe } from '@pandacss/dev'
import { focusStates } from './shared/states'

export const switchInput = defineSlotRecipe({
  className: 'switch-input',
  description: 'The styles for the SwitchInput component',
  slots: ['root', 'track', 'control', 'thumb'],

  base: {
    root: {
      // just use the hstack recipe
      userSelect: 'none',
      _invalid: {
        color: 'danger.text.200',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    track: {
      alignItems: 'center',
      bgColor: 'inherit',
      display: 'flex',
      justifyContent: 'flex-start',
      rounded: 'full',
      outline: '1px solid',
      outlineColor: 'action.border.initial',
      overflow: 'hidden',
      transition: 'all 200ms ease-in-out',
      _groupChecked: {
        bgColor: 'action.bg.initial',
      },
      _groupInvalid: {
        outlineColor: 'danger.border.initial',
        _groupChecked: {
          bgColor: 'danger.bg.initial',
        },
      },
    },
    control: {
      display: 'none',
      h: 'full',
      w: 'full',
      rounded: 'full',
      ...focusStates,
    },
    thumb: {
      bgColor: 'action.text.100',
      rounded: 'full',
      shadow: 'sm',
      scale: 0.6,
      transformOrigin: 'center',
      transition: 'all 150ms ease-in-out',
      willChange: 'transform, scale, background-color',
      _peerInvalid: {
        bgColor: 'danger.bg.initial',
        _groupChecked: {
          bgColor: 'danger.text.inverse',
        },
      },
      _peerChecked: {
        bgColor: 'action.text.initial',
        scale: 1,
        transform: 'translate3d(130%, 0, 0)',
      },
    },
  },

  variants: {
    size: {
      sm: {
        track: {
          h: '1rem',
          pxi: '2px',
          w: '2rem',
        },
        thumb: {
          h: '0.75rem',
          w: '0.75rem',
        },
      },
      lg: {
        track: {
          h: '1.5rem',
          pxi: '3px',
          w: '3rem',
        },
        thumb: {
          h: '1.125rem',
          w: '1.125rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
