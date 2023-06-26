import { screen, render, userEvent } from 'test-utils'
import { MenuProvider, useMenu } from '@react'

describe('MenuProvider', () => {
  it('should render', () => {
    render(
      <MenuProvider>
        <div>This should render</div>
      </MenuProvider>
    )
    expect(screen.getByText(/this should render/i)).toBeInTheDocument()
  })
})

describe('useMenu', () => {
  it('should throw an error if used outside of a MenuProvider', () => {
    function Test() {
      useMenu()
      return <div />
    }

    expect(() => render(<Test />)).toThrow(
      'useMenu must be used within a MenuProvider'
    )
  })

  it('should return the context value', () => {
    function Test() {
      const context = useMenu()
      return <code>{JSON.stringify(context)}</code>
    }

    render(
      <MenuProvider>
        <Test />
      </MenuProvider>
    )

    expect(screen.getByText(/"expanded":false/i)).toBeInTheDocument()
    expect(screen.getByText(/"menuId"/i)).toBeInTheDocument()
    expect(screen.getByText(/"triggerId"/i)).toBeInTheDocument()
  })

  it('should update the context value', async () => {
    function Test() {
      const { expanded, setExpanded } = useMenu()
      return (
        <>
          <code>{JSON.stringify(expanded)}</code>
          <button onClick={() => setExpanded((prev) => !prev)}>Toggle</button>
        </>
      )
    }

    render(
      <MenuProvider>
        <Test />
      </MenuProvider>
    )

    expect(screen.getByText(/false/i)).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText(/true/i)).toBeInTheDocument()
  })
})
