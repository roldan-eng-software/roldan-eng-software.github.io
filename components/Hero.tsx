'use client'

import { motion } from 'framer-motion'
import { useCounterAnimation } from './animations/CounterAnimation'
import { useParallaxMouse } from './animations/ParallaxMouse'

interface HeroProps {
  onStartProject?: () => void
  onViewPortfolio?: () => void
}

export default function Hero({ onStartProject, onViewPortfolio }: HeroProps) {
  const { springX, springY } = useParallaxMouse({ maxOffset: 10, stiffness: 150, damping: 15 })

  const yearsCounter = useCounterAnimation({ end: 8, suffix: '+', duration: 2000 })
  const projectsCounter = useCounterAnimation({ end: 50, suffix: '+', duration: 2000 })
  const successCounter = useCounterAnimation({ end: 100, suffix: '%', duration: 2000 })

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0c4a6e 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" className="animate-grid-pulse" />
        </svg>
      </div>

      <motion.div
        className="absolute pointer-events-none top-1/4 right-[10%] opacity-30"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" stroke="#8b5cf6" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" stroke="#3b82f6" strokeWidth="1" />
          <path d="M100 20 L100 180 M20 100 L180 100" stroke="#06b6d4" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Código que gera resultado <span className="text-cyan-400">| Deploy em produção</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            De MVP para Scale: desenvolvimento ágil com stack moderno
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              className="btn btn-primary btn-lg px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartProject}
            >
              Iniciar Projeto
            </motion.button>
            <motion.button
              className="btn btn-outline btn-lg px-8 text-white border-white hover:bg-white hover:text-slate-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewPortfolio}
            >
              Ver Portfólio
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              ref={yearsCounter.ref}
              className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                {yearsCounter.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 mt-1">Anos</div>
            </div>
            <div
              ref={projectsCounter.ref}
              className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400">
                {projectsCounter.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 mt-1">Projetos</div>
            </div>
            <div
              ref={successCounter.ref}
              className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-400">
                {successCounter.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 mt-1">Sucesso</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-grid-pulse {
          animation: grid-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
