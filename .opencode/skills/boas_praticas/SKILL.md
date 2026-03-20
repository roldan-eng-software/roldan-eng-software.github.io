---
name: "boas_praticas"
description: "Boas práticas de desenvolvimento e arquitetura para projetos em React/Next.js, TypeScript e Prisma/Neon"
---

# Skill: Boas Práticas de Desenvolvimento (React/Next.js + TypeScript)

Esta skill define as regras de ouro, padrões de arquitetura e boas práticas que devem ser rigorosamente seguidos ao desenvolver aplicações modernas, com foco especial em ecossistemas baseados em **React**, **Next.js (App Router)**, **TypeScript**, **TailwindCSS** e **Prisma/Neon**.

## 1. Arquitetura e Organização do Projeto

A organização do código deve ser previsível, modular e escalável. Sugerimos a utilização da pasta `src/` para separar o código da aplicação de configurações na raiz.

- **`src/app/`**: Rotas, layouts e páginas (App Router do Next.js).
- **`src/components/`**: Componentes reutilizáveis da interface.
  - Subdividir em `ui/` (componentes genéricos como botões, inputs - ex: shadcn/ui) e pastas específicas de contexto (ex: `dashboard/`, `auth/`).
- **`src/lib/`**: Funções utilitárias, instâncias de clientes (ex: `prisma.ts`), e lógicas globais compartilhadas.
- **`src/hooks/`**: Custom hooks do React (`use-*.ts`).
- **`src/types/` ou `src/interfaces/`**: Definições globais de tipos do TypeScript.
- **`src/actions/`**: Server Actions (Next.js) para mutações de dados e regras de negócio.

> **Regra de Ouro**: Mantenha as páginas (arquivos `page.tsx`) o mais "limpas" possível, delegando a UI e a lógica para componentes e Server Actions.

## 2. Paradigmas do Next.js e React

- **Server Components (RSC) vs. Client Components**:
  - Por padrão, todos os componentes devem ser **Server Components** para melhor performance e SEO.
  - Utilize a diretiva `"use client"` **apenas quando estritamente necessário** (ex: ao usar hooks como `useState`, `useEffect`, ou ao lidar com interações diretas do usuário/DOM).
  - Coloque o `"use client"` o mais baixo possível na árvore de componentes.

- **Data Fetching e Mutações**:
  - Utilize **Server Actions** em vez de Route Handlers (`api/`) para mutações na maioria dos casos.
  - Realize a busca de dados (queries) diretamente nos Server Components (ex: usando `await prisma.user.findMany()`).
  - Para validação de dados tanto no cliente quanto no servidor, utilize bibliotecas como **Zod**.

## 3. Tipagem e Qualidade de Código (TypeScript)

- **Tipagem Estrita**: Escreva código TypeScript em _strict mode_. Evite usar `any` a todo custo. Utilize `unknown` quando o tipo não for previsível ou elabore as interfaces corretamente.
- **Nomenclatura Limpa**:
  - **Componentes**: PascalCase (`Button.tsx`, `UserProfile.tsx`).
  - **Funções e Variáveis**: camelCase (`fetchUserData`, `isLoading`).
  - **Constantes**: UPPER_SNAKE_CASE (`MAX_PAGINATION_ITEMS`).
  - **Tipos e Interfaces**: PascalCase (`UserProps`, `ApiError`).
- **Pequenas Funções**: Cada função deve ter uma única responsabilidade. Se a função for muito longa, refatore em funções menores ou componentes menores.
- **Early Returns**: Utilize o padrão de retornos antecipados para reduzir a aninhamento de ifs (ex: `if (!user) return null;`).

## 4. UI/UX e Estilização (TailwindCSS)

- **Aparência Premium**: Crie uma interface que cause um impacto visual ("Wow factor"). Use designs responsivos que abracem as tendências modernas (Glassmorphism, Dark Modes polidos, cores vibrantes com harmonia HSL).
- **Consistência de Classes**: Utilize o TailwindCSS (ou ferramentas agregadoras como `cn` com `clsx` e `tailwind-merge`) de forma semântica.
- **Micro-interações e Animações**: Adicione estados de pseudo-classes apropriados (`hover:`, `focus:`, `active:`) e transições suaves (`transition-all duration-300`).
- **Acessibilidade (a11y)**:
  - Todas as imagens devem ter o atributo `alt`.
  - Formulários devem possuir labels interligados aos inputs (`htmlFor` / `id`).
  - Navegação via teclado (Tab/Shift+Tab) e uso de `aria-labels` onde necessário devem ser suportados.

## 5. Integração com Banco de Dados (Prisma + Neon)

- **Esquema Bem Definido**: O arquivo `schema.prisma` é a principal fonte da verdade. Descreva todos os modelos claramente e adicione índices otimizados para colunas usadas frequentemente para consulta/filtros.
- **Singleton Pattern no Prisma**: Para projetos Next.js, utilize o padrão Singleton ao inicializar o `PrismaClient` (evita esgotamento de conexões devido a hot-reloads em dev).
- **Consultas Otimizadas**: Utilize `.select` no Prisma apenas nos campos que você efetivamente precisa (redução de overhead de processamento/dados).
- **Migrações e Deploy**: Jamais mexa diretamente na tabela no ambiente de produção; utilize apenas o `npx prisma migrate deploy` para atualizar os esquemas. Teste o reflexo de tudo no ambiente de stage antes.

## 6. Performance e SEO

- **Otimização de Mídias**: Sempre utilize a tag `<Image />` do `next/image` no lugar de `<img>` padrão, e certifique-se de configurar e padronizar tamanhos e qualidades.
- **Lazy Loading**: Para de bibliotecas ou componentes pesados que não são exibidos imediatamente, utilize o `.dynamic()` import do Next.js.
- **Layout Shift**: Defina dimensões estritas ou aspect ratios para elementos dinâmicos, para eliminar Core Web Vitals problemas (CLS - Cumulative Layout Shift).
- **SEO por Página**: Adicione adequadamente metadados por página via a constante `metadata` do App Router (`title`, `description`, `openGraph`, `canonical params`).

## 7. Segurança

- **Autenticação Segura**: Gerencie sessões de forma estrita de preferência utilizando NextAuth/Auth.js e garanta proteção e JWT base.
- **Proteção de Dados**:
  - Evite vazar credenciais/strings sigilosas para o navegador. Assegure que as chaves fiquem expostas (`NEXT_PUBLIC_`) apenas quando for estritamente útil no front-end.
  - Proteja Server Actions que realizam modificações em bancos de dados inspecionando o "papel do usuário" validando sessões de JWT/Tokens de imediato, em seu princípio.
- **Prevenção contra Vulnerabilidades**: Ao interagir com APIs e formulários, sane HTML, restrinja tipos de arquivos carregáveis e parametrize queries (o que já é o padrão ao usar o Prisma ORM, garantindo proteção contra SQL Injections).

## 8. Tratamento de Erros e Documentação (JSDoc)

- Envolva blocos falhos em blocos `try/catch` para mutações, e renderize os feedbacks corretamente ao usuário como toasts e blocos vermelhos indicativos; NUNCA deixe a App quebrar sem aviso.
- Use do Boundary Concepts no Next (`error.tsx`) para isolar visualmente o erro a uma porção da página.
- Documente funções complexas ou utilitários via `JSDoc` (`/** ... */`) para facilitar o entendimento de parâmetros e retorno aos moldes das intellisenses das IDEs.
