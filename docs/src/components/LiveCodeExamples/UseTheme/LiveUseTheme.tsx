import { Button, useTheme } from '@pluralsight/react'
import LiveCodeEditor from '../LiveCodeEditor'
export const useThemeExample1 = `
    import { useTheme } from '@pluralsight/react'
  const { mode, updateMode } = useTheme()

  function handleUpdateMode() {
    updateMode(mode === 'dark' ? 'light' : 'dark')
  }
    return (<Button
      aria-label={
        mode == 'dark' ? 'switch to light mode' : 'switch to dark mode'
      }
      onClick={handleUpdateMode}
    >
      {mode == 'dark' ? '🌞' : '🌚'}
    </Button>)`

export const useThemeExample = `<strong>Hello World!</strong>`

export default function LiveButton({
  componentString,
}: {
  readonly componentString: string
}) {
  const { mode, updateMode } = useTheme()

  const scope = { Button, useTheme, mode, updateMode }

  return (
    <LiveCodeEditor componentString={componentString} scope={scope} noInline />
  )
}
