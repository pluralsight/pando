import { Show, Icon } from '@pluralsight/react'
import { MoonIcon, SunIcon } from '@pluralsight/icons'
import { useState, type MouseEvent, useEffect } from 'react'
import { css } from '~/styled-system/css'
import { container, hstack } from '~/styled-system/patterns'

import ActionMenuPage from './components/ActionMenuPage.tsx'
import AdmonitionPage from './components/AdmonitionPage.tsx'
import AvatarPage from './components/AvatarPage.tsx'
import BadgePage from './components/BadgePage.tsx'
import ButtonPage from './components/ButtonPage.tsx'
import CircularProgressPage from './components/CircularProgress.tsx'
import ConfirmPage from './components/ConfirmPage.tsx'
import PromptPage from './components/PromptPage.tsx'
import FlexPage from './components/FlexPage.tsx'
import ForPage from './components/ForPage.tsx'
import FormsPage from './components/FormsPage.tsx'
import GridPage from './components/GridPage.tsx'
import IconPage from './components/IconPage.tsx'
import IconButtonPage from './components/IconButtonPage.tsx'
import MenuPage from './components/MenuPage.tsx'
import ModalPage from './components/ModalPage.tsx'
import PopoverPage from './components/PopoverPage.tsx'
import ProgressBarPage from './components/ProgressBarPage.tsx'
import SkeletonPage from './components/SkeletonPage.tsx'
import TabsPage from './components/TabsPage.tsx'
import TablePage from './components/TablePage.tsx'
import TagPage from './components/TagPage.tsx'
import TextLinkPage from './components/TextLinkPage.tsx'
import ToastPage from './components/ToastPage.tsx'

type Modes = 'light' | 'dark' | 'system'
// type Themes = 'inkyBlue'

function App() {
  const [mode, setMode] = useState<Modes>('light')
  // const [theme, setTheme] = useState<Themes>('inkyBlue')

  function handleModeChange(e: MouseEvent<HTMLButtonElement>) {
    console.log('mode', e.currentTarget.value)
    setMode(e.currentTarget.value as Modes)
  }

  useEffect(() => {
    window.localStorage.setItem('mode', mode)
    window.document.documentElement.dataset.colorMode = mode
  }, [mode])

  return (
    <div>
      <nav
        className={hstack({
          bgColor: 'neutral.surface.100',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.100',
          gap: '4',
          justify: 'space-between',
          p: '4',
          position: 'sticky',
          shadow: 'lg',
          top: '0',
          width: '100%',
          zIndex: 'sticky',
        })}
      >
        <h1>Pando Design System</h1>

        <ul>
          <li>
            <Show
              when={mode === 'light'}
              fallback={
                <button
                  aria-label="Toggle light mode"
                  className={css({ color: 'neutral.text.initial' })}
                  onClick={handleModeChange}
                  type="button"
                  value="light"
                >
                  <Icon ariaHidden={true} icon={MoonIcon} />
                </button>
              }
            >
              <button
                aria-label="Toggle dark mode"
                className={css({ color: 'neutral.text.initial' })}
                onClick={handleModeChange}
                type="button"
                value="dark"
              >
                <Icon ariaHidden={true} icon={SunIcon} />
              </button>
            </Show>
          </li>
        </ul>
      </nav>

      <main>
        <div className={container()}>
          <ActionMenuPage />
          <br />
          <AdmonitionPage />
          <br />
          <AvatarPage />
          <br />
          <BadgePage />
          <br />
          <ButtonPage />
          <br />
          <CircularProgressPage />
          <br />
          <ConfirmPage />
          <br />
          <PromptPage />
          <br />
          <FlexPage />
          <br />
          <ForPage />
          <br />
          <FormsPage />
          <br />
          <GridPage />
          <br />
          <IconPage />
          <br />
          <IconButtonPage />
          <br />
          <MenuPage />
          <br />
          <ModalPage />
          <br />
          <PopoverPage />
          <br />
          <ProgressBarPage />
          <br />
          <SkeletonPage />
          <br />
          <TabsPage />
          <br />
          <TablePage />
          <br />
          <TagPage />
          <br />
          <TextLinkPage />
          <br />
          <ToastPage />
        </div>
      </main>
    </div>
  )
}

export default App
