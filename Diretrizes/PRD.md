# PRD - Nova Landing Page de Portfólio
## Roldan Eng. Software - Developer Next.js/Python

**Data**: Março 2026  
**Versão**: 1.0  
**Stack**: Next.js 15, TailwindCSS, DaisyUI, TypeScript  
**Objetivo**: Aumentar leads qualificados (B2B) para desenvolvimento custom e automação

---

## 1. VISÃO GERAL

### 1.1 Objetivo Principal
Substituir landing page atual (genérica) por website profissional que:
- Demonstre expertise em stack moderno (Next.js, Python, FastAPI, Docker, Neon, Supabase)
- Converta visitantes em leads qualificados para 3 tipos de projetos:
  - Desenvolvimento custom full-stack
  - Automação e scraping Python
  - Infraestrutura escalável (Docker, CI/CD)
- Mostre reatividade e movimento como **prova viva** de conhecimento em UX/frontend
- Diferencie Sandro de competitors genéricos

### 1.2 Público-Alvo
| Persona | Perfil | Problema | Solução |
|---------|--------|----------|---------|
| **Tech Lead / CTO** | Startups / Scaleups série A/B | Precisa developer confiável para MVP rápido | Portfólio que mostra processo + stack |
| **PME Digital** | Pequenas empresas em transformação | Quer automação de processos manuais | Case de automação Python visível |
| **Produto Manager** | Busca developer para feature específica | Quer garantia de entrega | Timeline clara + cases reais |
| **Founder Não-Tech** | Está escalando | Não entende tech stack | Visual clara do que você faz |

### 1.3 Métrica de Sucesso
- **Primário**: 15+ contatos qualificados/mês (vs. atual ~2)
- **Secundário**: 40% taxa de clique em CTA (Email/Calendly)
- **Terciário**: Bounce rate < 35% (vs. atual ~55%)

---

## 2. ARQUITETURA DE SEÇÕES

### 2.1 Hero Section (Acima da Dobra)
**Objetivo**: Impacto imediato + comunicar value prop em 5 segundos

**Componentes**:
- **Headline Principal**: 
  - Opção A: "Código que gera resultado | Deploy em produção"
  - Opção B: "Developer full-stack que escala com você"
  - Opção C: "Next.js, Python, Automação | Pronto para sua ideia"
  
- **Subheadline**: "De MVP para Scale: desenvolvimento ágil com stack moderno"

- **Visual**:
  - Gradient animado dinâmico (cores: azul → roxo → ciano) que muda a cada 8s
  - Efeito parallax com mouse-tracking (logo/elemento segue cursor sutilmente)
  - Fundo com grid animado (linhas que pulsam em ritmo lento)
  
- **CTA Primary**: "Iniciar Projeto" → link para Calendly
- **CTA Secondary**: "Ver Portfólio" → scroll para #cases

- **Números em Destaque** (animação contador):
  - "8+ Anos" de desenvolvimento
  - "50+ Projetos" entregues
  - "100% On-time" delivery

**Justificativa**:
- Primeiros 3 segundos definem bounce rate
- Movimento + cores atraem atenção de tech leads
- Números criam credibilidade imediata
- Dual CTA atende 2 tipos de visitantes (ready-to-buy vs. pesquisando)

---

### 2.2 Tech Stack Showcase (Proof of Expertise)
**Objetivo**: Provar que você domina stack atual

**Componentes**:

#### Seção A: Frontend Stack
Carrossel com 3D flip cards (hover revela info):
- **Next.js**: Icon + "Server Components | App Router | Performance"
- **TailwindCSS**: Icon + "Utility-first | 70% CSS reduzido"
- **DaisyUI**: Icon + "Components prontos | Acessibilidade"
- **TypeScript**: Icon + "Type safety | 0 runtime errors"

**Animação**: Cards fazem flip 3D ao hover, revelando descrição

