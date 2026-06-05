"use client"

import * as THREE from "three"
import { useRef, useState, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, TrackballControls } from "@react-three/drei"

const aiSkills = [
  "Python", "PyTorch", "TensorFlow", "WhisperX", "RoBERTa", "librosa", 
  "Transformers", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "NLP",
  "Deep Learning", "CNN", "RNN", "ML Math", "Statistics", "FastAPI",
  "Data Mining", "Feature Eng", "PySpark", "Git", "Linux", "Research"
]

function Word({ children, ...props }: { children: string } & any) {
  const color = new THREE.Color()
  const fontProps = { 
    fontSize: 0.18, 
    letterSpacing: -0.05, 
    lineHeight: 1, 
    'material-toneMapped': false 
  }
  const ref = useRef<any>(null!)
  const [hovered, setHovered] = useState(false)
  const over = (e: any) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion)
      ref.current.material.color.lerp(color.set(hovered ? '#8FAF8F' : '#2C2C2A'), 0.1)
    }
  })

  return (
    <Text 
      ref={ref} 
      onPointerOver={over} 
      onPointerOut={out} 
      {...props} 
      {...fontProps} 
      children={children} 
    />
  )
}

function Cloud({ radius = 2.2 }) {
  const words = useMemo(() => {
    const temp = []
    const count = aiSkills.length
    for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        const pos = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
        temp.push([pos, aiSkills[i]])
    }
    return temp
  }, [radius])
  
  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos as THREE.Vector3}>
          {word as string}
        </Word>
      ))}
    </>
  )
}

export default function SkillCloud() {
  return (
    <div className="h-[400px] w-full max-w-[400px] mx-auto cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cloud />
        <TrackballControls 
          noPan 
          noZoom 
          rotateSpeed={2.5}
          dynamicDampingFactor={0.1}
        />
      </Canvas>
    </div>
  )
}
