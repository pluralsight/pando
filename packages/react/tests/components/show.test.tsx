import { render, screen } from 'test-utils'
import { Show } from '@react'

describe('Show', () => {
  function Fallback() {
    return <button>log in</button>
  }

  function LogOutBtn() {
    return <button>log out</button>
  }

  it('renders children when true', () => {
    render(
      <Show when={true} fallback={<Fallback />}>
        <LogOutBtn />
      </Show>
    )
    expect(screen.getByText(/log out/i)).toBeInTheDocument()
  })

  it('renders fallback when false', () => {
    render(
      <Show when={false} fallback={<Fallback />}>
        <LogOutBtn />
      </Show>
    )
    expect(screen.getByText(/log in/i)).toBeInTheDocument()
  })
})