#### Seção B: Backend Stack
Grid 2x2 com badge "Production-Ready":
- **Node.js/Express**: Para quando precisa de API rápida
- **Python + FastAPI**: Para automação e scraping
- **APIs REST**: Descrição de padrões
- **GraphQL**: Quando escalabilidade é crítica

#### Seção C: Data & Infrastructure
Cards com badge "Enterprise-Grade":
- **Supabase**: "Postgres + Auth + Real-time"
- **Neon**: "Serverless Postgres | Autoscaling"
- **MongoDB**: "Quando precisa NoSQL"
- **Redis**: "Cache e sessions"

#### Seção D: DevOps & Deployment
- **Docker**: "Containerização | Multi-stage builds"
- **GitHub Actions**: "CI/CD automático"
- **Vercel**: "Deploy Next.js em 30s"
- **AWS**: "Para infraestrutura complexa"

**Interatividade**:
- Hover em cada card: zoom + revelar caso de uso
- Click em card: mini modal com "Exemplo de uso"
- Badge "Verificado em produção" para cada tech

**Justificativa**:
- Mostra *seletividade* (não usa tudo, usa certo)
- Tech leads entendem e respeitam decisões arquiteturais
- Cada tech com uso real diferencia de "conhece tudo superficialmente"
- Production-ready badges = confiança

---

### 2.3 Como Trabalho (Process / Fluxo)
**Objetivo**: Remover medo de cliente. Responder "Como é trabalhar com você?"

**Componentes**:

Timeline interativa com 4 fases:

#### Fase 1: Escopo (Semana 1)
- Ícone: 📋 Documento
- **Descrição**: "Entender seu problema, não vender solução"
- **Atividades**: 
  - 1-2 reuniões de discovery
  - Documento com escopo, timeline, custo
  - Aprovação do cliente antes de começar
- **Animação**: Card slide-in from left com stagger (cada fase entra depois da anterior)

#### Fase 2: Desenvolvimento (Semanas 2-N)
- Ícone: ⚙️ Engrenagem
- **Descrição**: "Code com visibilidade"
- **Atividades**:
  - Reuniões 2x/semana
  - GitHub com commits diários
  - Demo de features a cada 2 semanas
  - Feedback integrado em tempo real
- **Animação**: Ícone faz rotate lento (infinito)

#### Fase 3: Deploy & QA (Última semana)
- Ícone: 🚀 Foguete
- **Descrição**: "Levar para produção com confiança"
- **Atividades**:
  - Testing completo
  - Documentação
  - Treinamento do time
  - Monitoramento pós-launch
- **Animação**: Foguete sobe ao scroll para esta seção

#### Fase 4: Suporte (Pós-launch)
- Ícone: 🛡️ Escudo
- **Descrição**: "Não abandono o projeto"
- **Atividades**:
  - 30 dias de suporte gratuito
  - Opção de retainer mensal
  - Updates e melhorias
- **Animação**: Escudo pulsa sutilmente

**Interatividade**:
- Scroll horizontal com cards fixos (ou scroll vertical com cada fase aparecendo)
- Ao clicar em fase: expande mostrando detalhes
- Conexões entre fases com linha animada

**Justificativa**:
- Cliente medo de "black box"
- Timeline clara = cliente dorme tranquilo
- Mostra transparência e comunicação proativa
- Diferencia de freelancers que desaparecem pós-launch

---

### 2.4 Casos de Uso (Mini Cases / Portfólio)
**Objetivo**: Prova social. Mostrar trabalho real.

**Componentes**:

Grid 3 colunas (responsivo: 1 mobile, 2 tablet) com **4 mini-cases**:

#### Case 1: E-commerce com Automação
- **Título**: "Loja Online + Integração de Estoque"
- **Descrição**: "E-commerce Next.js com integração automática de inventário via API. Redução de 80% em erros de overselling."
- **Tecnologias**: Next.js, Neon, Stripe, Python Scheduler
- **Resultado Numérico**: 
  - ✅ 2.5s página inicial (LCP)
  - ✅ 98% Lighthouse
  - ✅ $50k/mês em vendas no primeiro mês
