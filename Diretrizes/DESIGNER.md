# DESIGNER.md - Plano de Frontend & Complexidades Técnicas
## Roldan Portfolio Landing Page - Next.js + Tailwind + DaisyUI

---

## 1. ARQUITETURA DE COMPONENTES

```
Hero
├── ParallaxMouseBackground     (Canvas / SVG animado)
├── GradientBg                  (Gradient que muda cores)
├── CounterAnimations           (números que contam)
└── CTAButtons                  (botões com efeito hover)

TechStackShowcase
├── CarouselContainer           (scroll horizontal + snap)
├── Flip3DCard                  (CSS 3D transform)
├── HoverRevealModal            (tooltip dinâmico)
└── Badge                       (Production-Ready)

ProcessTimeline
├── TimelineContainer           (scroll ou vertical stack)
├── PhaseCard                   (com ícone animado)
├── ConnectionLine              (SVG line animation)
├── ExpandableDetails           (accordion animation)
└── Phase Icons                 (rotate/pulse animations)

CasesPortfolio
├── GridLayout                  (3 colunas responsivo)
├── CaseCard                    (gradient border, hover elevation)
├── ImageContainer              (Next.js Image + lazy load)
├── ResultBadges                (animação de números)
└── CTAOverlay                  (revela ao hover)

Differentials
├── DifferentialCard            (3 cards grandes)
├── IconAnimation               (linhas conectadas que se iluminam)
├── ModalExpanded               (detalhes em modal)
└── ProofBadge                  (certificado/prova)

PricingCards
├── PricingContainer            (3 colunas responsivo)
├── PriceCard                   (com badge destacado)
├── CounterAnimation            (preço sobe conforme aparece)
├── FeatureList                 (checkmarks animados)
└── CTAButton                   (CTA por modelo)

InfrastructureStack
├── BadgeGrid                   (grid 4 colunas)
├── TechBadge                   (com tooltip hover)
└── TooltipExplainer            (mostra arquitetura)

FooterCTA
├── FinalCTA                    (double button)
├── SocialProof                 (testimonials stagger)
├── SocialLinks                 (GitHub, LinkedIn, etc)
└── MinimalFooter               (copyright, links)
```

---

## 2. DETALHAMENTO DE COMPONENTES COMPLEXOS

### 2.1 Hero Section - Paralax Mouse Tracking

**Problema**: Fazer parallax suave que não quebra performance

**Solução**:
```typescript
// components/Hero.tsx
'use client';

import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Limita movimento a 5-10px máximo (sutileza)
      setMousePos({
        x: (x - 0.5) * 10,
        y: (y - 0.5) * 10
      });
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0c4a6e 100%)'
      }}
    >
      {/* Grid animado background */}
      <GridBackground />
      
      {/* Logo/elemento que segue cursor */}
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
          transition: 'transform 0.2s ease-out' // Smooth follow
        }}
      >
        <svg className="w-full h-full opacity-20">
          {/* SVG decorativo */}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Código que gera resultado
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          De MVP para Scale: desenvolvimento ágil com stack moderno
        </p>

        {/* Números com animação de contador */}
        <div className="grid grid-cols-3 gap-8 mb-12 mt-8">
          <CounterStat value={8} label="Anos" />
          <CounterStat value={50} label="Projetos" />
          <CounterStat value={100} label="Sucesso %" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn btn-primary btn-lg">Iniciar Projeto</button>
          <button className="btn btn-outline btn-lg text-white">Ver Portfólio</button>
        </div>
      </div>
    </div>
  );
}

// Componente separado para contador
function CounterStat({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= value) return value;
        return prev + Math.ceil(value / 50); // 50 frames para contar
      });
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white">{count}+</div>
      <div className="text-gray-300 text-sm mt-2">{label}</div>
    </div>
  );
}

// Grid animado
function GridBackground() {
  return (
    <div className="absolute inset-0">
      <svg className="w-full h-full opacity-10">
        <defs>
          <pattern 
            id="grid" 
            width="50" 
            height="50" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 50 0 L 0 0 0 50" 
              fill="none" 
              stroke="white" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Pulsing animation em CSS */}
      <style>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .grid-bg { animation: gridPulse 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
```

