import { TabsWrapper, TabsList, Tab, TabsPanel } from '@pluralsight/react'

export default function TabsPage() {
  return (
    <div>
      <h1>Tabs</h1>

      <TabsWrapper>
        <TabsList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabsList>

        <TabsPanel>Panel 1</TabsPanel>
        <TabsPanel>Panel 2</TabsPanel>
        <TabsPanel>Panel 3</TabsPanel>
      </TabsWrapper>
    </div>
  )
}