- **Imagem/GIF**: Screenshot da loja ou GIF de checkout
- **CTA**: "Ver case completo" (link para blog post ou live demo)

#### Case 2: Automação de Web Scraping
- **Título**: "Scraper de Preços + Dashboard Automático"
- **Descrição**: "Sistema Python que raspa 1000+ produtos diariamente de competitors, alimenta dashboard em tempo real. Ajudou cliente a competir com preços."
- **Tecnologias**: Python, FastAPI, Neon, Next.js
- **Resultado Numérico**:
  - ✅ 10k+ dados atualizados/dia
  - ✅ 0 falhas em 90 dias
  - ✅ 15% redução de custo com repricing
- **Visual**: Screenshot do dashboard
- **CTA**: "Ver tecnologias"

#### Case 3: App SaaS com Docker
- **Título**: "Plataforma SaaS Multi-tenant"
- **Descrição**: "Sistema completo de gestão de proyectos com autenticação OAuth, pagamentos Stripe, suporte a multi-idioma. Deploy em 30s via Vercel."
- **Tecnologias**: Next.js, Docker, Supabase, FastAPI (microserviço)
- **Resultado Numérico**:
  - ✅ 500+ usuários ativos
  - ✅ 99.9% uptime
  - ✅ Escalou de 10 para 5k requisições/dia sem mudanças
- **Visual**: GIF do app em ação
- **CTA**: "Visitar live"

#### Case 4: API + Frontend Integrado
- **Título**: "Sistema de Gestão Interna"
- **Descrição**: "Plataforma interna com relatórios avançados, permissões granulares e integração com sistemas legados. FastAPI com Next.js frontend."
- **Tecnologias**: Python, FastAPI, Next.js, PostgreSQL
- **Resultado Numérico**:
  - ✅ 40 horas/semana de trabalho manual eliminado
  - ✅ Implementado em 8 semanas
  - ✅ 200+ relatórios customizados
- **Visual**: Screenshot de dashboard
- **CTA**: "Entre em contato"

**Animação**:
- Cards aparecem com fade-in conforme scroll (stagger: cada um 200ms depois)
- Ao hover: card levanta (shadow aumenta)
- Border gradient animado ao hover

**Justificativa**:
- Social proof > marketing copy
- Números concretos vencem promessas vazias
- Cases mostram variedade de skills
- Cada case tem tech stack visível (prova de expertise)
- GIFs/vídeos mantêm engajamento

---

### 2.5 Diferenciais Competitivos
**Objetivo**: Posicionar como "não é developer genérico"

**Componentes**:

3 cards grandes (full width stacked, ou 3 colunas):

#### Diferencial 1: Full-Stack Moderno
- **Ícone**: 🏗️ Arquitetura
- **Headline**: "Não apenas Frontend"
- **Descrição**: "Você recebe developer que domina stack inteira: Next.js no frontend, Python + FastAPI no backend, Docker na infraestrutura, Neon no banco. Sem 'não sei disso, precisa contratar outro'."
- **Prova**: "8+ anos entregando full-stack"
- **Animação**: Ícone com linhas conectadas que se iluminam

#### Diferencial 2: Automação & Scraping
- **Ícone**: 🤖 Bot
- **Headline**: "Você quer economizar 40h/semana?"
- **Descrição**: "Python + FastAPI + scheduled tasks. Raspo, processo, automatizo. Poucos developers oferecem isso. Projeto que custa R$ 8k em manual fica R$ 2k automatizado."
- **Prova**: "4 scraping systems em produção"
- **Animação**: Linhas de bot que se movem

