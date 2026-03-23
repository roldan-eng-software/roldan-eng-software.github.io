'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CaseStudy } from '@/lib/constants'

interface CaseCardProps {
  caseStudy: CaseStudy
  index: number
}

export default function CaseCard({ caseStudy, index }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative"
    >
      {/* Gradient Border Container */}
      <div className="relative p-[2px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-slate-900 rounded-2xl" />

        {/* Card Content */}
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-slate-800">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-lime-500 mb-3">{caseStudy.title}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{caseStudy.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-slate-800 text-cyan-400 rounded-full border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {caseStudy.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700/50"
                >
                  <div className="text-lg font-bold text-white">{metric.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow touch-manipulation"
            >
              Ver Case Completo
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
