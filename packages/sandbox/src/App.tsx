import AdmonitionPage from './components/AdmonitionPage.tsx'
import AvatarPage from './components/AvatarPage.tsx'
import BadgePage from './components/BadgePage.tsx'
import ButtonPage from './components/ButtonPage.tsx'
import CircularProgressPage from './components/CircularProgress.tsx'
import GridPage from './components/GridPage.tsx'
import IconPage from './components/IconPage.tsx'
import IconButtonPage from './components/IconButtonPage.tsx'
import ProgressBarPage from './components/ProgressBarPage.tsx'
import SkeletonPage from './components/SkeletonPage.tsx'
import TablePage from './components/TablePage.tsx'
import TagPage from './components/TagPage.tsx'
import TextLinkPage from './components/TextLinkPage.tsx'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
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
      <GridPage />
      <br />
      <IconPage />
      <br />
      <IconButtonPage />
      <br />
      <ProgressBarPage />
      <br />
      <SkeletonPage />
      <br />
      <TablePage />
      <br />
      <TagPage />
      <br />
      <TextLinkPage />
    </div>
  )
}

export default App
