import AdmonitionPage from './components/AdmonitionPage.tsx'
import AvatarPage from './components/AvatarPage.tsx'
import BadgePage from './components/BadgePage.tsx'
import ButtonPage from './components/ButtonPage.tsx'
import CircularProgressPage from './components/CircularProgress.tsx'
import ProgressBarPage from './components/ProgressBarPage.tsx'
import SkeletonPage from './components/SkeletonPage.tsx'
import TablePage from './components/TablePage.tsx'
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
      <ProgressBarPage />
      <br />
      <SkeletonPage />
      <br />
      <TablePage />
    </div>
  )
}

export default App
