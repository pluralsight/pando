import { useTheme } from '@pluralsight/react'

export default function ThemeSelectButton() {
  const { mode, updateMode } = useTheme('inkyBlue')

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
