# Estado Técnico do Projeto - Cas Therm

Última atualização: 18 de maio de 2026, após revisão completa do código — Fases 6A e 6B concluídas.

## Stack

- Next.js 14.2.5 com App Router
- React 18.3, TypeScript 5.5 e Tailwind CSS
- `darkMode: 'class'`
- Dados estáticos em arquivos `.ts`
- Sem banco de dados, autenticação ou API routes
- Output estático (`output: 'export'`) — hospedagem via arquivos HTML gerados
- `lucide-react ^0.400.0` para ícones
- `prettier` + `prettier-plugin-tailwindcss` para formatação

## Estrutura principal

```txt
src/app/
  page.tsx                    Landing page
  layout.tsx                  Layout raiz, ThemeProvider, skip link e JSON-LD Organization
  catalogo/page.tsx           Listagem das categorias
  catalogo/[slug]/page.tsx    Produtos por categoria com filtro por subcategoria (client component)
  produto/[slug]/page.tsx     Página individual de produto
  not-found.tsx               Página 404
  sitemap.ts                  Sitemap dinâmico (home, catálogo, categorias, produtos)
  robots.ts                   robots.txt apontando para o sitemap

src/components/
  layout/
    Header.tsx                Navegação, busca client-side de produtos, dark mode, CTA WhatsApp, menu mobile com Esc
    Footer.tsx                Contato, categorias, navegação, Grupo Empresarial
    Hero.tsx                  Seção hero da home
    CategoriesSection.tsx     Seção de categorias na home
    FeaturedProductsSection.tsx  Produtos em destaque na home
    DifferentiatorsSection.tsx   Diferenciais da empresa
    SectorsSection.tsx        Setores atendidos
    ContactSection.tsx        Seção de contato
    BrandsStrip.tsx           Faixa de marcas parceiras (VICAL, KESTREL, FLUKE, DWYER, ITOWA, WINDSONIC), sem links externos
    Breadcrumb.tsx            Trilha de navegação para catálogo e produto
    ThemeProvider.tsx         Gerenciador de tema claro/escuro
    WelcomeModal.tsx          Modal por sessão — acessível, fecha com Esc
  catalogo/
    CategoryProductList.tsx   Listagem com filtro de subcategoria via query string (?subcategoria=)
  ui/
    Button.tsx, Badge.tsx, Logo.tsx, ProductCard.tsx
    CategoryCard.tsx, Section.tsx, SectionTitle.tsx
    Container.tsx, DarkModeToggle.tsx, Icon.tsx, index.ts

src/data/
  categories.ts               3 categorias, 11 subcategorias
  products.ts                 48 produtos com ficha técnica e imagem
  company.ts                  Dados centrais da empresa (fonte única de verdade)
  sectors.ts                  Setores atendidos
  differentiators.ts          Diferenciais

src/lib/
  seo.ts                      siteConfig e buildMetadata (título, description, OG, Twitter)
  structured-data.ts          getOrganizationJsonLd, getBreadcrumbJsonLd, getProductJsonLd
  whatsapp.ts                 buildWhatsAppUrl, buildQuoteMessage, DEFAULT_WHATSAPP_MESSAGE

src/types/
  index.ts                    Tipos: Product, Category, SubCategory, Sector, Differentiator,
                              CompanyInfo, Brand, VariantOption, ProductSpec, etc.

public/
  images/logo/                castherm.png, cas-service.png
  images/products/            48 imagens (jpg, png, webp, avif)
  images/og-image.png         Imagem Open Graph para previews sociais
  pdfs/produtos/              Fichas técnicas em PDF organizadas por categoria
  robots.txt                  Gerado pelo next build
```

## Estado por fase

- Fase 1: concluída — setup Next.js, TypeScript e Tailwind.
- Fase 2: concluída — design system base e componentes UI.
- Fase 2.5: concluída — dados centrais, dark mode, logos e guia visual.
- Fase 3: concluída — landing page.
- Fase 4: concluída — catálogo, categorias, breadcrumb e página de produto.
- Fase 5A: concluída — auditoria dos PDFs.
- Fase 5B: concluída — 48 produtos publicados com ficha técnica e imagem.
- Fase 6A: concluída — SEO técnico completo.
- Fase 6B: concluída — performance e acessibilidade implementadas.

## Dados atuais

- Categorias principais: Instrumentos de Pressão, Termômetros Bimetálicos, Segurança do Trabalho.
- Subcategorias: 8 em pressão (manômetro capsular, petroquímico, diferencial, padrão, pressostato, transmissor, bomba de calibração, medidor de contato elétrico) e 3 em segurança do trabalho (anemômetros, decibelímetros, luxímetros).
- Produtos: 48 itens em `src/data/products.ts` (49 entradas de slug contando a função `getProductBySlug`).
- Imagens: todos os 48 produtos possuem `image` em `public/images/products` (formatos: jpg, png, webp, avif).
- PDFs: fichas em `public/pdfs/produtos/` organizadas por subcategoria (Pressao, Termometro bimetalico, Segurança do Trabalho). Todos os 48 produtos têm datasheet.
- Marcas parceiras: VICAL, KESTREL, FLUKE, DWYER, ITOWA, WINDSONIC.
- WhatsApp: `(11) 98537-3838` (número interno: `5511985373838`).
- Endereço: Rua Zaquia, 162, Parque São George, Cotia - São Paulo - 06708-060.
- CNPJ: 18.625.711/0001-17.
- E-mails: vendas@, vendas1@, vendas2@, nfe@, contato@ (todos @castherm.com.br).
- Contatos: Wilson, Ligia e Yasmin (Atendimento).
- Grupo Empresarial: Cas Therm (revenda técnica) + Cas Service (assistência técnica e calibração).

