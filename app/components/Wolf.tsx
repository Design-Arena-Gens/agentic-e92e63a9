import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Wolf({ position }: { position: [number, number, number] }) {
  const wolfRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Group>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta

    if (headRef.current) {
      const breatheCycle = Math.sin(time.current * 2) * 0.15 + 0.15
      headRef.current.scale.x = 1 + breatheCycle * 0.3
      headRef.current.position.x = 0.7 + breatheCycle * 0.2
    }

    if (wolfRef.current) {
      wolfRef.current.position.y = position[1] + Math.sin(time.current * 2) * 0.05
    }
  })

  return (
    <group ref={wolfRef} position={position} rotation={[0, Math.PI / 6, 0]}>
      {/* Body */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[1.5, 0.8, 0.7]} />
        <meshStandardMaterial color="#505050" />
      </mesh>

      {/* Head group for breathing animation */}
      <group ref={headRef} position={[0.7, 1.2, 0]}>
        {/* Head */}
        <mesh castShadow>
          <boxGeometry args={[0.8, 0.6, 0.6]} />
          <meshStandardMaterial color="#606060" />
        </mesh>

        {/* Snout */}
        <mesh position={[0.5, -0.1, 0]} castShadow>
          <boxGeometry args={[0.5, 0.4, 0.5]} />
          <meshStandardMaterial color="#707070" />
        </mesh>

        {/* Nose */}
        <mesh position={[0.78, -0.05, 0]} castShadow>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#202020" />
        </mesh>

        {/* Eyes (intense) */}
        <mesh position={[0.3, 0.15, 0.25]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.3, 0.15, -0.25]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.5} />
        </mesh>

        {/* Pupils */}
        <mesh position={[0.35, 0.15, 0.25]} castShadow>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.35, 0.15, -0.25]} castShadow>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Ears */}
        <mesh position={[0.15, 0.45, 0.25]} rotation={[0.3, 0, 0.2]} castShadow>
          <coneGeometry args={[0.18, 0.4, 4]} />
          <meshStandardMaterial color="#505050" />
        </mesh>
        <mesh position={[0.15, 0.45, -0.25]} rotation={[0.3, 0, -0.2]} castShadow>
          <coneGeometry args={[0.18, 0.4, 4]} />
          <meshStandardMaterial color="#505050" />
        </mesh>

        {/* Teeth */}
        <mesh position={[0.7, -0.25, 0.15]} castShadow>
          <coneGeometry args={[0.05, 0.15, 4]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.7, -0.25, -0.15]} castShadow>
          <coneGeometry args={[0.05, 0.15, 4]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[0.5, 0.4, 0.3]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.8, 32]} />
        <meshStandardMaterial color="#505050" />
      </mesh>
      <mesh position={[0.5, 0.4, -0.3]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.8, 32]} />
        <meshStandardMaterial color="#505050" />
      </mesh>
      <mesh position={[-0.5, 0.4, 0.3]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.8, 32]} />
        <meshStandardMaterial color="#505050" />
      </mesh>
      <mesh position={[-0.5, 0.4, -0.3]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.8, 32]} />
        <meshStandardMaterial color="#505050" />
      </mesh>

      {/* Tail */}
      <mesh position={[-0.9, 1.2, 0]} rotation={[0, 0, -0.5]} castShadow>
        <cylinderGeometry args={[0.1, 0.15, 0.8, 32]} />
        <meshStandardMaterial color="#505050" />
      </mesh>

      {/* Fur details */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <boxGeometry args={[1.2, 0.2, 0.6]} />
        <meshStandardMaterial color="#404040" />
      </mesh>
    </group>
  )
}
