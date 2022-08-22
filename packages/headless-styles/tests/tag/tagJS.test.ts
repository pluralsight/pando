import { getJSTagProps } from '../../src'

describe('Tag JS', () => {
  describe('getJSTagProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSTagProps().tag.cssProps).toContain('font-size: 0.875rem')
      expect(getJSTagProps().tag.styles.fontSize).toEqual('0.875rem')
    })

    test('should accept a size type', () => {
      expect(getJSTagProps({ size: 's' }).tag.cssProps).toContain(
        'height: 1.25rem'
      )
      expect(getJSTagProps({ size: 's' }).tag.styles.height).toEqual('1.25rem')
      expect(getJSTagProps({ size: 'm' }).tag.cssProps).toContain(
        'height: 1.5rem'
      )
      expect(getJSTagProps({ size: 'm' }).tag.styles.height).toEqual('1.5rem')
    })
  })
})
