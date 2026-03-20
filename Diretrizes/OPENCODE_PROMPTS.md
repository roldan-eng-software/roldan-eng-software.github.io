# OPENCODE_PROMPTS.md - Guia de Prompts para OpenCode.ia (MCP Pencil)

**Objetivo**: Usar OpenCode.ia integrado via MCP Pencil para desenhar toda a landing page automaticamente

**Setup Pré-Requisito**:
- VSCode com MCP Pencil instalado
- OpenCode.ia conectado como MCP provider
- Projeto Next.js inicializado (veja README.md)

---

## 🎯 Workflow Geral

1. **Preparar contexto**: Copiar/colar os dados do projeto (PRD.md, DESIGNER.md)
2. **Chamar OpenCode.ia**: Usar prompt estruturado no MCP Pencil
3. **Gerar código**: Deixar IA desenhar componentes
4. **Review & Refine**: Ajustar se necessário
5. **Integrar**: Mover arquivos para projeto

---

## 📌 PROMPT 0 - Inicialização do Projeto (Execute PRIMEIRO)

```markdown
# Prompt para OpenCode.ia - Setup Inicial Next.js

Você é um especialista em Next.js 15, TypeScript e TailwindCSS.

## Contexto
Estou criando uma landing page profissional de portfólio de desenvolvedor.
- Stack: Next.js 15 + TypeScript + Tailwind CSS + DaisyUI
- Público: CTOs, Tech Leads, PMEs em transformação digital
- Objetivo: Converter visitantes em clientes para desenvolvimento custom + automação Python

## Tarefa
Gerar a estrutura inicial do projeto com:

1. **package.json** com dependências:
   - next@15.x
   - react@19.x
   - typescript@5.x
   - tailwindcss@3.4+
   - daisyui@4.x
   - framer-motion@11.x
   - react-intersection-observer@9.x
   - clsx@2.x

2. **next.config.js** com:
   - Otimizações de imagem
   - Headers de segurança
   - Redirects (se tiver)

3. **tailwind.config.js** com:
   - DaisyUI como plugin
   - Conteúdo aponta para app/ e components/
   - Temas light (principal)

4. **tsconfig.json** com:
   - Caminho alias @/ para src
   - Strict mode ativado

5. **app/layout.tsx** com:
   - Metadados globais (title, description, OG tags)
   - Favicon
   - Google Fonts (opcional: sistema font é ok)
   - DaisyUI/Tailwind CSS inicializado

6. **.gitignore** com:
   - node_modules
   - .next
   - .env.local
   - .DS_Store

7. **.prettierrc** para formatação consistente

Não gere componentes ainda, apenas o boilerplate. 
Responda com instruções de instalação claras.
```

---

## 📌 PROMPT 1 - Hero Section (Priority: HIGH)

```markdown
# Prompt para OpenCode.ia - Componente Hero

## Contexto
Landing page de portfólio de desenvolvedor. Seção acima da dobra (Hero).

## Especificações

### Headlines
- Principal: "Código que gera resultado | Deploy em produção"
- Subheadline: "De MVP para Scale: desenvolvimento ágil com stack moderno"

### Elementos Visuais
1. **Fundo**:
   - Gradient: azul (#0f172a) → roxo (#1e3a8a) → ciano (#0c4a6e)
   - Grid SVG animado (linhas brancas opacity 10%, pulsando 3s)

2. **Paralax com Mouse Tracking**:
   - Elemento decorativo (SVG) segue cursor
   - Máximo 10px de movimento (suave, não exagerado)
   - useRef + mousemove listener
   - transition: transform 0.2s ease-out

3. **Números com Counter Animation**:
   - 3 colunas: "8+ Anos" | "50+ Projetos" | "100% Sucesso"
   - Contador começa em 0, sobe até valor final
   - Anima quando Hero entra em view
   - useEffect + setInterval (50 iterações)

4. **CTAs**:
   - Primary: "Iniciar Projeto" (btn-primary)
   - Secondary: "Ver Portfólio" (btn-outline)
   - Stack vertical em mobile, horizontal em desktop

### Animações
- Grid background: keyframes gradientPulse (fade in/out)
- Counter: smooth increment (sem jump)
- Buttons: hover scale + shadow

### Performance
- GPU accelerated: transform, opacity só
- SVG inline (não fetch)
- Sem imagens pesadas

## Tarefa
Criar arquivo `components/Hero.tsx` com:
- Componente funcional 'use client'
- TypeScript interface para props
- Todos os elementos acima
- Responsivo mobile-first
- Tailwind classes
- Framer Motion para mouse tracking suavidade

Inclua também:
- `components/animations/CounterAnimation.tsx` (hook reutilizável)
- `components/animations/ParallaxMouse.tsx` (hook reutilizável)

Código pronto para rodar sem ajustes.
```

