// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import states from '.././generated/states.module'

export default {
  pandoBtn: {
    ...states.pandoDefaultStates,
    alignItems: 'center',
    appearance: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontVariationSettings: "'wght' 600",
    fontWeight: '600',
    gap: '0.5rem',
    justifyContent: 'center',
    lineHeight: '0',
    outline: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  },
  pandoBtnBorder: {
    border: 'none',
  },
  pandoBtnRadius: {
    borderRadius: '6px',
  },
  pandoTextBtn: {
    backgroundColor: 'transparent',
    transition: 'scale 150ms ease-in-out',
    '&:hover:not(:disabled)': {
      backgroundColor: 'transparent',
      scale: '1.1',
    },
  },
} satisfies GeneratedStyles
