'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { TechCardData } from '@/lib/constants'

interface FlipCardProps {
  card: TechCardData
  index: number
}

export default function FlipCard({ card, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer perspective-1000 touch-manipulation"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-40"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 p-6 flex flex-col items-center justify-center shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-4xl mb-3" role="img" aria-label={card.name}>
            {card.icon}
          </span>
          <h3 className="text-lg font-semibold text-white text-center">{card.front}</h3>
        </div>

        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 p-6 flex flex-col items-center justify-center shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <span className="text-2xl mb-2" role="img" aria-label={card.name}>
            {card.icon}
          </span>
          <p className="text-sm text-gray-300 text-center leading-relaxed">{card.back}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
