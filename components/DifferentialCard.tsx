'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Differential } from '@/lib/constants'

interface DifferentialCardProps {
  differential: Differential
  index: number
}

function ConnectionsAnimation() {
  return (
    <svg className="w-full h-20" viewBox="0 0 200 80">
      <motion.circle
        cx="20"
        cy="40"
        r="8"
        fill="#0ea5e9"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="100"
        cy="20"
        r="8"
        fill="#8b5cf6"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="100"
        cy="60"
        r="8"
        fill="#06b6d4"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="180"
        cy="40"
        r="8"
        fill="#22c55e"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />
      <motion.line
        x1="20"
        y1="40"
        x2="100"
        y2="20"
        stroke="#0ea5e9"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.line
        x1="20"
        y1="40"
        x2="100"
        y2="60"
        stroke="#8b5cf6"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />
      <motion.line
        x1="100"
        y1="20"
        x2="180"
        y2="40"
        stroke="#06b6d4"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
      <motion.line
        x1="100"
        y1="60"
        x2="180"
        y2="40"
        stroke="#22c55e"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </svg>
  )
}

function BotsAnimation() {
  return (
    <svg className="w-full h-20" viewBox="0 0 200 80">
      <motion.rect
        x="20"
        y="30"
        width="30"
        height="20"
        rx="4"
        fill="#8b5cf6"
        initial={{ x: 0 }}
        animate={{ x: [0, 130, 130, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      <motion.rect
        x="80"
        y="10"
        width="20"
        height="15"
        rx="3"
        fill="#a855f7"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.rect
        x="80"
        y="55"
        width="20"
        height="15"
        rx="3"
        fill="#a855f7"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      />
      <motion.line
        x1="100"
        y1="17"
        x2="100"
        y2="30"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeDasharray="4 2"
        animate={{ strokeDashoffset: [0, -12] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.line
        x1="100"
        y1="50"
        x2="100"
        y2="63"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeDasharray="4 2"
        animate={{ strokeDashoffset: [0, -12] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.5 }}
      />
      <motion.circle cx="170" cy="40" r="15" fill="#c084fc" />
      <motion.text x="170" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
        ⚡
      </motion.text>
    </svg>
  )
}

function ChartAnimation() {
  const points = [
    { x: 20, y: 60 },
    { x: 60, y: 50 },
    { x: 100, y: 35 },
    { x: 140, y: 45 },
    { x: 180, y: 15 },
  ]

  const pathD = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`
    return `${acc} L ${point.x} ${point.y}`
  }, '')

  const areaD = `${pathD} L 180 70 L 20 70 Z`

  return (
    <svg className="w-full h-20" viewBox="0 0 200 80">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={areaD}
        fill="url(#chartGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />
      {points.map((point, i) => (
        <motion.circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="5"
          fill="#22c55e"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.3, delay: 1 + i * 0.2 }}
        />
      ))}
    </svg>
  )
}

const colorClasses = {
  cyan: {
    gradient: 'from-cyan-500/20 to-cyan-500/5',
    border: 'group-hover:border-cyan-500/50',
    icon: 'text-cyan-400',
    badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    button: 'bg-cyan-500 hover:bg-cyan-600',
  },
  purple: {
    gradient: 'from-purple-500/20 to-purple-500/5',
    border: 'group-hover:border-purple-500/50',
    icon: 'text-purple-400',
    badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    button: 'bg-purple-500 hover:bg-purple-600',
  },
  green: {
    gradient: 'from-green-500/20 to-green-500/5',
    border: 'group-hover:border-green-500/50',
    icon: 'text-green-400',
    badge: 'bg-green-500/20 text-green-400 border-green-500/30',
    button: 'bg-green-500 hover:bg-green-600',
  },
}

export default function DifferentialCard({ differential, index }: DifferentialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const colors = colorClasses[differential.accentColor as keyof typeof colorClasses]

  const AnimationComponent = {
    connections: ConnectionsAnimation,
    bots: BotsAnimation,
    chart: ChartAnimation,
  }[differential.animation]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group relative p-6 rounded-2xl bg-gradient-to-br ${colors.gradient} border border-slate-700/50 ${colors.border} backdrop-blur-sm cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-${differential.accentColor}-500/10`}
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        <motion.div
          className={`text-5xl mb-4 ${colors.icon}`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {differential.icon}
        </motion.div>

        {/* Headline */}
        <h3 className="text-2xl font-bold text-white mb-3">{differential.headline}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
          {differential.description}
        </p>

        {/* Animated SVG */}
        <div className="mb-4">
          <AnimationComponent />
        </div>

        {/* Proof Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${colors.badge} mb-4`}
        >
          <span className="text-lg">✓</span>
          <span className="text-sm font-medium">{differential.proof}</span>
        </div>

        {/* Expand Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-lg ${colors.button} text-white font-semibold text-sm transition-colors touch-manipulation`}
          onClick={e => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
        >
          {isExpanded ? 'Menos detalhes' : 'Mais detalhes'}
        </motion.button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-slate-700/50">
                <p className="text-gray-500 text-xs">
                  Clique em contato para discutir como posso aplicar esta especialização ao seu
                  projeto.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
