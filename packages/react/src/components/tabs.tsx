import {
  getTabWrapperStyles,
  getTabListStyles,
  getTabStyles,
  getTabPanelStyles,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import {
  type HTMLAttributes,
  forwardRef,
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

interface TabsListProps extends HTMLAttributes<HTMLDivElement> {}

function TabsListEl(props: TabsListProps, ref: ForwardedRef<HTMLDivElement>) {
  const pandoStyles = getTabListStyles({
    classNames: splitClassNameProp(props.className),
  })
  return <div {...props} {...pandoStyles} ref={ref} />
}

// <Tab />

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function TabEl(props: TabProps, ref: ForwardedRef<HTMLButtonElement>) {
  const pandoStyles = getTabStyles({
    classNames: splitClassNameProp(props.className),
  })
  return <button {...props} {...pandoStyles} ref={ref} />
}

// <TabsPanel />

interface TabsPanelProps extends HTMLAttributes<HTMLDivElement> {}

function TabsPanelEl(props: TabsPanelProps, ref: ForwardedRef<HTMLDivElement>) {
  const pandoStyles = getTabPanelStyles({
    classNames: splitClassNameProp(props.className),
  })
  return <div {...props} {...pandoStyles} ref={ref} />
}

// exports

export const TabsWrapper = forwardRef<HTMLDivElement, TabsWrapperProps>(
  TabsWrapperEl,
)
export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(TabsListEl)
export const Tab = forwardRef<HTMLButtonElement, TabProps>(TabEl)
export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(TabsPanelEl)
