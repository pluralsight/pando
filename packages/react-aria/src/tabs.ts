import { useMemo, type HTMLAttributes, type ButtonHTMLAttributes } from 'react'

// useAriaTabList()

export interface UseTabListOptions {
  labelledBy?: HTMLAttributes<HTMLDivElement>['aria-labelledby']
}

/**
 * Creates aria attributes for a tab list element.
 * @param options.labelledBy - The id of the element that labels the tab list.
 * @description https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 */
export function useAriaTabList(options?: UseTabListOptions) {
  const labelledBy = options?.labelledBy ?? null

  return useMemo(
    () => ({
      ...(labelledBy ? { 'aria-labelledby': labelledBy } : {}),
      role: 'tablist',
    }),
    [labelledBy],
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
 * @description https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
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
 * @description https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
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
