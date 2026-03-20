---
name: "documentacao"
description: "Orientações e padrões para a documentação exata, simples e objetiva do projeto e dos códigos."
---

# Skill: Documentação (Documentação do Projeto)

Esta skill estabelece diretrizes para a criação e manutenção da documentação do projeto e comentários no código-fonte. O objetivo é manter todas as informações sobre o projeto exatas, simples e totalmente objetivas.

## 1. Diretrizes para o `README.md` do Projeto

O arquivo `README.md` é a principal porta de entrada do projeto e deve, obrigatoriamente, conter instruções claras e objetivas cobrindo os seguintes pontos:

### O que é o projeto (Visão Geral)
- Uma descrição direta do objetivo principal do software.
- Para quem ele é feito e que problemas resolve.
- Principais funcionalidades que ele ofece.

### Como Instalar
- Lista exata dos pré-requisitos exigidos (versão de Node.js, banco de dados, extensões, etc.).
- Passo a passo de comandos no terminal para baixar e instalar as dependências.
- Exemplo prático, livre de ambiguidades:
  ```bash
  git clone <url-do-repositorio>
  cd <nome-da-pasta>
  npm install
  ```

### Como Configurar
- Explique claramente como configurar o ambiente para o projeto rodar.
- Especifique como as variáveis de ambiente devem ser preenchidas, baseando-se no arquivo `.env.example`.
- Detalhe configurações adicionais de banco de dados (ex: migrações), serviços de terceiros e fluxos de autenticação.

### Como Manter o Projeto Seguro
- Orientações de segurança abrangendo o uso e armazenamento de chaves e dados sensíveis (nunca no controle de versão).
- Manutenção de versões de dependências (como verificar e auditar pacotes via `npm audit` ou similar).
- Cuidados na implantação e configurações corretas de CORS e políticas de segurança gerais.

## 2. Diretrizes de Documentação no Código (Comentários)

O seu código deve ser o mais autoexplicativo possível, limitando a documentação adicional ao estritamente necessário:

- **Comentários nos Blocos Principais:** Comente de forma objetiva apenas os trechos de código cruciais, as estruturas principais e regras de negócio complexas.
- **Explique o 'Por Que', não o 'Como':** O comentário deve justificar a razão daquela lógica existir. O código deve ser claro o bastante para explicar o que está de fato sendo executado.
- **Evite Redundâncias:** Não escreva comentários óbvios para variáveis de nomes claros ou lógicas puramente sintáticas e triviais.

### 🔴 O que NÃO fazer (Comentário inútil/óbvio)
```typescript
// Soma os totais do carrinho
const total = calculateCartSum(cart);
```

### 🟢 O que FAZER (Explica a regra de negócio/Por que)
```typescript
// Aplicando desconto progressivo caso seja final do mês e cliente VIP
// Regra requisitada no card XYZ
const finalPrice = canApplyVipDiscount(user, date) 
  ? applyProgressiveDiscount(cart, 15) 
  : calculateCartSum(cart);
```
