import { itWorks } from '@pando'

describe('itWorks', () => {
  test('it works', () => {
    const logSpy = jest.spyOn(console, 'log')
    itWorks()
    expect(logSpy).toHaveBeenLastCalledWith('it works!')
  })
})
