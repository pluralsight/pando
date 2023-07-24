import { render, screen, userEvent } from 'test-utils'
import { TabsProvider, useTabs } from '@react'

describe('useTabs', () => {
  function Test() {
    const { activeTab, onTabClick } = useTabs()
    return (
      <div>
        <button onClick={() => onTabClick('test')} />
        <div>{activeTab || 'no tab active'}</div>
      </div>
    )
  }

  it('should throw an error when not wrapped in a TabsProvider', () => {
    expect(() => render(<Test />)).toThrow(
      'useTabs must be used within a TabsProvider',
    )
  })

  it('should return the activeTab and onTabClick', async () => {
    render(
      <TabsProvider>
        <Test />
      </TabsProvider>,
    )
    expect(screen.getByText('no tab active')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('should use the defaultActiveTab', () => {
    render(
      <TabsProvider defaultActiveTab="test-id">
        <Test />
      </TabsProvider>,
    )
    expect(screen.getByText('test-id')).toBeInTheDocument()
  })
})

describe('TabsProvider', () => {
  function Test() {
    const { activeTab, onTabClick } = useTabs()
    return (
      <div>
        <button onClick={() => onTabClick('test')} />
        <div>{activeTab}</div>
      </div>
    )
  }

  it('should set the defaultActiveTab', () => {
    render(
      <TabsProvider defaultActiveTab="test-id">
        <Test />
      </TabsProvider>,
    )
    expect(screen.getByText('test-id')).toBeInTheDocument()
  })

  it('should set the activeTab', async () => {
    render(
      <TabsProvider>
        <Test />
      </TabsProvider>,
    )
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
