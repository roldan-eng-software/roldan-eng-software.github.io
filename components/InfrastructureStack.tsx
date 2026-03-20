'use client'

import { motion } from 'framer-motion'
import TechBadgeItem from './TechBadgeItem'
import { infrastructureStack } from '@/lib/constants'

export default function InfrastructureStack() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-xs md:text-sm uppercase tracking-wider mb-6 md:8"
        >
          Stack Backend & Infra
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4">
          {infrastructureStack.map((tech, index) => (
            <TechBadgeItem key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
