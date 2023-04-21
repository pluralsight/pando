import { getJSSwitchProps } from '../../src'
import type { SwitchOptions } from '../../src/types'

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
    expect(props.wrapper.styles.display).toEqual('flex')
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
    expect(props.input.styles.position).toEqual('absolute')

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
    expect(props.switchContainer.styles.verticalAlign).toEqual('middle')
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

    expect(props.switchTrack.cssProps).toContain('--ps-thumb-off-scale: 0.6667')
    expect(props.switchTrack.styles['--ps-thumb-off-scale']).toEqual('0.6667')
    expect(props.switchTrack.cssProps).toContain('--ps-thumb-size: 1.125rem')
    expect(props.switchTrack.styles['--ps-thumb-size']).toEqual('1.125rem')
    expect(props.switchTrack.cssProps).toContain('--ps-track-height: 1.625rem')
    expect(props.switchTrack.styles['--ps-track-height']).toEqual('1.625rem')
    expect(props.switchTrack.cssProps).toContain('--ps-track-width: 3.125rem')
    expect(props.switchTrack.styles['--ps-track-width']).toEqual('3.125rem')

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

    expect(props.switchThumb.cssProps).toContain('height: 1.125rem')
    expect(props.switchThumb.styles.height).toEqual('1.125rem')
    expect(props.switchThumb.cssProps).toContain('width: 1.125rem')
    expect(props.switchThumb.styles.width).toEqual('1.125rem')

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
  })

  test('should return the correct props for the thumb when checked', () => {
    const props = getJSSwitchProps({ ...baseOptions, checked: true })
    expect(props.switchThumb.a11yProps).toMatchObject({
      ...thumbProps,
      'data-checked': true,
    })

    expect(props.switchThumb.cssProps).toContain('height: 1.125rem')
    expect(props.switchThumb.styles.height).toEqual('1.125rem')
    expect(props.switchThumb.cssProps).toContain('width: 1.125rem')
    expect(props.switchThumb.styles.width).toEqual('1.125rem')
  })

  test('should return the correct props for the track when size is s', () => {
    const props = getJSSwitchProps({ ...baseOptions, size: 's' })

    expect(props.switchTrack.cssProps).toContain('--ps-thumb-size: 0.75rem')
    expect(props.switchTrack.styles['--ps-thumb-size']).toEqual('0.75rem')
    expect(props.switchTrack.cssProps).toContain('--ps-track-height: 1.125rem')
    expect(props.switchTrack.styles['--ps-track-height']).toEqual('1.125rem')
    expect(props.switchTrack.cssProps).toContain('--ps-track-width: 2.125rem')
    expect(props.switchTrack.styles['--ps-track-width']).toEqual('2.125rem')
  })

  test('should return the correct size for the thumb when size is s', () => {
    const props = getJSSwitchProps({ ...baseOptions, size: 's' })

    expect(props.switchThumb.cssProps).toContain('height: 0.75rem')
    expect(props.switchThumb.styles.height).toEqual('0.75rem')
    expect(props.switchThumb.cssProps).toContain('width: 0.75rem')
    expect(props.switchThumb.styles.width).toEqual('0.75rem')
  })
})
