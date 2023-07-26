import { type MouseEvent, useMemo } from 'react'
import {
  TabsList,
  Tab,
  TabsPanel,
  For,
  TabsProvider,
  type TabsPanelProps,
  useTabs,
  Show,
} from '@pluralsight/react'

function PanelList() {
  const { activeTab } = useTabs()

  return (
    <Show
      when={activeTab !== 'tab-2'}
      fallback={<DynamicPanel id="panel-2" labelledBy="tab-2" />}
    >
      <StaticPanel
        id={`panel-${activeTab.split('-')[0]}`}
        labelledBy={activeTab}
      >
        <p>Panel 1</p>
      </StaticPanel>
    </Show>
  )
}

function StaticPanel(props: TabsPanelProps) {
  return (
    <TabsPanel id={props.id} labelledBy={props.labelledBy}>
      {props.children}
    </TabsPanel>
  )
}

function DynamicPanel(props: TabsPanelProps) {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <DynamicContent />')

  const items = []
  for (let i = 0; i < 500; i++) {
    items.push(<DynamicContent key={i} />)
  }

  return (
    <TabsPanel id={props.id} labelledBy={props.labelledBy}>
      {items}
    </TabsPanel>
  )
}

function DynamicContent() {
  const startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return <p>Dynamic Content</p>
}

export default function TabsPage() {
  const tabs = useMemo(
    () => [
      {
        id: 'tab-1',
        label: 'Tab 1',
        panel: 'panel-1',
      },
      {
        id: 'tab-2',
        label: 'Tab 2',
        panel: 'panel-2',
      },
      {
        id: 'tab-3',
        label: 'Tab 3',
        panel: 'panel-3',
      },
    ],
    [],
  )

  function handleClick(evt: MouseEvent<HTMLButtonElement>) {
    console.log('custom click handler', evt.currentTarget.value)
  }

  return (
    <div>
      <h1>Tabs</h1>

      <h2>Static Tabs</h2>

      <TabsProvider defaultActiveTab={tabs[0].id}>
        <TabsList>
          <For each={tabs}>
            {(tab) => (
              <Tab
                key={tab.id}
                controls={`panel-${tab.id}`}
                disabled={tab.id === 'tab-3'}
                id={tab.id}
                onClick={handleClick}
                value={tab.id}
              >
                {tab.label}
              </Tab>
            )}
          </For>
        </TabsList>

        <For each={tabs}>
          {(tab) => (
            <StaticPanel id={`panel-${tab.id}`} labelledBy={tab.id}>
              <p>Panel {tab.id.split('-')[1]}</p>
            </StaticPanel>
          )}
        </For>
      </TabsProvider>

      <br />

      <h2>Dynamic Tabs</h2>

      <TabsProvider defaultActiveTab={tabs[0].id}>
        <TabsList>
          <For each={tabs}>
            {(tab) => (
              <Tab
                key={tab.id}
                controls={`panel-${tab.id}`}
                disabled={tab.id === 'tab-3'}
                id={tab.id}
                onClick={handleClick}
                value={tab.id}
              >
                {tab.label}
              </Tab>
            )}
          </For>
        </TabsList>

        <PanelList />
      </TabsProvider>
    </div>
  )
}
