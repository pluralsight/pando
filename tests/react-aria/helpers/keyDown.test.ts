/// <reference lib="dom" />

import { describe, test, expect, mock, beforeEach, afterEach } from 'bun:test'
import {
  getHorizontalNextFocusLocation,
  updateHorizontalFocus,
} from '@pluralsight/react-aria'

const list = {
  'tab-1': { current: null },
  'tab-2': { current: null },
  'tab-3': { current: null },
}
const currentFocus = 0

describe('updateHorizontalFocus', () => {
  let setFocus = mock((tabId) => tabId)

  beforeEach(() => {
    setFocus = mock((tabId) => tabId)
  })

  afterEach(() => {
    setFocus.mockClear()
  })

  test('should call setFocus with the correct tab id', () => {
    updateHorizontalFocus({
      list,
      currentFocus,
      key: 'ArrowRight',
      setFocus,
    })
    expect(setFocus).toHaveBeenCalledTimes(1)
    expect(setFocus.mock.results[0].value).toEqual('tab-2')
  })

  test('should call setFocus with the correct tab id for ArrowLeft', () => {
    updateHorizontalFocus({
      list,
      currentFocus,
      key: 'ArrowLeft',
      setFocus,
    })
    expect(setFocus).toHaveBeenCalledTimes(1)
    expect(setFocus.mock.results[0].value).toEqual('tab-3')
  })

  test('should call setFocus with the correct tab id for Home', () => {
    updateHorizontalFocus({
      list,
      currentFocus,
      key: 'Home',
      setFocus,
    })
    expect(setFocus).toHaveBeenCalledTimes(1)
    expect(setFocus.mock.results[0].value).toEqual('tab-1')
  })

  test('should call setFocus with the correct tab id for End', () => {
    updateHorizontalFocus({
      list,
      currentFocus,
      key: 'End',
      setFocus,
    })
    expect(setFocus).toHaveBeenCalledTimes(1)
    expect(setFocus.mock.results[0].value).toEqual('tab-3')
  })
})

describe('getHorizontalNextFocusLocation', () => {
  test('should return the correct next focus location', () => {
    expect(
      getHorizontalNextFocusLocation(
        currentFocus,
        Object.keys(list).length,
        'ArrowRight',
      ),
    ).toBe(1)
  })

  test('should return the correct next focus location for ArrowLeft', () => {
    expect(
      getHorizontalNextFocusLocation(
        currentFocus,
        Object.keys(list).length,
        'ArrowLeft',
      ),
    ).toBe(2)
  })

  test('should return the correct next focus location for Home', () => {
    expect(
      getHorizontalNextFocusLocation(
        currentFocus,
        Object.keys(list).length,
        'Home',
      ),
    ).toBe(0)
  })

  test('should return the correct next focus location for End', () => {
    expect(
      getHorizontalNextFocusLocation(
        currentFocus,
        Object.keys(list).length,
        'End',
      ),
    ).toBe(2)
  })
})
