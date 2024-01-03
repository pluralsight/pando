import { createInputIconProps } from '@pluralsight/react'

describe('createInputIconProps', () => {
  it('returns the default size if no size is provided', () => {
    const props = createInputIconProps()
    expect(props).toEqual({
      'aria-hidden': true,
      height: '1.25rem',
      width: '1.25rem',
    })
  })

  it('returns the default size if the pandoSize is supported', () => {
    const props = createInputIconProps({ pandoSize: 'lg' })
    expect(props).toEqual({
      'aria-hidden': true,
      height: '1.25rem',
      width: '1.25rem',
    })
  })

  it('returns the custom size if the pandoSize is supported', () => {
    const props = createInputIconProps({ pandoSize: 'md' })
    expect(props).toEqual({
      'aria-hidden': true,
      height: '1rem',
      width: '1rem',
    })
  })

  it('returns the custom size if the size is supported', () => {
    const props = createInputIconProps({ width: '2rem' })
    expect(props).toEqual({
      'aria-hidden': true,
      height: '2rem',
      width: '2rem',
    })
  })
})
