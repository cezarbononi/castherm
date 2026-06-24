# Roadmap — Site Cas Therm

Documento de planejamento das fases do projeto. Atualizado após a conclusão da **Fase 3**.

---

## Status atual

| Fase         | Descrição                                                                                                  | Status       |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ------------ |
| **Fase 1**   | Setup do projeto (Next.js 14, Tailwind, TypeScript)                                                        | ✅ Concluída |
| **Fase 2**   | Design System (componentes UI base, paleta, tipografia)                                                    | ✅ Concluída |
| **Fase 2.5** | Fundação de dados (types, categorias, empresa, logos, dark mode, brand guide)                              | ✅ Concluída |
| **Fase 3**   | Landing page completa (Header, Hero, Marcas, Categorias, Produtos, Setores, Diferenciais, Contato, Footer) | ✅ Concluída |
| **Fase 4**   | Páginas do catálogo (listagem por categoria + página de produto)                                           | 🔜 Próxima   |
| **Fase 5**   | Extração de dados dos PDFs (catálogo real com ~48 modelos)                                                 | 🔜 Próxima   |
| **Fase 6**   | SEO, performance e acessibilidade                                                                          | 🔜 Próxima   |
| **Fase 7**   | Ajustes de conteúdo final (imagens, copy, dados reais)                                                     | 🔜 Próxima   |
| **Fase 8**   | Deploy e configuração de domínio                                                                           | 🔜 Próxima   |

---

## Fase 4 — Páginas do Catálogo

**Objetivo:** Criar as páginas de navegação pelo catálogo de produtos.

### 4.1 — Página de categoria (`/catalogo/[slug]`)

- Listar todos os produtos de uma categoria
- Exibir subcategorias como filtros laterais/tabs (ex: Pressão → Manômetro Diferencial, Pressostato, etc.)
- Grid responsivo de `ProductCard`
- Breadcrumb de navegação (Início → Categorias → Instrumentos de Pressão)
- Título, descrição e ícone da categoria no topo
- CTA fixo de WhatsApp no canto (floating button)

### 4.2 — Página de produto (`/produto/[slug]`)

- Imagem principal + galeria (ou placeholder elegante enquanto sem imagem)
- Nome, marca, modelo e categoria/subcategoria
- Descrição completa
- Tabela de especificações técnicas (`ProductSpec[]`)
- Seletor visual de variantes (`VariantOption[]`) — informativo, não e-commerce
- Botão de download do datasheet (PDF) quando disponível
- CTA de orçamento via WhatsApp com mensagem pré-preenchida (produto + variante selecionada)
- Breadcrumb de navegação
- Seção "Produtos relacionados" (mesma subcategoria)

### 4.3 — Página de catálogo geral (`/catalogo`)

- Listagem das 3 categorias principais com contagem de produtos
- Subcategorias em destaque
- Link para cada categoria

**Arquivos a criar:**

```
src/app/catalogo/page.tsx
src/app/catalogo/[slug]/page.tsx
src/app/produto/[slug]/page.tsx
src/components/layout/Breadcrumb.tsx
src/components/ui/VariantSelector.tsx
src/components/ui/ProductSpecs.tsx
src/components/ui/FloatingWhatsApp.tsx
```

---

## Fase 5 — Extração de Dados dos PDFs

**Objetivo:** Substituir os produtos placeholder pelos dados reais extraídos dos ~48 PDFs do catálogo.

### O que será feito

- Script Python/Node para extração de texto dos PDFs (usando `pdf-parse` ou `PyMuPDF`)
- Mapear cada PDF para o schema `Product` (nome, marca, modelo, specs, variantes)
- Usar os arquivos com sufixo **" Ok"** — são as versões finais aprovadas
- Extrair os arquivos `.docx` de "DESCRIÇÃO RESUMIDA" para o campo `shortDescription` e `fullDescription`
- Gerar o arquivo `src/data/products.ts` final com todos os produtos reais

### Produtos identificados por categoria

**Instrumentos de Pressão (~20 modelos)**

- Manômetros capsulares, petroquímicos, diferenciais (Magnehelic 2000), padrão
- Pressostatos
- Transmissores de pressão
- Bombas de calibração FLUKE
- Medidores de contato elétrico

**Termômetros Bimetálicos (~5 modelos)**

- Série VTS VICAL (variantes por diâmetro, haste, faixa, conexão)

**Segurança do Trabalho (~23 modelos)**

- Anemômetros: Kestrel 1000, 3000; ITOWA; AN1; WINDSONIC SDI-12
- Decibelímetros: HD-800, datalogger SDDD
- Luxímetros: HD-400, HD-450

**Arquivos a criar:**

```
scripts/extract-products.py   (extração dos PDFs)
scripts/generate-products.ts  (geração do products.ts)
```

### Informação pendente do cliente

> ⚠️ **Perguntar ao cliente:**
>
> - Há imagens dos produtos disponíveis? (fotos, renders, imagens do catálogo)
> - Se não houver, usar placeholder técnico elegante (ícone + silhueta do produto)
> - Número de WhatsApp real para substituir o placeholder `5511999999999`
> - Endereço completo (se quiser exibir no site)
> - Redes sociais (Instagram, LinkedIn, Facebook) — se existirem

