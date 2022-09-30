import React, { useState } from 'react'
import { unstable_getTabProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const tabProps = unstable_getTabProps()

function Tab(props) {
  const selected = props.selectedId === props.id

  return (
    <button
      {...tabProps.tab}
      id={props.id}
      aria-selected={selected}
      aria-controls={props.panelId}
      tabIndex={selected ? 0 : -1}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

function TabPanel(props) {
  const selected = props.selectedId === props.tabId

  return (
    <div
      {...tabProps.tabPanel}
      id={props.id}
      aria-hidden={!selected}
      aria-expanded={selected}
      aria-labelledby={props.tabId}
      tabIndex={selected ? 0 : -1}
    >
      {props.children}
    </div>
  )
}

const tabData = {
  tabList: ['tab0', 'tab1', 'tab2', 'tab3'],
  tabs: {
    tab0: {
      label: 'Tab 1',
      panelId: 'panel0',
    },
    tab1: {
      label: 'Tab 2',
      panelId: 'panel1',
    },
    tab2: {
      label: 'Tab 3',
      panelId: 'panel2',
    },
    tab3: {
      label: 'Tab 4',
      panelId: 'panel3',
    },
  },
  panelList: ['panel0', 'panel1', 'panel2', 'panel3'],
  panels: {
    panel0: {
      tabId: 'tab0',
      content: <p>Panel 1 contents</p>,
    },
    panel1: {
      tabId: 'tab1',
      content: <p>Panel 2 contents</p>,
    },
    panel2: {
      tabId: 'tab2',
      content: <p>Panel 3 contents</p>,
    },
    panel3: {
      tabId: 'tab3',
      content: <p>Panel 4 contents</p>,
    },
  },
}

function BasicTabs() {
  const [selectedTab, setSelectedTab] = useState('tab0')

  if (!tabProps) {
    return (
      <p>
        <strong>Tab feature is not enabled in this build</strong>
      </p>
    )
  }

  function selectTab(event) {
    setSelectedTab(event.target.id)
  }

  return (
    <Container textAlign="start">
      <div {...tabProps.wrapper}>
        <div {...tabProps.tabList}>
          {tabData.tabList.map((id) => (
            <Tab
              key={id}
              id={id}
              panelId={tabData.tabs[id].panelId}
              selectedId={selectedTab}
              onClick={selectTab}
            >
              {tabData.tabs[id].label}
            </Tab>
          ))}
        </div>
        <div {...tabProps.panelWrapper}>
          {tabData.panelList.map((id) => (
            <TabPanel
              key={id}
              id={id}
              tabId={tabData.panels[id].tabId}
              selectedId={selectedTab}
            >
              {tabData.panels[id].content}
            </TabPanel>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default BasicTabs
