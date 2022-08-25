import { getJSConfirmDialogProps } from '../../src'

describe('Confirm Dialog JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSConfirmDialogProps().wrapper.cssProps).toContain(
      'align-items: flex-start'
    )
    expect(getJSConfirmDialogProps().wrapper.styles.alignItems).toEqual(
      'flex-start'
    )
  })

  test('should accept a non-destructive kind', () => {
    expect(getJSConfirmDialogProps().agreeBtnOptions.sentiment).toEqual(
      'action'
    )
  })

  test('should accept a destructive kind', () => {
    expect(
      getJSConfirmDialogProps({
        kind: 'destructive',
      }).agreeBtnOptions.sentiment
    ).toEqual('danger')
  })
})
