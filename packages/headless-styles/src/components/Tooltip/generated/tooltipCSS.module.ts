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
  tooltip: {
    animationDelay: '100ms',
    animationDuration: '150ms',
    animationFillMode: 'forwards',
    animationName: 'fadeIn',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: 'var(--ps-surface-inverse)',
    borderRadius: '4px',
    color: 'var(--ps-text-inverse)',
    display: 'none',
    fontSize: '0.75rem',
    fontVariationSettings: "'wght' 400",
    fontWeight: '400',
    lineHeight: '1.25',
    minWidth: '10em',
    opacity: '0',
    padding: '0.5rem',
    position: 'absolute',
    textAlign: 'start',
    zIndex: '1700',
    '&:hover': {
      display: 'inline-block',
    },
    '&::after': {
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: '12px',
      content: "''",
      display: 'block',
      position: 'absolute',
    },
  },
  tooltipWrapper: {
    display: 'inline-block',
    position: 'relative',
    '&:hover .tooltip': {
      display: 'inline-block',
    },
    '&:focus-within .tooltip': {
      display: 'inline-block',
    },
  },
  tooltipTrigger: {
    borderRadius: '4px',
    cursor: 'pointer',
    '&:focus': {
      outline: '3px solid var(--ps-info-border)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  topTooltip: {
    bottom: '100%',
    marginBottom: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    '&::after': {
      left: '50%',
      transform: 'translateX(-12px)',
    },
  },
  topStartTooltip: {
    bottom: '100%',
    marginBottom: '12px',
    left: '0',
    '&::after': {
      left: '4px',
    },
  },
  topEndTooltip: {
    bottom: '100%',
    marginBottom: '12px',
    right: '0',
    '&::after': {
      right: '4px',
    },
  },
  bottomTooltip: {
    marginTop: '12px',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    '&::after': {
      left: '50%',
      transform: 'translateX(-12px)',
    },
  },
  bottomStartTooltip: {
    marginTop: '12px',
    top: '100%',
    left: '0',
    '&::after': {
      left: '4px',
    },
  },
  bottomEndTooltip: {
    marginTop: '12px',
    top: '100%',
    right: '0',
    '&::after': {
      right: '4px',
    },
  },
  leftTooltip: {
    marginRight: '12px',
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    '&::after': {
      top: '50%',
      transform: 'translateY(-12px)',
    },
  },
  leftStartTooltip: {
    marginRight: '12px',
    right: '100%',
    top: '-4px',
    '&::after': {
      top: '4px',
    },
  },
  leftEndTooltip: {
    marginRight: '12px',
    right: '100%',
    bottom: '-4px',
    '&::after': {
      bottom: '4px',
    },
  },
  rightTooltip: {
    left: '100%',
    marginLeft: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    '&::after': {
      top: '50%',
      transform: 'translateY(-12px)',
    },
  },
  rightStartTooltip: {
    left: '100%',
    marginLeft: '12px',
    top: '-4px',
    '&::after': {
      top: '4px',
    },
  },
  rightEndTooltip: {
    left: '100%',
    marginLeft: '12px',
    bottom: '-4px',
    '&::after': {
      bottom: '4px',
    },
  },
}
