import { useEffect } from 'react'
import { unstable_useTabs as useTabs } from '../../../../react-utils/src'
import { unstable_getJSTabProps, unstable_getTabProps } from '../../../src'
import { tabsData } from '../data/tabs.data'

const tabProps = unstable_getTabProps()

function TabsEl() {
  const { onTabClick, ...data } = useTabs(tabsData)

  return (
    <div {...tabProps.wrapper}>
      <TabList
        tabs={data.tabs}
        tabList={data.tabList}
        onTabClick={onTabClick}
      />
      <PanelList panels={data.panels} panelList={data.panelList} />
    </div>
  )
}

function TabList(props) {
  return (
    <div {...tabProps.tabList}>
      {props.tabList.map((tabId) => (
        <Tab {...props.tabs[tabId]} key={tabId} onTabClick={props.onTabClick}>
          {props.tabs[tabId].label}
        </Tab>
      ))}
    </div>
  )
}

function Tab(props) {
  return (
    <button {...tabProps.tab} {...props}>
      {props.children}
    </button>
  )
}

function SmallTab(props) {
  const smallTabProps = unstable_getTabProps({
    size: 's',
  })

  return (
    <button {...smallTabProps.tab} {...props}>
      {props.children}
    </button>
  )
}

function PanelList(props) {
  return (
    <div {...tabProps.panelWrapper}>
      {props.panelList.map((panelId) => (
        <TabPanel {...props.panels[panelId]} key={panelId}>
          {props.panels[panelId].id}
        </TabPanel>
      ))}
    </div>
  )
}

function TabPanel(props) {
  return (
    <div {...tabProps.tabPanel} {...props}>
      {props.children}
    </div>
  )
}

export default function Tabs({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log(unstable_getJSTabProps())
    }
  }, [logJS])

  return (
    <div id="tabs">
      <h3>Tabs</h3>
      <div className="App-container column">
        <div {...tabProps.tabList}>
          <SmallTab>one</SmallTab>
          <SmallTab>two</SmallTab>
          <SmallTab>three</SmallTab>
        </div>
      </div>

      <div className="App-container column">
        <TabsEl />
      </div>
    </div>
  )
}
