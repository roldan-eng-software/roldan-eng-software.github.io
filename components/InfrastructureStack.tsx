'use client'

import { motion } from 'framer-motion'
import TechBadgeItem from './TechBadgeItem'
import { infrastructureStack } from '@/lib/constants'

export default function InfrastructureStack() {
  return (
    <section className="py-16 px-4 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8"
        >
          Stack Backend & Infra
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-4">
          {infrastructureStack.map((tech, index) => (
            <TechBadgeItem key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
