import AdmonitionPage from './components/AdmonitionPage.tsx'
import AvatarPage from './components/AvatarPage.tsx'
import BadgePage from './components/BadgePage.tsx'
import ButtonPage from './components/ButtonPage.tsx'
import CircularProgressPage from './components/CircularProgress.tsx'
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
    </div>
  )
}

export default App