---

## 📌 PROMPT 2 - Tech Stack Showcase (Priority: HIGH)

```markdown
# Prompt para OpenCode.ia - Tech Stack Showcase

## Contexto
Seção que mostra stack moderno que você domina.
Objetivo: Provar expertise em tecnologias atuais.

## Especificações

### Estrutura
4 seções de tecnologias:

#### A. Frontend Stack (4 items)
- Next.js → "Server Components | App Router | Performance"
- TailwindCSS → "Utility-first | 70% CSS reduzido"
- DaisyUI → "Components prontos | Acessibilidade"
- TypeScript → "Type safety | 0 runtime errors"

#### B. Backend Stack (4 items)
- Node.js/Express → "APIs rápidas"
- Python + FastAPI → "Automação e scraping"
- APIs REST → "Padrões modernos"
- GraphQL → "Quando escalabilidade crítica"

#### C. Data & Infrastructure (4 items)
- Neon → "Serverless Postgres | Autoscaling"
- Supabase → "Postgres + Auth + Real-time"
- MongoDB → "NoSQL quando necessário"
- Redis → "Cache e sessions"

#### D. DevOps & Deployment (4 items)
- Docker → "Containerização | Multi-stage builds"
- GitHub Actions → "CI/CD automático"
- Vercel → "Deploy Next.js em 30s"
- AWS → "Para infraestrutura complexa"

### Componente Flip 3D Card
- Frente: Ícone + Nome tech
- Verso: Descrição/use-case
- Hover (desktop): flip 180° com rotateY
- Click (mobile): alternar estado isFlipped
- Animação: Framer Motion (duration 0.6s)

### Layout
- Desktop: 4 colunas por seção
- Tablet: 2 colunas
- Mobile: 1 coluna scroll horizontal snap

### Animações
- Cards: fade-in + slide ao scroll (stagger 0.1s)
- Hover: elevação (y -4px) + shadow aumento
- Flip: 3D transform com perspective

## Tarefa
Criar `components/TechStackShowcase.tsx` com:
- 16 FlipCard renderizados dinamicamente
- Interface TechCard (id, name, icon, front, back)
- Componente reutilizável FlipCard
- Responsivo 4→2→1 colunas
- Mobile scroll horizontal com snap
- useInView para trigger animação
- Framer Motion para 3D flip
- Tailwind classes

Inclua também:
- `lib/constants.ts` com array techStack (dados)

Código pronto, sem erros TS.
```

---

## 📌 PROMPT 3 - Process Timeline (Priority: HIGH)

```markdown
# Prompt para OpenCode.ia - Como Trabalho Timeline

## Contexto
Seção que explica o processo de trabalho em 4 fases.
Objetivo: Remover medo de cliente. Transparência = confiança.

## Especificações

### 4 Fases
1. **Escopo** (Semana 1)
   - Icon: 📋
   - Descrição: "Entender seu problema, não vender solução"
   - Atividades: Reuniões discovery, Documento com escopo, Aprovação
   - Cor: primary

2. **Desenvolvimento** (Semanas 2-N)
   - Icon: ⚙️
   - Descrição: "Code com visibilidade"
   - Atividades: Reuniões 2x/semana, GitHub commits diários, Demo a cada 2w
   - Cor: secondary
   - Animação: Ícone rotaciona infinito

3. **Deploy & QA** (Última semana)
   - Icon: 🚀
   - Descrição: "Levar para produção com confiança"
   - Atividades: Testing completo, Documentação, Treinamento
   - Cor: accent
   - Animação: Foguete sobe ao scroll para seção

4. **Suporte** (Pós-launch)
   - Icon: 🛡️
   - Descrição: "Não abandono o projeto"
   - Atividades: 30 dias suporte, Opção retainer, Updates
   - Cor: success
   - Animação: Escudo pulsa

### Layout

#### Desktop
- 4 colunas lado-a-lado
- Cards conectados por linha SVG animada
- Linha cresce ao entrar em view (strokeDasharray animation)

#### Mobile
- Stack vertical (cards um abaixo do outro)
- Sem linha SVG (responsividade)

### Componente PhaseCard
- Card com ícone grande, título, descrição
- Hover: elevação (y -4px)
- Click: expande mostrando atividades
- Animação: ícone rotaciona/pulsa continuamente

### Animações
- Cards: fade-in + slide from left (stagger 0.2s)
- Ao scroll: trigger staggerChildren
- SVG line: strokeDashoffset animation (2s)
- Ícones: rotate infinito (enge) ou pulse (escudo)

## Tarefa
Criar `components/ProcessTimeline.tsx` com:
- Interface Phase (id, title, icon, description, activities, color)
- Componente PhaseCard reutilizável
- Layout responsivo 4 cols → 1 col
- SVG line connecting (desktop only)
- Expandable accordion com motion.div
- useInView para scroll trigger
- Stagger animations com Framer Motion
- Tailwind classes

Inclua em `lib/constants.ts`:
- Array phases com dados

Código pronto para integrar.
```