#### Diferencial 3: Deploy Escalável
- **Ícone**: 📈 Gráfico
- **Headline**: "Seu app não cai quando cresce"
- **Descrição**: "Docker, CI/CD automático, serverless onde faz sentido. App pode crescer de 10 para 100k usuários sem você pensar em infraestrutura."
- **Prova**: "Escalou cliente de 1k para 500k requisições/mês em 6 meses"
- **Animação**: Gráfico que cresce

**Interatividade**:
- Cards com hover: expandem com shadow + cor muda
- Click: modal com detalhes + "Como fazemos isso"

**Justificativa**:
- Diferencia você de 90% dos developers que são "frontend specialists"
- Automação é nicho rentável (5x mais caro que desenvolvimento padrão)
- Deploy confiável atrai clientes com medo de downtime
- Posiciona como "senior" não "junior"

---

### 2.6 Modelos de Trabalho & Preços
**Objetivo**: Remover fricção final. Cliente vê preço → sabe se pode → clica.

**Componentes**:

3 cards lado-a-lado (responsivo: stack vertical mobile) com preços:

#### Modelo 1: Horário (Por Horas)
- **Headline**: "Consultoria & Pequenos Ajustes"
- **Preço**: "R$ XXX/hora" (animação contador que sobe)
- **Incluso**:
  - ✅ 1 hora consultoria = 0.5h cobrado
  - ✅ Reunião de escopo
  - ✅ Código comentado
  - ✅ Suporte 30 dias
- **Ideal para**: Startups, MVPs, ajustes pontuais
- **CTA**: "Agendar 30min"
- **Badge**: Sem badge especial

#### Modelo 2: Projeto Fixo (Mais Popular)
- **Headline**: "Projeto Novo ou Feature Complexa"
- **Preço**: "A partir de R$ XX.XXX" (contador animado)
- **Incluso**:
  - ✅ Escopo claro (1-2 reuniões)
  - ✅ Timeline definida
  - ✅ Demos 2x/semana
  - ✅ Suporte 90 dias
  - ✅ Documentação completa
- **Ideal para**: Novos produtos, refactor, features que demoram
- **CTA**: "Conversar sobre projeto"
- **Badge**: ⭐ "MAIS POPULAR" (em destaque visual)

#### Modelo 3: Retainer (Parceria)
- **Headline**: "Desenvolver Continuar"
- **Preço**: "A partir de R$ X.XXX/mês" (contador animado)
- **Incluso**:
  - ✅ 40h/mês dedicadas
  - ✅ Prioridade máxima
  - ✅ Reunião semanal
  - ✅ Backlog contínuo
  - ✅ Deploy automático
- **Ideal para**: Startups escalando, equipes remotas que precisam de reforço
- **CTA**: "Proposta de retainer"
- **Badge**: 🔥 "MELHOR VALOR"

**Animação**:
- Números de preço contam de 0 até valor final quando card aparece (conforme scroll)
- Cards ao hover: elevam com shadow
- "MAIS POPULAR" pulsa sutilmente

**Justificativa**:
- Remove objeção "Quanto custa?" antes de conversar
- 3 opções atende diferentes tamanhos de cliente
- Retainer é onde você ganha mais (recurring revenue)
- Preço ancorado = cliente sente confiança

---

### 2.7 Stack de Infraestrutura (Bônus / Seção Discreta)
**Objetivo**: Tech leads entendem. Mostra decisões inteligentes.

**Componentes**:

Seção compacta com badges e tooltips:

**Database**: 
- Neon (Serverless Postgres) — "Autoscaling automático"
- Supabase (Postgres + Auth) — "Para produção rápida"

**Messaging & Async**:
- Bull Queue (Redis) — "Job processing confiável"
- Python Celery — "Para heavy tasks"

**Monitoring**:
- Vercel Analytics — "Web performance real"
- Sentry — "Error tracking automático"

**Infrastructure**:
- GitHub Actions — "CI/CD sem vendor lock-in"
- Docker Compose — "Local development idêntico à produção"

