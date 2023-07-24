import {
  getTabWrapperStyles,
  getTabListStyles,
  getTabStyles,
  getTabPanelStyles,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import {
  useAriaTabList,
  useAriaTab,
  useAriaTabPanel,
  type UseTabListOptions,
  type UseTabOptions,
  type UseTabPanelOptions,
} from '@pluralsight/react-aria'
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ForwardedRef,
  type MouseEvent,
  useTransition,
  useMemo,
} from 'react'
import { CircularProgress, Show, useTabs } from '../index.ts'

// <TabsWrapper />

export interface TabsWrapperProps extends HTMLAttributes<HTMLDivElement> {}

function TabsWrapperEl(
  props: TabsWrapperProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const pandoStyles = getTabWrapperStyles({
    classNames: splitClassNameProp(props.className),
  })
  return <div {...props} {...pandoStyles} ref={ref} />
}

// <TabsList />

export interface TabsListProps
  extends HTMLAttributes<HTMLDivElement>,
    UseTabListOptions {}

function TabsListEl(props: TabsListProps, ref: ForwardedRef<HTMLDivElement>) {
  const { labelledBy, ...nativeProps } = props
  const pandoStyles = getTabListStyles({
    classNames: splitClassNameProp(nativeProps.className),
  })
  const ariaProps = useAriaTabList({ labelledBy })

  return <div {...nativeProps} {...pandoStyles} {...ariaProps} ref={ref} />
}

// <Tab />

export interface TabProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'>,
    UseTabOptions {
  value: string
}

function TabEl(props: TabProps, ref: ForwardedRef<HTMLButtonElement>) {
  const { controls, ...nativeProps } = props
  const pandoStyles = getTabStyles({
    classNames: splitClassNameProp(nativeProps.className),
  })
  const [isPending, startTransition] = useTransition()
  const { activeTab, onTabClick } = useTabs()
  const ariaProps = useAriaTab({
    controls,
    selected: activeTab === nativeProps.value,
  })
  const isDisabeled = useMemo(
    () => nativeProps.disabled ?? isPending,
    [nativeProps.disabled, isPending],
  )

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement

    if (target.disabled) return

    startTransition(() => onTabClick(target.value))
    if (nativeProps.onClick) nativeProps.onClick(e)
  }

  return (
    <button
      {...nativeProps}
      {...pandoStyles}
      {...ariaProps}
      disabled={isDisabeled}
      onClick={handleClick}
      ref={ref}
    >
      {nativeProps.children}

      <Show when={isPending && !isDisabeled}>
        <CircularProgress ariaLabel="loading" kind="indeterminate" size="xs" />
      </Show>
    </button>
  )
}

// <TabsPanel />

export interface TabsPanelProps
  extends HTMLAttributes<HTMLDivElement>,
    UseTabPanelOptions {}

function TabsPanelEl(props: TabsPanelProps, ref: ForwardedRef<HTMLDivElement>) {
  const { labelledBy, ...nativeProps } = props
  const pandoStyles = getTabPanelStyles({
    classNames: splitClassNameProp(nativeProps.className),
  })
  const { activeTab } = useTabs()
  const ariaProps = useAriaTabPanel({
    labelledBy,
    hidden: nativeProps.hidden ?? activeTab !== labelledBy,
  })

  return (
    <Show when={activeTab === labelledBy}>
      <div {...nativeProps} {...pandoStyles} {...ariaProps} ref={ref} />
    </Show>
  )
}

// exports

/**
 * Displays the wrapper for a set of tabs.
 * @see https://design.pluralsight.com/docs/reference/components/tabs
 */
export const TabsWrapper = forwardRef<HTMLDivElement, TabsWrapperProps>(
  TabsWrapperEl,
)

/**
 * Displays a list of tabs.
 * @see https://design.pluralsight.com/docs/reference/components/tabs
 */
export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(TabsListEl)

/**
 * Displays a single tab.
 * @see https://design.pluralsight.com/docs/reference/components/tabs
 */
export const Tab = forwardRef<HTMLButtonElement, TabProps>(TabEl)

/**
 * Displays a single tab panel.
 * @see https://design.pluralsight.com/docs/reference/components/tabs
 */
export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(TabsPanelEl)
