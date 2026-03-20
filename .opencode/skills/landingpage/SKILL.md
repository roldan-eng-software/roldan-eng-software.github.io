---
title: "landingpage"
description: "Diretrizes e melhores práticas para a criação de Landing Pages profissionais, reativas e de alta conversão. Padrão estrito de design preferido pelo usuário, adaptado perfeitamente para projetos em React/Next.js com arquitetura production-ready."
---

## Regras e Melhores Práticas (React/Next.js)

Sempre que a criação de uma Landing Page for solicitada, as seguintes regras arquiteturais e de design devem ser rigorosamente aplicadas no ecossistema **React e Next.js**:

### 1. **Reatividade e Responsividade (Mobile-First):**
   - A página deve ser impecavelmente responsiva. Adapte margens, tipografias e grids para Desktop, Tablet e Mobile.
   - Sempre utilize e verifique as diretrizes da *skill* `responsivo`.

### 2. **Estrutura Obrigatória da Navbar:**
   - **Posição Esquerda:** Ícone de logo puxando primariamente do arquivo `favicon.ico`. Logo na sequência, apresentar um **logotipo** baseado em um arquivo de imagem `.png`.
   - **Centro:** Exibição centralizada e limpa do **Nome do Projeto**.
   - **Posição Direita:** 
     1. Um **seletor de tema** (ícone pequeno) que permita alternar entre modo **Claro, Escuro ou do Sistema**.
     2. Um botão de Call-to-Action (CTA) com o texto **"Entrar"**, apontando para a tela de logon do sistema (ex: rota `/login`).

### 3. **Seção Hero (Destaque Principal):**
   - A configuraçãoção principal do "Hero" deve usar como base um **arquivo `.png` largo**.
   - A imagem do Hero deve ser **totalmente reativa em toda a largura** da tela (`w-full`, preenchendo 100% da viewport), utilizando estratégias responsivas (ex: utilitários Tailwind como `bg-cover bg-center` para imagens em background ou `<Image fill className="object-cover" />` do Next.js).
   - O texto sobre o Hero deve ter contraste apropriado para garantir legibilidade.

### 4. **Seção de Apresentação de Serviços (Corpo da Página):**
   - A área compreendida entre o conteúdo do *Hero* e o *Footer* deve adotar o padrão profissional para **apresentação de serviços**.
   - Estruture essa área usando layouts de grid modernos (ex: cartões de serviços com ícones, títulos destacados, e pequenas descrições claras para conversão).

### 5. **Carrossel de Imagens (Largura Total - Movimento Infinito):**
   - No corpo da página, integre um **carrossel de imagens com largura total da página** (`w-full`, de ponta a ponta sem margem divisora).
   - O movimento deve ser **automático, contínuo e infinito** (estilo *marquee* profissional), permitindo uma visualização fluida sem interrupções manuais.
   - Ele deve ser configurado nativamente com foco de transição abrangendo **5 imagens**.
   - Cada uma dessas imagens exige uma **breve descrição localizada no pé da imagem** (garantindo visibilidade da fonte com gradientes opacos traseiros).

