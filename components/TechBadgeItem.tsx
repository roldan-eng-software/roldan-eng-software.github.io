'use client'

import { motion } from 'framer-motion'
import { InfraTech } from '@/lib/constants'

interface TechBadgeItemProps {
  tech: InfraTech
  index: number
}

const categoryColors = {
  database: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    hover: 'hover:bg-purple-500/20',
  },
  messaging: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    hover: 'hover:bg-orange-500/20',
  },
  monitoring: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    text: 'text-green-400',
    hover: 'hover:bg-green-500/20',
  },
  infrastructure: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    hover: 'hover:bg-blue-500/20',
  },
}

export default function TechBadgeItem({ tech, index }: TechBadgeItemProps) {
  const colors = categoryColors[tech.category]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
      className="relative group"
    >
      <div
        className={`px-4 py-3 rounded-lg ${colors.bg} ${colors.border} border backdrop-blur-sm ${colors.hover} transition-all duration-300 cursor-default`}
      >
        <span className={`font-medium ${colors.text}`}>{tech.name}</span>
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl whitespace-nowrap pointer-events-none z-10"
      >
        <p className="text-sm text-white font-medium">{tech.name}</p>
        <p className="text-xs text-gray-400">{tech.description}</p>
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
          <div className="border-8 border-transparent border-t-slate-800" />
        </div>
      </motion.div>
    </motion.div>
  )
}
