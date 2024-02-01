import { Button, useTheme } from '@pluralsight/react'
import LiveCodeEditor from '../LiveCodeEditor'
;`function UseThemeExample() {
  const { mode, updateMode } = useTheme()

  function handleUpdateMode() {
    updateMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      aria-label={
        mode == 'dark' ? 'switch to light mode' : 'switch to dark mode'
      }
      onClick={handleUpdateMode}
    >
      {mode == 'dark' ? '🌞' : '🌚'}
    </Button>
  )
}`

export default function LiveButton({
  componentString,
}: {
  componentString: string
}) {
  const { mode, updateMode } = useTheme()

  function handleUpdateMode() {
    updateMode(mode === 'dark' ? 'light' : 'dark')
  }
  const scope = { Button, useTheme, mode, updateMode, handleUpdateMode }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
