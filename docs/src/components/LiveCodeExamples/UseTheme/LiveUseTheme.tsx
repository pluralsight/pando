import { Button, useTheme } from '@pluralsight/react'
import LiveCodeEditor from '../LiveCodeEditor'

const useModeExample = `  
  // import { useTheme } from '@pluralsight/react' <- placeholder for example purposes
  // const { mode, updateMode } = useTheme() <- placeholder for example purposes

  function handleUpdateMode() {
    updateMode(mode === 'dark' ? 'light' : 'dark')
  }

  render(
    <Button
      aria-label={
        mode === 'dark' ? 'switch to light mode' : 'switch to dark mode'
      }
      onClick={handleUpdateMode}
    >
      {mode == 'dark' ? 'dark mode is active' : 'light mode is active'}
    </Button>
  )
`

export default function LiveButton() {
  const { mode, updateMode } = useTheme()

  const scope = { Button, useTheme, mode, updateMode }

  return (
    <LiveCodeEditor componentString={useModeExample} scope={scope} noInline />
  )
}
