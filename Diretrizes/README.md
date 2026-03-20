# Roldan Portfolio - Landing Page

**URL**: https://sandro-portfolio.vercel.app (será)

**Stack**: Next.js 15 | TypeScript | Tailwind CSS | DaisyUI | Framer Motion

---

## 🚀 Quick Start (5 minutos)

### 1. Clonar Repositório
```bash
git clone https://github.com/roldan-eng-software/portfolio.git
cd portfolio

# ou (se usar SSH)
git clone git@github.com:roldan-eng-software/portfolio.git
```

### 2. Instalar Dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Variáveis de Ambiente (opcional para dev)
Criar `.env.local`:
```env
# Analytics (Vercel Analytics, opcional em dev)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=seu-id-aqui

# Email (SendGrid, para form de contato - opcional)
SENDGRID_API_KEY=sua-chave-aqui

# Calendly (CTA integrado - use URL pública)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/seu-username
```

### 4. Rodar Localmente
```bash
npm run dev
```

Abrir http://localhost:3000

### 5. Build & Test
```bash
# Build produção
npm run build

# Rodar build localmente
npm run start

# Verificar performance
npm run build
npm run start
# Depois abrir DevTools → Lighthouse
```

---

## 📁 Estrutura do Projeto

```
portfolio/
├── app/
│   ├── layout.tsx              ← Root layout (navbar, meta tags globais)
│   ├── page.tsx                ← Landing page principal
│   ├── globals.css             ← Estilos globais + animações custom
│   ├── favicon.ico
│   ├── sitemap.ts              ← Geração automática sitemap.xml
│   ├── robots.ts               ← robots.txt automático
│   └── api/
│       └── contact/
│           └── route.ts        ← POST form contato (email)
│
├── components/
│   ├── Hero.tsx                ← Hero com paralax + contador
│   ├── TechStackShowcase.tsx    ← Carrossel 3D flip cards
│   ├── ProcessTimeline.tsx      ← Timeline com stagger animation
│   ├── CasesPortfolio.tsx       ← Grid cases com gradient border
│   ├── Differentials.tsx        ← 3 diferenciais com ícones animados
│   ├── PricingCards.tsx         ← Cards de preços com counter
│   ├── InfrastructureStack.tsx  ← Badges de tecnologias backend
│   ├── FooterCTA.tsx            ← Footer com testimonials
│   ├── Navbar.tsx               ← Menu fixo simples
│   └── animations/
│       ├── ParallaxMouse.tsx    ← Hook para mouse tracking
│       ├── CounterAnimation.tsx ← Hook contador
│       └── GradientBg.tsx       ← Gradient dinâmico
│
├── lib/
│   ├── constants.ts             ← Dados: cases, preços, tech stack
│   ├── animations.ts            ← Configurações Framer Motion
│   └── utils.ts                 ← Funções utilitárias
│
├── public/
│   ├── images/
│   │   ├── cases/
│   │   │   ├── ecommerce.png
│   │   │   ├── scraper.png
│   │   │   └── saas.png
│   │   ├── tech-logos/
│   │   │   ├── nextjs.svg
│   │   │   ├── python.svg
│   │   │   └── ...
│   │   └── icons/
│   │       ├── shield.svg
│   │       ├── rocket.svg
│   │       └── ...
│   ├── gifs/
│   │   └── case-demo.gif
│   └── fonts/
│       └── (se usar custom fonts)
│
├── .github/
│   └── workflows/
│       ├── deploy.yml          ← CD automático Vercel (opcional)
│       └── lighthouse.yml      ← Performance check em PR
│
├── .env.local                  ← Variáveis de ambiente (NÃO commitar)
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── next.config.js              ← Otimizações Next.js
├── tailwind.config.js          ← DaisyUI config
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ Development

### Rodar em Dev Mode
```bash
npm run dev
```

Abre http://localhost:3000 com hot reload automático.

### Linting & Formatting
```bash
# Verificar código (ESLint)
npm run lint

# Formatar código
npm run format

# Ambos
npm run lint:fix
```

### Testar Performance
```bash
# Build produção (simula)
npm run build

# Análise de bundle
npm run analyze
```

---

## 📦 Build & Deploy

### Build Local
```bash
npm run build

# Saída em .next/
# Verificar build sem erro
npm run start
```

### Deploy no Vercel (Automático via GitHub)

#### Passo 1: Preparar GitHub
```bash
# Criar repositório
git init
git add .
git commit -m "Initial commit: landing page"
git branch -M main
git remote add origin https://github.com/roldan-eng-software/portfolio.git
git push -u origin main
```

#### Passo 2: Setup Vercel
1. Ir para https://vercel.com
2. Login com GitHub (ou criar conta)
3. Clicar "Add New..." → "Project"
4. Selecionar repositório `portfolio`
5. Configure:
   - **Framework Preset**: Next.js (detecta automaticamente)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Environment Variables**: Adicionar `.env.local` se tiver
6. Clicar "Deploy"

#### Passo 3: Domain Customizado (opcional)
1. No Vercel Dashboard → Seu projeto
2. Aba "Settings" → "Domains"
3. Adicionar domínio (ex: portfolio.sandro.com)
4. Seguir instruções DNS do seu registrar

#### Passo 4: Auto-Deploy em Push
- Vercel já está configurado automaticamente
- Cada push para `main` → novo deploy
- Preview URLs para PRs também geradas automaticamente

```bash
# Fluxo normal de trabalho
git checkout -b feature/nova-seção
# ... fazer mudanças ...
git add .
git commit -m "feat: adicionar seção de testimonials"
git push origin feature/nova-seção

