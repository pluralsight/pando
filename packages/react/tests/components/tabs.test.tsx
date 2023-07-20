/* eslint-disable sonarjs/no-duplicate-string */

import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { TabsWrapper, TabsList, Tab, TabsPanel } from '@react'

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
    render(<TabsList data-testid="list" />)
    expect(screen.getByTestId('list')).toBeInTheDocument()
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  it('forwards className', () => {
    render(<TabsList data-testid="list" className="test" />)
    expect(screen.getByTestId('list')).toHaveClass('test')
  })

  it('forwards the ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TabsList ref={ref} />)
    expect(ref.current).not.toBeNull()
  })

  it('uses the labelledBy prop', () => {
    render(
      <>
        <label htmlFor="tabList" id="test-label">
          Tabs
        </label>
        <TabsList labelledBy="test-label" />
      </>,
    )
    expect(screen.getByRole('tablist')).toHaveAttribute(
      'aria-labelledby',
      'test-label',
    )
  })
})

describe('Tab', () => {
  it('renders', () => {
    render(<Tab controls="test-panel" data-testid="tab" />)
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
    render(<Tab controls="test-panel" data-testid="tab" className="test" />)
    expect(screen.getByTestId('tab')).toHaveClass('test')
  })

  it('forwards the ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Tab controls="test-panel" ref={ref} />)
    expect(ref.current).not.toBeNull()
  })
})

describe('TabsPanel', () => {
  it('renders', () => {
    render(<TabsPanel labelledBy="test-tab" data-testid="panel" />)
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
      <TabsPanel labelledBy="test-tab" data-testid="panel" className="test" />,
    )
    expect(screen.getByTestId('panel')).toHaveClass('test')
  })

  it('forwards the ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TabsPanel labelledBy="test-tab" ref={ref} />)
    expect(ref.current).not.toBeNull()
  })

  it('uses the hidden prop', () => {
    render(<TabsPanel labelledBy="test-tab" hidden />)
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
