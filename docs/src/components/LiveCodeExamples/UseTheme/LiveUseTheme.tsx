import { Button, useTheme } from '@pluralsight/react'
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
      {mode == 'dark' ? 'dark mode is active' : 'light mode is active'}
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
      {theme === 'inkyBlue' ? 'turn off inkyBlue theme' : 'turn on inkyBlue theme'}
    </Button>
  )
`

export default function LiveUseTheme() {
  const { mode, updateMode, theme, updateTheme } = useTheme()

  const scope = {
    Button,
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
      {theme !== 'inkyBlue' && (
        <p className={css({ color: '#fff' })}>
          <span>
            Pando theme colors will not display properly without the inkyBlue
            theme.
          </span>
          {'  '}You can inspect the html tag in your browser dev tools to see
          the applied theme as <code>data-theme="{theme}"</code>
        </p>
      )}
      <LiveCodeEditor
        componentString={themeSwitchExample}
        scope={scope}
        noInline
      />
    </>
  )
}
