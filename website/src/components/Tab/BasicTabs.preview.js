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
    <CodeBlock>{`import { useState } from 'react'
import { getTabProps } from '@pluralsight/headless-styles'

const tabProps = getTabProps()

function Tab(props) {
  const selected = props.selectedId === props.id

  return (
    <button
      {...tabProps.tab}
      aria-controls={props.panelId}
      aria-selected={selected}
      id={props.id}
      onClick={props.onClick}
      tabIndex={selected ? 0 : -1}
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
      aria-hidden={!selected}
      aria-expanded={selected}
      aria-labelledby={props.tabId}
      id={props.id}
      tabIndex={selected ? 0 : -1}
    >
      {props.children}
    </div>
  )
}

/*
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
*/

export default function Tabs(props) {
  const [selectedTab, setSelectedTab] = useState('tab0')
  const { tabList, tabs, panelList, panels } = props.tabData

  function selectTab(event) {
    setSelectedTab(event.target.id)
  }

  return (
    <div {...tabProps.wrapper}>
      <div {...tabProps.tabList}>
        {tabList.map((id) => (
          <Tab
            key={id}
            id={id}
            panelId={tabs[id].panelId}
            selectedId={selectedTab}
            onClick={selectTab}
          >
            {tabs[id].label}
          </Tab>
        ))}
      </div>
      <div {...tabProps.panelWrapper}>
        {panelList.map((id) => (
          <TabPanel
            key={id}
            id={id}
            tabId={panels[id].tabId}
            selectedId={selectedTab}
          >
            {panels[id].content}
          </TabPanel>
        ))}
      </div>
    </div>
  )
}`}</CodeBlock>
  )
}
