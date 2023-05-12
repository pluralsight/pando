import { getSkeletonProps } from '../../src'

describe('Skeleton CSS', () => {
  const baseClass = 'pando-skeleton'
  const result = {
    className: `${baseClass} content`,
  }

  test('should allow no props to be passed in', () => {
    expect(getSkeletonProps()).toEqual(result)
  })

  test('should accept a kind option', () => {
    expect(getSkeletonProps({ kind: 'content' })).toEqual(result)
    expect(getSkeletonProps({ kind: 'text' })).toEqual({
      ...result,
      className: `${baseClass} text`,
    })
    expect(getSkeletonProps({ kind: 'circle' })).toEqual({
      ...result,
      className: `${baseClass} circle`,
    })
  })

  test('should accept a classNames option', () => {
    expect(getSkeletonProps({ classNames: ['foo', 'bar'] })).toEqual({
      ...result,
      className: `${baseClass} content foo bar`,
    })
  })
})