---

## Fase 6 — SEO, Performance e Acessibilidade

**Objetivo:** Garantir que o site seja encontrado no Google e carregue rápido.

### SEO

- Metadata dinâmica por página (título, descrição, OG tags) — base já existe em `src/lib/seo.ts`
- `sitemap.xml` gerado automaticamente pelo Next.js (listar todas as páginas de produto e categoria)
- `robots.txt` configurado
- Dados estruturados JSON-LD:
  - `Organization` (empresa, contato, endereço)
  - `Product` por página de produto (nome, marca, descrição, imagem)
  - `BreadcrumbList` nas páginas de catálogo
- Verificar que todas as imagens têm `alt` text descritivo

### Performance

- `next/image` com `priority` no Hero e logos acima da dobra (já implementado)
- Verificar Core Web Vitals (LCP, CLS, FID) com Lighthouse
- Lazy load dos `ProductCard` abaixo da dobra
- Fonts otimizadas via `next/font` (já implementado com Inter)

### Acessibilidade

- Verificar contraste de cores (já segue WCAG AA na paleta)
- `aria-label` nos botões de ícone (já implementado no Header e DarkModeToggle)
- Skip link "Ir para conteúdo principal"
- Focus trap no menu mobile
- Testar com leitor de tela (NVDA/VoiceOver)

---

## Fase 7 — Ajustes de Conteúdo Final

**Objetivo:** Substituir todos os dados placeholder pelos dados reais do cliente.

### Checklist de dados a confirmar com o cliente

| Campo                                    | Status      | Arquivo                       |
| ---------------------------------------- | ----------- | ----------------------------- |
| Número de WhatsApp real                  | ⚠️ Pendente | `src/data/company.ts`         |
| Endereço completo                        | ⚠️ Pendente | `src/data/company.ts`         |
| Redes sociais (Instagram, LinkedIn)      | ⚠️ Pendente | `src/data/company.ts`         |
| Imagens dos produtos                     | ⚠️ Pendente | `public/images/products/`     |
| Imagem hero (foto industrial real)       | ⚠️ Pendente | `public/images/hero.jpg`      |
| Logos dos fabricantes (para BrandsStrip) | ⚠️ Pendente | `public/images/brands/`       |
| Horário de atendimento exato             | ⚠️ Pendente | `ContactSection.tsx`          |
| Copy de diferenciais revisado            | ⚠️ Pendente | `src/data/differentiators.ts` |
| Setores atendidos (confirmar lista)      | ⚠️ Pendente | `src/data/sectors.ts`         |

### Melhorias de conteúdo

- Substituir o visual do Hero por imagem fotográfica real de instrumentos (ou ilustração profissional)
- Logos dos fabricantes em formato SVG/PNG para a `BrandsStrip` (substituir texto por imagem)
- Página "Sobre nós" ou seção na landing sobre a história da Cas Therm (opcional)
- Política de privacidade / termos de uso (se necessário para LGPD)

---

## Fase 8 — Deploy e Domínio

**Objetivo:** Colocar o site no ar em `castherm.com.br`.

### Opções de hospedagem

| Opção                    | Custo estimado           | Vantagens                                         |
| ------------------------ | ------------------------ | ------------------------------------------------- |
| **Vercel** (recomendado) | Gratuito (plano Hobby)   | Deploy automático, CDN global, preview por branch |
| Netlify                  | Gratuito (plano Starter) | Similar ao Vercel                                 |
| VPS (DigitalOcean, etc.) | ~$6/mês                  | Mais controle, mas mais configuração              |

**Recomendação: Vercel** — integração nativa com Next.js, deploy em 2 minutos, HTTPS automático.

### Checklist de deploy

- [ ] Criar conta na Vercel e conectar ao repositório GitHub
- [ ] Configurar variáveis de ambiente (se houver)
- [ ] Apontar domínio `castherm.com.br` para os servidores da Vercel (DNS)
- [ ] Verificar HTTPS e www/não-www redirect
- [ ] Testar em dispositivos reais (iPhone, Android, desktop)
- [ ] Verificar velocidade com [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Configurar Google Analytics ou outra ferramenta de analytics (opcional)
- [ ] Submeter sitemap no Google Search Console

---

## Melhorias futuras (pós-lançamento)

Itens que podem ser implementados após o site estar no ar, conforme demanda:

- **Busca de produtos** — campo de busca por nome, marca ou modelo
- **Filtro por variante** — filtrar produtos por faixa de medição, material, conexão
- **Formulário de contato** — alternativa ao WhatsApp para quem prefere e-mail (usar Resend ou Formspree)
- **Página de novidades** — blog ou seção de notícias sobre novos produtos
- **Chat ao vivo** — integração com Chatwoot, Crisp ou similar
- **Painel administrativo** — interface para o cliente atualizar produtos sem editar código (Sanity CMS, Contentful, ou Notion como CMS)
- **Comparador de produtos** — comparar specs de dois instrumentos lado a lado
- **Certificações/normas** — seção indicando quais NRs / normas técnicas cada produto atende

---

_Última atualização: Maio 2026 — após conclusão da Fase 3_
