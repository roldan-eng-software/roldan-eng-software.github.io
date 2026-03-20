'use client'

import { motion } from 'framer-motion'
import PriceCard from './PriceCard'
import { pricingTiers } from '@/lib/constants'

export default function PricingCards() {
  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
        >
          Quanto Custa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Três formas de trabalhar comigo. Sem surpresas, sem cobranças escondidas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-4">
          {pricingTiers.map((tier, index) => (
            <PriceCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Precisa de algo diferente?{' '}
          <a href="#contact" className="text-cyan-400 hover:underline">
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
