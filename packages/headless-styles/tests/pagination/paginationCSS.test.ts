import { getPaginationProps } from '../../src'

describe('Pagination CSS', () => {
  const baseClass = 'ps-pagination'
  const result = {
    buttonGroup: {
      className: `${baseClass}-buttonGroup lPaginationButtonGroup`,
    },
    container: {
      className: `${baseClass} lPaginationContainer`,
    },
    text: {
      className: `${baseClass}-text lPaginationText`,
    },
    buttonOptions: {
      sentiment: 'default',
      size: 'l',
    },
    iconButtonOptions: {
      ariaLabel: 'change page',
      sentiment: 'default',
      size: 'l',
    },
    selectOptions: {
      id: 'ps-pagination-select',
      name: 'ps-pagination-select',
      placeholder: '',
      size: 'l',
      value: '',
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getPaginationProps()).toEqual(result)
  })

  test('should accept an "m" size', () => {
    expect(getPaginationProps({ size: 'm' })).toEqual({
      ...result,
      buttonGroup: {
        ...result.buttonGroup,
        className: `${baseClass}-buttonGroup mPaginationButtonGroup`,
      },
      container: {
        ...result.container,
        className: `${baseClass} mPaginationContainer`,
      },
      text: {
        ...result.text,
        className: `${baseClass}-text mPaginationText`,
      },
      buttonOptions: {
        ...result.buttonOptions,
        size: 'm',
      },
      iconButtonOptions: {
        ...result.iconButtonOptions,
        size: 'm',
      },
      selectOptions: {
        ...result.selectOptions,
        size: 'm',
      },
    })
  })
})
