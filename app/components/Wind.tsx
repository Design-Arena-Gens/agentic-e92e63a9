import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Wind() {
  const particlesRef = useRef<THREE.Points>(null)
  const time = useRef(0)

  const particles = useMemo(() => {
    const particleCount = 100
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = -5 + Math.random() * 2
      positions[i * 3 + 1] = 0.5 + Math.random() * 2
      positions[i * 3 + 2] = -1 + Math.random() * 2
      velocities[i] = 0.02 + Math.random() * 0.05
    }

    return { positions, velocities }
  }, [])

  useFrame((state, delta) => {
    time.current += delta

    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3] += particles.velocities[i]
        positions[i * 3 + 1] += Math.sin(time.current * 3 + i) * 0.01

        if (positions[i * 3] > 2) {
          positions[i * 3] = -5
          positions[i * 3 + 1] = 0.5 + Math.random() * 2
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true

      const opacity = (Math.sin(time.current * 2) + 1) * 0.3 + 0.4
      const material = particlesRef.current.material as THREE.PointsMaterial
      material.opacity = opacity
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
