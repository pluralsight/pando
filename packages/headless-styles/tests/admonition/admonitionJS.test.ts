import { getJSAdmonitionProps } from '../../src'
import styles from '../../src/components/Admonition/generated/admonitionCSS.module'

describe('Admonition JS', () => {
  const result = {
    inlineBlock: 'display: inline-block',
    flex: 'display: flex',
  }

  test('should allow no props to be passed in', () => {
    const props = getJSAdmonitionProps()
    expect(props.wrapper.cssProps).toContain('align-items: flex-start')
    expect(props.wrapper.styles).toMatchObject(styles.infoAdmonition)
    expect(props.wrapper.a11yProps).toMatchObject({
      role: 'region',
    })
  })

  test('should accept a info sentiment option', () => {
    const props = getJSAdmonitionProps({ sentiment: 'info' })

    expect(props.iconWrapper.cssProps).toContain(result.inlineBlock)
    expect(props.iconWrapper.styles).toMatchObject(styles.infoIconWrapper)

    expect(props.textContainer.cssProps).toContain(result.flex)
    expect(props.textContainer.styles).toMatchObject(styles.infoTextContainer)

    expect(props.wrapper.cssProps).toContain(
      'background-color: var(--ps-info-border)'
    )
    expect(props.wrapper.styles).toMatchObject(styles.infoAdmonition)
  })

  test('should accept a success sentiment option', () => {
    const props = getJSAdmonitionProps({ sentiment: 'success' })

    expect(props.iconWrapper.cssProps).toContain(result.inlineBlock)
    expect(props.iconWrapper.styles).toMatchObject(styles.successIconWrapper)

    expect(props.textContainer.cssProps).toContain(result.flex)
    expect(props.textContainer.styles).toMatchObject(
      styles.successTextContainer
    )

    expect(props.wrapper.cssProps).toContain(
      'background-color: var(--ps-success-border)'
    )
    expect(props.wrapper.styles).toMatchObject(styles.successAdmonition)
  })

  test('should accept a warning sentiment option', () => {
    const props = getJSAdmonitionProps({ sentiment: 'warning' })

    expect(props.iconWrapper.cssProps).toContain(result.inlineBlock)
    expect(props.iconWrapper.styles).toMatchObject(styles.warningIconWrapper)

    expect(props.textContainer.cssProps).toContain(result.flex)
    expect(props.textContainer.styles).toMatchObject(
      styles.warningTextContainer
    )

    expect(props.wrapper.cssProps).toContain(
      'background-color: var(--ps-warning-border)'
    )
    expect(props.wrapper.styles).toMatchObject(styles.warningAdmonition)
  })

  test('should accept a danger sentiment option', () => {
    const props = getJSAdmonitionProps({ sentiment: 'danger' })

    expect(props.iconWrapper.cssProps).toContain(result.inlineBlock)
    expect(props.iconWrapper.styles).toMatchObject(styles.dangerIconWrapper)

    expect(props.textContainer.cssProps).toContain(result.flex)
    expect(props.textContainer.styles).toMatchObject(styles.dangerTextContainer)

    expect(props.wrapper.cssProps).toContain(
      'background-color: var(--ps-danger-border)'
    )
    expect(props.wrapper.styles).toMatchObject(styles.dangerAdmonition)
  })
})
