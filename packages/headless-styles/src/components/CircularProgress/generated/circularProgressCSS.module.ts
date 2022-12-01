// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  keyframesLoading: {
    '@keyframes loading': {
      '0%': {
        'stroke-dasharray': '1, 400',
        'stroke-dashoffset': '0',
      },
      '50%': {
        'stroke-dasharray': '400, 400',
        'stroke-dashoffset': '-100',
      },
      '100%': {
        'stroke-dasharray': '400, 400',
        'stroke-dashoffset': '-260',
      },
    },
  },
  keyframesSpin: {
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
  base: {
    display: 'inline-block',
    fontFamily: 'inherit',
    position: 'relative',
    verticalAlign: 'middle',
  },
  box: {
    height: '3rem',
    width: '3rem',
  },
  circle: {
    fill: 'transparent',
    stroke: 'var(--ps-border)',
  },
  circleNow: {
    fill: 'transparent',
    stroke: 'var(--ps-text)',
    transitionDuration: '600ms',
    transitionProperty: 'stroke-dasharray, stroke',
    transitionTimingFunction: 'ease',
  },
  text: {
    display: 'inline-block',
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    left: '50%',
    position: 'absolute',
    textAlign: 'center',
    top: '42%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  determinate: {
    composes: 'box',
    height: '3rem',
    width: '3rem',
  },
  indeterminate_box: {
    animationDirection: 'normal',
    animationDuration: '1.5s',
    animationFillMode: 'none',
    animationIterationCount: 'infinite',
    animationName: 'spin',
    animationPlayState: 'running',
    animationTimingFunction: 'linear',
  },
  indeterminate: {
    animationDirection: 'normal',
    animationDuration: '1.5s',
    animationFillMode: 'none',
    animationIterationCount: 'infinite',
    animationName: 'loading',
    animationPlayState: 'running',
    animationTimingFunction: 'linear',
  },
  mSize: {
    composes: 'box',
    height: '3rem',
    width: '3rem',
  },
  xsSize: {
    composes: 'box',
    height: '1.25rem',
    width: '1.25rem',
  },
}
