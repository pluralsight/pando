import React from 'react'
import { unstable_getTabProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const tabProps = unstable_getTabProps()
const smallTabProps = unstable_getTabProps({ size: 's' })

function Tab(props) {
  const selected = props.selectedId === props.id

  return (
    <button
      {...(props.size === 's' ? smallTabProps.tab : tabProps.tab)}
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
}

function TabSizes() {
  if (!tabProps) {
    return (
      <p>
        <strong>Tab feature is not enabled in this build</strong>
      </p>
    )
  }

  return (
    <Container textAlign="start">
      <div {...tabProps.wrapper}>
        <div {...tabProps.tabList}>
          {tabData.tabList.map((id) => (
            <Tab key={id} id={id} selectedId="tab0">
              {tabData.tabs[id].label}
            </Tab>
          ))}
        </div>
        <div {...tabProps.tabList}>
          {tabData.tabList.map((id) => (
            <Tab key={id} id={id} size="s" selectedId="tab0">
              {tabData.tabs[id].label}
            </Tab>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default TabSizes
