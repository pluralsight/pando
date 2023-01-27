import { useEffect, useState } from 'react'
import { Outlet, RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { getButtonProps } from '../../src'
import { router } from './routes/routeConfig'
import Sidebar from './Sidebar'
import './App.css'

// import all shared styles so they get generated without requiring imports
// in Headless-Styles
import '../../src/components/shared/button.module.css'
import '../../src/components/shared/input.module.css'

const initialTheme = localStorage.getItem('theme')

function App() {
  const [theme, setTheme] = useState(initialTheme)

  function handleToggleTheme() {
    setTheme((prev) => {
      if (prev === 'dark') {
        return 'light'
      }
      return 'dark'
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="App">
      <header className="App-header">
        <button
          {...getButtonProps({
            sentiment: 'default',
          }).button}
          onClick={handleToggleTheme}
        >
          {theme === 'dark' ? '🌞' : '🌙'}
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
