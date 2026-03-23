'use client'

import { motion } from 'framer-motion'
import { testimonials, socialLinks, footerLinks } from '@/lib/constants'

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0]
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const initials = testimonial.author
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  const colors = ['bg-cyan-500', 'bg-purple-500', 'bg-green-500']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5"
    >
      <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full ${colors[index % colors.length]} flex items-center justify-center text-white font-bold text-sm`}
        >
          {initials}
        </div>
        <div>
          <p className="text-white font-medium text-sm">{testimonial.author}</p>
          <p className="text-gray-500 text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'github') {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    )
  }

  if (icon === 'linkedin') {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }

  if (icon === 'twitter') {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }

  if (icon === 'whatsapp') {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.195.194 1.652.099.488-.103 1.534-.593 1.852-1.185.318-.592.355-.988.38-1.145.023-.156.01-.371-.015-.52z" />
      </svg>
    )
  }

  if (icon === 'email') {
    return (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    )
  }

  return null
}

export default function FooterCTA() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-gray-400 mb-6 md:mb-8">Respondo em até 24h</p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <motion.a
              href="https://calendly.com/roldan-eng-software"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Agendar Reunião
            </motion.a>
            <motion.a
              href="mailto:roldan.eng.software@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              Enviar Email
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <p className="text-center text-gray-500 text-sm mb-6 md:mb-8">20+ clientes satisfeitos</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8 md:mb-12"
        >
          <p className="text-center text-gray-400 text-sm mb-4">
            Conecte-se comigo nas redes sociais
          </p>
          <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
            {socialLinks.map(link => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 md:w-11 h-10 md:h-11 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-300"
              >
                <SocialIcon icon={link.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="border-t border-slate-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Sandro Roldan - Desenvolvedor Full-Stack
              </p>
              <nav aria-label="Links rápidos">
                <ul className="flex gap-4 md:gap-6 text-sm">
                  {footerLinks.quickLinks.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-gray-500 hover:text-cyan-400 transition-colors duration-200 focus:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded px-1"
                        title={link.label}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex gap-4 md:gap-6">
              <a
                href={footerLinks.privacy}
                className="text-gray-500 text-sm hover:text-cyan-400 transition-colors duration-200 focus:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded px-1"
              >
                Privacidade
              </a>
              <a
                href={footerLinks.terms}
                className="text-gray-500 text-sm hover:text-cyan-400 transition-colors duration-200 focus:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded px-1"
              >
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
