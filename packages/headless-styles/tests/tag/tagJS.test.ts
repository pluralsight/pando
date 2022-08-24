import { getJSTagProps } from '../../src'

describe('Tag JS', () => {
  describe('getJSTagProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSTagProps().tag.cssProps).toContain('font-size: 1rem')
      expect(getJSTagProps().tag.styles.fontSize).toEqual('1rem')
    })

    test('should accept a size type', () => {
      expect(getJSTagProps({ size: 's' }).tag.cssProps).toContain(
        'height: 1.5rem'
      )
      expect(getJSTagProps({ size: 's' }).tag.styles.height).toEqual('1.5rem')
      expect(getJSTagProps({ size: 'm' }).tag.cssProps).toContain(
        'height: 2rem'
      )
      expect(getJSTagProps({ size: 'm' }).tag.styles.height).toEqual('2rem')
    })
  })
})
