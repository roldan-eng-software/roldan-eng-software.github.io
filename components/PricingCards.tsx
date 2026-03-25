'use client'

import { motion } from 'framer-motion'
import PriceCard from './PriceCard'
import { pricingTiers, emailLink } from '@/lib/constants'

export default function PricingCards() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-4"
        >
          Quanto Custa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          Três formas de trabalhar comigo. Sem surpresas, sem cobranças escondidas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-4">
          {pricingTiers.map((tier, index) => (
            <PriceCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-6 md:mt-8"
        >
          Precisa de algo diferente?{' '}
          <a href={emailLink} className="text-cyan-400 hover:underline">
            Vamos conversar
          </a>
        </motion.p>
      </div>

      <style jsx>{`
        @keyframes subtle-pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  )
}
