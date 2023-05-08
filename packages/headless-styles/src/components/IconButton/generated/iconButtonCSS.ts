// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'

export default {
  actionIconButton: {
    backgroundColor: 'var(--ps-action-background)',
    color: 'var(--ps-action-text)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-action-background-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--ps-action-background-active)',
    },
  },
  defaultIconButton: {
    backgroundColor: 'var(--ps-background)',
    color: 'var(--ps-text)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-background-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--ps-background-active)',
    },
  },
  dangerIconButton: {
    backgroundColor: 'var(--ps-danger-background)',
    color: 'var(--ps-danger-text-inverse)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-danger-background-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--ps-danger-background-active)',
    },
  },
  mIconButton: {
    height: '2rem',
    minWidth: 'initial',
    width: '2rem',
  },
  lIconButton: {
    height: '3rem',
    minWidth: 'initial',
    width: '3rem',
  },
  textIconButton: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'transparent',
      scale: '1.1',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'transparent',
    },
    fontFamily: 'inherit',
    alignItems: 'center',
    appearance: 'none',
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
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    color: 'var(--ps-action-text-inverse)',
    '&[aria-disabled=true]': {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.5',
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
  },
  squareIconButton: {
    fontFamily: 'inherit',
    alignItems: 'center',
    appearance: 'none',
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
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    border: 'none',
    borderRadius: '6px',
    '&[aria-disabled=true]': {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.5',
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
  },
  roundIconButton: {
    fontFamily: 'inherit',
    alignItems: 'center',
    appearance: 'none',
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
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    border: 'none',
    borderRadius: '50%',
    '&[aria-disabled=true]': {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.5',
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
  },
} satisfies GeneratedStyles