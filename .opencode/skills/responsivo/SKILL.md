---
title: "responsivo"
description: "Sempre que tiver alguma mudança de desenvolvimento ou de design, você deve verificar se a aplicação está responsiva. Se não estiver, você deve fazer as mudanças necessárias para que a interface adapte-se perfeitamente para telas de desktop, tablets e celulares."
---

## Regras
Quando atuar em tarefas de frontend ou design, adote as seguintes práticas de design responsivo:

1. **Breakpoints Padrões:**
   - **Celular (Mobile):** `xs` e `sm` (geralmente até 640px ou 768px).
   - **Tablet:** `md` ou `lg` (geralmente entre 768px e 1024px).
   - **Desktop:** `xl` ou `2xl` (geralmente acima de 1024px).
   - Garanta que a interface se adapte ou altere seu layout nesses pontos críticos.

2. **Sistemas de Layout Flexíveis:**
   - Utilize **Flexbox** (`display: flex`) e **CSS Grid** (`display: grid`) para estruturar componentes que devem se alinhar, redimensionar ou pular linhas em diferentes tamanhos de tela.
   - Evite fixar larguras absolutas (`width: 500px`). Em vez disso, prefira medidas fluidas como `max-width`, porcentagens (`%`), `vw` ou `rem`.

3. **Imagens e Mídias:**
   - Toda imagem, vídeo ou iframe deve ter um tamanho dinâmico. Utilize como base: `max-width: 100%; height: auto;` para garantir que o conteúdo não estoure o tamanho do seu contêiner.

4. **Interação e Toque (Touch):**
   - Os alvos de clique (botões, links) no dispositivo móvel precisam ter tamanho suficiente (ex: mínimo de 44x44 pixels) e espaçamento adequado para evitar toques acidentais em elementos vizinhos.
   - Modifique hovers (`:hover`) informativos ou dependentes para estados focados (`:focus` ou `:active`) correspondentes, visto que `:hover` não existe nativamente e consistentemente em dispositivos touchscreen.

5. **Scroll Horizontal:**
   - É estritamente evitado que a tela inteira tenha "scroll horizontal". Se aparecer uma barra de rolagem embaixo da página no formato móvel, significa erro de layout. Tudo deve se encaixar horizontalmente perfeitamente ou possuir rolagem horizontal controlada num elemento contêiner específico (como em carrosséis e tabelas).

6. **Tipografia Responsiva:**
   - Reduza tamanhos de títulos (`h1`, `h2`) e textos de conteúdo no celular, ou utilize recursos como `clamp()` (ex.: `font-size: clamp(1rem, 2vw, 1.5rem);`) para o crescimento fluido do texto de acordo com tamanho da viewport.

## Exemplos

### Exemplo: CSS Vanilla (Media Queries)

```css
/* Layout Padrão em Mobile (Mobile-first) */
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

/* Tablet (acima de 768px) */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
  }
}

/* Desktop (acima de 1024px) */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
}
```

### Exemplo: Tailwind CSS

```html
<!-- O layout é uma coluna (mobile), no tablet passa para grid de 2 colunas e no desktop 4 colunas -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  <div class="bg-blue-500 text-white p-6 rounded-lg text-center">
    <!-- Texto menor no mobile, maior a partir do tablet -->
    <h2 class="text-xl md:text-2xl font-bold">Título</h2>
    <p class="mt-2 text-sm md:text-base">Descrição responsiva.</p>
  </div>
  <!-- Outros itens iterativos (componentes)... -->
</div>
```

## Diretiva de Verificação
- Sempre que houver uma alteração visual e adição de novos componentes na interface, repasse mentalmente e teste o impacto e comportamento nos principais viewports (mobile, tablet, desktop).
- Em componentes complexos como tabelas detalhadas ou múltiplas abas, preveja como e de que forma o elemento será adaptado no celular (ex: transformando as colunas de uma tabela num clássico formato de "cards" ou usando scroll horizontal contido limitando `overflow-x: auto;` exclusivo na tabela).