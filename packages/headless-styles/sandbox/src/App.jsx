import { useEffect, useState } from 'react'
import { getButtonProps } from '../../src'
import ConfirmDialog from './components/ConfirmDialog'
import Admonition from './components/Admonition'
import Avatar from './components/Avatar'
import Button from './components/Button'
import Badge from './components/Badge'
import Checkbox from './components/Checkbox'
import CircularProgress from './components/CircularProgress'
import ErrorMessage from './components/ErrorMessage'
import FieldMessage from './components/FieldMessage'
import FormControl from './components/FormControl'
import FormLabel from './components/FormLabel'
import Icon from './components/Icon'
import IconButton from './components/IconButton'
import Input from './components/Input'
import Menu from './components/Menu'
import Modal from './components/Modal'
import PreloadedImg from './components/PreloadedImg'
import Progress from './components/Progress'
import Radio from './components/Radio'
import Skeleton from './components/Skeleton'
import Switch from './components/Switch'
import Table from './components/Table'
import Tabs from './components/Tabs'
import Tag from './components/Tag'
import Textarea from './components/Textarea'
import TextLink from './components/TextLink'
import Tooltip from './components/Tooltip'
import './App.css'

const initialTheme = localStorage.getItem('theme')

function App() {
  const [theme, setTheme] = useState(initialTheme)

  function handleToggleTheme() {
    setTheme((prev) => {
      if (prev === 'dark') {
        return 'light'
      }
      return 'dark'
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="App">
      <header className="App-header">
        <button
          {...getButtonProps({
            sentiment: 'default',
          }).button}
          onClick={handleToggleTheme}
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </header>

      <ConfirmDialog />
      <Admonition />
      <Avatar />
      <Badge />
      <Button />
      <Checkbox />
      <CircularProgress />
      <ErrorMessage />
      <FieldMessage />
      <FormControl />
      <FormLabel />
      <Icon />
      <IconButton />
      <Input />
      <Menu />
      <Modal />
      <PreloadedImg />
      <Progress />
      <Radio />
      <Skeleton />
      <Switch />
      <Table />
      <Tabs />
      <Tag />
      <Textarea />
      <TextLink />
      <Tooltip />
    </div>
  )
}

export default App
