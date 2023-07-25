import {
  getHorizontalNextFocusLocation,
  updateHorizontalFocus,
} from '@react-aria'

const list = {
  'tab-1': { current: null },
  'tab-2': { current: null },
  'tab-3': { current: null },
}
const setFocus = jest.fn()
const currentFocus = 0

describe('updateHorizontalFocus', () => {
  it('should call setFocus with the correct tab id', () => {
    updateHorizontalFocus({
      list,
      currentFocus,
      key: 'ArrowRight',
      setFocus,
    })
    expect(setFocus).toHaveBeenCalledWith('tab-2')
  })

  it('should call setFocus with the correct tab id for ArrowLeft', () => {
    updateHorizontalFocus({
      list,
      currentFocus,
      key: 'ArrowLeft',
      setFocus,
    })
    expect(setFocus).toHaveBeenCalledWith('tab-3')
  })

  it('should call setFocus with the correct tab id for Home', () => {
    updateHorizontalFocus({
      list,
      currentFocus,
      key: 'Home',
      setFocus,
    })
    expect(setFocus).toHaveBeenCalledWith('tab-1')
  })

  it('should call setFocus with the correct tab id for End', () => {
    updateHorizontalFocus({
      list,
      currentFocus,
      key: 'End',
      setFocus,
    })
    expect(setFocus).toHaveBeenCalledWith('tab-3')
  })
})

describe('getHorizontalNextFocusLocation', () => {
  it('should return the correct next focus location', () => {
    expect(
      getHorizontalNextFocusLocation(
        currentFocus,
        Object.keys(list).length,
        'ArrowRight',
      ),
    ).toBe(1)
  })

  it('should return the correct next focus location for ArrowLeft', () => {
    expect(
      getHorizontalNextFocusLocation(
        currentFocus,
        Object.keys(list).length,
        'ArrowLeft',
      ),
    ).toBe(2)
  })

  it('should return the correct next focus location for Home', () => {
    expect(
      getHorizontalNextFocusLocation(
        currentFocus,
        Object.keys(list).length,
        'Home',
      ),
    ).toBe(0)
  })

  it('should return the correct next focus location for End', () => {
    expect(
      getHorizontalNextFocusLocation(
        currentFocus,
        Object.keys(list).length,
        'End',
      ),
    ).toBe(2)
  })
})
