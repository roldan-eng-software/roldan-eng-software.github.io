'use client'

import { useCallback, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface ParallaxMouseOptions {
  maxOffset?: number
  stiffness?: number
  damping?: number
}

export function useParallaxMouse({
  maxOffset = 10,
  stiffness = 150,
  damping = 15,
}: ParallaxMouseOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springX = useSpring(rawX, { stiffness, damping })
  const springY = useSpring(rawY, { stiffness, damping })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / window.innerWidth
      const deltaY = (e.clientY - centerY) / window.innerHeight

      rawX.set(deltaX * maxOffset)
      rawY.set(deltaY * maxOffset)
    },
    [maxOffset, rawX, rawY]
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return { ref: containerRef, springX, springY }
}
