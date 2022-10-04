import { useEffect } from 'react'
import {
  unstable_TabsProvider as TabsProvider,
  unstable_useTabList as useTabsList,
  unstable_useTab as useTab,
  unstable_usePanelList as usePanelList,
  unstable_usePanel as usePanel,
} from '../../../../react-utils/src'
import { unstable_getJSTabProps, unstable_getTabProps } from '../../../src'
import { tabsData } from '../data/tabs.data'

const tabProps = unstable_getTabProps()

function TabsEl() {
  return (
    <div {...tabProps?.wrapper}>
      <TabList />
      <PanelList />
    </div>
  )
}

function TabList() {
  const hookProps = useTabsList()
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
  const smallTabProps = unstable_getTabProps({
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
    </div>
  )
}
