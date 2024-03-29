// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'

export default {
  pando_toastButton: {
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
    fontSize: '0.875rem',
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
    backgroundColor: 'transparent',
    borderColor: 'inherit',
    borderRadius: '6px',
    borderWidth: '2px',
    color: 'inherit',
    height: '2rem',
    WebkitPaddingStart: '1rem',
    paddingInlineStart: '1rem',
    WebkitPaddingEnd: '1rem',
    paddingInlineEnd: '1rem',
    pointerEvents: 'initial',
  },
  keyframesFadeInAnimation: {
    '@keyframes fadeInAnimation': {
      from: {
        opacity: '0',
      },
      to: {
        opacity: '1',
      },
    },
  },
  pando_infoToast: {
    WebkitAnimationDuration: '150ms',
    animationDuration: '150ms',
    WebkitAnimationFillMode: 'forwards',
    animationFillMode: 'forwards',
    WebkitAnimationName: 'fadeInAnimation',
    animationName: 'fadeInAnimation',
    WebkitAnimationTimingFunction: 'ease-in-out',
    animationTimingFunction: 'ease-in-out',
    alignItems: 'center',
    borderRadius: '6px',
    display: 'flex',
    WebkitPaddingEnd: '4rem',
    paddingInlineEnd: '4rem',
    position: 'relative',
    width: '100%',
    backgroundColor: 'var(--ps-info-surface)',
    color: 'var(--ps-info-text)',
  },
  pando_successToast: {
    WebkitAnimationDuration: '150ms',
    animationDuration: '150ms',
    WebkitAnimationFillMode: 'forwards',
    animationFillMode: 'forwards',
    WebkitAnimationName: 'fadeInAnimation',
    animationName: 'fadeInAnimation',
    WebkitAnimationTimingFunction: 'ease-in-out',
    animationTimingFunction: 'ease-in-out',
    alignItems: 'center',
    borderRadius: '6px',
    display: 'flex',
    WebkitPaddingEnd: '4rem',
    paddingInlineEnd: '4rem',
    position: 'relative',
    width: '100%',
    backgroundColor: 'var(--ps-success-surface)',
    color: 'var(--ps-success-text)',
  },
  pando_warningToast: {
    WebkitAnimationDuration: '150ms',
    animationDuration: '150ms',
    WebkitAnimationFillMode: 'forwards',
    animationFillMode: 'forwards',
    WebkitAnimationName: 'fadeInAnimation',
    animationName: 'fadeInAnimation',
    WebkitAnimationTimingFunction: 'ease-in-out',
    animationTimingFunction: 'ease-in-out',
    alignItems: 'center',
    borderRadius: '6px',
    display: 'flex',
    WebkitPaddingEnd: '4rem',
    paddingInlineEnd: '4rem',
    position: 'relative',
    width: '100%',
    backgroundColor: 'var(--ps-warning-surface)',
    color: 'var(--ps-warning-text)',
  },
  pando_dangerToast: {
    WebkitAnimationDuration: '150ms',
    animationDuration: '150ms',
    WebkitAnimationFillMode: 'forwards',
    animationFillMode: 'forwards',
    WebkitAnimationName: 'fadeInAnimation',
    animationName: 'fadeInAnimation',
    WebkitAnimationTimingFunction: 'ease-in-out',
    animationTimingFunction: 'ease-in-out',
    alignItems: 'center',
    borderRadius: '6px',
    display: 'flex',
    WebkitPaddingEnd: '4rem',
    paddingInlineEnd: '4rem',
    position: 'relative',
    width: '100%',
    backgroundColor: 'var(--ps-danger-surface)',
    color: 'var(--ps-danger-text)',
  },
  keyframesPopInAnimation: {
    '@keyframes popInAnimation': {
      from: {
        opacity: '0',
        WebkitTransform: 'scale(0.9)',
        transform: 'scale(0.9)',
      },
      to: {
        opacity: '1',
        WebkitTransform: 'scale(1)',
        transform: 'scale(1)',
      },
    },
  },
  pando_toastCloseIconWrapper: {
    display: 'inline-block',
    pointerEvents: 'initial',
    position: 'absolute',
    right: '0',
    top: '0',
  },
  pando_toastHeading: {
    paddingBottom: '0.25rem',
  },
  pando_toastIconWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    WebkitPaddingEnd: '1.5rem',
    paddingInlineEnd: '1.5rem',
    WebkitPaddingStart: '1.5rem',
    paddingInlineStart: '1.5rem',
  },
  pando_toastSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '5.25rem',
    paddingBottom: '1rem',
    WebkitPaddingEnd: '0.875rem',
    paddingInlineEnd: '0.875rem',
    paddingTop: '1rem',
    textAlign: 'left',
    width: '17rem',
  },
  pando_toastWrapper: {
    display: 'inline-block',
    pointerEvents: 'none',
    position: 'fixed',
    right: '1rem',
    top: '1rem',
    zIndex: '1600',
  },
} satisfies GeneratedStyles
