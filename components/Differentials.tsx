'use client'

import { motion } from 'framer-motion'
import DifferentialCard from './DifferentialCard'
import { differentials } from '@/lib/constants'

export default function Differentials() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-4"
        >
          Por que me escolher?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          Não sou developer genérico. Cada diferencial é uma capacidade real que você pode usar.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {differentials.map((differential, index) => (
            <DifferentialCard key={differential.id} differential={differential} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
