import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import * as THREE from 'three'

const PARTICLE_COUNT = 180

function seededRandom(seed) {
  const value = Math.sin(seed * 9301 + 49297) * 233280
  return value - Math.floor(value)
}

function TetrahedronField({ reducedMotion }) {
  const groupRef = useRef()
  const meshRef = useRef()

  useLayoutEffect(() => {
    const helper = new THREE.Object3D()

    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      helper.position.set(
        (seededRandom(index * 3 + 1) - 0.5) * 95,
        (seededRandom(index * 3 + 2) - 0.5) * 95,
        (seededRandom(index * 3 + 3) - 0.5) * 95,
      )
      helper.rotation.set(
        seededRandom(index + 31) * Math.PI,
        seededRandom(index + 53) * Math.PI,
        seededRandom(index + 79) * Math.PI,
      )
      const scale = seededRandom(index + 101) * 2.6 + 0.45
      helper.scale.setScalar(scale)
      helper.updateMatrix()
      meshRef.current.setMatrixAt(index, helper.matrix)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current || reducedMotion) return

    groupRef.current.rotation.y -= delta * 0.018
    groupRef.current.rotation.x -= delta * 0.004
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      state.pointer.x * 2.4,
      0.035,
    )
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      state.pointer.y * 2.4,
      0.035,
    )
  })

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[null, null, PARTICLE_COUNT]}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshToonMaterial color="#6f2d42" />
      </instancedMesh>
    </group>
  )
}

export default function BackgroundScene() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return (
    <Canvas
      camera={{ fov: 60, far: 130, position: [0, 0, 8] }}
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? 'demand' : 'always'}
      gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[0, 0, 8]} intensity={1.4} />
      <TetrahedronField reducedMotion={reducedMotion} />
      <EffectComposer multisampling={0}>
        <DepthOfField focusDistance={0} focalLength={0.025} bokehScale={2.6} />
      </EffectComposer>
    </Canvas>
  )
}
