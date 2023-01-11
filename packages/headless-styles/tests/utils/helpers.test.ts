import {
  createA11yProps,
  createClassNameProp,
  createJSProps,
  deepMerge,
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
      ['data-disabled']: a11yOptions.disabled,
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
    }
    const cssProps =
      `background-color: blue;` as unknown as TemplateStringsArray
    expect(createJSProps(styles)).toEqual({
      cssProps,
      styles,
    })
  })

  test('should return a JS literal style string', () => {
    const styles = {
      background: 'black',
      fontVariationSettings: 'none',
      whiteSpace: 'none',
      '&:after': {
        backgroundColor: 'white',
      },
    }
    expect(transformStyles(styles)).toEqual(
      `
    background: black;
    font-variation-settings: none;
    white-space: none;
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

  test('deepMerge should merge nested objects together', () => {
    expect(
      deepMerge(
        {
          topLevel: 'alpha',
          nested: { innerOne: true },
        },
        {
          secondOuter: 'beta',
          nested: { innerTwo: 'second nested' },
        }
      )
    ).toEqual({
      topLevel: 'alpha',
      secondOuter: 'beta',
      nested: {
        innerOne: true,
        innerTwo: 'second nested',
      },
    })
  })
  test('deepMerge should overwrite primitive values', () => {
    expect(
      deepMerge(
        {
          topLevel: 'alpha',
          overwriteOuter: 'old',
          nested: {
            keepInner: 'should still be here',
            overwriteInner: 'old inner',
          },
        },
        {
          overwriteOute: 'new',
          nested: { overwriteInner: 'new inner' },
        }
      )
    ).toEqual({
      topLevel: 'alpha',
      overwriteOuter: 'new',
      nested: {
        keepInner: 'should still be here',
        overwriteInner: 'new inner',
      },
    })
  })
})
