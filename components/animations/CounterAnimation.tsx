'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterAnimationOptions {
  end: number
  suffix?: string
  duration?: number
  startOnView?: boolean
}

export function useCounterAnimation({
  end,
  suffix = '',
  duration = 2000,
  startOnView = true,
}: CounterAnimationOptions) {
  const [count, setCount] = useState(0)
  const [displayValue, setDisplayValue] = useState(`0${suffix}`)
  const hasStarted = useRef(false)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const startAnimation = useCallback(() => {
    if (hasStarted.current) return
    hasStarted.current = true

    const iterations = 50
    const increment = end / iterations
    const stepTime = duration / iterations
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        setDisplayValue(`${end}${suffix}`)
        clearInterval(timer)
      } else {
        const floorValue = Math.floor(current)
        setCount(floorValue)
        setDisplayValue(`${floorValue}${suffix}`)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [end, suffix, duration])

  useEffect(() => {
    if (startOnView && inView) {
      startAnimation()
    } else if (!startOnView) {
      startAnimation()
    }
  }, [inView, startOnView, startAnimation])

  return { ref, value: displayValue, count }
}
