import { useState, useRef } from 'react'
import './App.css'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer, DepthOfField, } from '@react-three/postprocessing'

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

function generateRandomTetrahedron() {
  return new Array(240).fill().map((_, i) => {
    const position = [
      (Math.random() - 0.5) * 100, // Random x position between -10 and 10
      (Math.random() - 0.5) * 100, // Random y position between -10 and 10
      (Math.random() - 0.5) * 100, // Random z position between -10 and 10
    ];

    const color = new THREE.Color(0x5b2333);

    const scale = Math.random() * 3 + 0.5; // Random scale between 0.5 and 2.5

    return (
      <mesh key={i} position={position} scale={scale}>
        <tetrahedronGeometry args={[1, 0  ]} />
        <meshToonMaterial color={color} />
      </mesh>
    );
  });
}

function App() {
  return (
    <div>
      <Canvas camera={{fov:60}} scene={{background:'black'}}>
        <ambientLight intensity={1}/>
        <directionalLight position={[0, 0, 5]}/>
        <group>
          <Dynamic>
 
            {generateRandomTetrahedron()}
          </Dynamic>
        </group>
        <EffectComposer>
          <DepthOfField
            focusDistance={0} // where to focus
            focalLength={0.02} // focal length
            bokehScale={3} // bokeh size
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App