**Complexidade**: ⭐⭐⭐
- Tracking de mouse sem lag (useRef + transição suave)
- SVG inline para grade (melhor que imagem)
- Números que contam (stagger)

**Performance**: GPU-accelerated com `transform`

---

### 2.2 Tech Stack - Carrossel com Flip 3D

**Problema**: Carrossel que faz flip ao hover, sem quebrar mobile

**Solução**:
```typescript
// components/TechStackShowcase.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface TechCard {
  id: string;
  name: string;
  icon: string;
  front: string;
  back: string;
}

const techStack: TechCard[] = [
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: '▲',
    front: 'Next.js',
    back: 'Server Components | App Router | Performance'
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    icon: '◆',
    front: 'TailwindCSS',
    back: 'Utility-first | 70% CSS reduzido'
  },
  {
    id: 'daisyui',
    name: 'DaisyUI',
    icon: '✿',
    front: 'DaisyUI',
    back: 'Components prontos | Acessibilidade'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'TS',
    front: 'TypeScript',
    back: 'Type safety | 0 runtime errors'
  },
];

export default function TechStackShowcase() {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Stack Moderno</h2>

        {/* Desktop: Carrossel */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {techStack.map(tech => (
            <FlipCard key={tech.id} card={tech} />
          ))}
        </div>

        {/* Mobile: Stack vertical com scrollable */}
        <div className="md:hidden flex overflow-x-auto gap-4 pb-4 snap-x">
          {techStack.map(tech => (
            <div key={tech.id} className="flex-shrink-0 w-64 snap-center">
              <FlipCard card={tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ card }: { card: TechCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="h-64 cursor-pointer perspective"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)} // Mobile support
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: 1200
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-5xl mb-4">{card.icon}</div>
          <div className="text-2xl font-bold text-center">{card.name}</div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 flex items-center justify-center text-white shadow-lg"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="text-center text-sm font-medium">{card.back}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
```

**Complexidade**: ⭐⭐⭐⭐
- 3D transform com `rotateY`
- Mobile: tap to flip (useState)
- Desktop: hover trigger (onHoverStart/End)
- `backfaceVisibility` para efeito real

**Performance**: Framer Motion otimiza com GPU

**Responsividade**: 
- Desktop: 4 colunas lado-a-lado
- Mobile: Scroll horizontal snap

---

### 2.3 Process Timeline - Stagger Animations

**Problema**: Fazer timeline que aparece sequencialmente conforme scroll

