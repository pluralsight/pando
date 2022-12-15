import { getJSProgressProps } from '../../src'

describe('progress JS', () => {
  const ariaLabel = 'test progress bar'

  test('should return a distinct border-radius based on the kind', () => {
    expect(
      getJSProgressProps({ ariaLabel }).wrapper.styles.borderRadius
    ).toEqual('20px')
    expect(
      getJSProgressProps({
        ariaLabel,
        kind: 'inset',
      }).wrapper.styles.borderRadius
    ).toEqual('initial')
  })

  test('should return a distinct height difference based on the size', () => {
    expect(getJSProgressProps({ ariaLabel }).wrapper.styles.height).toEqual(
      '0.5rem'
    )
    expect(
      getJSProgressProps({
        ariaLabel,
        size: 'xs',
      }).wrapper.styles.height
    ).toEqual('0.25rem')
  })

  test('should return an aria-label for the progressbar', () => {
    expect(
      getJSProgressProps({ ariaLabel }).bar.a11yProps['aria-label']
    ).toEqual(ariaLabel)
  })
})
