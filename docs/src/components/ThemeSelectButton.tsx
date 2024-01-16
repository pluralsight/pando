import { useTheme } from '@pluralsight/react'
import { useEffect } from 'react'

export default function ThemeSelectButton() {
  const { mode, theme, updateMode } = useTheme()

  function handleUpdateMode() {
    updateMode(mode === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.head.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    document.head.dataset.colorMode = mode
  }, [mode])

  return (
    <button
      aria-label={
        mode == 'dark' ? 'switch to light mode' : 'switch to dark mode'
      }
      onClick={handleUpdateMode}
    >
      {mode == 'dark' ? '🌞' : '🌚'}
    </button>
  )
}
