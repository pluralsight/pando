// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputBase: {
    appearance: 'none',
    background: 'var(--ps-surface-weak)',
    borderColor: 'var(--ps-border)',
    borderImage: 'initial',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'var(--ps-text-strong)',
    fontFamily: 'inherit',
    fontSize: '0.875rem',
    height: '2rem',
    marginTop: '8px',
    minWidth: '0',
    outline: 'transparent solid 2px',
    outlineOffset: '2px',
    paddingInlineEnd: '2.75rem',
    paddingInlineStart: '1rem',
    position: 'relative',
    transitionDuration: '150ms',
    transitionProperty: 'box-shadow, opacity, transform',
    width: '100%',
    '&:active': {
      boxShadow: 'none',
      outline: 'none',
    },
    '&:hover': {
      boxShadow: 'var(--ps-border-strong) 0 0 0 1px',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  '': {
    '&::placeholder': {
      color: 'var(--ps-text-weak)',
      opacity: '1',
    },
  },
  inputIcon: {
    display: 'inline-block',
    position: 'absolute',
    right: '0.798rem',
    top: '2.2rem',
    zIndex: '50',
  },
  mInputIcon: {
    composes: 'inputIcon',
  },
  lInputIcon: {
    composes: 'inputIcon',
    top: '2.8rem',
  },
  mInputBase: {
    composes: 'inputBase',
  },
  lInputBase: {
    composes: 'inputBase',
    fontSize: '1rem',
    height: '3rem',
  },
  inputBase_data_disabled__true: {
    opacity: '0.7',
    cursor: 'not-allowed',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  inputBase_data_invalid__true: {
    borderColor: 'var(--ps-danger-border)',
    boxShadow: 'var(--ps-danger-border) 0 0 0 1px',
  },
  inputBase_data_readonly__true: {
    cursor: 'not-allowed',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  inputIcon_data_invalid__true: {
    color: 'var(--ps-danger-text-weak)',
  },
}
