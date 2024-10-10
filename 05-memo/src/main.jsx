import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Memorize } from './Memorize'
import { MemoHook } from './MemoHook'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoHook />
  </StrictMode>,
)
