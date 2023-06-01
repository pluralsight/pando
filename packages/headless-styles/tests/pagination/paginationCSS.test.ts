import { getPaginationProps } from '../../src'

describe('Pagination CSS', () => {
  const baseClass = 'pando-pagination'
  const result = {
    buttonGroup: {
      className: `${baseClass}-buttonGroup pando_lPaginationButtonGroup`,
    },
    container: {
      'aria-label': 'Pagination',
      className: `${baseClass} pando_lPaginationContainer`,
      role: 'navigation',
    },
    text: {
      className: `${baseClass}-text pando_lPaginationText`,
      role: 'status',
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
      pandoSize: 'l',
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
        className: `${baseClass}-buttonGroup pando_mPaginationButtonGroup`,
      },
      container: {
        ...result.container,
        className: `${baseClass} pando_mPaginationContainer`,
      },
      text: {
        ...result.text,
        className: `${baseClass}-text pando_mPaginationText`,
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
        pandoSize: 'm',
      },
    })
  })
})