# Abrir PR no GitHub
# Vercel cria preview URL
# Testar, depois merge para main
# Automático: deploy para produção
```

---

## 🔧 Configurações Importantes

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com', // Se usar imagens de CDN
      },
    ],
  },

  // Bundle analysis (opcional)
  // experimental: {
  //   logging: 'verbose',
  // },

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Redirects (se migrar de old site)
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors se necessário
      },
      animation: {
        // Custom animations além do DaisyUI
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'], // ou apenas 'light'
    styled: true,
    base: true,
    utils: true,
    logs: true,
  },
};
```

---

## 📊 Performance & SEO

### Lighthouse Score Target
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Verificar Localmente
```bash
npm run build
npm run start

# Abrir http://localhost:3000
# DevTools → Lighthouse → Analyze page load
```

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

Monitorar em https://vercel.com → Project → Analytics

### SEO Checklist
- [x] Meta tags no `layout.tsx` (title, description, OG)
- [x] Sitemap gerado em `app/sitemap.ts`
- [x] Robots.txt em `app/robots.ts`
- [x] Headings corretos (h1 → h6)
- [x] Alt text em imagens
- [x] Mobile-friendly
- [x] Schema.org markup (LocalBusiness, FAQPage)

---

## 🚀 Workflow de Desenvolvimento

### Feature Novo
```bash
# 1. Criar branch
git checkout -b feature/nome-feature

# 2. Implementar
# ... fazer mudanças ...

# 3. Test local
npm run dev
# Verificar em http://localhost:3000

# 4. Lint & format
npm run lint:fix
npm run format

# 5. Commit
git add .
git commit -m "feat: descrição curta"

# 6. Push
git push origin feature/nome-feature

# 7. Abrir PR no GitHub

# 8. Merge para main (após review)
# Automático: Vercel faz deploy
```

### Bug Fix
```bash
git checkout -b fix/bug-description

# ... corrigir ...

git add .
git commit -m "fix: descrição do bug"
git push origin fix/bug-description

# Abrir PR
# Merge após aprovação
```

---

## 📝 Commit Message Convention

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adicionar seção de testimonials
fix: corrigir animação em mobile
docs: atualizar README
style: reformatar código
refactor: refatorar componente Hero
perf: otimizar imagens dos cases
test: adicionar testes do contador
chore: atualizar dependências
```

---

## 🔐 Segurança

### Variáveis Sensíveis
- **NUNCA** commitar `.env.local`
- Adicionar no `.gitignore` (já está)
- Usar Vercel Dashboard → Settings → Environment Variables

### Headers de Segurança
Já configurados em `next.config.js`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

### Dependências
```bash
# Verificar vulnerabilidades
npm audit

# Fix automático (cuidado!)
npm audit fix

# Update dependências com segurança
npm update
```

---

## 🐛 Troubleshooting

### Build falha em Vercel
```
Error: Cannot find module '@/components/XYZ'

Solução: Verificar tsconfig.json alias
```

### Imagens não carregam
```
Solução 1: Verificar path em public/images
Solução 2: Usar <Image> ao invés de <img>
Solução 3: Adicionar domínio remoto em next.config.js
```

### Performance ruim
```
Solução 1: npm run analyze (verificar bundle)
Solução 2: Lazy load componentes pesados
Solução 3: Otimizar imagens (WebP, sizes correto)
Solução 4: Verificar Lighthouse
```

### Hot reload não funciona
```bash
# Reiniciar dev server
npm run dev

# Limpar cache
rm -rf .next
npm run dev
```

---

## 📚 Documentação Referência

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI Components](https://daisyui.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)
- [Vercel Deployment](https://vercel.com/docs)

---

## 📞 Contato & Suporte

- **Email**: seu-email@example.com
- **GitHub Issues**: Para bugs e features
- **Calendly**: Para discussão de features

---

## 📋 Checklist Pré-Deploy

- [ ] npm run build sem erros
- [ ] npm run lint sem erros
- [ ] Lighthouse score 90+
- [ ] Mobile responsivo (testar em 3 breakpoints)
- [ ] Todos os links funcionam
- [ ] Images otimizadas
- [ ] Meta tags corretas
- [ ] Analytics configurado
- [ ] Form de contato testado
- [ ] .env.local não está commitado

---

## 🎯 Próximos Passos

1. **Setup inicial**: Seguir Quick Start acima
2. **Implementar componentes**: Usar OPENCODE_PROMPTS.md
3. **Testar localmente**: npm run dev
4. **Deploy**: Conectar GitHub + Vercel
5. **Monitor**: Analytics + Sentry

---

**Última atualização**: Março 2026  
**Versão**: 1.0.0  
**Mantido por**: Sandro Roldan
