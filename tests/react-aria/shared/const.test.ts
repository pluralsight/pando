import * as Keys from '@pluralsight/react-aria'

describe('const Keys', () => {
  test('should have keys', () => {
    expect(Keys.ARROW_LEFT).toBe('ArrowLeft')
    expect(Keys.ARROW_RIGHT).toBe('ArrowRight')
    expect(Keys.END).toBe('End')
    expect(Keys.HOME).toBe('Home')
    expect(Keys.ENTER).toBe('Enter')
    expect(Keys.ESCAPE).toBe('Escape')
    expect(Keys.ARROW_DOWN).toBe('ArrowDown')
    expect(Keys.ARROW_UP).toBe('ArrowUp')
  })
})
