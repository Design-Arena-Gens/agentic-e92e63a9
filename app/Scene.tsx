'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Wolf } from './components/Wolf'
import { House } from './components/House'
import { Pig } from './components/Pig'
import { Wind } from './components/Wind'
import { Ground } from './components/Ground'

export default function Scene() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[8, 6, 12]} />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
      />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Ground />
      <House position={[0, 0, 0]} />
      <Pig position={[0, 1.2, 0]} />
      <Wolf position={[-6, 0, 0]} />
      <Wind />
    </Canvas>
  )
}
