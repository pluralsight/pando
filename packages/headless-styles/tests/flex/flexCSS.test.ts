import { getFlexProps, getFlexItemProps } from '../../src/index'

describe('Flex CSS', () => {
  const flexProps = {
    className: 'pando-flex pando_flexContainer',
    style: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      columnGap: '1rem',
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

  const reverseRowProp = 'row-reverse'
  const reverseColumnProp = 'column-reverse'

  describe('getFlexProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getFlexProps()).toEqual(flexProps)
    })

    test('should update the gap when option given', () => {
      expect(getFlexProps({ gap: '6' })?.style.columnGap).toEqual('0.375rem')
      expect(getFlexProps({ gap: '8' })?.style.columnGap).toEqual('0.5rem')
      expect(getFlexProps({ gap: '12' })?.style.columnGap).toEqual('0.75rem')
      expect(getFlexProps({ gap: '16' })?.style.columnGap).toEqual('1rem')
      expect(getFlexProps({ gap: '32' })?.style.columnGap).toEqual('2rem')
    })

    test('should allow a custom gap value', () => {
      expect(getFlexProps({ gap: '1.2rem' })?.style.columnGap).toEqual('1.2rem')
    })

    test('should apply the corresponding gap type based on direction', () => {
      expect(getFlexProps({ direction: 'column' })?.style.rowGap).toEqual(
        '1rem'
      )
      expect(
        getFlexProps({ direction: reverseColumnProp })?.style.rowGap
      ).toEqual('1rem')
      expect(getFlexProps({ direction: 'row' })?.style.columnGap).toEqual(
        '1rem'
      )
      expect(
        getFlexProps({ direction: reverseRowProp })?.style.columnGap
      ).toEqual('1rem')
    })

    test('should accept a direction', () => {
      expect(
        getFlexProps({ direction: 'column' })?.style.flexDirection
      ).toEqual('column')
      expect(
        getFlexProps({ direction: reverseColumnProp })?.style.flexDirection
      ).toEqual(reverseColumnProp)
      expect(getFlexProps({ direction: 'row' })?.style.flexDirection).toEqual(
        'row'
      )
      expect(
        getFlexProps({ direction: reverseRowProp })?.style.flexDirection
      ).toEqual(reverseRowProp)
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
