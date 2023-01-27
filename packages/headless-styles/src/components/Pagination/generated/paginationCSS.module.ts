// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import buttonCSS from '../../Button/generated/buttonCSS.module'

export default {
  paginationContainer: {
    alignItems: 'center',
    columnGap: '1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
    rowGap: '0',
    textAlign: 'right',
    width: '100%',
  },
  paginationBtn: {
    ...buttonCSS.btnBase,
    backgroundColor: 'var(--ps-background)',
    borderRadius: '6px',
    color: 'var(--ps-text)',
    height: '2rem',
    minWidth: 'initial',
    paddingInlineEnd: '1rem',
    paddingInlineStart: '1rem',
    '&:hover': {
      backgroundColor: 'var(--ps-background-hover)',
    },
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  paginationNewer: {
    ...buttonCSS.btnBase,
    backgroundColor: 'var(--ps-background)',
    borderRadius: '6px',
    color: 'var(--ps-text)',
    height: '2rem',
    minWidth: 'initial',
    paddingInlineEnd: '1rem',
    paddingInlineStart: '1rem',
    '&:hover': {
      backgroundColor: 'var(--ps-background-hover)',
    },
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  paginationOlder: {
    ...buttonCSS.btnBase,
    backgroundColor: 'var(--ps-background)',
    borderRadius: '6px',
    color: 'var(--ps-text)',
    height: '2rem',
    minWidth: 'initial',
    paddingInlineEnd: '1rem',
    paddingInlineStart: '1rem',
    '&:hover': {
      backgroundColor: 'var(--ps-background-hover)',
    },
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
    marginLeft: '0.5rem',
  },
  paginationText: {
    color: 'var(--ps-text-medium)',
  },
  paginationText___strong: {
    color: 'var(--ps-text-strong)',
  },
}
