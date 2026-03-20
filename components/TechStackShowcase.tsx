'use client'

import { motion } from 'framer-motion'
import FlipCard from './FlipCard'
import { techStack } from '@/lib/constants'

export default function TechStackShowcase() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12"
        >
          Stack Moderno que Você Domina
        </motion.h2>

        <div className="space-y-10 md:space-y-12 lg:space-y-16">
          {techStack.map((section, sectionIndex) => (
            <div key={section.id}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-cyan-400 mb-4 md:mb-6 text-center">
                {section.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {section.cards.map((card, cardIndex) => (
                  <FlipCard key={card.id} card={card} index={sectionIndex * 4 + cardIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
