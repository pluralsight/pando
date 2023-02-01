import { getJSTooltipProps } from '../../src'

describe('Tooltip JS', () => {
  const tooltipId = 'tooltip-test'
  const positionTop = 'bottom: 100%'
  const positionRight = 'left: 100%'
  const positionBottom = 'top: 100%'
  const positionLeft = 'right: 100%'

  test('should accept a tooltip ID', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
    })

    expect(tooltipProps.trigger?.a11yProps?.['aria-describedby']).toEqual(
      tooltipId
    )
    expect(tooltipProps.tooltip.cssProps).toContain('z-index: 1700')
    expect(tooltipProps.tooltip.styles.zIndex).toEqual('1700')
  })

  test('should accept a disabled option', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      disabled: true,
    })

    expect(tooltipProps.tooltip?.a11yProps?.disabled).toEqual(true)
  })

  test('should accept a position of topStart', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'topStart',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionTop)
    expect(tooltipProps.tooltip.styles.bottom).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('left: 0')
    expect(tooltipProps.tooltip.styles.left).toEqual('0')
  })

  test('should accept a position of top', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'top',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionTop)
    expect(tooltipProps.tooltip.styles.bottom).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('left: 50%')
    expect(tooltipProps.tooltip.styles.left).toEqual('50%')
  })

  test('should accept a position of topEnd', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'topEnd',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionTop)
    expect(tooltipProps.tooltip.styles.bottom).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('right: 0')
    expect(tooltipProps.tooltip.styles.right).toEqual('0')
  })

  test('should accept a position of right', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'right',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionRight)
    expect(tooltipProps.tooltip.styles.left).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('top: 50%')
    expect(tooltipProps.tooltip.styles.top).toEqual('50%')
  })

  test('should accept a position of rightStart', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'rightStart',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionRight)
    expect(tooltipProps.tooltip.styles.left).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('top: 0')
    expect(tooltipProps.tooltip.styles.top).toEqual('0')
  })

  test('should accept a position of rightEnd', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'rightEnd',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionRight)
    expect(tooltipProps.tooltip.styles.left).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('bottom: 0')
    expect(tooltipProps.tooltip.styles.bottom).toEqual('0')
  })

  test('should accept a position of bottom', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'bottom',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionBottom)
    expect(tooltipProps.tooltip.styles.top).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('left: 50%')
    expect(tooltipProps.tooltip.styles.left).toEqual('50%')
  })

  test('should accept a position of bottomStart', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'bottomStart',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionBottom)
    expect(tooltipProps.tooltip.styles.top).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('left: 0')
    expect(tooltipProps.tooltip.styles.left).toEqual('0')
  })

  test('should accept a position of bottomEnd', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'bottomEnd',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionBottom)
    expect(tooltipProps.tooltip.styles.top).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('right: 0')
    expect(tooltipProps.tooltip.styles.right).toEqual('0')
  })

  test('should accept a position of left', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'left',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionLeft)
    expect(tooltipProps.tooltip.styles.right).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('top: 50%')
    expect(tooltipProps.tooltip.styles.top).toEqual('50%')
  })

  test('should accept a position of leftStart', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'leftStart',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionLeft)
    expect(tooltipProps.tooltip.styles.right).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('top: 0')
    expect(tooltipProps.tooltip.styles.top).toEqual('0')
  })

  test('should accept a position of leftEnd', () => {
    const tooltipProps = getJSTooltipProps({
      id: tooltipId,
      position: 'leftEnd',
    })

    expect(tooltipProps.tooltip.cssProps).toContain(positionLeft)
    expect(tooltipProps.tooltip.styles.right).toEqual('100%')
    expect(tooltipProps.tooltip.cssProps).toContain('bottom: 0')
    expect(tooltipProps.tooltip.styles.bottom).toEqual('0')
  })
})
