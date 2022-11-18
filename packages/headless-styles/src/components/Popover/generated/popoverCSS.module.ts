// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  keyframesFadeIn: {
    '@keyframes fadeIn': {
      from: {
        opacity: '0',
      },
      to: {
        opacity: '1',
      },
    },
  },
  popoverWrapper: {
    display: 'inline-block',
    position: 'relative',
  },
  popover: {
    animationDelay: '100ms',
    animationDuration: '150ms',
    animationFillMode: 'forwards',
    animationName: 'fadeIn',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: 'var(--ps-surface-weak)',
    borderColor: 'var(--ps-border)',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
    color: 'var(--ps-text)',
    display: 'none',
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontVariationSettings: "'wght' 400",
    fontWeight: '400',
    lineHeight: '1.25',
    maxWidth: 'none',
    minWidth: '17.5em',
    opacity: '0',
    padding: '0 1rem 1rem',
    position: 'absolute',
    textAlign: 'start',
    zIndex: '1500',
  },
  popoverPointer: {
    backgroundColor: 'var(--ps-surface-weak)',
    borderColor: 'var(--ps-border)',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 1px',
    display: 'block',
    height: '0.875rem',
    position: 'absolute',
    transform: 'rotateZ(45deg)',
    width: '0.875rem',
    zIndex: '-1',
  },
  popoverHeader: {
    alignItems: 'center',
    display: 'flex',
    fontVariationSettings: "'wght' 700",
    fontWeight: '700',
    minHeight: '2.5rem',
    paddingRight: '1.5rem',
    whiteSpace: 'nowrap',
  },
  popoverCloseButtonWrapper: {
    alignItems: 'center',
    display: 'flex',
    height: '2.5rem',
    position: 'absolute',
    right: '0',
    top: '0',
  },
  popoverTrigger: {
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block',
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  popover_data_expanded__true: {
    display: 'inline-block',
  },
  popoverTrigger_aria_expanded__true______data_popover: {
    display: 'inline-block',
  },
}