**Solução**:
```typescript
// components/ProcessTimeline.tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Phase {
  id: string;
  title: string;
  icon: string;
  description: string;
  activities: string[];
  color: 'primary' | 'secondary' | 'accent' | 'success';
}

const phases: Phase[] = [
  {
    id: 'escopo',
    title: 'Escopo',
    icon: '📋',
    description: 'Entender seu problema, não vender solução',
    activities: ['Reuniões discovery', 'Documento com escopo', 'Aprovação'],
    color: 'primary'
  },
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento',
    icon: '⚙️',
    description: 'Code com visibilidade',
    activities: ['Reuniões 2x/semana', 'GitHub commits diários', 'Demo a cada 2w'],
    color: 'secondary'
  },
  {
    id: 'deploy',
    title: 'Deploy & QA',
    icon: '🚀',
    description: 'Levar para produção com confiança',
    activities: ['Testing completo', 'Documentação', 'Treinamento'],
    color: 'accent'
  },
  {
    id: 'suporte',
    title: 'Suporte',
    icon: '🛡️',
    description: 'Não abandono o projeto',
    activities: ['30 dias suporte', 'Opção retainer', 'Updates'],
    color: 'success'
  },
];

export default function ProcessTimeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 200ms entre cada card
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  };

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Como Trabalho</h2>

        {/* Desktop: Timeline horizontal */}
        <div className="hidden md:block">
          <motion.div
            ref={ref}
            className="grid grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {phases.map((phase, idx) => (
              <motion.div key={phase.id} variants={itemVariants}>
                <PhaseCard phase={phase} index={idx} isLast={idx === phases.length - 1} />
              </motion.div>
            ))}
          </motion.div>

          {/* Linha conectando (SVG) */}
          <svg 
            className="w-full h-16 -my-12 absolute left-0"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 50 50 Q 250 50 450 50 T 850 50"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-primary"
              initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
              animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: 1000 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>

        {/* Mobile: Stack vertical */}
        <motion.div
          className="md:hidden space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {phases.map((phase) => (
            <motion.div key={phase.id} variants={itemVariants}>
              <PhaseCard phase={phase} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PhaseCard({ 
  phase, 
  index = 0,
  isLast = false 
}: { 
  phase: Phase;
  index?: number;
  isLast?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`card bg-base-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ y: -4 }}
    >
      <div className="card-body">
        <div className="text-4xl mb-4">
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {phase.icon}
          </motion.span>
        </div>
        
        <h3 className="card-title text-2xl">{phase.title}</h3>
        <p className="text-base-content/70">{phase.description}</p>

        {/* Expandable details */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2 pt-4 border-t border-base-300">
            {phase.activities.map((activity, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="card-actions justify-end mt-4">
          {isExpanded ? 'Ver menos' : 'Ver detalhes'}
        </div>
      </div>
    </motion.div>
  );
}
```

**Complexidade**: ⭐⭐⭐⭐⭐
- Stagger com `staggerChildren` (sequência animada)
- SVG path animation com `strokeDasharray` (linha que cresce)
- Expandable accordion com Framer Motion
- Responsivo: timeline horizontal desktop, stack mobile
- Ícone que rotaciona continuamente

**Performance**: useInView garante que anima só quando visível (não carrega performance)

---

### 2.4 Cases Portfolio - Grid com Gradient Border

**Problema**: Cards com gradient border que não sai fácil em mobile

**Solução**:
```typescript
// components/CasesPortfolio.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
}

const cases: CaseStudy[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce com Automação',
    description: 'Loja online Next.js com integração automática de estoque via API.',
    image: '/images/cases/ecommerce.png',
    technologies: ['Next.js', 'Neon', 'Stripe', 'Python'],
    metrics: [
      { label: 'LCP', value: '2.5s' },
      { label: 'Lighthouse', value: '98' },
      { label: 'Vendas/mês', value: '$50k' },
    ],
  },
  // ... outros cases
];

