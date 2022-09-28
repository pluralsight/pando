import { unstable_getJSModalProps } from '../../src'

describe('Modal JS', () => {
  test('should accept a heading ID', () => {
    const headingId = 'modal-heading'
    const modalProps = unstable_getJSModalProps({
      bodyId: 'bodyId',
      headingId: headingId,
      id: 'modalId',
    })

    expect(modalProps.modalHeading.cssProps).toContain('margin-block-start: 0')
    expect(modalProps.modalHeading.styles.marginBlockStart).toEqual('0')
    expect(modalProps.section.a11yProps['aria-labelledby']).toEqual(headingId)
  })

  test('should accept an ariaLabel instead of headingId', () => {
    const ariaLabel = 'Non-visible modal heading'
    const modalProps = unstable_getJSModalProps({
      bodyId: 'bodyId',
      ariaLabel: ariaLabel,
      id: 'modalId',
    })

    expect(modalProps.buttonWrapper.cssProps).toContain('position: absolute')
    expect(modalProps.buttonWrapper.styles.position).toEqual('absolute')
    expect(modalProps.section.a11yProps['aria-label']).toEqual(ariaLabel)
  })
})
