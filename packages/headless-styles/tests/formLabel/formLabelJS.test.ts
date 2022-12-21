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

    test('should allow a hidden kind', () => {
      const labelProps = getJSFormLabelProps({
        htmlFor: 'id',
        value: '',
        kind: 'hidden',
      })

      expect(labelProps.label.cssProps).toContain('clip: rect(0 0 0 0);')
      expect(labelProps.label.styles.clip).toEqual('rect(0 0 0 0)')
    })
  })
})
