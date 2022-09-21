import { useState } from 'react'
import { getTabProps } from '../../../src'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet turpis gravida, gravida erat in, dapibus ex. Donec ac purus eget augue pellentesque pharetra. Nam placerat vestibulum ultricies. Vestibulum nisl magna, sodales in erat ut, lacinia accumsan est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin facilisis fermentum fermentum. Integer faucibus turpis nec nunc ultrices laoreet a vel ex. Quisque ornare turpis leo, eget bibendum odio vestibulum consequat. Aliquam hendrerit interdum odio sit amet laoreet. Curabitur aliquam pharetra tristique. Nunc a libero sapien. Aliquam cursus aliquet felis, nec tincidunt dolor fermentum aliquet. Vestibulum nisl felis, consectetur vel fringilla id, faucibus vel nibh. `

function TabList(props) {
  const tabProps = getTabProps()

  return <div {...tabProps.tabList}>{props.children}</div>
}

function Tab(props) {
  const tabProps = getTabProps({
    id: props.id,
    panelId: props.panelId,
    selected: props.selected,
    size: props.size,
  })

  return (
    <button {...tabProps.tab} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

function TabPanel(props) {
  const tabProps = getTabProps({
    id: props.tabId,
    panelId: props.id,
    selected: props.selected,
  })

  return <div {...tabProps.tabPanel}>{props.children}</div>
}

const tabCount = [...Array(11)]

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  function setTab(event) {
    setActiveTab(event.target.id)
  }

  return (
    <div id="tabs">
      <h3>Tabs</h3>
      <div
        className="App-container"
        style={{ flexDirection: 'column', textAlign: 'start' }}
      >
        <TabList>
          {tabCount.map((val, index) => (
            <Tab
              key={`tab${index}`}
              id={`tab${index}`}
              panelId={`panel${index}`}
              selected={activeTab === `tab${index}`}
              onClick={setTab}
              size="s"
            >
              Tab {index}
            </Tab>
          ))}
        </TabList>
        <TabList>
          {tabCount.map((val, index) => (
            <Tab
              key={`tab${index}`}
              id={`tab${index}`}
              panelId={`panel${index}`}
              selected={activeTab === `tab${index}`}
              onClick={setTab}
            >
              Tab {index}
            </Tab>
          ))}
        </TabList>
        {tabCount.map((val, index) => (
          <TabPanel
            key={`panel${index}`}
            id={`panel${index}`}
            tabId={`tab${index}`}
            selected={activeTab === `tab${index}`}
          >
            <h4>Panel {index}</h4>
            {lorem}
          </TabPanel>
        ))}
      </div>
    </div>
  )
}
