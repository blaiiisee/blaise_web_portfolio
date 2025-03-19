import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MakeTab from './components/Head_tabs.jsx'
import MakeLog from './components/Project_log.jsx'


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

createRoot(document.getElementById('projects')).render(
  <StrictMode>
    <MakeLog Name={'Project'}/>
  </StrictMode>,
)
