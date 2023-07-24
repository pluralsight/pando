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
  type HTMLAttributes,
  type ForwardedRef,
  type ButtonHTMLAttributes,
} from 'react'

// <TabsWrapper />

interface TabsWrapperProps extends HTMLAttributes<HTMLDivElement> {}

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

interface TabsListProps
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

interface TabProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    UseTabOptions {}

function TabEl(props: TabProps, ref: ForwardedRef<HTMLButtonElement>) {
  const { controls, selected, ...nativeProps } = props
  const pandoStyles = getTabStyles({
    classNames: splitClassNameProp(nativeProps.className),
  })
  const ariaProps = useAriaTab({ controls, selected })

  return <button {...nativeProps} {...pandoStyles} {...ariaProps} ref={ref} />
}

// <TabsPanel />

interface TabsPanelProps
  extends HTMLAttributes<HTMLDivElement>,
    UseTabPanelOptions {}

function TabsPanelEl(props: TabsPanelProps, ref: ForwardedRef<HTMLDivElement>) {
  const { labelledBy, ...nativeProps } = props
  const pandoStyles = getTabPanelStyles({
    classNames: splitClassNameProp(nativeProps.className),
  })
  const ariaProps = useAriaTabPanel({ labelledBy, hidden: nativeProps.hidden })

  return <div {...nativeProps} {...pandoStyles} {...ariaProps} ref={ref} />
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
