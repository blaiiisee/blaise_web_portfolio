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

const rest_desc = `This is my first proper REST API project, and it’s been a fun challenge. I used Vite with Node.js to build it, making sure it runs fast and efficiently. The API connects to multiple smart devices around the Smart-iLab, pulling data from a database where they log sensor readings and sending actuation commands like changing light states. Since it's only accessible within the university network, security and performance in a controlled environment are key. Overall, it’s been a great hands-on experience in IoT automation and backend development!`
const twin_desc = `This might be my favorite project yet—a Digital Twin of the UPD EEEI Smart-iLab! It’s a semi-live 3D visualization built on top of the mentioned REST API above, using an actual 3D model of the lab with dynamic geometries and lighting. Devices have their own UI for control, while sensors display real-time or visualized data (or both). \nThis project was where I had the most fun with Three.js, learning how to interact with, manipulate, and bring data to life in an interactive and immersive way!`
const portfolio_desc = `This project was my gateway into React.js! I went from learning the basics of components to fully building with them. It also introduced me to @react-three/fiber, a React-friendly way to use Three.js that made everything feel more modular and intuitive. On top of that, I had a blast designing and developing the website—probably just as much fun as working on the Smart-iLab Digital Twin!`

createRoot(document.getElementById('projects')).render(
  <StrictMode>
    <MakeLog Img={'restapi.png'} Name={'A REST API for University of the Philippines - Diliman EEEI Smart-iLab'} Technologies={['JavaScript','BackEnd','REST API','NodeJS','Vite','SQL']} Description={rest_desc} Link={'https://github.com/blaiiisee/SSL-IoT1-REST'}/>
    <MakeLog Img={'digitaltwin.png'} Name={'A Web-based Digital Visualization of the UPD EEEI Smart-iLab'} Technologies={['JavaScript','FrontEnd','NodeJS','Vite','ThreeJS']} Description={twin_desc} Link={'https://github.com/blaiiisee/Smart-iLab_DigitalTwin'}/>
    <MakeLog Img={'webportfolio.png'} Name={`Ivan Blaise Gonzales's Web Portfolio`} Technologies={['JavaScript','FrontEnd','ReactJS','NodeJS','Vite','ThreeJS']} Description={portfolio_desc} Link={'https://github.com/blaiiisee/blaise_web_portfolio'}/>
    <MakeLog Img={'webportfolio.png'} Name={`placeholder`} Technologies={['JavaScript']} Description={rest_desc} Link={'https://github.com/blaiiisee/blaise_web_portfolio'} Placeholder={true}/>
  </StrictMode>,
)

