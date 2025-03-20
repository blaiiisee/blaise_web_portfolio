import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MakeTab from './components/Head_tabs.jsx'
import MakeLog from './components/Project_log.jsx'
import MakeFeature from './components/Feature_set.jsx'
import LayersRoundedIcon from '@mui/icons-material/Layers';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServices';
import CodeRoundedIcon from '@mui/icons-material/Code';


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

createRoot(document.getElementById('features')).render(
  <StrictMode>
    <MakeFeature Icon={LayersRoundedIcon} Name={'Tech Stack'} Left={'30%'} Top={'35%'} Width={'14em'} SVGs={['vite','react','threejs','nodejs','postgresql']}/>
    <MakeFeature Icon={DesignServicesRoundedIcon} Name={'Creatives'} Left={'8%'} Top={'53%'} Width={'12em'} SVGs={['photoshop','premierepro','aftereffects','canva']}/>
    <MakeFeature Icon={CodeRoundedIcon} Name={'Programming'} Left={'25%'} Top={'67%'} Width={'14em'} SVGs={['html5','css3','javascript','python']}/>
  </StrictMode>,
)

createRoot(document.getElementById('projects')).render(
  <StrictMode>
    <MakeLog Name={'Page in Development'}/>
  </StrictMode>,
)