export default function CasesPortfolio() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Casos Recentes</h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {cases.map(caseStudy => (
            <motion.div key={caseStudy.id} variants={itemVariants}>
              <CaseCard case={caseStudy} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseCard({ case: caseStudy }: { case: CaseStudy }) {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Border Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
      />

      {/* Card Content */}
      <div className="relative bg-base-200 rounded-xl p-6 m-[2px] h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
        <p className="text-sm text-base-content/70 mb-6 flex-grow">{caseStudy.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.technologies.map(tech => (
            <span 
              key={tech}
              className="badge badge-primary badge-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2">
          {caseStudy.metrics.map(metric => (
            <motion.div
              key={metric.label}
              className="bg-base-100 rounded p-2 text-center cursor-pointer"
              onHoverStart={() => setHoveredMetric(metric.label)}
              onHoverEnd={() => setHoveredMetric(null)}
              animate={hoveredMetric === metric.label ? { scale: 1.05 } : { scale: 1 }}
            >
              <div className="text-sm font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-base-content/60">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Overlay */}
        <motion.button
          className="mt-6 btn btn-outline btn-sm w-full"
          whileHover={{ backgroundColor: '#fff', color: '#000' }}
        >
          Ver Detalhes
        </motion.button>
      </div>
    </motion.div>
  );
}
```

**Complexidade**: ⭐⭐⭐⭐
- Gradient border com overflow + m-[2px] trick
- Image hover scale (performance: GPU accelerated)
- Metrics com hover interativa
- Stagger animation em scroll
- Responsivo: 1 coluna mobile, 2 tablet, 3 desktop

---

### 2.5 Pricing Cards - Counter Animado

**Problema**: Fazer preço "contar" quando entra em view

**Solução**:
```typescript
// components/PricingCards.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: string;
  featured: boolean;
  features: string[];
  cta: string;
  ctaLink: string;
}

const tiers: PricingTier[] = [
  {
    id: 'hourly',
    name: 'Horário',
    description: 'Consultoria & Pequenos Ajustes',
    price: 150,
    currency: 'R$',
    period: '/hora',
    featured: false,
    features: [
      '1h consultoria = 0.5h cobrado',
      'Reunião de escopo',
      'Código comentado',
      'Suporte 30 dias',
    ],
    cta: 'Agendar 30min',
    ctaLink: 'https://calendly.com',
  },
  {
    id: 'project',
    name: 'Projeto Fixo',
    description: 'Projeto Novo ou Feature Complexa',
    price: 8000,
    currency: 'R$',
    period: 'A partir de',
    featured: true,
    features: [
      'Escopo claro',
      'Timeline definida',
      'Demos 2x/semana',
      'Suporte 90 dias',
      'Documentação completa',
    ],
    cta: 'Conversar sobre projeto',
    ctaLink: 'https://calendly.com',
  },
  {
    id: 'retainer',
    name: 'Retainer',
    description: 'Desenvolver Continuar',
    price: 6000,
    currency: 'R$',
    period: '/mês',
    featured: false,
    features: [
      '40h/mês dedicadas',
      'Prioridade máxima',
      'Reunião semanal',
      'Backlog contínuo',
      'Deploy automático',
    ],
    cta: 'Proposta de retainer',
    ctaLink: 'https://calendly.com',
  },
];

export default function PricingCards() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Modelos de Trabalho</h2>
        <p className="text-center text-base-content/70 mb-16">
          Escolha o modelo que melhor se adequa ao seu projeto
        </p>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {tiers.map(tier => (
            <motion.div key={tier.id} variants={itemVariants}>
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  const [displayPrice, setDisplayPrice] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  // Counter animation
  useEffect(() => {
    if (!inView) return;

    let currentPrice = 0;
    const increment = Math.ceil(tier.price / 40); // 40 frames

    const interval = setInterval(() => {
      currentPrice += increment;
      if (currentPrice >= tier.price) {
        setDisplayPrice(tier.price);
        clearInterval(interval);
      } else {
        setDisplayPrice(currentPrice);
      }
    }, 20); // 50ms por frame

    return () => clearInterval(interval);
  }, [inView, tier.price]);

  return (
    <motion.div
      ref={ref}
      className={`card h-full ${tier.featured ? 'bg-primary text-primary-content shadow-xl scale-105' : 'bg-base-100 shadow-lg'}`}
      whileHover={{ y: -8 }}
    >
      <div className="card-body flex flex-col">
        {/* Badge destacado */}
        {tier.featured && (
          <motion.div 
            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="badge badge-lg badge-warning">⭐ MAIS POPULAR</span>
          </motion.div>
        )}

        <h3 className="card-title text-2xl">{tier.name}</h3>
        <p className={tier.featured ? 'text-primary-content/90' : 'text-base-content/70'}>
          {tier.description}
        </p>

        {/* Preço com contador */}
        <div className="my-6">
          <div className="text-5xl font-bold">
            {tier.currency}
            <motion.span>
              {displayPrice.toLocaleString('pt-BR')}
            </motion.span>
          </div>
          <div className={tier.featured ? 'text-primary-content/80' : 'text-base-content/60'}>
            {tier.period}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 flex-grow">
          {tier.features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <span className="mr-3">✓</span>
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <button 
          className={`btn btn-lg mt-6 w-full ${tier.featured ? 'btn-warning' : 'btn-outline'}`}
        >
          {tier.cta}
        </button>
      </div>
    </motion.div>
  );
}
```

**Complexidade**: ⭐⭐⭐⭐
- Counter que sobe ao entrar em view
- Scale destacado para featured (CSS)
- Features aparecem sequencialmente (stagger)
- Responsivo: stack mobile, 3 cols desktop
- Badge pulsando (badge fica se movendo sutilmente)

---

## 3. ANIMAÇÕES GLOBAIS (CSS + Tailwind)

```css
/* globals.css */

/* Fade-in ao scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient animado */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}

/* Pulse para badges */
@keyframes subtlePulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

.animate-pulse-subtle {
  animation: subtlePulse 2s ease-in-out infinite;
}

/* Glow para destaque */
.glow-primary {
  box-shadow: 0 0 20px rgba(var(--color-primary), 0.4);
}

/* Smoothness */
* {
  @apply transition-all duration-300;
}

/* DaisyUI Custom Theme */
:root {
  --primary: #3b82f6; /* Blue */
  --secondary: #8b5cf6; /* Purple */
  --accent: #06b6d4; /* Cyan */
  --neutral: #1f2937; /* Dark gray */
  --base-100: #ffffff;
  --base-200: #f3f4f6;
  --base-300: #e5e7eb;
}
```

---

## 4. RESPONSIVIDADE BREAKPOINTS

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // Mobile
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large desktop
    },
  },
};

// Padrão de uso:
// hidden md:block        → Mostrar só em tablet+
// grid-cols-1 md:grid-cols-2 lg:grid-cols-3   → Responsivo automático
// text-lg md:text-2xl lg:text-4xl             → Font scaling
```

---

## 5. PERFORMANCE & OTIMIZAÇÕES

### Images
```typescript
// Sempre usar Next.js Image component
<Image
  src="/path/to/image.png"
  alt="Descrição"
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  quality={80}
  priority={false} // true apenas para hero image
/>
```

### Code Splitting
```typescript
// Lazy load components pesados
const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <LoadingSketch />
});
```

### CSS Optimization
```typescript
// DaisyUI já inclui purging automático
// Tailwind cuida de tree-shaking
// Usar @apply com moderação
```

### Animações Otimizadas
```typescript
// ❌ EVITAR
style={{ top: '20px' }} // Trigger reflow

// ✅ USAR
style={{ transform: 'translateY(20px)' }} // GPU accelerated

// ❌ EVITAR
animate={{ width: 300 }}

// ✅ USAR
animate={{ scaleX: 1.2 }} // Mais eficiente
```

---

## 6. TESTING & QA

```typescript
// Arquivo: __tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe('Hero Component', () => {
  it('renders headline', () => {
    render(<Hero />);
    expect(screen.getByText('Código que gera resultado')).toBeInTheDocument();
  });

  it('counters animate correctly', async () => {
    render(<Hero />);
    // Simular contador
    await waitFor(() => {
      expect(screen.getByText(/8\+/)).toBeInTheDocument();
    });
  });
});
```

---

## 7. CHECKLIST DE IMPLEMENTAÇÃO

- [ ] Setup Next.js 15 + TypeScript
- [ ] Tailwind + DaisyUI config
- [ ] Framer Motion setup
- [ ] Hero com paralax mouse tracking
- [ ] Tech Stack carrossel 3D flip
- [ ] Process Timeline stagger
- [ ] Cases grid com gradient border
- [ ] Pricing cards com counter
- [ ] Footer CTA
- [ ] Otimizar imagens (WebP, lazy load)
- [ ] Testar performance (Lighthouse)
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Testar acessibilidade (axe DevTools)
- [ ] Deploy no Vercel
- [ ] Setup Analytics (Vercel Analytics + Sentry)

---

## 8. STACK DE ANIMAÇÃO

| Caso de Uso | Ferramenta | Por Quê |
|------------|-----------|---------|
| Stagger, keyframes complexos | Framer Motion | Melhor DX, otimizado |
| CSS simples (hover, focus) | Tailwind @apply | Nativo, sem JS |
| Scroll triggers | react-intersection-observer | Leve, eficiente |
| 3D transforms | CSS + Framer Motion | GPU accelerated |
| Contadores | useEffect + useState | Simples, controlável |

---

**Próximo Passo**: Implementar com OpenCode.ia + prompts no arquivo OPENCODE_PROMPTS.md
