import { Outlet, RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {
  getButtonProps,
  getButtonIconOptions,
  getIconProps,
  getMenuProps,
  getMenuItemProps,
} from '@pluralsight/headless-styles'
import {
  useTheme,
  useMenuInteraction,
  useRovingTabIndex,
} from '@pluralsight/react-utils'
import { SunIcon, MoonIcon, MonitorIcon } from '@pluralsight/icons'
import { router } from './routes/routeConfig'
import Sidebar from './Sidebar'
import './App.css'

// import all shared styles so they get generated without requiring imports
// in Headless-Styles
import '../../src/components/shared/button.module.css'
import '../../src/components/shared/dialog.module.css'
import '../../src/components/shared/input.module.css'
import '../../src/components/shared/keyframes.module.css'
import '../../src/components/shared/position.module.css'
import '../../src/components/shared/states.module.css'
import '../../src/components/shared/tooltip.module.css'

const availableThemes = ['dark', 'light', 'system']
const themeIcons = {
  dark: MoonIcon,
  light: SunIcon,
  system: MonitorIcon,
}

function Icon(props) {
  const El = props.el
  return <El {...getIconProps(getButtonIconOptions())} />
}

function MatchThemeIcon(props) {
  return <Icon el={themeIcons[props.theme]} />
}

function MenuItem(props) {
  const { name } = props
  const menuItemProps = getMenuItemProps()
  const tabIndexProps = useRovingTabIndex()

  return (
    <li {...menuItemProps.menuListItem}>
      <button
        {...menuItemProps.menuItem}
        {...tabIndexProps}
        onClick={props.onSelectTheme}
        data-theme={name}
      >
        <MatchThemeIcon theme={name} />
        {name}
      </button>
    </li>
  )
}

function ThemeSelector(props) {
  const { theme } = props
  const menuProps = getMenuProps({
    label: 'Change theme',
  })
  const menuInteractionProps = useMenuInteraction()

  return (
    <div {...menuProps.wrapper}>
      <button
        {...getButtonProps({ sentiment: 'default' })}
        {...menuProps.trigger}
        {...menuInteractionProps.trigger}
      >
        <MatchThemeIcon theme={theme} />
        {theme}
      </button>
      {menuInteractionProps.expanded && (
        <menu {...menuProps.menu} {...menuInteractionProps.menu}>
          {availableThemes.map((name) => (
            <MenuItem
              key={name}
              name={name}
              onSelectTheme={props.onSelectTheme}
            />
          ))}
        </menu>
      )}
    </div>
  )
}

function App() {
  const { theme, updateTheme } = useTheme()

  function handleToggleTheme(e) {
    updateTheme(e.target.dataset.theme)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ThemeSelector theme={theme} onSelectTheme={handleToggleTheme} />
      </header>

      <div className="App-layout">
        <RouterProvider router={router}>
          <Sidebar />

          <div className="App-feature">
            <Outlet />
          </div>
        </RouterProvider>
      </div>

      <TanStackRouterDevtools router={router} />
    </div>
  )
}

export default App
