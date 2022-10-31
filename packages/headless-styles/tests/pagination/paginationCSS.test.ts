import { getPaginationProps } from '../../src'

describe('Pagination CSS', () => {
  const baseClass = 'ps-pagination'
  const result = {
    container: {
      className: `${baseClass} paginationContainer`,
    },
    newer: {
      className: `${baseClass}-newer paginationNewer`,
    },
    older: {
      className: `${baseClass}-older paginationOlder`,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getPaginationProps()).toEqual(result)
  })

  test('should accept a tech type', () => {
    expect(getPaginationProps({ tech: 'svelte' })).toEqual({
      container: {
        class: result.container.className,
      },
      newer: {
        class: result.newer.className,
      },
      older: {
        class: result.older.className,
      },
    })
  })
})
