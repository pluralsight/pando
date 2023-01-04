// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  radioGroup: {
    alignItems: 'center',
    display: 'flex',
  },
  radioContainer: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    marginInlineStart: '1rem',
    verticalAlign: 'top',
    "&[data-disabled='true']": {
      cursor: 'not-allowed',
    },
    "&[data-readonly='true']": {
      cursor: 'not-allowed',
    },
  },
  radioInput: {
    border: '0',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
    '&:focus + .radioControl': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible) + .radioControl': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  radioControl: {
    alignItems: 'center',
    borderColor: 'var(--ps-action-border)',
    borderImage: 'initial',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'var(--ps-text)',
    display: 'inline-flex',
    flexShrink: '0',
    justifyContent: 'center',
    height: '1.125rem',
    marginBottom: '2px',
    marginInlineEnd: '0.437rem',
    transitionDuration: '150ms',
    transitionProperty: 'background, box-shadow',
    width: '1.125rem',
    '&:hover': {
      background: 'var(--ps-background-hover)',
    },
    "&[data-checked='true']": {
      background: 'var(--ps-action-background)',
      borderColor: 'var(--ps-action-background)',
    },
    "&[data-disabled='true']": {
      background: 'var(--ps-background)',
      borderColor: 'var(--ps-background)',
    },
    "&[data-invalid='true']": {
      background: 'var(--ps-danger-surface)',
      borderColor: 'var(--ps-danger-surface)',
    },
  },
  radioControl_data_checked__true: {
    '&:hover': {
      background: 'var(--ps-action-background-hover)',
      borderColor: 'var(--ps-action-background-hover)',
    },
    '&::before': {
      background: 'var(--ps-action-text)',
      borderRadius: '50%',
      content: "''",
      display: 'inline-block',
      height: '50%',
      position: 'relative',
      width: '50%',
    },
  },
  radioControl_data_invalid__true: {
    '&:hover': {
      background: 'var(--ps-danger-surface)',
      borderColor: 'var(--ps-danger-surface)',
    },
  },
  radioControl_data_readonly__true: {
    '&:hover': {
      backgroundColor: 'initial',
    },
  },
}
