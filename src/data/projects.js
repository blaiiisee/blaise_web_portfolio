export const projects = [
  {
    id: 'himig',
    title: 'Himig',
    subtitle: 'Personalized Spotify Playlist Generator',
    image: '/project_imgs/himig.png',
    summary:
      'An AI-powered playlist generator that combines a listener’s mood with their top Spotify artists. FastAPI and Gemini interpret the prompt, while Spotify handles listening data and playlist creation inside an interactive 3D React experience.',
    technologies: ['TypeScript', 'React', 'Three.js', 'FastAPI', 'Gemini', 'Spotify API'],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/blaiiisee/spotify-genai-frontend',
        type: 'github',
      },
    ],
    featured: true,
  },
  {
    id: 'smart-ilab-digital-twin',
    title: 'Smart-iLab Digital Twin',
    subtitle: 'Interactive 3D laboratory visualization',
    image: '/project_imgs/digitaltwin.png',
    summary:
      'A semi-live digital twin of the UP Diliman EEEI Smart-iLab. The experience turns device and sensor data into an interactive 3D laboratory, with controls, dynamic geometry, lighting, and real-time visual feedback.',
    technologies: ['JavaScript', 'Three.js', 'Node.js', 'REST API', 'IoT'],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/blaiiisee/Smart-iLab_DigitalTwin',
        type: 'github',
      },
    ],
  },
  {
    id: 'smart-ilab-rest-api',
    title: 'Smart-iLab REST API',
    subtitle: 'IoT data and device control platform',
    image: '/project_imgs/restapi.png',
    summary:
      'A REST API that connects smart devices across the Smart-iLab, reads logged sensor data, and sends actuation commands such as changing light states within the university network.',
    technologies: ['JavaScript', 'Node.js', 'REST API', 'SQL', 'IoT'],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/blaiiisee/SSL-IoT1-REST',
        type: 'github',
      },
    ],
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Creative developer portfolio',
    image: '/project_imgs/webportfolio.png',
    summary:
      'A personal portfolio built while exploring component-driven React development and React Three Fiber. It brings software work, visual design, and interactive web technology into one expressive experience.',
    technologies: ['React', 'Vite', 'Three.js', 'Responsive UI'],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/blaiiisee/blaise_web_portfolio',
        type: 'github',
      },
    ],
  },
]
