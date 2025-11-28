import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function House({ position }: { position: [number, number, number] }) {
  const houseRef = useRef<THREE.Group>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (houseRef.current) {
      const shake = Math.sin(time.current * 8) * 0.05 * Math.max(0, 1 - time.current / 3)
      houseRef.current.rotation.z = shake
    }
  })

  return (
    <group ref={houseRef} position={position}>
      {/* Main house body */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 3.3, 0]} castShadow>
        <coneGeometry args={[2.3, 1.5, 4]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Door */}
      <mesh position={[0, 0.8, 1.51]} castShadow>
        <boxGeometry args={[0.8, 1.6, 0.1]} />
        <meshStandardMaterial color="#5c3317" />
      </mesh>

      {/* Window */}
      <mesh position={[0, 2, 1.51]} castShadow>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color="#add8e6" transparent opacity={0.7} />
      </mesh>

      {/* Window frame lines */}
      <mesh position={[0, 2, 1.52]}>
        <boxGeometry args={[1.1, 0.05, 0.05]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[0, 2, 1.52]}>
        <boxGeometry args={[0.05, 1.1, 0.05]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Wood planks details */}
      {[-0.8, -0.3, 0.3, 0.8].map((y, i) => (
        <mesh key={i} position={[0, 1.5 + y, 1.51]}>
          <boxGeometry args={[3, 0.1, 0.05]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      ))}
    </group>
  )
}
