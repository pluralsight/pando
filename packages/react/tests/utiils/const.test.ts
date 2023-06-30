import * as constVars from '../../src/utils/const.ts'

describe('const', () => {
  it('should export the correct values', () => {
    expect(constVars.ESCAPE).toEqual('Escape')
    expect(constVars.ENTER).toEqual('Enter')
    expect(constVars.HOME).toEqual('Home')
    expect(constVars.END).toEqual('End')
    expect(constVars.ARROW_DOWN).toEqual('ArrowDown')
    expect(constVars.ARROW_UP).toEqual('ArrowUp')
  })
})
