import { createLabelText } from '@pluralsight/react'

describe('createLabelText', () => {
  it('should return the value if not required', () => {
    expect(createLabelText('test')).toBe('test')
  })

  it('should return the value with required text if required', () => {
    expect(createLabelText('test', true)).toBe('test (required)')
  })
})
