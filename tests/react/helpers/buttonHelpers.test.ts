import { createButtonIconProps } from '@pluralsight/react'

describe('createButtonIconProps', () => {
  test('returns the default values', () => {
    expect(createButtonIconProps()).toMatchObject({
      'aria-hidden': true,
      height: '1.25rem',
      width: '1.25rem',
    })
  })

  test('returns the custom values', () => {
    expect(
      createButtonIconProps({
        height: '2rem',
        width: '2rem',
      }),
    ).toMatchObject({
      'aria-hidden': true,
      height: '2rem',
      width: '2rem',
    })
  })
})
