import { getJSCircularProgressProps } from '../../src'

describe('circular progress JS', () => {
  const ariaLabel = 'circular progress test'
  test('should return a distinct animation based on the kind', () => {
    expect(
      getJSCircularProgressProps({ ariaLabel }).svgBoxProps.styles.animationName
    ).toEqual('')
    expect(
      getJSCircularProgressProps({ ariaLabel }).nowCircleProps.styles
        .animationName
    ).toEqual('')

    expect(
      getJSCircularProgressProps({
        ariaLabel,
        kind: 'indeterminate',
      }).svgBoxProps.styles.animationName
    ).toEqual('spin')
    expect(
      getJSCircularProgressProps({
        ariaLabel,
        kind: 'indeterminate',
      }).nowCircleProps.styles.animationName
    ).toEqual('loading')
  })

  test('should return a distinct width difference based on the size', () => {
    expect(
      getJSCircularProgressProps({ ariaLabel }).svgBoxProps.styles.width
    ).toEqual('3rem')
    expect(
      getJSCircularProgressProps({
        ariaLabel,
        size: 'xs',
      }).svgBoxProps.styles.width
    ).toEqual('1.25rem')
  })

  test('should return an aria-label for the progressbar', () => {
    expect(
      getJSCircularProgressProps({ ariaLabel }).containerProps.a11yProps[
        'aria-label'
      ]
    ).toEqual(ariaLabel)
  })
})
