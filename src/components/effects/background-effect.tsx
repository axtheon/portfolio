"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles({ count = 2000 }) {
  const points = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // eslint-disable-next-line react-hooks/purity
      temp[i3] = (Math.random() - 0.5) * 10
      // eslint-disable-next-line react-hooks/purity
      temp[i3 + 1] = (Math.random() - 0.5) * 10
      // eslint-disable-next-line react-hooks/purity
      temp[i3 + 2] = (Math.random() - 0.5) * 10
    }
    return temp
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    points.current.rotation.y = time * 0.05
    points.current.rotation.x = time * 0.02
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#00d4aa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10 bg-cyber-dark overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
        <ambientLight intensity={0.5} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark/50 to-cyber-dark pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,170,0.1),transparent_70%)] pointer-events-none" />
    </div>
  )
}
