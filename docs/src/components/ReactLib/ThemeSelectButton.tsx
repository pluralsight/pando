import { useEffect } from 'react'
import { useTheme } from '@pluralsight/react'

export default function ThemeSelectButton() {
  const { mode, theme, updateMode, updateTheme } = useTheme()

  useEffect(() => {
    if (theme !== 'inkyBlue') updateTheme('inkyBlue')
  }, [])

  function handleUpdateMode() {
    updateMode(mode === 'dark' ? 'light' : 'dark')
  }

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
