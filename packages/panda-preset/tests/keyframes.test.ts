import { keyframes } from '@panda-preset'

describe('keyframes', () => {
  test('should return fadeIn keyframes', () => {
    expect(keyframes.fadeIn).toMatchObject({
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    })
  })
})
