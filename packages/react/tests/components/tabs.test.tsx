/* eslint-disable sonarjs/no-duplicate-string */

import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { TabsWrapper, TabsList, Tab, TabsPanel, TabsProvider } from '@react'

describe('TabsWrapper', () => {
  it('renders', () => {
    render(<TabsWrapper data-testid="wrapper" />)
    expect(screen.getByTestId('wrapper')).toBeInTheDocument()
  })

  it('forwards className', () => {
    render(<TabsWrapper data-testid="wrapper" className="test" />)
    expect(screen.getByTestId('wrapper')).toHaveClass('test')
  })

  it('forwards the ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TabsWrapper ref={ref} />)
    expect(ref.current).not.toBeNull()
  })
})

describe('TabsList', () => {
  it('renders', () => {
    render(<TabsList data-testid="list" />, { wrapper: TabsProvider })
    expect(screen.getByTestId('list')).toBeInTheDocument()
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  it('forwards className', () => {
    render(<TabsList data-testid="list" className="test" />, {
      wrapper: TabsProvider,
    })
    expect(screen.getByTestId('list')).toHaveClass('test')
  })

  it('forwards the ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TabsList ref={ref} />, { wrapper: TabsProvider })
    expect(ref.current).not.toBeNull()
  })

  it('uses the labelledBy prop', () => {
    render(
      <TabsProvider>
        <label htmlFor="tabList" id="test-label">
          Tabs
        </label>
        <TabsList labelledBy="test-label" />
      </TabsProvider>,
    )
    expect(screen.getByRole('tablist')).toHaveAttribute(
      'aria-labelledby',
      'test-label',
    )
  })
})

describe('Tab', () => {
  it('renders', () => {
    render(
      <TabsProvider>
        <Tab controls="test-panel" data-testid="tab" value="test" />
      </TabsProvider>,
    )
    expect(screen.getByTestId('tab')).toBeInTheDocument()
    expect(screen.getByRole('tab')).toBeInTheDocument()
    expect(screen.getByRole('tab')).toHaveAttribute(
      'aria-controls',
      'test-panel',
    )
    expect(screen.getByRole('tab')).toHaveAttribute('tabIndex', '-1')
    expect(screen.getByRole('tab')).not.toHaveAttribute('aria-selected')
  })

  it('forwards className', () => {
    render(
      <TabsProvider>
        <Tab
          controls="test-panel"
          data-testid="tab"
          className="test"
          value="test"
        />
      </TabsProvider>,
    )
    expect(screen.getByTestId('tab')).toHaveClass('test')
  })

  it('forwards the ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <TabsProvider>
        <Tab controls="test-panel" ref={ref} value="test" />
      </TabsProvider>,
    )
    expect(ref.current).not.toBeNull()
  })
})

describe('TabsPanel', () => {
  const defaultTab = 'test-tab'

  it('renders', () => {
    render(
      <TabsProvider defaultActiveTab={defaultTab}>
        <TabsPanel labelledBy={defaultTab} data-testid="panel" />
      </TabsProvider>,
    )
    expect(screen.getByTestId('panel')).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toHaveAttribute(
      'aria-labelledby',
      'test-tab',
    )
    expect(screen.getByRole('tabpanel')).toHaveAttribute('tabIndex', '0')
    expect(screen.getByRole('tabpanel')).not.toHaveAttribute('aria-hidden')
  })

  it('forwards className', () => {
    render(
      <TabsProvider defaultActiveTab={defaultTab}>
        <TabsPanel
          labelledBy={defaultTab}
          data-testid="panel"
          className="test"
        />
      </TabsProvider>,
    )
    expect(screen.getByTestId('panel')).toHaveClass('test')
  })

  it('forwards the ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <TabsProvider defaultActiveTab={defaultTab}>
        <TabsPanel labelledBy={defaultTab} ref={ref} />
      </TabsProvider>,
    )
    expect(ref.current).not.toBeNull()
  })

  it('uses the hidden prop', () => {
    render(
      <TabsProvider defaultActiveTab={defaultTab}>
        <TabsPanel labelledBy={defaultTab} hidden />
      </TabsProvider>,
    )
    expect(
      screen.getByRole('tabpanel', {
        hidden: true,
      }),
    ).toHaveAttribute('aria-hidden', 'true')
    expect(
      screen.getByRole('tabpanel', {
        hidden: true,
      }),
    ).toHaveAttribute('tabIndex', '-1')
  })
})
