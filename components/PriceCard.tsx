'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef, useCallback } from 'react'
import { PricingTier } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

interface PriceCardProps {
  tier: PricingTier
  index: number
}

export default function PriceCard({ tier, index }: PriceCardProps) {
  const [displayPrice, setDisplayPrice] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const animatePrice = useCallback(() => {
    const frames = 40
    const duration = 800
    const increment = tier.price / frames
    const stepTime = duration / frames
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= tier.price) {
        setDisplayPrice(tier.price)
        clearInterval(timer)
      } else {
        setDisplayPrice(Math.floor(current))
      }
    }, stepTime)
  }, [tier.price])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animatePrice()
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, animatePrice])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative ${tier.featured ? 'md:-mt-4 md:mb-[-16px]' : ''}`}
    >
      {tier.featured && (
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30" />
      )}

      <div
        className={`relative h-full p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
          tier.featured
            ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
            : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600'
        }`}
      >
        {tier.badge && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              tier.id === 'fixed'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
            }`}
          >
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {tier.badge}
            </motion.span>
          </motion.div>
        )}

        <div className="flex flex-col h-full">
          <div className="text-center mb-6">
            <h3
              className={`text-xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-gray-200'}`}
            >
              {tier.name}
            </h3>
            <p className="text-sm text-gray-400">{tier.description}</p>
          </div>

          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-sm text-gray-400">
                {tier.currency === 'BRL' ? 'R$' : tier.currency}
              </span>
              <motion.span
                className={`text-4xl font-bold ${tier.featured ? 'text-cyan-400' : 'text-white'}`}
              >
                {formatCurrency(displayPrice, tier.currency).replace('R$', '').replace(' ', '')}
              </motion.span>
              {tier.priceSuffix && (
                <span className="text-xl text-gray-400">{tier.priceSuffix}</span>
              )}
            </div>
            <span className="text-sm text-gray-500">/{tier.period}</span>
          </div>

          <ul className="space-y-3 mb-6 flex-grow">
            {tier.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className={`mt-0.5 ${tier.featured ? 'text-cyan-400' : 'text-green-400'}`}>
                  ✓
                </span>
                <span className="text-sm text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
              tier.featured
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                : 'bg-slate-700 text-white hover:bg-slate-600'
            }`}
          >
            {tier.cta}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
