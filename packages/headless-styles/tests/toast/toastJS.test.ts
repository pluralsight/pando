import {
  getToastButtonJSProps,
  getToastContainerJSProps,
  getToastHeadingJSProps,
} from '../../src/components/Toast/toastJS'
import styles from '../../src/components/Toast/generated/toastCSS'

describe('Toast JS', () => {
  test('should return the correct default props for the toast container', () => {
    const props = getToastContainerJSProps()

    expect(props.closeIconWrapper.styles).toMatchObject(
      styles.pando_toastCloseIconWrapper
    )
    expect(props.closeIconWrapper.cssProps).toContain('display: inline-block')

    expect(props.iconWrapper.styles).toMatchObject(
      styles.pando_toastIconWrapper
    )
    expect(props.iconWrapper.cssProps).toContain('align-items: center')

    expect(props.container.styles).toMatchObject(styles.pando_infoToast)
    expect(props.container.cssProps).toContain('display: flex')

    expect(props.section.styles).toMatchObject(styles.pando_toastSection)
    expect(props.section.cssProps).toContain('display: flex')

    expect(props.wrapper.styles).toMatchObject(styles.pando_toastWrapper)
    expect(props.wrapper.cssProps).toContain('display: inline-block')
    expect(props.wrapper.a11yProps).toMatchObject({ role: 'alert' })
    expect(props.wrapper.keyframes).toMatchObject(
      styles.keyframesFadeInAnimation
    )
  })

  test('should return the correct props for the toast container when the sentiment is set to info', () => {
    const props = getToastContainerJSProps({ sentiment: 'info' })
    expect(props.container.styles).toMatchObject(styles.pando_infoToast)
  })

  test('should return the correct props for the toast container when the sentiment is set to success', () => {
    const props = getToastContainerJSProps({ sentiment: 'success' })
    expect(props.container.styles).toMatchObject(styles.pando_successToast)
  })

  test('should return the correct props for the toast container when the sentiment is set to warning', () => {
    const props = getToastContainerJSProps({ sentiment: 'warning' })
    expect(props.container.styles).toMatchObject(styles.pando_warningToast)
  })

  test('should return the correct props for the toast container when the sentiment is set to danger', () => {
    const props = getToastContainerJSProps({ sentiment: 'danger' })
    expect(props.container.styles).toMatchObject(styles.pando_dangerToast)
  })

  test('should return the correct props for the toast heading', () => {
    const props = getToastHeadingJSProps()
    expect(props.styles).toMatchObject(styles.pando_toastHeading)
    expect(props.cssProps).toContain('padding-bottom: 0.25rem')
  })

  test('should return the correct props for the toast button', () => {
    const props = getToastButtonJSProps()
    expect(props.styles).toMatchObject(styles.pando_toastButton)
    expect(props.cssProps).toContain('cursor: not-allowed')
  })
})
