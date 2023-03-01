// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import button from '../../shared/generated/button.module'

export default {
  btnBase: {
    ...button.pandoBtn,
  },
  btnDefaultBorder: {
    ...button.pandoBtnBorder,
  },
  btnDefaultRadius: {
    ...button.pandoBtnRadius,
  },
  actionButton: {
    backgroundColor: 'var(--ps-action-background)',
    color: 'var(--ps-action-text)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-action-background-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--ps-action-background-active)',
    },
  },
  defaultButton: {
    backgroundColor: 'var(--ps-background)',
    color: 'var(--ps-text)',
  },
  dangerButton: {
    backgroundColor: 'var(--ps-danger-background)',
    color: 'var(--ps-danger-text-inverse)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--ps-danger-background-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--ps-danger-background-active)',
    },
  },
  filledButton: {
    ...button.pandoBtn,
    ...button.pandoBtnRadius,
    ...button.pandoBtnBorder,
  },
  outlineButton: {
    ...button.pandoBtn,
    ...button.pandoBtnRadius,
    backgroundColor: 'transparent',
    border: '2px solid var(--ps-border-strong)',
    color: 'var(--ps-text)',
  },
  textButton: {
    ...button.pandoBtn,
    ...button.pandoBtnRadius,
    ...button.pandoBtnBorder,
    backgroundColor: 'transparent',
    color: 'var(--ps-action-navigation)',
    textDecoration: 'underline',
    '&:hover:not(:disabled)': {
      // @ts-ignore
      ...button.pandoBtn['&:hover:not(:disabled)'],
      // @ts-ignore
      ...button.pandoBtnRadius['&:hover:not(:disabled)'],
      // @ts-ignore
      ...button.pandoBtnBorder['&:hover:not(:disabled)'],
      backgroundColor: 'transparent',
      color: 'var(--ps-action-navigation-hover)',
      scale: '1.1',
      textDecoration: 'none',
    },
    '&:active:not(:disabled)': {
      // @ts-ignore
      ...button.pandoBtn['&:active:not(:disabled)'],
      // @ts-ignore
      ...button.pandoBtnRadius['&:active:not(:disabled)'],
      // @ts-ignore
      ...button.pandoBtnBorder['&:active:not(:disabled)'],
      backgroundColor: 'transparent',
      color: 'var(--ps-action-navigation-visited)',
    },
  },
  mButton: {
    fontSize: '0.875rem',
    height: '2rem',
    minWidth: '2.5rem',
    paddingInlineEnd: '1.125rem',
    paddingInlineStart: '1.125rem',
  },
  lButton: {
    height: '3rem',
    minWidth: '2.5rem',
    paddingInlineEnd: '2.156rem',
    paddingInlineStart: '2.156rem',
  },
  'is(.defaultButton, .outlineButton):hover:not(:disabled)': {
    backgroundColor: 'var(--ps-background-hover)',
  },
  'is(.defaultButton, .outlineButton):active:not(:disabled)': {
    backgroundColor: 'var(--ps-background-active)',
  },
} satisfies GeneratedStyles
