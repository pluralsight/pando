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

  test('should return the correct ARIA role for a determinate kind', () => {
    expect(
      getJSCircularProgressProps({ ariaLabel }).containerProps.a11yProps.role
    ).toEqual('progressbar')
  })

  test('should return the correct ARIA role for an indeterminate kind', () => {
    expect(
      getJSCircularProgressProps({ ariaLabel, kind: 'indeterminate' })
        .containerProps.a11yProps.role
    ).toEqual('status')
  })
})
