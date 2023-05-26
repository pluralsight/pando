import { getFlexProps, getFlexItemProps } from '../../src/index'

describe('Flex CSS', () => {
  const flexProps = {
    className: 'pando-flex pando_flexContainer',
    style: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      gap: '1rem',
    },
  }
  const flexItemProps = {
    className: 'pando-flex-item pando_flexItem',
    style: {
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 0,
    },
  }

  describe('getFlexProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getFlexProps()).toEqual(flexProps)
    })

    test('should update the gap when option given', () => {
      expect(getFlexProps({ gap: '6' })?.style.gap).toEqual('0.375rem')
      expect(getFlexProps({ gap: '8' })?.style.gap).toEqual('0.5rem')
      expect(getFlexProps({ gap: '12' })?.style.gap).toEqual('0.75rem')
      expect(getFlexProps({ gap: '16' })?.style.gap).toEqual('1rem')
      expect(getFlexProps({ gap: '32' })?.style.gap).toEqual('2rem')
    })

    test('should allow a custom gap value', () => {
      expect(getFlexProps({ gap: '1.2rem' })?.style.gap).toEqual('1.2rem')
    })

    test('should accept a direction', () => {
      expect(
        getFlexProps({ direction: 'column' })?.style.flexDirection
      ).toEqual('column')
      expect(
        getFlexProps({ direction: 'column-reverse' })?.style.flexDirection
      ).toEqual('column-reverse')
      expect(getFlexProps({ direction: 'row' })?.style.flexDirection).toEqual(
        'row'
      )
      expect(
        getFlexProps({ direction: 'row-reverse' })?.style.flexDirection
      ).toEqual('row-reverse')
    })

    test('should accept a wrap option', () => {
      expect(getFlexProps({ wrap: 'nowrap' })?.style.flexWrap).toEqual('nowrap')
      expect(getFlexProps({ wrap: 'wrap' })?.style.flexWrap).toEqual('wrap')
      expect(getFlexProps({ wrap: 'wrap-reverse' })?.style.flexWrap).toEqual(
        'wrap-reverse'
      )
    })

    test('should accept custom classnames', () => {
      expect(getFlexProps({ classNames: ['classy'] })?.className).toContain(
        'classy'
      )
    })

    test('should accept custom styles', () => {
      expect(
        getFlexProps({ style: { backgroundColor: 'yellow' } })?.style
          .backgroundColor
      ).toEqual('yellow')
    })
  })

  describe('getFlexItemProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getFlexItemProps()).toEqual(flexItemProps)
    })

    test('should allow for a basis', () => {
      expect(getFlexItemProps({ basis: '100px' })?.style.flexBasis).toEqual(
        '100px'
      )
    })

    test('should allow for a grow option', () => {
      expect(getFlexItemProps({ grow: 2 })?.style.flexGrow).toEqual(2)
    })

    test('should allow for a shrink option', () => {
      expect(getFlexItemProps({ shrink: 1 })?.style.flexShrink).toEqual(1)
    })

    test('should accept custom classnames', () => {
      expect(getFlexItemProps({ classNames: ['classy'] })?.className).toContain(
        'classy'
      )
    })

    test('should accept custom styles', () => {
      expect(
        getFlexItemProps({ style: { backgroundColor: 'yellow' } })?.style
          .backgroundColor
      ).toEqual('yellow')
    })
  })
})