## Componentes importantes

- `Header.tsx`: navegação, busca client-side de produtos com autocomplete, dark mode, CTA WhatsApp e menu mobile com fechamento por Esc.
- `Footer.tsx`: contato, categorias, navegação, Grupo Empresarial e crédito do desenvolvedor.
- `BrandsStrip.tsx`: faixa horizontal de marcas com hover animado (grayscale → cor), sem redirecionamento externo.
- `ProductCard.tsx`: card de produto com imagem `next/image`, link de detalhes e CTA WhatsApp.
- `CategoryProductList.tsx`: componente client-side com filtro de subcategoria via `?subcategoria=` na URL (popstate sincronizado).
- `Breadcrumb.tsx`: trilha de navegação para catálogo e produto.
- `WelcomeModal.tsx`: modal acessível (labels, aria-describedby, Esc).
- `Logo.tsx`: logos Cas Therm e Cas Service.
- `ThemeProvider.tsx`: gerencia tema + persiste em localStorage (`castherm-theme`).
- `whatsapp.ts`: helper central para URLs wa.me com mensagens pré-preenchidas.
- `structured-data.ts`: JSON-LD para Organization, BreadcrumbList e Product.

## SEO — estado completo (Fase 6A concluída)

- `src/lib/seo.ts` exporta `siteConfig` e `buildMetadata` com suporte a OG e Twitter Card.
- `layout.tsx` inclui metadata base, viewport com themeColor, script anti-FOUC e JSON-LD Organization.
- Páginas de catálogo e produto geram metadata dinâmica via `buildMetadata`.
- Todas as páginas possuem `canonicals` via `alternates.canonical`.
- JSON-LD de `BreadcrumbList` em catálogo, categoria e produto.
- JSON-LD de `Product` (com brand, model, offers em BRL) em cada página de produto.
- `sitemap.ts` gera URLs estáticas: home, catálogo, 3 categorias e 48 produtos.
- `robots.ts` aponta para o sitemap com Allow geral.
- `public/images/og-image.png` (1200×630) para previews sociais.
- Keywords: instrumentos de medição, anemômetro, decibelímetro, luxímetro, manômetro, termômetro bimetálico, segurança do trabalho, B2B, Cas Therm.

## Performance e acessibilidade — estado completo (Fase 6B concluída)

- `next/image` em todos os cards de produto e na imagem principal da página de produto.
- `output: 'export'` com `images.unoptimized: true` — site totalmente estático.
- Script anti-FOUC inline no `<head>` para dark mode sem flash.
- Skip link acessível (`Ir para o conteúdo principal`) em todas as páginas.
- `<main id="main-content">` em todas as páginas.
- Links do header usam `/#ancora` (funcionam fora da home também).
- Busca no header indexa os dados estáticos de `products.ts` e permite acessar páginas de produto sem API.
- Menu mobile fecha com Esc.
- `WelcomeModal` com `aria-labelledby`, `aria-describedby` e Esc.
- Pendente: validação visual/navegação por teclado em browser real.
- Pendente: auditoria Lighthouse/Core Web Vitals.

## Configuração do Next.js (`next.config.mjs`)

- `output: 'export'` — geração de site estático.
- `trailingSlash: true` — URLs terminam em `/`.
- `reactStrictMode: true`.
- `distDir`: `.next-dev` em desenvolvimento, `.next` em produção.
- `images.unoptimized: true` (necessário para export estático).
- `compress: true`, `poweredByHeader: false`.

## Pontos de atenção

- Evitar rodar `npm run build` dentro do agente quando possível; no Windows ele já causou travas/cache quebrado. Preferir pedir ao Cezar para rodar no terminal externo.
- `PROJECT_STATE.md` é o documento de continuidade. Manter atualizado ao fechar fases grandes.
- Não criar novos produtos sem ficha técnica validada.
- Não alterar estrutura dos dados de produto sem necessidade.
- A validação técnica dos PDFs foi aplicada em `products.ts`; manter novas alterações de ficha sempre baseadas nos PDFs.
- `company.ts` é a fonte única de verdade para dados da empresa — nunca hardcodar telefone, e-mail ou endereço nos componentes.
- Redes sociais (Instagram, LinkedIn, Facebook) estão como placeholder em `company.ts` — preencher quando disponíveis.

## Próximos passos possíveis (Fase 7+)

- Validação visual e navegação por teclado em browser real.
- Auditoria Lighthouse / Core Web Vitals.
- Preenchimento das redes sociais em `company.ts`.
- Logo images reais para a `BrandsStrip` (hoje usa texto estilizado).
- Possível adição de página de contato dedicada ou formulário.
- Deploy e configuração de domínio `castherm.com.br`.
