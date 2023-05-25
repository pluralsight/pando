// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'

export default {
  pando_filledButton: {
    '&:is([aria-disabled=true], :disabled, [disabled], [data-readonly=true])': {
      cursor: 'not-allowed',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
    fontFamily: 'inherit',
    '&:is([aria-disabled=true], :disabled)': {
      opacity: '0.5',
    },
    alignItems: 'center',
    WebkitAppearance: 'none',
    appearance: 'none',
    borderStyle: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 'inherit',
    fontVariationSettings: '"wght" 600',
    fontWeight: '600',
    gap: '0.5rem',
    justifyContent: 'center',
    lineHeight: '0',
    outline: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    transition:
      'background-color 250ms ease-in-out, color 250ms ease-in-out, scale 150ms ease-in-out',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    borderRadius: '6px',
  },
  pando_outlineButton: {
    '&:is([aria-disabled=true], :disabled, [disabled], [data-readonly=true])': {
      cursor: 'not-allowed',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
    fontFamily: 'inherit',
    '&:is([aria-disabled=true], :disabled)': {
      opacity: '0.5',
    },
    alignItems: 'center',
    WebkitAppearance: 'none',
    appearance: 'none',
    borderStyle: 'solid',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 'inherit',
    fontVariationSettings: '"wght" 600',
    fontWeight: '600',
    gap: '0.5rem',
    justifyContent: 'center',
    lineHeight: '0',
    outline: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    transition:
      'background-color 250ms ease-in-out, color 250ms ease-in-out, scale 150ms ease-in-out',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    borderWidth: '2px',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    color: 'var(--ps-text)',
  },
  pando_textButton: {
    '&:is([aria-disabled=true], :disabled, [disabled], [data-readonly=true])': {
      cursor: 'not-allowed',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
    fontFamily: 'inherit',
    '&:is([aria-disabled=true], :disabled)': {
      opacity: '0.5',
    },
    alignItems: 'center',
    WebkitAppearance: 'none',
    appearance: 'none',
    borderStyle: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 'inherit',
    fontVariationSettings: '"wght" 600',
    fontWeight: '600',
    gap: '0.5rem',
    justifyContent: 'center',
    lineHeight: '0',
    outline: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'underline',
    textTransform: 'none',
    transition:
      'background-color 250ms ease-in-out, color 250ms ease-in-out, scale 150ms ease-in-out',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    color: 'var(--ps-text)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'transparent',
      color: 'var(--ps-action-navigation-hover)',
      scale: '1.1',
      textDecoration: 'none',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'transparent',
      color: 'var(--ps-action-navigation-visited)',
    },
  },
  pando_actionButton: {
    backgroundColor: 'var(--ps-action-background)',
    borderColor: 'var(--ps-action-border)',
    color: 'var(--ps-action-text)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-action-background-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--ps-action-background-active)',
    },
  },
  pando_defaultButton: {
    backgroundColor: 'var(--ps-background)',
    borderColor: 'var(--ps-border-strong)',
    color: 'var(--ps-text)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-background-hover)',
    },
  },
  pando_dangerButton: {
    backgroundColor: 'var(--ps-danger-background)',
    borderColor: 'var(--ps-danger-border)',
    color: 'var(--ps-danger-text-inverse)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-danger-background-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--ps-danger-background-active)',
    },
  },
  pando_mButton: {
    fontSize: '0.875rem',
    height: '2rem',
    minWidth: '2.5rem',
    WebkitPaddingEnd: '1.125rem',
    paddingInlineEnd: '1.125rem',
    WebkitPaddingStart: '1.125rem',
    paddingInlineStart: '1.125rem',
    '&:has(.pando-avatar)': {
      height: 'auto',
    },
  },
  pando_lButton: {
    height: '3rem',
    minWidth: '2.5rem',
    WebkitPaddingEnd: '2.156rem',
    paddingInlineEnd: '2.156rem',
    WebkitPaddingStart: '2.156rem',
    paddingInlineStart: '2.156rem',
    '&:has(.pando-avatar)': {
      height: 'auto',
    },
  },
  'is(.pando_defaultButton, .pando_outlineButton):active:not(:disabled)': {
    backgroundColor: 'var(--ps-background-active)',
  },
} satisfies GeneratedStyles
