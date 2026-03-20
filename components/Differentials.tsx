'use client'

import { motion } from 'framer-motion'
import DifferentialCard from './DifferentialCard'
import { differentials } from '@/lib/constants'

export default function Differentials() {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
        >
          Por que me escolher?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Não sou developer genérico. Cada diferencial é uma capacidade real que você pode usar.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {differentials.map((differential, index) => (
            <DifferentialCard key={differential.id} differential={differential} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
