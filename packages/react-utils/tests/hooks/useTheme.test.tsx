import { render, screen, userEvent, waitFor } from 'test-utils'
import { useTheme } from '../../src'

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const KEY = 'data-theme'
  const LS_KEY = 'pandoTheme'

  function TestComponent() {
    const { theme, toggleTheme } = useTheme()

    function handleToggleTheme() {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      toggleTheme(newTheme)
    }

    return (
      <button type="button" onClick={handleToggleTheme}>
        Toggle Theme
      </button>
    )
  }

  function setup() {
    const user = userEvent.setup()
    render(<TestComponent />)

    const button = screen.getByText(/toggle theme/i)

    return { user, button }
  }

  test('should set an initial theme to dark', async () => {
    setup()
    expect(document.documentElement).toHaveAttribute(KEY, 'dark')
  })

  test('should set the theme to light', async () => {
    const { user, button } = setup()
    await waitFor(() => user.click(button))
    expect(document.documentElement).toHaveAttribute(KEY, 'light')
  })

  test('should set the theme back to dark when it is set to light', async () => {
    const { user, button } = setup()
    await waitFor(() => user.click(button))
    await waitFor(() => user.click(button))
    expect(document.documentElement).toHaveAttribute(KEY, 'dark')
  })

  test('should persist the theme in local storage when it is changed to light', async () => {
    const { user, button } = setup()
    await waitFor(() => user.click(button))
    expect(localStorage.getItem(LS_KEY)).toBe('light')
    expect(document.documentElement).toHaveAttribute(KEY, 'light')
  })

  test('should persist the theme in local storage when it is changed to dark', async () => {
    const { user, button } = setup()
    await waitFor(() => user.click(button))
    await waitFor(() => user.click(button))
    expect(localStorage.getItem(LS_KEY)).toBe('dark')
    expect(document.documentElement).toHaveAttribute(KEY, 'dark')
  })

  test('should be light theme if the useTheme hook is provided an inital value of light', () => {
    const TestComponent = () => {
      const { theme } = useTheme('light')
      return (
        <div>
          <div data-testid="theme">{theme}</div>
        </div>
      )
    }
    render(<TestComponent />)
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
  })

  test('should be dark theme if the useTheme hook is provided an inital value of dark', () => {
    const TestComponent = () => {
      const { theme } = useTheme('dark')
      return (
        <div>
          <div data-testid="theme">{theme}</div>
        </div>
      )
    }
    render(<TestComponent />)
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
  })
})