---

## 📌 PROMPT 4 - Cases Portfolio (Priority: HIGH)

```markdown
# Prompt para OpenCode.ia - Casos de Uso

## Contexto
Grid de 4 mini-cases. Prova social real.
Objetivo: Mostrar trabalho e resultados concretos.

## Especificações

### 4 Cases

#### Case 1: E-commerce com Automação
- Título: "Loja Online + Integração de Estoque"
- Descrição: "E-commerce Next.js com integração automática de inventário via API. Redução de 80% em erros de overselling."
- Imagem: /images/cases/ecommerce.png (placeholder ok)
- Techs: ["Next.js", "Neon", "Stripe", "Python"]
- Métricas: 
  - LCP: "2.5s"
  - Lighthouse: "98"
  - Vendas/mês: "$50k"

#### Case 2: Scraping + Dashboard
- Título: "Scraper de Preços + Dashboard Automático"
- Descrição: "Sistema Python que raspa 1000+ produtos diariamente de competitors, alimenta dashboard em tempo real."
- Imagem: /images/cases/scraper.png
- Techs: ["Python", "FastAPI", "Neon", "Next.js"]
- Métricas:
  - Dados/dia: "10k+"
  - Uptime: "100%"
  - Economia: "15%"

#### Case 3: SaaS Multi-tenant
- Título: "Plataforma SaaS Multi-tenant"
- Descrição: "Sistema completo de gestão com autenticação OAuth, Stripe, multi-idioma. Deploy em 30s via Vercel."
- Imagem: /images/cases/saas.png
- Techs: ["Next.js", "Docker", "Supabase", "FastAPI"]
- Métricas:
  - Usuários: "500+"
  - Uptime: "99.9%"
  - Escala: "1k→5k req/dia"

#### Case 4: API + Gestão Interna
- Título: "Sistema de Gestão Interna"
- Descrição: "Plataforma interna com relatórios avançados, permissões granulares, integração com sistemas legados."
- Imagem: /images/cases/internal.png
- Techs: ["Python", "FastAPI", "Next.js", "PostgreSQL"]
- Métricas:
  - Horas/semana: "40h salvas"
  - Timeline: "8 semanas"
  - Relatórios: "200+"

### Componente CaseCard
- Image com lazy load (Next.js Image)
- Hover: zoom 110% em imagem + elevação card
- Gradient border animado ao hover
- Métrica destacada com numero + label
- Hover em métrica: scale 105%
- Badge com techs
- CTA button ao final

### Layout
- Grid: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
- Cards com shadow, arredondado
- Gradient border trick: background gradient + m-[2px]

### Animações
- Cards: fade-in + slide up (stagger 0.15s ao scroll)
- Imagem: scale 110% ao hover (suave)
- Métricas: scale animada ao hover
- Gradient border: opacity 0 → 100% ao hover

## Tarefa
Criar `components/CasesPortfolio.tsx` com:
- Interface CaseStudy (id, title, description, image, technologies, metrics)
- Componente CaseCard reutilizável
- Next.js Image component (lazy load)
- Grid responsivo 1→2→3
- Gradient border effect
- Stagger animations ao scroll
- useInView para trigger
- Métrica hover interativa
- Tailwind classes

Inclua em `lib/constants.ts`:
- Array cases com dados completos

Pronto para integrar, imagens placeholder ok.
```

---

## 📌 PROMPT 5 - Diferenciais Competitivos (Priority: MEDIUM)

