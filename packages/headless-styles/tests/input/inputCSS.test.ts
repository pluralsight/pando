import {
  getInputProps,
  getInputLeadingIconProps,
  getInputInvalidIconProps,
  getInputWrapperProps,
} from '@headless-styles'
import { createPandoOptions } from '../../src/components/shared/defaultOptions'
import type { InputOptions } from '../../src/types'

describe('Input - getInputProps', () => {
  const baseClass = 'pando-input'
  const options = createPandoOptions<InputOptions>({
    id: 'email',
    name: 'user-email',
  })
  const result = {
    ['aria-invalid']: false,
    ['data-invalid']: false,
    ['data-readonly']: false,
    ['data-required']: false,
    disabled: false,
    id: options.id,
    name: options.name,
    placeholder: 'Enter text',
    readOnly: false,
    required: false,
    className: `${baseClass} pando_defaultInput pando_lInputBase`,
  }

  test('should allow no props to be passed in', () => {
    expect(getInputProps()).toEqual({
      ...result,
      id: '',
      name: '',
    })
  })

  test('should accept a m size option', () => {
    expect(getInputProps({ ...options, pandoSize: 'm' })).toEqual({
      ...result,
      className: `${baseClass} pando_defaultInput pando_mInputBase`,
    })
  })

  test('should accept an describedBy option', () => {
    expect(getInputProps({ ...options, describedBy: 'bad-email' })).toEqual({
      ...result,
      ['aria-describedby']: 'bad-email',
    })
  })

  test('should return invalidIconOptions when options.invalid', () => {
    expect(getInputProps({ ...options, invalid: true })).toEqual({
      ...result,
      'aria-invalid': true,
      'data-invalid': true,
    })
  })

  test('should return a placeholder when input is not disabled', () => {
    expect(getInputProps({ ...options, placeholder: 'Email' })).toEqual({
      ...result,
      placeholder: 'Email',
    })
  })

  test('should not return a placeholder when input is disabled', () => {
    expect(
      getInputProps({ ...options, placeholder: 'Email', disabled: true })
    ).toEqual({
      ...result,
      disabled: true,
      placeholder: '',
    })
  })
})

describe('Input - getInputLeadingIconProps', () => {
  it('should return the correct props when the size is "m"', () => {
    const result = {
      iconWrapper: {
        className: 'pando-input-leading-icon pando_inputLeadingIcon',
      },
      iconOptions: {
        size: 's',
      },
    }

    expect(getInputLeadingIconProps('m')).toEqual(result)
  })

  it('should return the correct props the size is "l"', () => {
    const result = {
      iconWrapper: {
        className: 'pando-input-leading-icon pando_inputLeadingIcon',
      },
      iconOptions: {
        size: 'm',
      },
    }

    expect(getInputLeadingIconProps('l')).toEqual(result)
  })
})

describe('Input - getInputInvalidIconProps', () => {
  it('should return the correct props when the size is "m"', () => {
    expect(getInputInvalidIconProps('m')).toEqual({
      invalidIconWrapper: {
        'data-invalid': true,
        className: 'pando-input-invalid-icon pando_inputIcon',
      },
      invalidIconOptions: {
        ariaHidden: true,
        size: 's',
      },
    })
  })

  it('should return the correct props when size is "l"', () => {
    expect(getInputInvalidIconProps('l')).toEqual({
      invalidIconWrapper: {
        'data-invalid': true,
        className: 'pando-input-invalid-icon pando_inputIcon',
      },
      invalidIconOptions: {
        ariaHidden: true,
        size: 'm',
      },
    })
  })
})

describe('Input - getInputWrapperProps', () => {
  it('should return the correct props', () => {
    expect(getInputWrapperProps()).toEqual({
      className: 'pando-input-wrapper pando_inputWrapper',
    })
  })
})
