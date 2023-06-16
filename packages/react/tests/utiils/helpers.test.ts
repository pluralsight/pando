import { stringToBoolean } from '../../src/utils/helpers.ts'

describe('stringToBoolean', () => {
  it("should return true if string is 'true'", () => {
    expect(stringToBoolean('true')).toBe(true)
  })

  it("should return false if string is 'false'", () => {
    expect(stringToBoolean('false')).toBe(false)
  })
})
