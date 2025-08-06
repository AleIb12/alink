"use client"

import React, { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

interface ParticlesProps {
  className?: string
  quantity?: number
  size?: number
  color?: string
  vx?: number
  vy?: number
}

export default function Particles({
  className = "",
  quantity = 100,
  size = 0.4,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Usar una semilla fija para generar partículas consistentes
  const generateParticles = useMemo(() => {
    if (!isClient || dimensions.width === 0 || dimensions.height === 0) {
      return []
    }

    // Usar una función de semilla simple para generar números "aleatorios" consistentes
    const seed = 12345
    let currentSeed = seed
    
    const seededRandom = () => {
      currentSeed = (currentSeed * 9301 + 49297) % 233280
      return currentSeed / 233280
    }

    return Array.from({ length: quantity }, (_, i) => ({
      id: i,
      x: seededRandom() * dimensions.width,
      y: seededRandom() * dimensions.height,
      size: seededRandom() * size + 0.1,
      duration: seededRandom() * 20 + 10,
      delay: seededRandom() * 10,
    }))
  }, [isClient, quantity, dimensions.width, dimensions.height, size])

  // No renderizar nada en el servidor
  if (!isClient) {
    return null
  }

  return (
    <div className={`pointer-events-none fixed inset-0 ${className}`}>
      {generateParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-50"
          style={{
            backgroundColor: color,
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
          }}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: particle.x + vx,
            y: particle.y + vy,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
