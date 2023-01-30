import {
  createA11yProps,
  createClassNameProp,
  createJSProps,
  transformCasing,
  transformStyles,
} from '../../src/utils/helpers'

describe('helpers', () => {
  test('should return a a11y props Object', () => {
    const a11yOptions = {
      disabled: false,
      invalid: true,
      readOnly: false,
      required: true,
    }

    expect(createA11yProps(a11yOptions)).toMatchObject({
      ['aria-invalid']: a11yOptions.invalid,
      ['data-invalid']: a11yOptions.invalid,
      ['data-readonly']: a11yOptions.readOnly,
      ['data-required']: a11yOptions.required,
      disabled: a11yOptions.disabled,
      readOnly: a11yOptions.readOnly,
      required: a11yOptions.required,
    })
  })

  test('should return a className Object', () => {
    expect(createClassNameProp('test')).toMatchObject({
      className: 'test',
    })
  })

  test('should return a JS props Object', () => {
    const styles = {
      backgroundColor: 'blue',
      '&:disabled': {
        opacity: 0.5,
      },
      '&:focus:not(:disabled)': {
        opacity: 1,
      },
    }
    const cssProps = `background-color: blue;
&:disabled {

opacity: 0.5;
}
&:focus:not(:disabled) {

opacity: 1;
}`
    expect(createJSProps(styles)).toEqual({
      cssProps,
      styles,
    })
  })

  test('should return a JS literal style string', () => {
    expect(
      transformStyles({
        background: 'black',
        fontVariationSettings: 'none',
        whiteSpace: 'normal',
        '&:after': {
          backgroundColor: 'white',
        },
      })
    ).toEqual(
      `
    background: black;
    font-variation-settings: none;
    white-space: normal;
    &:after {

    background-color: white;
    }
    `
        .trim()
        .replace(/^ {2,12}/gm, '')
    )
  })

  test('transformCasing converts camel to kebab case when syntax is "html"', () => {
    const text = 'aria-label'
    expect(transformCasing('ariaLabel', 'html')).toEqual(text)
    expect(transformCasing(text, 'html')).toEqual(text)
    expect(transformCasing('ariaLabel', 'jsx')).toEqual('ariaLabel')
    expect(transformCasing(text, 'jsx')).toEqual(text)
  })
})
