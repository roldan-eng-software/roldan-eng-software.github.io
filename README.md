# Landing Page - Roldan Eng Software

Landing page profissional para serviços de desenvolvimento full-stack e automação Python.

## Stack

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações
- **DaisyUI** - Componentes UI

## Deploy no GitHub Pages

### Deploy Automático (Recomendado)

1. Vá em **Settings > Pages** do repositório
2. Em **Source**, selecione **GitHub Actions**
3. Faça um push na branch `main`
4. O deploy será feito automaticamente

### Deploy Manual

```bash
npm install
npm run build
```

Os arquivos estáticos serão gerados na pasta `out/`.

## Scripts

| Comando              | Descrição                          |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Inicia servidor de desenvolvimento |
| `npm run build`      | Gera build de produção             |
| `npm run lint`       | Executa ESLint                     |
| `npm run type-check` | Executa verificação de tipos       |

## Estrutura

```
├── app/                    # Páginas Next.js
├── components/             # Componentes React
│   ├── animations/         # Hooks de animação
│   └── *.tsx              # Componentes
├── lib/                    # Utilitários e constantes
└── public/                 # Arquivos estáticos
```

## Licença

MIT
