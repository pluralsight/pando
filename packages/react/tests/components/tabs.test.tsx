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
})

describe('Tab', () => {
  it('renders', () => {
    render(<Tab data-testid="tab" />)
    expect(screen.getByTestId('tab')).toBeInTheDocument()
  })

  it('forwards className', () => {
    render(<Tab data-testid="tab" className="test" />)
    expect(screen.getByTestId('tab')).toHaveClass('test')
  })

  it('forwards the ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Tab ref={ref} />)
    expect(ref.current).not.toBeNull()
  })
})

describe('TabsPanel', () => {
  it('renders', () => {
    render(<TabsPanel data-testid="panel" />)
    expect(screen.getByTestId('panel')).toBeInTheDocument()
  })

  it('forwards className', () => {
    render(<TabsPanel data-testid="panel" className="test" />)
    expect(screen.getByTestId('panel')).toHaveClass('test')
  })

  it('forwards the ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TabsPanel ref={ref} />)
    expect(ref.current).not.toBeNull()
  })
})
