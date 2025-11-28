import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Pig({ position }: { position: [number, number, number] }) {
  const pigRef = useRef<THREE.Group>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (pigRef.current) {
      const tremble = Math.sin(time.current * 12) * 0.02
      pigRef.current.rotation.z = tremble
      pigRef.current.position.y = position[1] + Math.sin(time.current * 8) * 0.03
    }
  })

  return (
    <group ref={pigRef} position={position} rotation={[0, Math.PI / 4, 0]}>
      {/* Body */}
      <mesh castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>

      {/* Head */}
      <mesh position={[0.5, 0.2, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>

      {/* Snout */}
      <mesh position={[0.75, 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.18, 0.2, 32]} />
        <meshStandardMaterial color="#ff9fb0" />
      </mesh>

      {/* Nostrils */}
      <mesh position={[0.83, 0.15, 0.08]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0.83, 0.15, -0.08]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Eyes (scared, wide open) */}
      <mesh position={[0.65, 0.35, 0.15]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.65, 0.35, -0.15]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Pupils (looking at wolf) */}
      <mesh position={[0.68, 0.35, 0.18]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.68, 0.35, -0.12]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Ears */}
      <mesh position={[0.4, 0.5, 0.2]} rotation={[0, 0, -0.3]} castShadow>
        <coneGeometry args={[0.12, 0.25, 32]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      <mesh position={[0.4, 0.5, -0.2]} rotation={[0, 0, 0.3]} castShadow>
        <coneGeometry args={[0.12, 0.25, 32]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>

      {/* Legs */}
      <mesh position={[0.25, -0.5, 0.25]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 32]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      <mesh position={[0.25, -0.5, -0.25]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 32]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      <mesh position={[-0.25, -0.5, 0.25]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 32]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      <mesh position={[-0.25, -0.5, -0.25]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 32]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>

      {/* Curly tail */}
      <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <torusGeometry args={[0.15, 0.05, 16, 32, Math.PI * 1.5]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
    </group>
  )
}