**Animação**: 
- Badges aparecem conforme scroll (fade-in stagger)
- Tooltip ao hover explicando escolha arquitetural

**Justificativa**:
- Tech leads veem e pensam "Conhece o que está fazendo"
- Mostra maturidade DevOps
- Diferencia de "usa o que é mais popular"

---

### 2.8 Footer & CTA Final
**Objetivo**: Reduzir fricção. Cliente sabe como chamar.

**Componentes**:

- **Seção Principal**:
  - Headline: "Pronto para começar seu projeto?"
  - Subheadline: "Respondo em até 24h"
  - CTA Primary: "Agendar Reunião" → Calendly
  - CTA Secondary: "Enviar Email" → mailto

- **Social Proof Mínimo**:
  - "20+ clientes satisfeitos"
  - 2-3 testimonials rápidos (texto + foto/avatar)
  - Exemplos:
    - "Entregou 2 semanas antes do prazo" — CEO, Startup X
    - "Melhor developer que já contratei" — Founder, SaaS Y
    - "Economia real, código de qualidade" — CTO, PME Z

- **Links Secundários**:
  - GitHub (mostra código)
  - LinkedIn (mostra profissionalismo)
  - Email
  - Whatsapp (se aplicável)

- **Footer Mínimo**:
  - Copyright
  - Privacy Policy
  - Terms (se aplicável)

**Animação**:
- CTA buttons com hover: scale + shadow
- Social proof aparecem conforme scroll
- Testimonials com fade-in stagger

**Justificativa**:
- Social proof vence última objeção
- Links claros = conversão
- Resposta em 24h diferencia de developers que somem

---

## 3. REQUISITOS TÉCNICOS

### 3.1 Performance
- **Core Web Vitals**:
  - LCP < 2.5s (Largest Contentful Paint)
  - FID < 100ms (First Input Delay)
  - CLS < 0.1 (Cumulative Layout Shift)
  
- **Lighthouse Score**: Mínimo 90 (target: 98+)

- **Bundle Size**: 
  - Initial JS < 150kb (gzip)
  - CSS < 50kb
  - Next.js Image Optimization para todos os PNGs

### 3.2 SEO
- **Meta tags**: Title, description, OG tags para cada página
- **Schema.org**: Markup para LocalBusiness + FAQPage
- **Sitemap.xml** gerado automaticamente
- **Mobile-first indexing** como default
- **h1-h6 hierarchy** correto

### 3.3 Acessibilidade
- **WCAG 2.1 AA** como mínimo
- Alt text em todas as imagens
- Color contrast ratio >= 4.5:1
- Keyboard navigation funcional

### 3.4 Responsividade
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Todos os componentes testados em 3 breakpoints

### 3.5 Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+

---

## 4. ESTRUTURA DE PROJETO

```
roldan-portfolio/
├── app/
│   ├── layout.tsx          (Root layout + navbar)
│   ├── page.tsx            (Landing page completa)
│   ├── globals.css         (DaisyUI + custom CSS)
│   └── fonts/
├── components/
│   ├── Hero.tsx
│   ├── TechStackShowcase.tsx
│   ├── ProcessTimeline.tsx
│   ├── CasesPortfolio.tsx
│   ├── Differentials.tsx
│   ├── PricingCards.tsx
│   ├── InfrastructureStack.tsx
│   ├── FooterCTA.tsx
│   └── animations/
│       ├── ParallaxMouse.tsx
│       ├── CounterAnimation.tsx
│       ├── StaggerAnimation.tsx
│       └── GradientBg.tsx
├── public/
│   ├── images/
│   │   ├── cases/
│   │   ├── tech-logos/
│   │   └── icons/
│   ├── gifs/
│   │   └── (case GIFs aqui)
│   └── videos/
│       └── (hero video background se aplicável)
├── lib/
│   ├── animations.ts        (Framer Motion configs)
│   └── constants.ts         (Dados de cases, preços, etc)
├── next.config.js
├── tailwind.config.js       (DaisyUI config)
├── tsconfig.json
└── package.json
```

