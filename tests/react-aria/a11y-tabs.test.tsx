import { jest } from '@jest/globals'
import { render, screen } from 'test-utils'
import {
  useAriaTabList,
  useAriaTab,
  useAriaTabPanel,
  type UseTabListOptions,
  type UseTabOptions,
  type UseTabPanelOptions,
} from '@pluralsight/react-aria'

describe('useAriaTabList', () => {
  function Test(props: UseTabListOptions) {
    const a11yProps = useAriaTabList(props)
    return <div {...a11yProps} />
  }

  test('should have role="tablist"', () => {
    render(<Test activeTabValue="test" setFocus={jest.fn} tabsRefList={{}} />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getByRole('tablist')).not.toHaveAttribute('aria-labelledby')
  })

  test('should use aria-labelledby when provided', () => {
    render(
      <Test
        labelledBy="test"
        activeTabValue="test"
        setFocus={jest.fn}
        tabsRefList={{}}
      />,
    )
    expect(screen.getByRole('tablist')).toHaveAttribute(
      'aria-labelledby',
      'test',
    )
  })
})

describe('useAriaTab', () => {
  function Test(props: UseTabOptions) {
    const a11yProps = useAriaTab(props)
    return <button {...a11yProps} />
  }

  test('should have role="tab"', () => {
    render(<Test controls="test-panel" />)
    expect(screen.getByRole('tab')).toBeInTheDocument()
    expect(screen.getByRole('tab')).not.toHaveAttribute('aria-selected')
    expect(screen.getByRole('tab')).toHaveAttribute(
      'aria-controls',
      'test-panel',
    )
    expect(screen.getByRole('tab')).toHaveAttribute('tabindex', '-1')
  })

  test('should use aria-controls when provided', () => {
    render(<Test controls="test" />)
    expect(screen.getByRole('tab')).toHaveAttribute('aria-controls', 'test')
  })

  test('should use aria-selected when provided', () => {
    render(<Test controls="test-2" selected />)
    expect(screen.getByRole('tab')).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab')).toHaveAttribute('tabindex', '0')
  })
})

describe('useAriaTabPanel', () => {
  function Test(props: UseTabPanelOptions) {
    const a11yProps = useAriaTabPanel(props)
    return <div {...a11yProps} />
  }

  test('should have role="tabpanel"', () => {
    render(<Test labelledBy="tab1" />)
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toHaveAttribute('tabindex', '0')
    expect(screen.getByRole('tabpanel')).toHaveAttribute(
      'aria-labelledby',
      'tab1',
    )
    expect(screen.getByRole('tabpanel')).not.toHaveAttribute('aria-hidden')
  })

  test('should use aria-hidden when not selected', () => {
    render(<Test labelledBy="test" hidden={true} />)
    expect(
      screen.getByRole('tabpanel', {
        hidden: true,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('tabpanel', {
        hidden: true,
      }),
    ).toHaveAttribute('tabindex', '-1')
  })
})