```markdown
# Prompt para OpenCode.ia - Diferenciais

## Contexto
3 cards grandes mostrando o que diferencia você de competitors.
Objetivo: Posicionar como "não é developer genérico".

## Especificações

### 3 Diferenciais

#### 1. Full-Stack Moderno
- Icon: 🏗️
- Headline: "Não apenas Frontend"
- Descrição: "Você recebe developer que domina stack inteira: Next.js no frontend, Python + FastAPI no backend, Docker na infraestrutura, Neon no banco. Sem 'não sei disso, precisa contratar outro'."
- Prova: "8+ anos entregando full-stack"
- Animação: Linhas conectadas se iluminam (SVG)

#### 2. Automação & Scraping
- Icon: 🤖
- Headline: "Você quer economizar 40h/semana?"
- Descrição: "Python + FastAPI + scheduled tasks. Raspo, processo, automatizo. Poucos developers oferecem isso. Projeto que custa R$ 8k em manual fica R$ 2k automatizado."
- Prova: "4 scraping systems em produção"
- Animação: Bot lines se movem

#### 3. Deploy Escalável
- Icon: 📈
- Headline: "Seu app não cai quando cresce"
- Descrição: "Docker, CI/CD automático, serverless onde faz sentido. App pode crescer de 10 para 100k usuários sem você pensar em infraestrutura."
- Prova: "Escalou cliente de 1k para 500k requisições/mês em 6 meses"
- Animação: Gráfico cresce

### Layout
- 3 colunas (desktop)
- Stack vertical (mobile)
- Cards grandes, full-width em mobile

### Interatividade
- Hover: elevação + color shift + shadow aumenta
- Click: expande modal com detalhes
- Animação: ícone animado continuamente

## Tarefa
Criar `components/Differentials.tsx` com:
- Interface Differential (id, icon, headline, description, proof, animation)
- Componente DifferentialCard reutilizável
- 3 cards lado-a-lado (desktop) ou stack (mobile)
- Hover animations: elevação, shadow, color
- SVG animadas para cada diferencial (linhas, bot, gráfico)
- Click expande com motion.div
- Tailwind classes

Inclua em `lib/constants.ts`:
- Array differentials com dados

Responsivo, pronto.
```

---

## 📌 PROMPT 6 - Pricing Cards (Priority: MEDIUM)

```markdown
# Prompt para OpenCode.ia - Pricing Cards

## Contexto
3 modelos de trabalho com preços visíveis.
Objetivo: Remover fricção. Cliente vê preço → sabe se pode → clica.

## Especificações

### 3 Tiers

#### Tier 1: Horário
- Nome: "Horário"
- Descrição: "Consultoria & Pequenos Ajustes"
- Preço: R$ 150/hora (ajuste conforme sua taxa)
- Features:
  - 1h consultoria = 0.5h cobrado
  - Reunião de escopo
  - Código comentado
  - Suporte 30 dias
- CTA: "Agendar 30min" → calendly
- Featured: false

#### Tier 2: Projeto Fixo (DESTAQUE)
- Nome: "Projeto Fixo"
- Descrição: "Projeto Novo ou Feature Complexa"
- Preço: R$ 8.000+ (from)
- Features:
  - Escopo claro
  - Timeline definida
  - Demos 2x/semana
  - Suporte 90 dias
  - Documentação completa
- CTA: "Conversar sobre projeto"
- Featured: true
- Badge: ⭐ "MAIS POPULAR"
- Animação: Badge pulsa (subtlePulse)

#### Tier 3: Retainer
- Nome: "Retainer"
- Descrição: "Desenvolver Continuar"
- Preço: R$ 6.000/mês (ajuste)
- Features:
  - 40h/mês dedicadas
  - Prioridade máxima
  - Reunião semanal
  - Backlog contínuo
  - Deploy automático
- CTA: "Proposta de retainer"
- Featured: false
- Badge: 🔥 "MELHOR VALOR"

### Componente PriceCard
- Card com gradient animado se featured
- Preço com counter animation (sobe de 0 até valor)
- Features com checkmark
- Ao scroll para view: priceCounter começa
- Hover: elevação, cor
- CTA button com hover effect

### Animações
- Cards: fade-in + slide up (stagger 0.1s)
- Preço: contador de 0 até valor (40 frames)
- Features: aparecem sequencialmente (stagger por item)
- Featured card: scale 105% (CSS)
- Badge: pulsa continuamente (subtlePulse keyframes)

### Layout
- 3 colunas (desktop)
- Stack vertical (mobile)
- Featured card "sai da coluna" com scale

## Tarefa
Criar `components/PricingCards.tsx` com:
- Interface PricingTier (id, name, description, price, currency, period, featured, features, cta, ctaLink)
- Componente PriceCard reutilizável
- useInView + useEffect para counter animation
- Counter lógica: incrementa em 40 frames, 20ms por frame
- Stagger animations em features
- 3 cols → 1 col responsivo
- Featured card com scale + special styling
- Badge animado para featured
- Tailwind classes

Inclua em `lib/constants.ts`:
- Array pricingTiers com dados
- Currency format em lib/utils.ts

Pronto para integrar.
```

