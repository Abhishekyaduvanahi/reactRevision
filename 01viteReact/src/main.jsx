import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hatcoder from './Hatcoder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hatcoder/>
  </StrictMode>,
)
