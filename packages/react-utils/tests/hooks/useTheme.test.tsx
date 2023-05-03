import { render, screen, userEvent, waitFor } from 'test-utils'
import type { CustomThemes } from '../../src/types.d.ts'
import { useTheme } from '../../src/index.ts'

// JSDOM mock not available 😭
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

type NewThemes = 'flow-dark' | 'flow-light'

describe('useTheme', () => {
  beforeEach(() => {
    document.documentElement.dataset.theme = ''
    localStorage.clear()
  })

  const KEY = 'data-theme'
  const LS_KEY = 'pandoTheme'

  interface Props {
    initialTheme?: CustomThemes<NewThemes>
  }

  function TestComponent(props: Props) {
    const { theme, updateTheme } = useTheme<NewThemes>(props.initialTheme)

    function handleToggleTheme() {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      updateTheme(newTheme)
    }

    return (
      <button type="button" onClick={handleToggleTheme}>
        Toggle Theme
      </button>
    )
  }

  function setup(theme?: CustomThemes<NewThemes>) {
    const user = userEvent.setup()
    render(<TestComponent initialTheme={theme} />)

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

  test('should use the custom theme provided', () => {
    const theme = 'flow-dark'
    setup(theme)
    expect(localStorage.getItem(LS_KEY)).toBe(theme)
    expect(document.documentElement).toHaveAttribute(KEY, theme)
  })

  test('should use filtered system theme provided', () => {
    const theme = 'system'
    setup(theme)
    expect(localStorage.getItem(LS_KEY)).toBe(theme)
    expect(document.documentElement).toHaveAttribute(KEY, 'dark')
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