---

## 📌 PROMPT 7 - Infrastructure Stack (Priority: LOW)

```markdown
# Prompt para OpenCode.ia - Infrastructure Stack

## Contexto
Seção discreta com badges de tecnologias backend/infra.
Objetivo: Tech leads veem e respeitam.

## Especificações

### Tech Groups

#### Database
- Neon: "Serverless Postgres | Autoscaling automático"
- Supabase: "Postgres + Auth + Real-time"

#### Messaging & Async
- Bull Queue: "Job processing confiável"
- Python Celery: "Para heavy tasks"

#### Monitoring
- Vercel Analytics: "Web performance real"
- Sentry: "Error tracking automático"

#### Infrastructure
- GitHub Actions: "CI/CD sem vendor lock-in"
- Docker Compose: "Local dev idêntico à produção"

### Componente TechBadge
- Badge com logo + nome tech
- Tooltip ao hover explicando arquitetura
- Cores consistentes com DaisyUI

### Layout
- Grid 4 colunas (desktop)
- 2 colunas (tablet)
- 1 coluna (mobile)
- Badges aparecem conforme scroll (fade-in stagger)

### Animações
- Badges: fade-in ao scroll (stagger 0.05s)
- Hover: scale 110% + tooltip aparece (fade-in 0.2s)

## Tarefa
Criar `components/InfrastructureStack.tsx` com:
- Interface TechBadge (name, description, category)
- Componente TechBadgeItem reutilizável
- Grid 4→2→1 responsivo
- Tooltip no hover
- Stagger animations
- Tailwind classes

Inclua em `lib/constants.ts`:
- Array infrastructureStack com dados

Simples, robusto.
```

---

## 📌 PROMPT 8 - Footer & CTA Final (Priority: MEDIUM)

```markdown
# Prompt para OpenCode.ia - Footer CTA

## Contexto
Seção final com CTA forte + social proof mínimo.
Objetivo: Última chance de conversão.

## Especificações

### Seção Principal (CTA)
- Headline: "Pronto para começar seu projeto?"
- Subheadline: "Respondo em até 24h"
- CTA Primary: "Agendar Reunião" → https://calendly.com/seu-username
- CTA Secondary: "Enviar Email" → mailto:seu-email@example.com
- Ambos com hover animations

### Social Proof
- Texto: "20+ clientes satisfeitos"
- 2-3 testimonials mini:
  - Testimonial 1: "Entregou 2 semanas antes do prazo" — CEO, Startup X
  - Testimonial 2: "Melhor developer que já contratei" — Founder, SaaS Y
  - Testimonial 3: "Economia real, código de qualidade" — CTO, PME Z
  - Cada com avatar (placeholder iniciais ok)

### Links Secundários (Social)
- GitHub (ícone)
- LinkedIn (ícone)
- Email (ícone)
- Whatsapp (opcional)

### Footer Mínimo
- Copyright "© 2026 Sandro Roldan"
- Privacy Policy (link)
- Terms (link, se aplicável)

### Animações
- CTA buttons: hover scale + shadow
- Testimonials: fade-in stagger ao scroll
- Social links: hover rotate 360°

### Layout
- Desktop: Full width with sidebar layout
- Mobile: Stack vertical

## Tarefa
Criar `components/FooterCTA.tsx` com:
- Componente testemonial reutilizável
- Double CTA buttons
- Social proof grid
- Links footer
- Responsive layout
- Hover animations
- Tailwind classes

Inclua em `lib/constants.ts`:
- Array testimonials
- Footer links

Integração simples.
```

---

## 📌 PROMPT 9 - Navbar (Priority: LOW)

