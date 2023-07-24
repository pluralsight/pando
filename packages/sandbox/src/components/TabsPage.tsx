import { type MouseEvent, useState } from 'react'
import { TabsWrapper, TabsList, Tab, TabsPanel, For } from '@pluralsight/react'

const tabs = [
  {
    id: 'tab-1',
    label: 'Tab 1',
    panel: 'Fetch 1',
    value: '1',
  },
  {
    id: 'tab-2',
    label: 'Tab 2',
    panel: 'Fetch 2',
    value: '2',
  },
  {
    id: 'tab-3',
    label: 'Tab 3',
    panel: 'Fetch 3',
    value: '3',
  },
]

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState<string>('1')

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    setActiveTab(e.currentTarget.value)
  }

  return (
    <div>
      <h1>Tabs</h1>

      <TabsWrapper>
        <TabsList>
          <For each={tabs}>
            {(tab) => (
              <Tab
                key={tab.id}
                controls={`panel-${tab.value}`}
                disabled={tab.value === '3'}
                id={tab.id}
                onClick={handleClick}
                selected={tab.value === activeTab}
                value={tab.value}
              >
                {tab.label}
              </Tab>
            )}
          </For>
        </TabsList>

        <For each={tabs}>
          {(tab) => (
            <TabsPanel
              key={tab.id}
              labelledBy={tab.id}
              hidden={tab.value !== activeTab}
              id={`panel-${tab.value}`}
            >
              {tab.panel}
            </TabsPanel>
          )}
        </For>
      </TabsWrapper>
    </div>
  )
}
