import { useEffect, useState } from 'react'
import {
  TabsProvider,
  useTabList,
  useTab,
  usePanelList,
  usePanel,
} from '../../../../react-utils/src'
import { getJSTabsProps, getTabsProps } from '../../../src'
import { tabsData } from '../data/tabs.data'

const tabProps = getTabsProps()
const tabPropsJS = getJSTabsProps()

function TabsEl() {
  return (
    <div {...tabProps?.wrapper}>
      <TabList />
      <PanelList />
    </div>
  )
}

function TabList() {
  const hookProps = useTabList()
  return (
    <div {...tabProps?.tabList} onKeyDown={hookProps?.onKeyDown}>
      {hookProps?.tabList.map((tabId) => (
        <Tab id={tabId} key={tabId} />
      ))}
    </div>
  )
}

function Tab(props) {
  const { tabs, ...tab } = useTab()
  const data = tabs[props.id]

  return (
    <button {...tabProps.tab} {...tab} {...data}>
      {data.label}
    </button>
  )
}

function SmallTab(props) {
  const smallTabProps = getTabsProps({
    size: 's',
  })

  return (
    <button {...smallTabProps?.tab} {...props}>
      {props.children}
    </button>
  )
}

function PanelList() {
  const data = usePanelList()
  return (
    <div {...tabProps?.panelWrapper}>
      {data?.panelList.map((panelId) => (
        <TabPanel id={panelId} key={panelId} />
      ))}
    </div>
  )
}

function TabPanel(props) {
  const { panels } = usePanel()
  const data = panels[props.id]

  return (
    <div {...tabProps.tabPanel} {...data}>
      {data.id}
    </div>
  )
}

// JS

function TabsJS() {
  return (
    <div {...tabProps?.wrapper}>
      <TabListJS />
      <PanelListJS />
    </div>
  )
}

function TabListJS() {
  const hookProps = useTabList()

  return (
    <div
      {...tabPropsJS?.tabList.a11yProps}
      style={tabPropsJS?.tabList.styles}
      onKeyDown={hookProps?.onKeyDown}
    >
      {hookProps?.tabList.map((tabId) => (
        <TabJS id={tabId} key={tabId} />
      ))}
    </div>
  )
}

function TabJS(props) {
  const [hovering, setHovering] = useState(false)
  const [focused, setFocused] = useState(false)
  const { tabs, ...tab } = useTab()
  const data = tabs[props.id]

  function handleHover() {
    setHovering(true)
  }

  function handleHoverEnd() {
    setHovering(false)
  }

  function handleFocus() {
    setFocused(true)
  }

  function handleBlur() {
    setFocused(false)
  }

  return (
    <button
      {...tabProps.tab.a11yProps}
      {...tab}
      {...data}
      onMouseOver={handleHover}
      onMouseOut={handleHoverEnd}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        ...tabPropsJS.tab.styles,
        ...(data['aria-selected'] &&
          tabPropsJS.tab.styles["&[aria-selected='true']"]),
        ...(focused && tabPropsJS.tab.styles['&:focus']),
      }}
    >
      {data.label}
      <span
        style={{
          ...tabPropsJS.tab.styles['&::after'],
          ...(data['aria-selected'] &&
            tabPropsJS.tab.styles["&[aria-selected='true']::after"]),
          ...(hovering && tabPropsJS.tab.styles['&:hover::after']),
        }}
      />
    </button>
  )
}

function SmallTabJS(props) {
  const smallTabPropsJS = getJSTabsProps({
    size: 's',
  })

  return (
    <button
      {...smallTabPropsJS?.tab.a11yProps}
      {...props}
      style={smallTabPropsJS.tab.styles}
    >
      {props.children}
    </button>
  )
}

function PanelListJS() {
  const data = usePanelList()

  return (
    <div
      {...tabPropsJS?.panelWrapper.a11yProps}
      style={tabPropsJS.panelWrapper.styles}
    >
      {data?.panelList.map((panelId) => (
        <TabPanelJS id={panelId} key={panelId} />
      ))}
    </div>
  )
}

function TabPanelJS(props) {
  const { panels } = usePanel()
  const data = panels[props.id]

  return (
    <div
      {...tabPropsJS.tabPanel.a11yProps}
      {...data}
      style={{
        ...tabPropsJS.tabPanel.styles,
        ...(data['aria-hidden'] &&
          tabPropsJS.tabPanel.styles["&[aria-hidden='true']"]),
      }}
    >
      {data.id}
    </div>
  )
}

export default function Tabs({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log(getJSTabsProps())
    }
  }, [logJS])

  return (
    <div id="tabs">
      <h2>Tabs</h2>

      <h3>CSS</h3>
      <div className="App-container column">
        <div {...tabProps?.tabList}>
          <SmallTab>one</SmallTab>
          <SmallTab>two</SmallTab>
          <SmallTab>three</SmallTab>
        </div>
      </div>

      <div className="App-container column">
        <TabsProvider data={tabsData}>
          <TabsEl />
        </TabsProvider>
      </div>

      <h3>JS</h3>
      <div className="App-container column">
        <div
          {...tabPropsJS?.tabList.a11yProps}
          style={tabPropsJS.tabList.styles}
        >
          <SmallTabJS>one</SmallTabJS>
          <SmallTabJS>two</SmallTabJS>
          <SmallTabJS>three</SmallTabJS>
        </div>
      </div>

      <div className="App-container column">
        <TabsProvider data={tabsData}>
          <TabsJS />
        </TabsProvider>
      </div>
    </div>
  )
}
