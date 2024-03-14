// const a11yPropMap = {
//   ariaLabel: 'aria-label',
//   valueMax: 'aria-valuemax',
//   valueMin: 'aria-valuemin',
//   valueNow: 'aria-valuenow',
// }

const DASH_OFFSET = '66'

function getDashArray(nowValue: number) {
  const dash = nowValue * 2.64
  const gap = 264 - dash
  return `${dash} ${gap}`
}

export const VIEWBOX = '0 0 100 100'

export function getBaseCircleProps() {
  return {
    cx: '50',
    cy: '50',
    r: '42',
    strokeWidth: '12px',
  }
}

export function getStrokeProps(now: number) {
  const dashArray = getDashArray(now)
  console.log('el', {
    strokeDashoffset: DASH_OFFSET,
    strokeDasharray: dashArray,
  })
  return {
    strokeDashoffset: DASH_OFFSET,
    strokeDasharray: dashArray,
  }
}
