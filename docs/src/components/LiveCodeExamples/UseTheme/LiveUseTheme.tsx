import { Button, Show, useTheme } from '@pluralsight/react'
import LiveCodeEditor from '../LiveCodeEditor'
import { css } from '@/styled-system/css'

const modeSwitchExample = `  
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
      palette='neutral'
      onClick={handleUpdateMode}
    >
      <Show when={mode == 'dark'} fallback={<>light mode is active</>}>dark mode is active</Show>
    </Button>
  )
`

const themeSwitchExample = `  
  // import { useTheme } from '@pluralsight/react' <- placeholder for example purposes
  // const { theme, updateTheme } = useTheme() <- placeholder for example purposes

  function handleUpdateTheme() {
    updateTheme(theme === 'inkyBlue' ? 'aDifferentTheme' : 'inkyBlue')
  }

  render(
    <Button
      aria-label={
        mode === 'inkyBlue' ? 'switch off the inkyBlue theme' : 'switch on the inkyBlue theme'
      }
      onClick={handleUpdateTheme}
      palette='neutral'
      className={theme !== 'inkyBlue' && 'use-theme-example-button'}
      >
      <Show when={theme==='inkyBlue'} fallback={<>turn on inkyBlue theme</>}>turn off inkyBlue theme</Show>
    </Button>
  )
`

export default function LiveUseTheme() {
  const { mode, updateMode, theme, updateTheme } = useTheme()

  const scope = {
    Button,
    Show,
    useTheme,
    mode,
    updateMode,
    theme,
    updateTheme,
  }

  return (
    <>
      <LiveCodeEditor
        componentString={modeSwitchExample}
        scope={scope}
        noInline
      />

      <Show when={theme !== 'inkyBlue'}>
        <p className={css({ color: '#fff' })}>
          <span>
            Pando theme colors will not display properly without the inkyBlue
            theme.
          </span>
          {'  '}You can inspect the html tag in your browser dev tools to see
          the applied theme as <code>data-theme="{theme}"</code>
        </p>
      </Show>
      <LiveCodeEditor
        componentString={themeSwitchExample}
        scope={scope}
        noInline
      />
    </>
  )
}
