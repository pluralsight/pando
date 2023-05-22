// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'

export default {
  pando_menuItem: {
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
    background: 'transparent',
    border: '0',
    borderRadius: '3px',
    color: 'var(--ps-text)',
    display: 'flex',
    fontVariationSettings: '"wght" 500',
    fontWeight: '500',
    gap: '0.625rem',
    justifyContent: 'flex-start',
    lineHeight: '1.5',
    overflow: 'hidden',
    paddingBlock: '0.5rem',
    paddingInline: '0.5rem',
    textAlign: 'start',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
    whiteSpace: 'nowrap',
    width: '100%',
    '&[aria-expanded=true]': {
      background: 'var(--ps-action-background)',
      color: 'var(--ps-action-text)',
    },
    '&:active': {
      background: 'var(--ps-action-background)',
      color: 'var(--ps-action-text)',
    },
    '&:hover:not([aria-expanded=true])': {
      background: 'var(--ps-background-hover)',
      color: 'var(--ps-text)',
    },
    '&:is(.pando_menu, [role=menu])': {
      left: '100%',
      marginLeft: '0.625rem',
      marginTop: '0',
      position: 'absolute',
      top: '0',
      zIndex: '1010',
    },
    '&[aria-expanded=true] ~ .pando_menu': {
      display: 'block',
    },
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
  pando_menu: {
    WebkitAnimationDelay: '100ms',
    animationDelay: '100ms',
    WebkitAnimationDuration: '150ms',
    animationDuration: '150ms',
    WebkitAnimationFillMode: 'forwards',
    animationFillMode: 'forwards',
    WebkitAnimationName: 'popInAnimation',
    animationName: 'popInAnimation',
    WebkitAnimationTimingFunction: 'ease-in-out',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: 'var(--ps-surface-strong)',
    borderColor: 'var(--ps-border)',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    display: 'none',
    listStyle: 'none',
    opacity: '0',
    padding: '4px',
    position: 'absolute',
    width: '14rem',
    zIndex: '1000',
    '&[data-expanded=true]': {
      display: 'block',
    },
  },
  pando_menuWrapper: {
    display: 'inline-block',
    position: 'relative',
  },
  pando_menuDivider: {
    backgroundColor: 'var(--ps-border)',
    height: '1px',
    marginBottom: '0.5rem',
    WebkitMarginEnd: '0.5rem',
    marginInlineEnd: '0.5rem',
    WebkitMarginStart: '0.5rem',
    marginInlineStart: '0.5rem',
    marginTop: '0.5rem',
  },
  pando_menuListItem: {
    margin: '0',
    padding: '0',
    position: 'relative',
  },
  pando_menuListItem____pando_menuListItem: {
    margin: '2px 0 0',
    padding: '0',
  },
  pando_menuItem___all_children: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  pando_menuItem___svg: {
    flex: '0 0 auto',
  },
  pando_menuItemText: {
    flexGrow: '1',
  },
} satisfies GeneratedStyles
