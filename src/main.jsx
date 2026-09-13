import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Tokens and base styles must load before any component stylesheet so that
// component rules win on equal specificity.
import './css/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
