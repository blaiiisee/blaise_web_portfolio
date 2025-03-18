import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MakeTab from './components/Head_tabs.jsx'


createRoot(document.getElementById('reactive_bg')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('nav_tab')).render(
  <StrictMode>
    <MakeTab />
  </StrictMode>,
)

