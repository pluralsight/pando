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
        bodyId: '',
        headingId: '',
        id: '',
        kind: 'destructive',
      }).agreeBtnOptions.sentiment
    ).toEqual('danger')
    expect(
      getJSConfirmDialogProps({
        bodyId: '',
        headingId: '',
        id: '',
        kind: 'destructive',
      })?.iconOptions?.size
    ).toEqual('m')
    expect(
      getJSConfirmDialogProps({
        bodyId: '',
        headingId: '',
        id: '',
        kind: 'destructive',
      })?.iconWrapper?.cssProps
    ).toContain('line-height: initial')
    expect(
      getJSConfirmDialogProps({
        bodyId: '',
        headingId: '',
        id: '',
        kind: 'destructive',
      })?.iconWrapper?.styles.lineHeight
    ).toEqual('initial')
  })
})
