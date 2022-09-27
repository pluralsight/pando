import type { PropsWithChildren } from 'react'
import { render, screen, userEvent } from 'test-utils'
import {
  unstable_TabsProvider as TabsProvider,
  unstable_useTabList as useTabList,
  unstable_useTab as useTab,
  unstable_usePanelList as usePanelList,
  unstable_usePanel as usePanel,
} from '../../src'
import type { PanelId, TabId } from '../../src/hooks/useTabs/types'

jest.mock('@pluralsight/shared', () => {
  return {
    tabsHook: true,
  }
})

describe('useTabs', () => {
  const tabs = [
    {
      id: '0',
      label: 'One',
      children: {
        id: '0:panel',
      },
    },
    {
      id: '1',
      label: 'Two',
      children: {
        id: '1:panel',
      },
    },
    {
      id: '2',
      label: 'Three',
      children: {
        id: '2:panel',
      },
    },
  ]

  function Tabs() {
    return (
      <div>
        <TabsProvider data={tabs}>
          <TabList />
          <PanelList />
        </TabsProvider>
      </div>
    )
  }

  function TabList() {
    const { onKeyDown, tabList } = useTabList()

    return (
      <div onKeyDown={onKeyDown}>
        {tabList.map((tabId) => (
          <Tab key={tabId} id={tabId} />
        ))}
      </div>
    )
  }

  interface TabProps {
    id: TabId
  }

  function Tab(props: TabProps) {
    const { tabs, ...tabProps } = useTab()
    const data = tabs[props.id]
    return (
      <button {...data} {...tabProps}>
        {data.label}
      </button>
    )
  }

  function PanelList() {
    const { panelList } = usePanelList()
    return (
      <div>
        {panelList.map((panelId) => (
          <Panel key={panelId} id={panelId}>
            panelId content
          </Panel>
        ))}
      </div>
    )
  }

  interface PanelProps {
    id: PanelId
  }

  function Panel(props: PropsWithChildren<PanelProps>) {
    const { panels } = usePanel()
    const data = panels[props.id]
    return <div {...data}>{data.id}</div>
  }

  const selected = 'aria-selected'
  const hidden = 'aria-hidden'
  const arrowRight = '{ArrowRight}'

  test('should display a default set of tabs', () => {
    render(<Tabs />)
    expect(screen.getAllByRole('tab').length).toEqual(3)
  })

  test('should display the first tab as active by default', () => {
    render(<Tabs />)
    const tab = screen.getAllByRole('tab')[0]
    const panel = screen.getAllByRole('tabpanel')[0]

    expect(tab).toHaveAttribute(selected, 'true')
    expect(tab).toHaveAttribute('tabindex', '0')
    expect(panel).toHaveAttribute(hidden, 'false')
    expect(panel).toHaveAttribute('aria-expanded', 'true')
    expect(panel).toHaveAttribute('tabindex', '0')
  })

  test('should update the active state of tabs onClick', async () => {
    const user = userEvent.setup()
    render(<Tabs />)

    await user.click(screen.getByText(/three/i))

    expect(screen.getByRole('tab', { name: /one/i })).toHaveAttribute(
      selected,
      'false'
    )
    expect(screen.getByRole('tab', { name: /three/i })).toHaveAttribute(
      selected,
      'true'
    )
    expect(screen.getByRole('tabpanel', { name: /three/i })).toHaveAttribute(
      hidden,
      'false'
    )
  })

  test('should navigate between tabs with arrow keys', async () => {
    const user = userEvent.setup()
    render(<Tabs />)

    await user.click(screen.getByRole('tab', { name: /one/i }))
    await user.keyboard(arrowRight)
    expect(screen.getByRole('tab', { name: /one/i })).toHaveFocus()
    await user.keyboard(arrowRight)
    await user.keyboard(arrowRight)
    await user.keyboard('ArrowLeft')
    expect(screen.getByRole('tab', { name: /three/i })).toHaveFocus()
  })

  test('should activate tab on enter/space keydown', async () => {
    const user = userEvent.setup()
    render(<Tabs />)

    await user.click(screen.getByRole('tab', { name: /one/i }))
    await user.keyboard(arrowRight)
    await user.keyboard(arrowRight)
    await user.keyboard(arrowRight)
    await user.keyboard('Enter')
    expect(screen.getByRole('tab', { name: /three/i })).toHaveFocus()
  })
})
