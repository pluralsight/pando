import { createRef } from 'react'
import { Flex, FlexItem } from '@pluralsight/react'
import { render, screen } from 'test-utils'

describe('Flex', () => {
  it('forwards refs', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Flex ref={ref}>
        <FlexItem>one</FlexItem>
      </Flex>
    )
    expect(ref.current).not.toBeNull()
  })

  it('renders children', () => {
    render(
      <Flex>
        <FlexItem>one</FlexItem>
      </Flex>
    )
    expect(screen.getByText('one')).toBeInTheDocument()
  })

  it('renders with className', () => {
    render(
      <Flex data-testid="flex-container" className="test">
        <FlexItem>one</FlexItem>
      </Flex>
    )
    expect(screen.getByTestId('flex-container')).toHaveClass('test')
  })
})

describe('FlexItem', () => {
  it('forwards refs', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Flex>
        <FlexItem ref={ref}>one</FlexItem>
      </Flex>
    )
    expect(ref.current).not.toBeNull()
  })

  it('renders children', () => {
    render(
      <Flex>
        <FlexItem>one</FlexItem>
      </Flex>
    )
    expect(screen.getByText('one')).toBeInTheDocument()
  })

  it('renders with className', () => {
    render(
      <Flex>
        <FlexItem className="test">one</FlexItem>
      </Flex>
    )
    expect(screen.getByText('one')).toHaveClass('test')
  })
})
