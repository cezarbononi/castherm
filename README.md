# Cas Therm — Site Institucional e Catálogo

Site institucional e catálogo da **Cas Therm — Comércio e Serviços de Instrumentos de Medição e Automatização Ltda.**

> Domínio: [www.castherm.com.br](https://www.castherm.com.br)

## Sobre o projeto

Landing page e catálogo B2B focado em **geração de contatos e pedidos de orçamento** (não é e-commerce). Categorias atendidas: Anemômetros, Decibelímetros, Luxímetros, Instrumentos de Pressão, Termômetros Bimetálicos e Segurança do Trabalho.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ícones)

## Pré-requisitos

- **Node.js** 18.17 ou superior
- **npm** 9+ (ou pnpm/yarn, se preferir)

## Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria o build de produção |
| `npm start` | Inicia o servidor de produção (após build) |
| `npm run lint` | Roda o ESLint |
| `npm run format` | Formata o código com Prettier |

## Estrutura de pastas

```
src/
├── app/                Páginas (App Router do Next.js)
│   ├── layout.tsx      Layout raiz (Header, Footer, metadata)
│   ├── page.tsx        Landing page
│   ├── catalogo/       Catálogo (geral e por categoria)
│   ├── produto/[slug]/ Página individual do produto
│   ├── contato/        Página de contato
│   └── sobre/          Sobre a Cas Therm
│
├── components/         Componentes React
│   ├── layout/         Header, Footer, WhatsAppFloat
│   ├── sections/       Seções da landing (Hero, Categorias, etc.)
│   └── ui/             Botões, cards, containers reutilizáveis
│
├── data/               Dados centralizados (FONTE ÚNICA DE VERDADE)
│   ├── company.ts      Dados da empresa (contato, CNPJ, endereço)
│   ├── categories.ts   Categorias de produtos
│   ├── products.ts     Produtos (placeholder até extração dos PDFs)
│   ├── sectors.ts      Setores atendidos
│   └── differentiators.ts  Diferenciais
│
├── lib/                Funções utilitárias
│   ├── whatsapp.ts     Geração de links wa.me
│   └── seo.ts          Helpers de metadata
│
└── types/              Tipos TypeScript
    └── index.ts
```

## Como editar dados (sem mexer em código de UI)

### Alterar telefone, e-mail, endereço, CNPJ

Edite **apenas** `src/data/company.ts`. Os dados serão refletidos automaticamente em todo o site (header, footer, formulário, WhatsApp, etc.).

### Adicionar ou editar um produto

Edite `src/data/products.ts`, seguindo o tipo `Product` definido em `src/types/index.ts`.

Exemplo mínimo:

```ts
{
  slug: 'anemometro-modelo-x',     // único, lowercase, sem acentos
  name: 'Anemômetro Modelo X',
  brand: 'Marca Real do PDF',
  model: 'Modelo Real do PDF',
  category: 'anemometros',         // deve existir em categories.ts
  shortDescription: 'Descrição curta...',
  featured: true,                  // aparece na home
}
```

> ⚠️ **Não inventar especificações técnicas.** Quando uma informação não estiver disponível no PDF, omita o campo ou use `"informação não identificada no documento"`.

### Adicionar categorias, setores ou diferenciais

Edite os respectivos arquivos em `src/data/`.

## Publicação na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em **New Project**.
3. Importe o repositório.
4. Mantenha as configurações padrão (a Vercel detecta Next.js automaticamente).
5. Clique em **Deploy**.
6. Após o primeiro deploy, conecte o domínio `castherm.com.br` em **Settings → Domains**.

## Roadmap de fases

- ✅ **Fase 1** — Estrutura do projeto
- ⬜ **Fase 2** — Identidade visual e componentes base
- ⬜ **Fase 3** — Landing page completa
- ⬜ **Fase 4** — Organização dos PDFs (inventário)
- ⬜ **Fase 5** — Extração estruturada dos produtos dos PDFs
- ⬜ **Fase 6** — Criação do catálogo navegável
- ⬜ **Fase 7** — Integração dos produtos reais no site
- ⬜ **Fase 8** — SEO, acessibilidade, responsividade e publicação

## Placeholders importantes (revisar antes de publicar)

Os campos abaixo estão com valores temporários em `src/data/company.ts` e devem ser substituídos:

- `whatsapp.number` → número real do WhatsApp (formato `5511999999999`)
- `whatsapp.display` → versão formatada `(XX) XXXXX-XXXX`
- `address.full` → endereço completo
- `social` → links das redes sociais (se houver)

---

© Cas Therm — Todos os direitos reservados.
