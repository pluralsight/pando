import { Outlet, RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { useTheme } from '@pluralsight/react-utils'
import { SunIcon, MoonIcon } from '@pluralsight/icons'
import { router } from './routes/routeConfig'
import Sidebar from './Sidebar'
import './App.css'

// import all shared styles so they get generated without requiring imports
// in Headless-Styles
import '../../src/components/shared/button.module.css'
import '../../src/components/shared/input.module.css'
import '../../src/components/shared/keyframes.module.css'
import '../../src/components/shared/position.module.css'
import '../../src/components/shared/states.module.css'
import '../../src/components/shared/tooltip.module.css'

const iconButtonProps = getIconButtonProps({
  ariaLabel: 'theme toggle',
  sentiment: 'default',
})

function Icon(props) {
  const El = props.el
  return <El {...getIconProps(iconButtonProps.iconOptions)} />
}

function App() {
  const { theme, updateTheme } = useTheme()

  function handleToggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    updateTheme(newTheme)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button {...iconButtonProps.button} onClick={handleToggleTheme}>
          {theme === 'dark' ? <Icon el={SunIcon} /> : <Icon el={MoonIcon} />}
        </button>
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
