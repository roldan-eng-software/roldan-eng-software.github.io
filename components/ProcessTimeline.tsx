'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PhaseCard from './PhaseCard'
import { phases } from '@/lib/constants'

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-4"
        >
          Como Trabalho
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          Processo transparente do início ao fim. Você sempre sabe o que está acontecendo.
        </motion.p>

        {/* Desktop Layout with SVG Line */}
        <div className="hidden lg:block relative">
          {/* Animated SVG Line */}
          <svg
            className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 -z-10"
            preserveAspectRatio="none"
            viewBox="0 0 100 10"
          >
            <motion.line
              x1="0"
              y1="5"
              x2="100"
              y2="5"
              stroke="url(#lineGradient)"
              strokeWidth="0.2"
              strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              animate={isInView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="33%" stopColor="#8b5cf6" />
                <stop offset="66%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {phases.map((phase, index) => (
              <PhaseCard key={phase.id} phase={phase} index={index} />
            ))}
          </div>
        </div>

        {/* Tablet Layout - 2x2 Grid */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {phases.map((phase, index) => (
              <PhaseCard key={phase.id} phase={phase} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4 md:space-y-6">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
