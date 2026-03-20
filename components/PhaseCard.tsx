'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Phase } from '@/lib/constants'

interface PhaseCardProps {
  phase: Phase
  index: number
}

const colorClasses = {
  primary: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    icon: 'text-blue-400',
    text: 'text-blue-300',
    glow: 'shadow-blue-500/20',
  },
  secondary: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    icon: 'text-purple-400',
    text: 'text-purple-300',
    glow: 'shadow-purple-500/20',
  },
  accent: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    icon: 'text-cyan-400',
    text: 'text-cyan-300',
    glow: 'shadow-cyan-500/20',
  },
  success: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    icon: 'text-green-400',
    text: 'text-green-300',
    glow: 'shadow-green-500/20',
  },
}

export default function PhaseCard({ phase, index }: PhaseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const colors = colorClasses[phase.color]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -4 }}
      className="relative"
    >
      <div
        className={`rounded-xl p-6 ${colors.bg} backdrop-blur-sm border ${colors.border} shadow-lg ${colors.glow} cursor-pointer transition-shadow hover:shadow-xl`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            className={`text-5xl mb-4 ${colors.icon}`}
            animate={
              phase.animation === 'rotate'
                ? { rotate: [0, 360] }
                : phase.animation === 'pulse'
                  ? { scale: [1, 1.1, 1] }
                  : { y: [0, -8, 0] }
            }
            transition={
              phase.animation === 'rotate'
                ? { duration: 4, repeat: Infinity, ease: 'linear' }
                : phase.animation === 'pulse'
                  ? { duration: 1.5, repeat: Infinity }
                  : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            {phase.icon}
          </motion.div>

          <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider mb-2`}>
            {phase.duration}
          </span>

          <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>

          <p className={`text-sm ${colors.text} mb-4`}>{phase.description}</p>

          <button
            className={`text-xs ${colors.text} hover:underline`}
            onClick={e => {
              e.stopPropagation()
              setIsExpanded(!isExpanded)
            }}
          >
            {isExpanded ? 'Menos detalhes ▲' : 'Mais detalhes ▼'}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden w-full mt-4"
              >
                <ul className="space-y-2 pt-4 border-t border-white/10">
                  {phase.activities.map((activity, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span className={colors.text}>✓</span>
                      {activity}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
