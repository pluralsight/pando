import {
  getToastButtonJSProps,
  getToastContainerJSProps,
  getToastHeadingJSProps,
} from '../../src/components/Toast/toastJS'
import styles from '../../src/components/Toast/generated/toastCSS.module'
import animationStyles from '../../src/components/shared/generated/keyframes.module'

describe('Toast JS', () => {
  test('should return the correct default props for the toast container', () => {
    const props = getToastContainerJSProps()

    expect(props.closeIconWrapper.styles).toMatchObject(
      styles.toastCloseIconWrapper
    )
    expect(props.closeIconWrapper.cssProps).toContain('display: inline-block')

    expect(props.iconWrapper.styles).toMatchObject(styles.toastIconWrapper)
    expect(props.iconWrapper.cssProps).toContain('align-items: center')

    expect(props.container.styles).toMatchObject(styles.infoToast)
    expect(props.container.cssProps).toContain('display: flex')

    expect(props.section.styles).toMatchObject(styles.toastSection)
    expect(props.section.cssProps).toContain('display: flex')

    expect(props.wrapper.styles).toMatchObject(styles.toastWrapper)
    expect(props.wrapper.cssProps).toContain('display: inline-block')
    expect(props.wrapper.a11yProps).toMatchObject({ role: 'alert' })
    expect(props.wrapper.keyframes).toMatchObject(
      animationStyles.keyframesFadeInAnimation
    )
  })

  test('should return the correct props for the toast container when the sentiment is set to info', () => {
    const props = getToastContainerJSProps({ sentiment: 'info' })
    expect(props.container.styles).toMatchObject(styles.infoToast)
  })

  test('should return the correct props for the toast container when the sentiment is set to success', () => {
    const props = getToastContainerJSProps({ sentiment: 'success' })
    expect(props.container.styles).toMatchObject(styles.successToast)
  })

  test('should return the correct props for the toast container when the sentiment is set to warning', () => {
    const props = getToastContainerJSProps({ sentiment: 'warning' })
    expect(props.container.styles).toMatchObject(styles.warningToast)
  })

  test('should return the correct props for the toast container when the sentiment is set to danger', () => {
    const props = getToastContainerJSProps({ sentiment: 'danger' })
    expect(props.container.styles).toMatchObject(styles.dangerToast)
  })

  test('should return the correct props for the toast heading', () => {
    const props = getToastHeadingJSProps()
    expect(props.styles).toMatchObject(styles.toastHeading)
    expect(props.cssProps).toContain('padding-bottom: 0.25rem')
  })

  test('should return the correct props for the toast button', () => {
    const props = getToastButtonJSProps()
    expect(props.styles).toMatchObject(styles.toastButton)
    expect(props.cssProps).toContain('cursor: not-allowed')
  })
})
