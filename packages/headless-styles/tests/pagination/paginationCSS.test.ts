import { getPaginationProps } from '../../src'

describe('Pagination CSS', () => {
  const baseClass = 'ps-pagination'
  const result = {
    container: {
      className: `${baseClass} morePaginationContainer`,
    },
    newer: {
      className: `${baseClass}-newer paginationNewer`,
    },
    older: {
      className: `${baseClass}-older paginationOlder`,
    },
    text: {
      className: `${baseClass}-text paginationText`,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getPaginationProps()).toEqual(result)
  })

  test('should accept a "more" kind', () => {
    expect(getPaginationProps({ kind: 'more' })).toEqual(result)
  })

  test('should accept a "newerOlder" kind', () => {
    expect(getPaginationProps({ kind: 'newerOlder' })).toEqual({
      ...result,
      container: {
        ...result.container,
        className: `${baseClass} newerOlderPaginationContainer`,
      },
    })
  })

  test('should accept a "bar" kind', () => {
    expect(getPaginationProps({ kind: 'bar' })).toEqual({
      ...result,
      container: {
        ...result.container,
        className: `${baseClass} barPaginationContainer`,
      },
    })
  })
})
