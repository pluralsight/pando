import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'core-js/stable'

import App from './App.tsx'

import './pando.entry.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