```markdown
# Prompt para OpenCode.ia - Navbar

## Contexto
Navigation bar fixa no topo.
Objetivo: Navegação simples, logo, CTA.

## Especificações

### Elementos
- Logo (texto "Sandro" ou ícone)
- Menu links (scrollar para seções):
  - Home
  - Casos
  - Preços
  - Contato
- CTA button: "Agendar" → calendly

### Comportamento
- Sticky/fixed no topo (z-50)
- Background: base-100 com opacity 95% (glass morphism)
- Shadow sutil ao scroll

### Responsividade
- Desktop: Todos os elementos visíveis
- Mobile: Menu hamburguer (3 linhas)
- Mobile: Clique em item fecha menu

### Animações
- Aparece com fade-in
- Scroll down: hideAnimation (slide up)
- Scroll up: showAnimation (slide down)
- Links hover: color change

## Tarefa
Criar `components/Navbar.tsx` com:
- Layout desktop/mobile responsivo
- Mobile menu com hamburger
- Sticky positioning
- Glass morphism background
- Scroll-triggered hide/show
- Link scroll behavior
- Tailwind classes

Simples e funcional.
```

---

## 🚀 WORKFLOW DE EXECUÇÃO (Passo a Passo)

### 1. Setup Inicial (EXECUTE PRIMEIRO)
```
Abra Pencil MCP no VSCode
Cole PROMPT 0
Deixe rodar até gerar package.json, next.config.js, etc
Revise saídas
Integre ao seu projeto
Rodar: npm install
```

### 2. Componentes em Ordem de Prioridade
```
PROMPT 1 → Hero (mais importante, é o que atrai)
PROMPT 2 → Tech Stack (prova de expertise)
PROMPT 3 → Process Timeline (remove medo)
PROMPT 4 → Cases Portfolio (social proof)
PROMPT 6 → Pricing (conversão)
PROMPT 5 → Differentials (seção media)
PROMPT 9 → Navbar (pequena)
PROMPT 7 → Infrastructure (discreta)
PROMPT 8 → Footer (final)
```

### 3. Após cada Prompt
```
1. Copiar saída (componente.tsx)
2. Criar arquivo em components/
3. Verificar imports (TypeScript types)
4. npm run dev → testar no browser
5. Ajustar se necessário (tamanhos, cores, etc)
6. Próximo componente
```

### 4. Integrar Tudo
```
// app/page.tsx
import Hero from '@/components/Hero';
import TechStackShowcase from '@/components/TechStackShowcase';
import ProcessTimeline from '@/components/ProcessTimeline';
import CasesPortfolio from '@/components/CasesPortfolio';
import Differentials from '@/components/Differentials';
import PricingCards from '@/components/PricingCards';
import InfrastructureStack from '@/components/InfrastructureStack';
import FooterCTA from '@/components/FooterCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStackShowcase />
      <ProcessTimeline />
      <CasesPortfolio />
      <Differentials />
      <PricingCards />
      <InfrastructureStack />
      <FooterCTA />
    </main>
  );
}
```

### 5. Testar & Deploy
```bash
npm run dev         # Ver localmente
npm run lint:fix    # Formatar
npm run build       # Build produção
npm run start       # Testar build local

# Depois:
git add .
git commit -m "feat: implementar landing page completa"
git push
# Vercel auto-deploys
```

---

## 💡 DICAS PARA MELHORES RESULTADOS

1. **Seja específico**: Quanto mais detalhe no prompt, melhor a saída
2. **Copie dados**: Sempre inclua arrays (cases, preços, etc) no contexto
3. **Peça TypeScript**: Especifique "Código pronto sem erros TS"
4. **Revisar**: OpenCode.ia é bom, mas sempre revise imports e tipos
5. **Iterativo**: Se não gostar, peça "refatore para..." no mesmo MCP
6. **Performance first**: Sempre peça "GPU-accelerated" para animações

---

## 🔧 Se Precisar Ajustar Depois

Prompts para refinamento:

```markdown
# Ajuste: Performance
"O componente Hero está pesado em mobile. 
Otimize: retire paralax em screens < 768px, 
simplifique grid SVG, lazy load imagens."

# Ajuste: Cores
"Mude o gradient do hero de azul→roxo→ciano 
para seu-color-1 → seu-color-2. 
Mantenha efeito paralax."

# Ajuste: Animações
"Tech Stack cards estão muito rápidos no flip (0.3s).
Aumente para 0.6s e adicione easing 'easeInOut'."

# Ajuste: Layout
"Cases grid em 3 colunas fica apertado em tablet.
Coloque 2 colunas em md: screens."
```

---

**Próximo Passo após gerar tudo**:
1. Revisar layout em mobile (Lighthouse)
2. Adicionar imagens reais em /public/images/cases/
3. Customizar cores conforme branding
4. Deploy no Vercel
5. Monitor Analytics

Boa sorte! 🚀

