import { getPaginationProps } from '../../src'

describe('Pagination CSS', () => {
  const baseClass = 'ps-pagination'
  const result = {
    buttonGroup: {
      className: `${baseClass}-buttonGroup paginationButtonGroup`,
    },
    container: {
      className: `${baseClass} paginationContainer`,
    },
    text: {
      className: `${baseClass}-text paginationText`,
    },
    buttonOptions: {
      sentiment: 'default',
    },
    iconButtonOptions: {
      sentiment: 'default',
      size: 'm',
    },
    selectOptions: {
      size: 'm',
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getPaginationProps()).toEqual(result)
  })
})
