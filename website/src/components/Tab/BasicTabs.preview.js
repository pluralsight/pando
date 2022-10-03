import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicTabsPreview() {
  return (
    <CodeBlock>{`<div {...tabProps.wrapper}>
  <div {...tabProps.tabList}>
    <button {...tabProps.tab}>Tab 1</button>
    <button {...tabProps.tab}>Tab 2</button>
  </div>
  <div {...tabProps.panelWrapper}>
    <div {...tabProps.tabPanel}>
      Panel 1 content
    </div>

    <div {...tabProps.tabPanel}>
      Panel 2 content
    </div>
  </div>
</div>`}</CodeBlock>
  )
}

export function BasicTabsFullPreview() {
  return (
    <CodeBlock>{`import { memo } from 'react'
import { getTabProps } from '@pluralsight/headless-styles'
import {
  TabsProvider,
  useTabList,
  useTab,
  usePanelList,
  usePanel,
} from '@pluralsight/react-utils'

const tabStyles = getTabProps()

function TabsEl() {
  return (
    <div {...tabStyles.wrapper}>
      <TabList />
      <PanelList />
    </div>
  )
}

function TabList() {
  const { onKeyDown, tabList } = useTabList()
  return (
    <div {...tabStyles.tabList} onKeyDown={onKeyDown}>
      {tabList.map((tabId) => (
        <Tab id={tabId} key={tabId} />
      ))}
    </div>
  )
}

function Tab(props) {
  const { tabs, ...tab } = useTab()
  const data = tabs[props.id]

  return (
    <button {...tabStyles.tab} {...tab} {...data}>
      {data.label}
    </button>
  )
}

function PanelList() {
  const data = usePanelList()
  return (
    <div {...tabStyles.panelWrapper}>
      {data.panelList.map((panelId) => (
        <TabPanel id={panelId} key={panelId} />
      ))}
    </div>
  )
}

function TabPanel(props) {
  const { panels } = usePanel()
  const data = panels[props.id]

  return (
    <div {...tabStyles.tabPanel} {...data}>
      {data.id} Content
    </div>
  )
}

function Tabs(props) {
  return (
    <TabsProvider data={props.data}>
      <TabsEl />
    </TabsProvider>
  )
}

export default memo(Tabs)`}</CodeBlock>
  )
}
