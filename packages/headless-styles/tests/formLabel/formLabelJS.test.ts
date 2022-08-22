import { getJSFormLabelProps } from '../../src'

describe('FormLabel JS', () => {
  describe('getJSFormLabelProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSFormLabelProps().a11yProps.htmlFor).toEqual('')
      expect(getJSFormLabelProps().label.cssProps).toContain(
        'font-family: inherit;'
      )
      expect(getJSFormLabelProps().label.styles.fontFamily).toEqual('inherit')
    })

    test('should accept a htmlFor option', () => {
      const htmlFor = 'hogwarts'
      expect(
        getJSFormLabelProps({ htmlFor, value: '' }).a11yProps.htmlFor
      ).toEqual(htmlFor)
    })
  })
})
