import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CatcherComp from './components/CatcherComp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CatcherComp>
      <App />
    </CatcherComp>
  </StrictMode>,
)
