import { useState, useRef } from 'react'
import './App.css'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { EffectComposer, DepthOfField, Pixelation, } from '@react-three/postprocessing'

function Dynamic({children}) {
  const ref = useRef()
  const a = new THREE.Vector3(0.2,1,-0.2)
  useFrame((state,delta) => {
    ref.current.rotateOnAxis(a,-delta*0.02)
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, (state.pointer.y * Math.PI) / 10, 0.5)
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, (state.pointer.x * Math.PI) / 10, 0.5)
  })
  return <group ref={ref}>{children}</group>
}

function generateRandomCubes() {
  return new Array(60).fill().map((_, i) => {
    const position = [
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
    ];

    const rotation = [
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5, 
      (Math.random() - 0.5) * 5, 
    ]
    const color = new THREE.Color(Math.random(), Math.random()/3, Math.random()/3); // Random RGB color

    const scale = Math.random() * 3 + 0.5; // Random scale between 0.5 and 2.5

    return (
      <mesh key={i} position={position} scale={scale} rotation={rotation}>
        <boxGeometry />
        <meshToonMaterial color={color} />
      </mesh>
    );
  });
}

function generateRandomSpheres() {
  return new Array(60).fill().map((_, i) => {
    const position = [
      (Math.random() - 0.5) * 100, // Random x position between -10 and 10
      (Math.random() - 0.5) * 100, // Random y position between -10 and 10
      (Math.random() - 0.5) * 100, // Random z position between -10 and 10
    ];

    const color = new THREE.Color(Math.random(), Math.random()/3, Math.random()/3); // Random RGB color

    const scale = Math.random() * 3 + 0.5; // Random scale between 0.5 and 2.5

    return (
      <mesh key={i} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} /> {/* Sphere with smooth surface */}
        <meshToonMaterial color={color} />
      </mesh>
    );
  });
}

function generateRandomTorus() {
  return new Array(60).fill().map((_, i) => {
    const position = [
      (Math.random() - 0.5) * 100, // Random x position between -10 and 10
      (Math.random() - 0.5) * 100, // Random y position between -10 and 10
      (Math.random() - 0.5) * 100, // Random z position between -10 and 10
    ];

    const color = new THREE.Color(Math.random(), Math.random()/3, Math.random()/3); // Random RGB color

    const scale = Math.random() * 3 + 0.5; // Random scale between 0.5 and 2.5

    return (
      <mesh key={i} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 12, 24]} />
        <meshToonMaterial color={color} />
      </mesh>
    );
  });
}

function App() {
  // Load Models not needed!!!
  const rubiks = useLoader(GLTFLoader, '../public/models/rubiks/scene.gltf')
  const dumbell = useLoader(GLTFLoader, '../public/models/dumbell/scene.gltf')
  const cloud = useLoader(GLTFLoader, '../public/models/cloud/scene.gltf')

  return (
    <div>
      <Canvas camera={{fov:60}} scene={{background:'black'}}>
        <ambientLight intensity={1}/>
        <directionalLight position={[0, 0, 5]}/>
        <group>
          <Dynamic>
            {generateRandomCubes()}
            {generateRandomSpheres()}
            {generateRandomTorus()}
          </Dynamic>
        </group>
        <EffectComposer>
          <DepthOfField
            focusDistance={0} // where to focus
            focalLength={0.02} // focal length
            bokehScale={3} // bokeh size
          />
          <Pixelation
            granularity={2}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App
