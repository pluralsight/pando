import { getFieldsetProps, getLegendProps } from '@headless-styles'

describe('Fieldset', () => {
  it('should return the correct props', () => {
    expect(getFieldsetProps()).toEqual({
      className: 'pando-fieldset pando_fieldset',
    })
  })

  it('should return the correct props with custom classNames', () => {
    expect(
      getFieldsetProps({
        classNames: ['custom-classname'],
      })
    ).toEqual({
      className: 'pando-fieldset pando_fieldset custom-classname',
    })
  })
})

describe('Legend', () => {
  it('should return the correct props', () => {
    expect(getLegendProps()).toEqual({
      className: 'pando-fieldset-legend pando_legend',
    })
  })

  it('should return the correct props with custom classNames', () => {
    expect(
      getLegendProps({
        classNames: ['custom-classname'],
      })
    ).toEqual({
      className: 'pando-fieldset-legend pando_legend custom-classname',
    })
  })
})