### 6. **Estrutura Obrigatória do Footer (Rodapé):**
   - Deve conter a assinatura da empresa e autoria apontando para o site oficial:
     **Desenvolvido por: [Roldan Eng Software](https://roldan-eng-software.github.io/roldan-page/)**
   - Deve incluir explicitamente os direitos reservados do projeto de forma dinâmica:
     **"&copy; [Ano Atual] [Nome do Projeto]. Todos os direitos reservados."**

### 7. **Detalhes Profissionais Extras:**
   - **SEO:** Aplique técnicas de SEO On-Page através de metatags apropriadas, Títulos (H1 dinâmicos e H2 nos serviços) integrando com o Metadata API se for o Next.js App Router.
   - **Micro-interações:** Garanta uma estética premium com efeitos sutis. Adicione `hover` effects, botões que reagem ao mouse (`transition-colors`, `hover:scale-105`), e scroling suave para tornar a experiência do usuário "viva" e não monótona.
   - **Renderização de Imagem Otimizada:** Utilize os recursos de Next Image (`next/image`) para todas as fotos PNG requeridas, obtendo compressão e renderização ideal.

### 8. **Conforto Visual e Acessibilidade:**
   - **Paleta de Cores:** Evite contrastes extremos (como preto puro `#000` sobre branco puro `#FFF`). Utilize tons de cinza azulado ou ardósia (`slate`, `zinc`, `neutral`) para textos e fundos, garantindo uma leitura descansada.
   - **Tipografia:** Priorize fontes sem serifa modernas (ex: Inter, Geist, Roboto). Mantenha um `line-height` (altura de linha) generoso (mínimo `leading-relaxed` ou `1.6`) e evite blocos de texto muito densos.
   - **Escalabilidade:** Garanta que o seletor de modo (item 2) alterne perfeitamente as variáveis de cor para manter o conforto em qualquer ambiente luminoso.

---

## Arquitetura de Código & Quality Standards

### 9. **Code Organization & ESLint Practices:**
   - Mantenha uma estrutura limpa de imports. Evite imports circulares e organize módulos em camadas lógicas.
   - Para blocos de `require()` condicionais (ex: imports dinamicamente carregados), use suppressão de ESLint **scoped** (prefira disable/enable em blocos ao invés de disable-next-line):
     ```typescript
     /* eslint-disable import/no-extraneous-dependencies */
     const conditionalModule = process.env.ENV_FLAG 
       ? require('./module-a')
       : require('./module-b')
     /* eslint-enable import/no-extraneous-dependencies */
     ```
   - **Regra Prática:** Se o `const` e a chamada `require()` estão em linhas diferentes, coloque o comentário ESLint diretamente acima da linha do `require()`, não acima do `const`.

### 10. **Type Declarations & Next.js App Router:**
   - Quando estender tipos para módulos compilados/vendorados (ex: React experimental features), declare tipos em `types/*.d.ts`:
     ```typescript
     // types/compiled.d.ts
     declare module 'react-server-dom-webpack/server' {
       export function renderToPipeableStream(
         element: React.ReactElement,
         clientModules: Record<string, any>,
         options?: any
       ): any
     }
     ```
   - Isto garante que o TypeScript reconheça APIs adicionais sem necessidade de casts explícitos (`as any`).

### 11. **Build & Compilation Patterns:**
   - Next.js App Router varre a compilação através do rspack. Certifique-se de que imports de bibliotecas externas (como React experimental) ocorrem em pontos de entrada claros (ex: `layout.tsx`, `page.tsx`, ou entry files específicos).
   - Modules compartilhados entre Client e Server devem ser explicitamente marcados com `'use client'` ou `'use server'` no topo quando necessário.
   - Se houver vendoring de dependências customizadas, verifique a configuração em `next.config.js` para `webpack` aliases corrigir paths.

### 12. **Runtime Guards & Environment Variables:**
   - Utilize `process.env` guards para ativar/desativar recursos experimentais:
     ```typescript
     export const useNewFeature = process.env.__NEXT_EXPERIMENTAL_FEATURE === 'true'
     ```
   - Documenta cada feature flag claramente em um arquivo `.env.example` ou `.env.local`.

### 13. **Debugging & Development Workflow:**
   - Se usar Turbopack (dev mode mais rápido em Next.js 14+), lembre-se que imports remapeados podem aparecer com nomes diferentes em stack traces (ex: `react-server-dom-webpack` pode aparecer como `react-server-dom-turbopack`).
   - Ao debugar, trace imports reais versus aliases configurados em `next.config.js` para evitar confusão.
   - Ative logs verbosos com `--debug` ao executar `next build` se precisar inspecionar a resolução de módulos.

---

## Exemplo de Implementação Referência (Next.js & Tailwind CSS)

```tsx
// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const currentYear = new Date().getFullYear();
  const projectName = "Nome do Projeto";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* 1. NAVBAR */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          
          {/* Esquerda: Favicon e Logotipo em PNG */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image src="/favicon.ico" alt="Ícone" fill className="object-contain" />
            </div>
            <div className="relative w-28 h-8 hidden sm:block">
              <Image src="/logotipo.png" alt="Logotipo do Projeto" fill className="object-contain" />
            </div>
          </div>

          {/* Centro: Nome do Projeto */}
          <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-xl text-gray-800 tracking-tight hidden md:block">
            {projectName}
          </div>

          {/* Direita: Seletor de Tema e Botão Entrar */}
          <div className="flex items-center gap-4">
            {/* Exemplo de Seletor de Tema (Ícone) */}
            <button 
              title="Alternar Tema"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            >
              {/* Ícone Sol/Lua/Sistema (Representação) */}
              🌓
            </button>

            <Link 
              href="/login" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition-all shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              Entrar
            </Link>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION Larga e Reativa */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center mt-16">
        <div className="absolute inset-0 -z-10">
          {/* Background PNG reativo cobrindo tudo */}
          <Image 
            src="/hero-background.png" 
            alt="Hero Background" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Overlay Escuro para possibilitar leitura de textos */}
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>
        
        <div className="text-center px-4 max-w-4xl mx-auto z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Descubra o potencial do seu negócio com a tecnologia certa
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Uma chamada atrativa com informações de alto impacto para prender o visitante na Landing Page.
          </p>
        </div>
      </section>

      {/* 3. PADRÃO APRESENTAÇÃO DE SERVIÇOS */}
      <main className="flex-grow bg-slate-50 dark:bg-slate-950 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Serviços Oferecidos</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">O que oferecemos para impulsionar seus resultados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Exemplo Serviço com Conforto Visual */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800 group">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {/* Ícone ilustrativo */}
                🚀
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Soluções Inovadoras</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Apresente o serviço ou a funcionalidade de forma clara, utilizando cards otimizados e minimalistas.
              </p>
            </div>
            
            {/* Repetir a estrutura para outros serviços... */}
          </div>
        </div>
      </main>

      {/* 4. CARROSSEL DE IMAGENS (MOVIMENTO INFINITO) */}
      <section className="w-full bg-slate-100 dark:bg-slate-900 overflow-hidden relative border-y border-slate-200 dark:border-slate-800">
        <div className="flex w-[200%] animate-marquee">
          {/* Loop de 10 imagens (5 originais + 5 duplicadas para efeito infinito) */}
          {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((idx, i) => (
            <div 
              key={`${idx}-${i}`} 
              className="w-full md:w-1/2 lg:w-1/3 flex-none relative h-[400px] sm:h-[450px]"
            >
              <Image 
                src={`/carousel-${idx}.jpg`} 
                alt={`Imagem Destaque ${idx}`} 
                fill 
                className="object-cover"
              />
              
              {/* Overlay Escuro Inferior + Texto da Descrição no Pé da Imagem */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-24 text-center">
                <p className="text-white text-base md:text-lg font-medium drop-shadow-md">
                  Breve descrição explicativa da imagem de destaque {idx}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Adicione este CSS globalmente ou via Tailwind config para o movimento infinito:
           @keyframes marquee {
             0% { transform: translateX(0); }
             100% { transform: translateX(-50%); }
           }
           .animate-marquee { animation: marquee 30s linear infinite; }
        */}
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-sm">
            &copy; {currentYear} {projectName}. Todos os direitos reservados.
          </div>
          
          <div className="text-sm">
            Desenvolvido por:{' '}
            <a 
              href="https://roldan-eng-software.github.io/roldan-page/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Roldan Eng Software
            </a>
          </div>
          
        </div>
      </footer>

    </div>
  );
}
```

---

## Relacionados & Referências Internas

- `responsivo` - Guia detalhado de responsividade cross-device
- `frontend-design` - Estética premium e micro-interações avançadas
- `product-self-knowledge` - Integração com APIs e SDKs do Next.js
- **Arquitetura Next.js:** [App Router Documentation](https://nextjs.org/docs/app)
- **Type Safety:** Sempre verifique `tsconfig.json` para `strict: true` e `skipLibCheck: false`