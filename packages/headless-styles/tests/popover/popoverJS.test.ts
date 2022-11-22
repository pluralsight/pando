import { getJSPopoverProps } from '../../src'

describe('Popover JS', () => {
  const testId = 'popover-test-id'
  const defaultIds = {
    root: 'popover',
    body: 'popover-body',
    header: 'popover-header',
  }

  test('should accept an ID', () => {
    const popoverProps = getJSPopoverProps({
      bodyId: defaultIds.body,
      headerId: defaultIds.header,
      id: testId,
    })

    expect(popoverProps?.popover.a11yProps.id).toBe(testId)
  })

  test('should accept a heading ID', () => {
    const popoverProps = getJSPopoverProps({
      bodyId: defaultIds.body,
      headerId: testId,
      id: defaultIds.root,
    })

    expect(popoverProps?.header.a11yProps.id).toBe(testId)
    expect(popoverProps?.popover.a11yProps['aria-labelledby']).toEqual(testId)
    expect(popoverProps?.content.styles.paddingTop).toEqual('0')
    expect(popoverProps?.content.cssProps).toContain('padding-top: 0')
  })

  test('should accept an ariaLabel instead of headingId', () => {
    const ariaLabel = 'Non-visible popover heading'
    const popoverProps = getJSPopoverProps({
      bodyId: defaultIds.body,
      ariaLabel,
      id: defaultIds.root,
    })

    expect(popoverProps?.popover.a11yProps['aria-label']).toEqual(ariaLabel)
    expect(popoverProps?.content.styles.padding).toEqual(
      '1rem 2.5rem 1rem 1rem'
    )
    expect(popoverProps?.content.cssProps).toContain(
      'padding: 1rem 2.5rem 1rem 1rem'
    )
  })

  test('should accept a body ID', () => {
    const popoverProps = getJSPopoverProps({
      bodyId: testId,
      headerId: defaultIds.header,
      id: defaultIds.root,
    })

    expect(popoverProps?.body.a11yProps.id).toBe(testId)
    expect(popoverProps?.popover.a11yProps['aria-describedby']).toEqual(testId)
  })

  test('should accept an expanded state', () => {
    const popoverProps = getJSPopoverProps({
      bodyId: defaultIds.body,
      headerId: defaultIds.header,
      id: defaultIds.root,
      isExpanded: true,
    })

    expect(popoverProps?.trigger.a11yProps['aria-expanded']).toBe(true)
    expect(popoverProps?.popover.a11yProps['data-expanded']).toBe(true)
  })

  test('should accept a position', () => {
    const popoverProps = getJSPopoverProps({
      bodyId: defaultIds.body,
      headerId: defaultIds.header,
      id: defaultIds.root,
      position: 'bottomEnd',
    })

    expect(popoverProps?.popover.cssProps).toContain('top: 100%')
    expect(popoverProps?.popover.styles.top).toBe('100%')
    expect(popoverProps?.popover.cssProps).toContain('right: 0')
    expect(popoverProps?.popover.styles.right).toBe('0')
  })
})
