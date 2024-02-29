import { defineSlotRecipe } from '@pandacss/dev'
import { focusStates } from './shared/states'

export const switchInput = defineSlotRecipe({
  className: 'switch-input',
  description: 'The styles for the SwitchInput component',
  slots: ['root', 'track', 'control', 'thumb'],

  base: {
    root: {
      // just use the hstack recipe
      ...focusStates,
      _peerInvalid: {
        color: 'danger.text.200',
      },
      _peerDisabled: {
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
      transition: 'background-color 200ms ease-in-out',
    },
    control: {
      display: 'none',
      h: 'full',
      w: 'full',
    },
    thumb: {
      bgColor: 'action.text.100',
      rounded: 'full',
      shadow: 'sm',
      transition: 'all 0.2s ease-in-out',
      willChange: 'width, height, transform, background-color',
      _peerChecked: {
        bgColor: 'action.text.100',
        transform: 'translate3d(100%, 0, 0)',
      },
      _peerInvalid: {
        bgColor: 'danger.bg.initial',
        _peerChecked: {
          bgColor: 'danger.text.inverse',
        },
      },
    },
  },

  variants: {
    size: {
      sm: {
        track: {
          h: '1rem',
          w: '2rem',
        },
        thumb: {
          h: '0.5rem',
          w: '0.5rem',
          _peerChecked: {
            h: '0.75rem',
            w: '0.75rem',
          },
        },
      },
      lg: {
        track: {
          h: '1.5rem',
          w: '3rem',
        },
        thumb: {
          h: '0.75rem',
          w: '0.75rem',
          _peerChecked: {
            h: '1.125rem',
            w: '1.125rem',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
