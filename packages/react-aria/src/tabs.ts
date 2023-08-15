import {
  useCallback,
  useMemo,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEvent,
  type MutableRefObject,
} from 'react'
import { updateHorizontalFocus } from './helpers/keyDown.ts'
import { ARROW_LEFT, ARROW_RIGHT, END, HOME } from './shared/const.ts'

// useAriaTabList()

export interface UseTabListOptions {
  activeTabValue: string
  labelledBy?: HTMLAttributes<HTMLDivElement>['aria-labelledby']
  setFocus: (tabId: string) => void
  tabsRefList: Record<
    string,
    MutableRefObject<HTMLButtonElement | null> | HTMLButtonElement | null
  >
}

/**
 * Creates aria attributes for a tab list element.
 * @param options.activeTabValue - The value of the currently active tab.
 * @param options.labelledBy - The id of the element that labels the tab list.
 * @param options.setFocus - A function that sets focus to a tab.
 * @param options.tabsRefList - A Record of current refs of the tab elements with the Button value as it's property selector.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 */
export function useAriaTabList(options: UseTabListOptions) {
  const { activeTabValue, labelledBy, setFocus, tabsRefList } = options

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const { key } = event
      const currentPosition = Object.keys(tabsRefList).findIndex((tabId) => {
        const tab = tabsRefList[tabId] as HTMLButtonElement | null
        return tab?.value === activeTabValue
      })

      switch (key) {
        case ARROW_LEFT:
        case ARROW_RIGHT:
        case HOME:
        case END:
          event.preventDefault()
          updateHorizontalFocus({
            list: tabsRefList,
            currentFocus: currentPosition,
            key,
            setFocus,
          })
          break

        default:
          break
      }
    },
    [activeTabValue, setFocus, tabsRefList],
  )

  return useMemo(
    () => ({
      ...(labelledBy ? { 'aria-labelledby': labelledBy } : {}),
      onKeyDown: handleKeyDown,
      role: 'tablist',
    }),
    [handleKeyDown, labelledBy],
  )
}

// useAriaTab()

export interface UseTabOptions {
  controls: HTMLAttributes<HTMLDivElement>['aria-controls']
  selected?: ButtonHTMLAttributes<HTMLButtonElement>['aria-selected']
}

/**
 * Creates aria attributes for a tab element.
 * @param options.controls - The id of the tab panel controlled by the tab.
 * @param options.selected - Whether the tab is selected.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 */
export function useAriaTab(options: UseTabOptions) {
  const { controls, selected } = options

  return useMemo(
    () => ({
      role: 'tab',
      tabIndex: selected ? 0 : -1,
      'aria-controls': controls,
      ...(selected ? { 'aria-selected': selected } : {}),
    }),
    [controls, selected],
  )
}

// useAriaTabPanel()

export interface UseTabPanelOptions {
  labelledBy: HTMLAttributes<HTMLDivElement>['aria-labelledby']
  hidden?: HTMLAttributes<HTMLDivElement>['hidden']
}

/**
 * Creates aria attributes for a tab panel element.
 * @param options.labelledBy - The id of the tab that labels the tab panel.
 * @param options.hidden - Whether the tab panel is hidden.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 */
export function useAriaTabPanel(options: UseTabPanelOptions) {
  const { labelledBy } = options
  const hidden = options?.hidden ?? null

  return useMemo(
    () => ({
      ...(labelledBy ? { 'aria-labelledby': labelledBy } : {}),
      ...(hidden ? { 'aria-hidden': hidden } : {}),
      role: 'tabpanel',
      tabIndex: hidden ? -1 : 0,
    }),
    [labelledBy, hidden],
  )
}