---

## 5. STACK TÉCNICO DETALHADO

| Dependência | Versão | Uso |
|-------------|--------|-----|
| **next** | 15.x | Framework principal |
| **react** | 19.x | Library UI |
| **typescript** | 5.x | Type safety |
| **tailwindcss** | 3.4+ | Styling utility |
| **daisyui** | 4.x | Component library |
| **framer-motion** | 11.x | Animações fluidas |
| **react-intersection-observer** | 9.x | Trigger animações em scroll |
| **clsx** | 2.x | Class merging |
| **next-theme** | 0.x | Dark mode (opcional) |

**Dev Dependencies**:
- eslint, prettier
- @tailwindcss/typography
- @tailwindcss/forms

---

## 6. MILESTONE & TIMELINE

| Marco | Duração | Descrição |
|-------|---------|-----------|
| **Design & Setup** | 2 dias | Estrutura do projeto, componentes base |
| **Hero + Tech Stack** | 3 dias | Implementar hero paralax + carrossel |
| **Process + Cases** | 4 dias | Timeline interativa + grid de cases |
| **Preços + Diferenciais** | 2 dias | Cards de pricing + seção diferencial |
| **Animações & Polish** | 3 dias | Refinar todas as animações, performance |
| **SEO & Meta Tags** | 2 dias | Schema markup, meta tags, sitemap |
| **Testing** | 2 dias | Performance, acessibilidade, responsividade |
| **Deploy** | 1 dia | Vercel setup + GitHub Pages (backup) |
| **Total** | **17 dias** | ~2-3 semanas |

---

## 7. MÉTRICAS & SUCCESS CRITERIA

**Semana 1-2 (Após Launch)**:
- [ ] Bounce rate < 40% (vs. 55% atual)
- [ ] Página load time < 2.5s LCP
- [ ] Lighthouse 95+

**Mês 1**:
- [ ] 5+ contatos qualificados
- [ ] 30% CTR em CTA primária
- [ ] 500+ sessões únicas

**Mês 3 (Target)**:
- [ ] 15+ contatos/mês
- [ ] 40% CTR em CTA
- [ ] 2k+ sessões únicas/mês
- [ ] 3+ novos clientes fechados

---

## 8. CONSIDERAÇÕES & RISCOS

### Risco 1: Animações Muito Pesadas
**Solução**: Usar `will-change` judiciosamente, preferir `transform` e `opacity` (GPU-accelerated)

### Risco 2: Mobile Performance
**Solução**: Testar em Lighthouse, 3G throttling, usar Code Splitting

### Risco 3: Casos Desatualizados
**Solução**: Ciclo de 6 meses para refresh, manter apenas casos relevantes

### Risco 4: Preços Congelam Conversão
**Solução**: Deixar fluxo claro de "Esta é estimativa, conversamos sobre sua situação"

---

## 9. ESCOPO FUTURO (Não v1)

- [ ] Blog com artigos SEO (Next.js patterns, Python tips)
- [ ] Calculadora de ROI para automação
- [ ] Agendamento automático (Calendly embed com AI suggestions)
- [ ] Dark mode toggle
- [ ] Seção "Perguntas Frequentes" com schema FAQPage
- [ ] Integração com email (Resend/SendGrid para follow-up automático)
- [ ] Analytics avançados (Vercel + Sentry + custom events)

---

## 10. REFERÊNCIAS & INSPIRAÇÃO

- **Design Pattern**: Vercel.com (hero paralax), Stripe.com (pricing clarity)
- **Tech Showcase**: GitHub.com (skills showcase), Framer.com (animations)
- **Case Studies**: Figma.com (social proof), Linear.app (process clarity)

---

**Próximo Passo**: Iniciar implementação com DESIGNER.md + prompts para OpenCode.ia
