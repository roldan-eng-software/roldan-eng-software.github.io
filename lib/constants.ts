export interface TechCardData {
  id: string
  name: string
  icon: string
  front: string
  back: string
}

export interface TechSection {
  id: string
  title: string
  cards: TechCardData[]
}

export const techStack: TechSection[] = [
  {
    id: 'frontend',
    title: 'Frontend Stack',
    cards: [
      {
        id: 'nextjs',
        name: 'Next.js',
        icon: '⚡',
        front: 'Next.js',
        back: 'Server Components | App Router | Performance',
      },
      {
        id: 'tailwind',
        name: 'TailwindCSS',
        icon: '🎨',
        front: 'TailwindCSS',
        back: 'Utility-first | 70% CSS reduzido',
      },
      {
        id: 'daisyui',
        name: 'DaisyUI',
        icon: '🌼',
        front: 'DaisyUI',
        back: 'Components prontos | Acessibilidade',
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        icon: '🔷',
        front: 'TypeScript',
        back: 'Type safety | 0 runtime errors',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Stack',
    cards: [
      {
        id: 'nodejs',
        name: 'Node.js',
        icon: '🟢',
        front: 'Node.js/Express',
        back: 'APIs rápidas',
      },
      {
        id: 'python',
        name: 'Python',
        icon: '🐍',
        front: 'Python + FastAPI',
        back: 'Automação e scraping',
      },
      {
        id: 'rest',
        name: 'REST APIs',
        icon: '🔗',
        front: 'APIs REST',
        back: 'Padrões modernos',
      },
      {
        id: 'graphql',
        name: 'GraphQL',
        icon: '◈',
        front: 'GraphQL',
        back: 'Quando escalabilidade crítica',
      },
    ],
  },
  {
    id: 'data',
    title: 'Data & Infrastructure',
    cards: [
      {
        id: 'neon',
        name: 'Neon',
        icon: '💜',
        front: 'Neon',
        back: 'Serverless Postgres | Autoscaling',
      },
      {
        id: 'supabase',
        name: 'Supabase',
        icon: '🔶',
        front: 'Supabase',
        back: 'Postgres + Auth + Real-time',
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        icon: '🍃',
        front: 'MongoDB',
        back: 'NoSQL quando necessário',
      },
      {
        id: 'redis',
        name: 'Redis',
        icon: '🔴',
        front: 'Redis',
        back: 'Cache e sessions',
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    cards: [
      {
        id: 'docker',
        name: 'Docker',
        icon: '🐳',
        front: 'Docker',
        back: 'Containerização | Multi-stage builds',
      },
      {
        id: 'github-actions',
        name: 'GitHub Actions',
        icon: '⚙️',
        front: 'GitHub Actions',
        back: 'CI/CD automático',
      },
      {
        id: 'vercel',
        name: 'Vercel',
        icon: '▲',
        front: 'Vercel',
        back: 'Deploy Next.js em 30s',
      },
      {
        id: 'aws',
        name: 'AWS',
        icon: '☁️',
        front: 'AWS',
        back: 'Para infraestrutura complexa',
      },
    ],
  },
]

export interface Phase {
  id: string
  title: string
  icon: string
  description: string
  activities: string[]
  color: 'primary' | 'secondary' | 'accent' | 'success'
  duration: string
  animation?: 'rotate' | 'pulse' | 'float'
}

export const phases: Phase[] = [
  {
    id: 'scope',
    title: 'Escopo',
    icon: '📋',
    description: 'Entender seu problema, não vender solução',
    activities: ['Reuniões discovery', 'Documento com escopo', 'Aprovação'],
    color: 'primary',
    duration: 'Semana 1',
  },
  {
    id: 'development',
    title: 'Desenvolvimento',
    icon: '⚙️',
    description: 'Code com visibilidade',
    activities: ['Reuniões 2x/semana', 'GitHub commits diários', 'Demo a cada 2w'],
    color: 'secondary',
    duration: 'Semanas 2-N',
    animation: 'rotate',
  },
  {
    id: 'deploy',
    title: 'Deploy & QA',
    icon: '🚀',
    description: 'Levar para produção com confiança',
    activities: ['Testing completo', 'Documentação', 'Treinamento'],
    color: 'accent',
    duration: 'Última semana',
    animation: 'float',
  },
  {
    id: 'support',
    title: 'Suporte',
    icon: '🛡️',
    description: 'Não abandono o projeto',
    activities: ['30 dias suporte', 'Opção retainer', 'Updates'],
    color: 'success',
    duration: 'Pós-launch',
    animation: 'pulse',
  },
]

export interface CaseMetric {
  value: string
  label: string
}

export interface CaseStudy {
  id: string
  title: string
  description: string
  image: string
  url: string
  technologies: string[]
  metrics: CaseMetric[]
}

export const cases: CaseStudy[] = [
  {
    id: 'microsaas',
    title: 'Micro-SaaS de oferta de serviços',
    description:
      'Sistema de micro-SaaS para busca e oferta de serviços, painel admin e deploy em Vercel.',
    image: '/images/cases/Case_1.png',
    url: 'https://www.meubairro.dev.br/',
    technologies: ['Next.js', 'Neon', 'Supabase', 'Python'],
    metrics: [
      { value: '2.5s', label: 'LCP' },
      { value: '98', label: 'Lighthouse' },
      { value: '$5k', label: 'Vendas/mês' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce completo para vendas',
    description:
      'conexão com mercado pago, pagamentos e envios, painel admin e deploy em Vercel.',
    image: '/images/cases/Case_4.png',
    url: 'https://semijoias-three.vercel.app/',
    technologies: ['Next.js', 'Neon', 'Prisma orm', 'Docker'],
    metrics: [
      { value: '10', label: 'LCP' },
      { value: '98', label: 'Lighthouse' },
      { value: '$10k', label: 'Vendas/mês' },
    ],
  },
  {
    id: 'scraper',
    title: 'Encurtador de links com dashboard',
    description:
      'Sistema de encurtador de links com dashboard, integrado com Google Analytics e Stripe.',
    image: '/images/cases/Case_2.png',
    url: 'https://www.urlencurta.com.br/',
    technologies: ['Python', 'FastAPI', 'Neon', 'Next.js'],
    metrics: [
      { value: '10k+', label: 'Dados/dia' },
      { value: '100%', label: 'Uptime' },
      { value: '15%', label: 'Economia' },
    ],
  },
  {
    id: 'saas',
    title: 'Gerenciador de clinica de Psicologia',
    description:
      'Sistema completo de gestão para clinicas de psicologia com autenticação OAuth e calendário.',
    image: '/images/cases/Case_03.png',
    url: 'https://clinica-mente.vercel.app/',
    technologies: ['Next.js', 'Docker', 'Supabase', 'FastAPI'],
    metrics: [
      { value: '500+', label: 'Usuários' },
      { value: '99.9%', label: 'Uptime' },
      { value: '1k→5k', label: 'req/dia' },
    ],
  },
]

export type DifferentialAnimation = 'connections' | 'bots' | 'chart'

export interface Differential {
  id: string
  icon: string
  headline: string
  description: string
  proof: string
  animation: DifferentialAnimation
  accentColor: string
}

export const differentials: Differential[] = [
  {
    id: 'fullstack',
    icon: '🏗️',
    headline: 'Não apenas Frontend',
    description:
      'Você recebe developer que domina stack inteira: Next.js no frontend, Python + FastAPI no backend, Docker na infraestrutura, Neon no banco. Sem "não sei disso, precisa contratar outro".',
    proof: '8+ anos entregando full-stack',
    animation: 'connections',
    accentColor: 'cyan',
  },
  {
    id: 'automation',
    icon: '🤖',
    headline: 'Você quer economizar 40h/semana?',
    description:
      'Python + FastAPI + scheduled tasks. Raspo, processo, automatizo. Poucos developers oferecem isso. Projeto que custa R$ 8k em manual fica R$ 2k automatizado.',
    proof: '4 scraping systems em produção',
    animation: 'bots',
    accentColor: 'purple',
  },
  {
    id: 'deploy',
    icon: '📈',
    headline: 'Seu app não cai quando cresce',
    description:
      'Docker, CI/CD automático, serverless onde faz sentido. App pode crescer de 10 para 100k usuários sem você pensar em infraestrutura.',
    proof: 'Escalou cliente de 1k para 500k requisições/mês em 6 meses',
    animation: 'chart',
    accentColor: 'green',
  },
]

export interface PricingTier {
  id: string
  name: string
  description: string
  price: number
  priceSuffix: string
  currency: string
  period: string
  featured: boolean
  badge?: string
  features: string[]
  cta: string
  ctaLink?: string
}

export const meetingLink = 'https://calendly.com/roldan-eng-software'

export const pricingTiers: PricingTier[] = [
  {
    id: 'hourly',
    name: 'Horário',
    description: 'Consultoria & Pequenos Ajustes',
    price: 100,
    priceSuffix: '125',
    currency: 'BRL',
    period: 'hora',
    featured: false,
    features: [
      '1h consultoria',
      'Reunião de escopo',
      'Código comentado',
      'Suporte 7 dias',
    ],
    cta: 'Agendar 30min',
    ctaLink: meetingLink,
  },
  {
    id: 'fixed',
    name: 'Projeto Fixo',
    description: 'Projeto Novo ou Feature Complexa',
    price: 8000,
    priceSuffix: '+',
    currency: 'BRL',
    period: 'projeto',
    featured: true,
    badge: 'MAIS POPULAR',
    features: [
      'Escopo claro',
      'Timeline definida',
      'Demos 2x/semana',
      'Suporte 90 dias',
      'Documentação completa',
    ],
    cta: 'Conversar sobre projeto',
  },
  {
    id: 'retainer',
    name: 'Retainer',
    description: 'Desenvolvimento Contínuo',
    price: 6000,
    priceSuffix: '',
    currency: 'BRL',
    period: 'mês',
    featured: false,
    badge: 'MELHOR VALOR',
    features: [
      '40h/mês dedicadas',
      'Prioridade máxima',
      'Reunião semanal',
      'Backlog contínuo',
      'Deploy automático',
    ],
    cta: 'Proposta de retainer',
  },
]

export interface InfraTech {
  id: string
  name: string
  description: string
  category: 'database' | 'messaging' | 'monitoring' | 'infrastructure'
}

export const infrastructureStack: InfraTech[] = [
  {
    id: 'neon',
    name: 'Neon',
    description: 'Serverless Postgres | Autoscaling automático',
    category: 'database',
  },
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Postgres + Auth + Real-time',
    category: 'database',
  },
  {
    id: 'bull',
    name: 'Bull Queue',
    description: 'Job processing confiável',
    category: 'messaging',
  },
  {
    id: 'celery',
    name: 'Python Celery',
    description: 'Para heavy tasks',
    category: 'messaging',
  },
  {
    id: 'vercel-analytics',
    name: 'Vercel Analytics',
    description: 'Web performance real',
    category: 'monitoring',
  },
  {
    id: 'sentry',
    name: 'Sentry',
    description: 'Error tracking automático',
    category: 'monitoring',
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    description: 'CI/CD sem vendor lock-in',
    category: 'infrastructure',
  },
  {
    id: 'docker-compose',
    name: 'Docker Compose',
    description: 'Local dev idêntico à produção',
    category: 'infrastructure',
  },
]

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Entregou 2 semanas antes do prazo',
    author: 'João Silva',
    role: 'CEO',
    company: 'Startup X',
  },
  {
    id: 'testimonial-2',
    quote: 'Melhor developer que já contratei',
    author: 'Maria Santos',
    role: 'Founder',
    company: 'SaaS Y',
  },
  {
    id: 'testimonial-3',
    quote: 'Economia real, código de qualidade',
    author: 'Pedro Costa',
    role: 'CTO',
    company: 'PME Z',
  },
]

export interface SocialLink {
  id: string
  name: string
  url: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/roldan-eng-software',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sandro-roldan-b8721a3b5/',
    icon: 'linkedin',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/5516981442301',
    icon: 'whatsapp',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:roldan.eng.software@gmail.com',
    icon: 'email',
  },
]

export const footerLinks = {
  copyright: '© 2026 Sandro Roldan - Desenvolvedor Full-Stack',
  privacy: '/privacy',
  terms: '/terms',
  quickLinks: [
    { name: 'Home', url: '/', label: 'Início - Portfólio Desenvolvedor' },
    { name: 'Projetos', url: '#projetos', label: 'Projetos Desenvolvidos' },
    { name: 'Contato', url: '#contato', label: 'Fale Conosco' },
  ],
}
