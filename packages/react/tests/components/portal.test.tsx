import { render, screen } from 'test-utils'
import { Portal } from '@react'

describe('Portal', () => {
  it('renders children in the body', () => {
    render(
      <Portal>
        <div>test</div>
      </Portal>
    )

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('renders children in the specified mount', () => {
    const mount = document.createElement('div')
    render(
      <Portal mount={mount}>
        <div>test</div>
      </Portal>
    )

    expect(mount.querySelector('div')).toHaveTextContent('test')
  })

  it('renders children in the specified mount with a portalKey', () => {
    const mount = document.createElement('div')
    render(
      <Portal mount={mount} portalKey="testKey">
        <div>test</div>
      </Portal>
    )

    expect(mount.querySelector('div')).toHaveTextContent('test')
  })
})
