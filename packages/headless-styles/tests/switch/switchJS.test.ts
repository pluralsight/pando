import { getJSSwitchProps } from '../../src'
import type { SwitchOptions } from '../../src/types'
import styles from '../../src/components/Switch/generated/switchCSS'

describe('Switch JS', () => {
  const baseOptions: SwitchOptions = {
    size: 'm',
    checked: false,
    value: '',
    id: 'switch-test',
    name: 'switch-test',
    disabled: false,
    invalid: false,
    readOnly: false,
    required: false,
  }

  test('should return the correct props for the wrapper', () => {
    const props = getJSSwitchProps(baseOptions)

    expect(props.wrapper.cssProps).toContain('display: flex')
    expect(props.wrapper.styles).toMatchObject(styles.pando_switchWrapper)
  })

  const inputProps = {
    'aria-invalid': baseOptions.invalid,
    checked: baseOptions.checked,
    disabled: baseOptions.disabled,
    id: baseOptions.id,
    name: baseOptions.name,
    readOnly: baseOptions.readOnly,
    required: baseOptions.required,
    value: baseOptions.value,
  }
  test('should return the correct props for the input', () => {
    const props = getJSSwitchProps(baseOptions)

    expect(props.input.cssProps).toContain('position: absolute')
    expect(props.input.styles).toMatchObject(styles.pando_switchInput)

    expect(props.input.a11yProps).toMatchObject(inputProps)
    expect(
      getJSSwitchProps({ ...baseOptions, invalid: true }).input.a11yProps
    ).toMatchObject({ ...inputProps, 'aria-invalid': true })
    expect(
      getJSSwitchProps({ ...baseOptions, checked: true }).input.a11yProps
    ).toMatchObject({ ...inputProps, checked: true })
    expect(
      getJSSwitchProps({ ...baseOptions, disabled: true }).input.a11yProps
    ).toMatchObject({ ...inputProps, disabled: true })
    expect(
      getJSSwitchProps({ ...baseOptions, readOnly: true }).input.a11yProps
    ).toMatchObject({ ...inputProps, readOnly: true })
    expect(
      getJSSwitchProps({ ...baseOptions, required: true }).input.a11yProps
    ).toMatchObject({ ...inputProps, required: true })
  })

  test('should return the correct props for the container', () => {
    const props = getJSSwitchProps(baseOptions)
    expect(props.switchContainer.cssProps).toContain('vertical-align: middle')
    expect(props.switchContainer.styles).toMatchObject(
      styles.pando_switchContainer
    )
  })

  const trackProps = {
    'aria-hidden': true,
    'data-invalid': baseOptions.invalid,
    'data-readonly': baseOptions.readOnly,
    'data-required': baseOptions.required,
    'data-checked': baseOptions.checked,
    'data-control': true,
    disabled: baseOptions.disabled,
  }
  test('should return the correct props for the track', () => {
    const props = getJSSwitchProps(baseOptions)

    expect(props.switchTrack.styles).toMatchObject(styles.pando_mSwitchTrack)

    expect(props.switchTrack.a11yProps).toMatchObject(trackProps)
    expect(
      getJSSwitchProps({ ...baseOptions, invalid: true }).switchTrack.a11yProps
    ).toMatchObject({ ...trackProps, 'data-invalid': true })
    expect(
      getJSSwitchProps({ ...baseOptions, readOnly: true }).switchTrack.a11yProps
    ).toMatchObject({ ...trackProps, 'data-readonly': true })
    expect(
      getJSSwitchProps({ ...baseOptions, required: true }).switchTrack.a11yProps
    ).toMatchObject({ ...trackProps, 'data-required': true })
    expect(
      getJSSwitchProps({ ...baseOptions, checked: true }).switchTrack.a11yProps
    ).toMatchObject({ ...trackProps, 'data-checked': true })
    expect(
      getJSSwitchProps({ ...baseOptions, disabled: true }).switchTrack.a11yProps
    ).toMatchObject({ ...trackProps, disabled: true })
  })

  const thumbProps = {
    disabled: baseOptions.disabled,
    'data-checked': baseOptions.checked,
    'data-invalid': baseOptions.invalid,
    'data-readonly': baseOptions.readOnly,
    'data-required': baseOptions.required,
  }
  test('should return the correct props for the thumb', () => {
    const props = getJSSwitchProps(baseOptions)

    expect(props.switchThumb.styles).toEqual(styles.pando_mSwitchThumb)

    expect(props.switchThumb.a11yProps).toMatchObject(thumbProps)
    expect(
      getJSSwitchProps({ ...baseOptions, disabled: true }).switchThumb.a11yProps
    ).toMatchObject({ ...thumbProps, disabled: true })
    expect(
      getJSSwitchProps({ ...baseOptions, invalid: true }).switchThumb.a11yProps
    ).toMatchObject({ ...thumbProps, 'data-invalid': true })
    expect(
      getJSSwitchProps({ ...baseOptions, readOnly: true }).switchThumb.a11yProps
    ).toMatchObject({ ...thumbProps, 'data-readonly': true })
    expect(
      getJSSwitchProps({ ...baseOptions, required: true }).switchThumb.a11yProps
    ).toMatchObject({ ...thumbProps, 'data-required': true })
    expect(
      getJSSwitchProps({ ...baseOptions, checked: true }).switchThumb.a11yProps
    ).toMatchObject({ ...thumbProps, 'data-checked': true })
  })

  test('should return the correct props for the track when size is s', () => {
    const props = getJSSwitchProps({ ...baseOptions, size: 's' })

    expect(props.switchTrack.styles).toMatchObject(styles.pando_sSwitchTrack)
  })
})
