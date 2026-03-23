'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar para Home
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-gray-400 mb-8">Última atualização: 23 de Março de 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8 text-gray-300"
        >
          <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="text-cyan-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h2 className="text-xl font-semibold text-white">1. Introdução</h2>
            </div>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas
              informações quando você utiliza nosso site. Comprometemo-nos a proteger sua
              privacidade e garantir a segurança dos seus dados pessoais.
            </p>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="text-cyan-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <h2 className="text-xl font-semibold text-white">2. Dados Coletados</h2>
            </div>
            <p className="mb-4">
              Coletamos apenas as informações necessárias para fornecer um melhor atendimento:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nome e informações de contato quando você preenche formulários</li>
              <li>Endereço de e-mail para comunicação</li>
              <li>Informações de navegação anonimizadas para análise de uso</li>
              <li>Dados fornecidos voluntariamente através de agendamentos</li>
            </ul>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="text-cyan-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <h2 className="text-xl font-semibold text-white">
                3. Cookies e Tecnologias de Rastreamento
              </h2>
            </div>
            <p>
              Utilizamos cookies essenciais para melhorar sua experiência de navegação. Esses
              cookies são necessários para o funcionamento básico do site e não coletam informações
              pessoais identificáveis. Você pode desativar os cookies através das configurações do
              seu navegador.
            </p>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="text-cyan-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <h2 className="text-xl font-semibold text-white">4. Proteção de Dados</h2>
            </div>
            <p>
              Implementamos medidas de segurança rigorosas para proteger seus dados contra acesso
              não autorizado, alteração, divulgação ou destruição. Utilizamos protocolos de
              segurança padrão da indústria e criptografia para proteger informações sensíveis.
            </p>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="text-cyan-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xl font-semibold text-white">5. Uso das Informações</h2>
            </div>
            <p className="mb-4">Utilizamos suas informações para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responder suas solicitações e fornecer serviços solicitados</li>
              <li>Enviar comunicações relacionadas a projetos e serviços</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-4">6. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário
              para a prestação de serviços solicitados por você ou quando exigido por lei. Todos os
              parceiros que tratam seus dados estão sujeitos a obrigações de confidencialidade.
            </p>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-4">7. Seus Direitos</h2>
            <p className="mb-4">Você tem o direito de:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados incorretos ou incompletos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Optar por não receber comunicações de marketing</li>
              <li>Solicitar portabilidade dos seus dados</li>
            </ul>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-4">8. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade ou deseja exercer seus
              direitos, entre em contato através do e-mail:{' '}
              <a
                href="mailto:roldan.eng.software@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                roldan.eng.software@gmail.com
              </a>
            </p>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sandro Roldan - Desenvolvedor Full-Stack. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
