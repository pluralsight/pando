// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  tabWrapper: {
    width: '100%',
  },
  tabList: {
    backgroundImage:
      'linear-gradient(\n    to top,\n    transparent 0,\n    transparent 1rem,\n    var(--ps-border-weak) 1.0625rem,\n    var(--ps-border-weak) 1.125rem,\n    transparent 1.1875rem,\n    transparent 100%\n  )',
    borderRadius: '6px',
    display: 'flex',
    WebkitOverflowScrolling: 'touch',
    overflowY: 'auto',
    padding: '5px',
    paddingBlockEnd: '1rem',
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focusVisible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  tabBase: {
    appearance: 'none',
    background: 'transparent',
    border: '0',
    borderRadius: '6px',
    color: 'var(--ps-action-text-weak)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    height: '4rem',
    marginInlineEnd: '2rem',
    padding: '0',
    position: 'relative',
    whiteSpace: 'nowrap',
    '&::after': {
      backgroundColor: 'var(--ps-background-hover)',
      borderRadius: '2px 2px 0 0',
      bottom: '0.125rem',
      content: "''",
      display: 'block',
      height: '0',
      left: '0',
      marginTop: '1.125rem',
      position: 'absolute',
      right: '0',
      transition:
        'height 150ms ease-in-out, background-color 250ms ease-in-out',
      width: '100%',
    },
    '&:hover::after': {
      height: '0.25rem',
    },
    "&[ariaSelected='true']": {
      color: 'var(--ps-action-text-inverse)',
    },
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focusVisible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  mTab: {
    appearance: 'none',
    background: 'transparent',
    border: '0',
    borderRadius: '6px',
    color: 'var(--ps-action-text-weak)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    height: '4rem',
    marginInlineEnd: '2rem',
    padding: '0',
    position: 'relative',
    whiteSpace: 'nowrap',
    '&::after': {
      backgroundColor: 'var(--ps-background-hover)',
      borderRadius: '2px 2px 0 0',
      bottom: '0.125rem',
      content: "''",
      display: 'block',
      height: '0',
      left: '0',
      marginTop: '1.125rem',
      position: 'absolute',
      right: '0',
      transition:
        'height 150ms ease-in-out, background-color 250ms ease-in-out',
      width: '100%',
    },
    '&:hover::after': {
      height: '0.25rem',
    },
    "&[ariaSelected='true']": {
      color: 'var(--ps-action-text-inverse)',
    },
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focusVisible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  sTab: {
    appearance: 'none',
    background: 'transparent',
    border: '0',
    borderRadius: '6px',
    color: 'var(--ps-action-text-weak)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '0.875rem',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    height: '3rem',
    marginInlineEnd: '1.5rem',
    padding: '0',
    position: 'relative',
    whiteSpace: 'nowrap',
    '&::after': {
      backgroundColor: 'var(--ps-background-hover)',
      borderRadius: '2px 2px 0 0',
      bottom: '0.125rem',
      content: "''",
      display: 'block',
      height: '0',
      left: '0',
      marginTop: '0.72rem',
      position: 'absolute',
      right: '0',
      transition:
        'height 150ms ease-in-out, background-color 250ms ease-in-out',
      width: '100%',
    },
    '&:hover::after': {
      height: '0.25rem',
    },
    "&[ariaSelected='true']": {
      color: 'var(--ps-action-text-inverse)',
    },
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focusVisible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  tabBase_aria_selected__true: {
    '&::after': {
      backgroundColor: 'var(--ps-action-border)',
      height: '0.25rem',
    },
  },
  tabPanel: {
    borderRadius: '6px',
    width: '100%',
    "&[ariaHidden='true']": {
      display: 'none',
    },
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focusVisible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
}
