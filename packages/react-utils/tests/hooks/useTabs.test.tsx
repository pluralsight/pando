import { render, screen, userEvent } from 'test-utils'
import { unstable_useTabs as useTabs } from '../../src'
import type { TabsData } from '../../src/hooks/useTabs/types'

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

  interface PanelListProps {
    panels: TabsData['panels']
    panelList: TabsData['panelList']
  }

  function PanelList(props: PanelListProps) {
    return (
      <div>
        {props.panelList.map((panelId) => (
          <div {...props.panels[panelId]} key={panelId}>
            panelId content
          </div>
        ))}
      </div>
    )
  }

  interface TabListProps {
    tabs: TabsData['tabs']
    tabList: TabsData['tabList']
    onTabClick: TabsData['onTabClick']
  }

  function TabList(props: TabListProps) {
    return (
      <div>
        {props.tabList.map((tabId) => (
          <button {...props.tabs[tabId]} key={tabId} onClick={props.onTabClick}>
            {props.tabs[tabId].label}
          </button>
        ))}
      </div>
    )
  }

  function Tabs() {
    const { onTabClick, ...data } = useTabs(tabs)

    return (
      <div>
        <TabList
          tabs={data.tabs}
          tabList={data.tabList}
          onTabClick={onTabClick}
        />
        <PanelList panels={data.panels} panelList={data.panelList} />
      </div>
    )
  }

  const selected = 'aria-selected'
  const hidden = 'aria-hidden'

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

    expect(screen.getAllByRole('tab')[0]).toHaveAttribute(selected, 'false')
    // expect(screen.getAllByRole('tabpanel')[0]).toHaveAttribute(hidden, 'true')
    expect(screen.getAllByRole('tab')[2]).toHaveAttribute(selected, 'true')
    // expect(screen.getAllByRole('tabpanel')[2]).toHaveAttribute(hidden, 'false')
  })

  test('should call onClick option if given', async () => {
    const user = userEvent.setup()
    const clickers = jest.fn()

    function TabsClick() {
      const { onTabClick, ...data } = useTabs(tabs, {
        onClick: clickers,
      })

      return (
        <div>
          <TabList
            tabs={data.tabs}
            tabList={data.tabList}
            onTabClick={onTabClick}
          />
          <PanelList panels={data.panels} panelList={data.panelList} />
        </div>
      )
    }

    render(<TabsClick />)
    await user.click(screen.getByText(/three/i))

    expect(clickers).toHaveBeenCalledWith('2')
  })

  test.todo('should navigate between tabs with arrow keys')

  test.todo('should activate tab on enter/space keydown')
})
