import React from 'react'
import { getTabProps } from '@pluralsight/headless-styles'
import {
  TabsProvider,
  useTabList,
  useTab,
  usePanelList,
  usePanel,
} from '@pluralsight/react-utils'
import Container from '../Container/Container'
import data from './tabs.data'

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

function BasicTabs() {
  return (
    <Container>
      <TabsProvider data={data}>
        <TabsEl />
      </TabsProvider>
    </Container>
  )
}

export default BasicTabs
