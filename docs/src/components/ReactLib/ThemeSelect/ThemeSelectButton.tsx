import { useTheme, IconButton } from '@pluralsight/react'
import { SunIcon, MoonIcon } from '@pluralsight/react/icons'

export default function ThemeSelectButton() {
  const { mode, updateMode } = useTheme()

  function handleUpdateMode() {
    updateMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <IconButton
      ariaLabel={
        mode == 'dark' ? 'switch to light mode' : 'switch to dark mode'
      }
      usage="text"
      onClick={handleUpdateMode}
    >
      {mode == 'dark' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  )
}
