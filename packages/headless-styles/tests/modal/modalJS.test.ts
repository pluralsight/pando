import { getJSModalProps } from '../../src'

describe('Modal JS', () => {
  test('should accept a heading ID', () => {
    const headingId = 'modal-heading'
    const modalProps = getJSModalProps({
      bodyId: 'bodyId',
      headingId: headingId,
      id: 'modalId',
    })

    expect(modalProps.modalHeading.cssProps).toContain('margin-top: 0')
    expect(modalProps.modalHeading.styles.marginTop).toEqual('0')
    expect(modalProps.section.a11yProps['aria-labelledby']).toEqual(headingId)
  })

  test('should accept an ariaLabel instead of headingId', () => {
    const ariaLabel = 'Non-visible modal heading'
    const modalProps = getJSModalProps({
      bodyId: 'bodyId',
      ariaLabel: ariaLabel,
      id: 'modalId',
    })

    expect(modalProps.buttonWrapper.cssProps).toContain('position: absolute')
    expect(modalProps.buttonWrapper.styles.position).toEqual('absolute')
    expect(modalProps.section.a11yProps['aria-label']).toEqual(ariaLabel)
  })
})
