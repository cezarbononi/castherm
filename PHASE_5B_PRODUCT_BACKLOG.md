# Fase 5B - Backlog de produtos faltantes

Data: 2026-05-15

## Objetivo

Este documento guia a continuação da Fase 5B: adicionar ao catálogo todos os produtos que já possuem ficha técnica em PDF.

Nenhuma alteração de produto foi feita durante esta análise. Este arquivo é apenas um mapa de execução.

## Resumo Executivo

- PDFs físicos em `assets/produtos`: 58
- Duplicatas base de SST já cobertas por versões `Ok`: 10
- Produtos/modelos reais estimados: 48
- Produtos publicados hoje em `src/data/products.ts`: 13
- Produtos publicados sem ficha técnica: 0
- Produtos/modelos ainda faltantes: 35

Regra vigente do catálogo:

- Publicar apenas produtos com ficha técnica (`datasheet`) existente.
- Para Segurança do Trabalho, preferir sempre a versão `Ok`.
- Para Pressão e Termômetros, usar os PDFs disponíveis, mesmo sem sufixo `Ok`, porque parecem ser as únicas versões finais disponíveis nessas linhas.

## Produtos já publicados

### Segurança do Trabalho - Anemômetros

- `anemometro-kestrel-3000`
  - PDF: `ANEMOMETRO DIGITAL KESTREL 3000 Ok.pdf`
- `anemometro-kestrel-1000`
  - PDF: `ANEMOMETRO KESTREL1000 Ok.pdf`
- `anemometro-estacionario-an1`
  - PDF: `ANEMOMETRO ESTACIONÁRIO AN1 Ok.pdf`
- `anemometro-estacionario-an2`
  - PDF: `ANEMOMETRO ESTACIONÁRIO PARA GRUA GUINDASTES AN2 Ok.pdf`
- `anemometro-estacionario-profissional-8368`
  - PDF: `ANEMOMETRO ESTACIONÁRIO PROFISSIONAL 8363-3xx Ok.pdf`
- `anemometro-eletronico-itowa`
  - PDF: `ANEMOMETRO ELETRONICO ITOWA 400 Ok.pdf`
- `anemometro-windsonic-sdi-12`
  - PDF: `ANEMOMETRO WINDSONIC SDI-12 Ok.pdf`

### Segurança do Trabalho - Decibelímetros

- `decibelimetro-datalogger`
  - PDF: `decibelimetro-digital-datalogger-sddd Ok.pdf`

### Segurança do Trabalho - Luxímetros

- `luximetro-digital-hd400`
  - PDF: `LUXÍMETRO DIGITAL HD400-450 OK.pdf`
- `luximetro-digital-sitld-300`
  - PDF: `LUXÍMETRO DIGITAL SITLD-300 Ok.pdf`

### Instrumentos de Pressão

- `manometro-diferencial-magnehelic-2000`
  - PDF: `manometros magnehelic seria 2000.pdf`
- `bomba-calibracao-hidraulica-fluke`
  - PDF: `Bomba-de-Pressao-Hidraulica-Fluke-700HTP-2.pdf`

### Termômetros Bimetálicos

- `termometro-bimetalico-vts-160`
  - PDF: `termometro-bimetalico-serie-vts-100-160-200.pdf`

## Duplicatas que não devem virar novos produtos

Estas versões base já têm equivalente `Ok` publicado ou previsto. Não adicionar como produto separado.

### Anemômetros

- `ANEMOMETRO DIGITAL KESTREL 3000.pdf`
- `ANEMOMETRO ELETRONICO ITOWA 400.pdf`
- `ANEMOMETRO ESTACIONÁRIO AN1.pdf`
- `ANEMOMETRO ESTACIONÁRIO PARA GRUA GUINDASTES AN2.pdf`
- `ANEMOMETRO ESTACIONÁRIO PROFISSIONAL 8363-3xx.pdf`
- `ANEMOMETRO KESTREL1000.pdf`
- `ANEMOMETRO WINDSONIC SDI-12.pdf`

### Decibelímetros

- `decibelimetro-digital-datalogger-sddd.pdf`

### Luxímetros

- `LUXÍMETRO DIGITAL HD400-450.pdf`
- `LUXÍMETRO DIGITAL SITLD-300.pdf`

## Produtos faltantes por categoria

Total faltante estimado: 35 produtos/modelos.

## Instrumentos de Pressão

### Bomba de Calibração

Categoria: `instrumentos-de-pressao`
Subcategoria: `bomba-de-calibracao`

Faltantes:

| Produto sugerido | Slug sugerido | PDF |
|---|---|---|
| Bomba de Calibração C6000 | `bomba-calibracao-c6000` | `Bomba-de-Calibracao-C6000.pdf` |
| Bomba de Calibração C6001 | `bomba-calibracao-c6001` | `Bomba-de-Calibracao-C6001.pdf` |

Já publicado:

- Bomba de Pressão Hidráulica Fluke 700HTP-2

DOCX de apoio:

- `DESCRIÇAO RESUMIDA DE BOMBA DE CALIBRAÇAO.docx`

### Medidor de Contato Elétrico

Categoria: `instrumentos-de-pressao`
Subcategoria: `medidor-de-contato-eletrico`

Faltantes:

| Produto sugerido | Slug sugerido | PDF |
|---|---|---|
| Medidor de Contato Elétrico | `medidor-contato-eletrico` | `medidor de contato eletrico.pdf` |

### Manômetro Diferencial

Categoria: `instrumentos-de-pressao`
Subcategoria: `manometro-diferencial`

Faltantes:

| Produto sugerido | Slug sugerido | PDF |
|---|---|---|
| Manômetro Diferencial CADI 4005 | `manometro-diferencial-cadi-4005` | `manometro-diferencial-CADI-4005-62-100-114-160.pdf` |
| Manômetro Diferencial CADI/CADIG | `manometro-diferencial-cadi-cadig` | `manometro-diferencial-CADI-CADIG-114-160.pdf` |
| Manômetro Diferencial CADI-G2/CADI-G3 | `manometro-diferencial-cadi-g2-g3` | `manometro-diferencial-CADI-G2-CADI-G3-62.pdf` |
| Manômetro Diferencial CDIB/CDIBG | `manometro-diferencial-cdib-cdibg` | `manometro-diferencial-CDIB-CDIBG-114-160.pdf` |

Já publicado:

- Magnehelic Série 2000

DOCX de apoio:

- `DESCRIÇAO RESUMINA MANOMETRO DIFERENCIAL.docx`

### Manômetro Capsular

Categoria: `instrumentos-de-pressao`
Subcategoria: `manometro-capsular`

Faltantes:

| Produto sugerido | Slug sugerido | PDF |
|---|---|---|
| Manômetro Industrial CAFNC 114 | `manometro-industrial-cafnc-114` | `manometro-industrial-CAFNC114.pdf` |
| Manômetro Industrial CAIC | `manometro-industrial-caic` | `manometro-industrial-CAIC.pdf` |
| Manômetro Industrial CASC | `manometro-industrial-casc` | `manometro-industrial-CASC.pdf` |
| Manômetro Industrial CASCP/CASCIP | `manometro-industrial-cascp-cascip` | `manometro-industrial-CASCP-CASCIP.pdf` |
| Manômetro Industrial SASCI | `manometro-industrial-sasci` | `manometro-industrial-SASCI-62-100-160.pdf` |

### Manômetro Petroquímico

Categoria: `instrumentos-de-pressao`
Subcategoria: `manometro-petroquimico`

Faltantes:

| Produto sugerido | Slug sugerido | PDF |
|---|---|---|
| Manômetro Petroquímico CAFN 114 | `manometro-petroquimico-cafn-114` | `manometro-petroquimico-CAFN114.pdf` |
| Manômetro Petroquímico CAI | `manometro-petroquimico-cai` | `manometro-petroquimico-CAI-100-114-160.pdf` |
| Manômetro Petroquímico CAI 52/62 | `manometro-petroquimico-cai-52-62` | `manometro-petroquimico-CAI5262.pdf` |
| Manômetro Petroquímico CAIF 114 | `manometro-petroquimico-caif-114` | `manometro-petroquimico-CAIF114.pdf` |
| Manômetro Petroquímico CAIP | `manometro-petroquimico-caip` | `manometro-petroquimico-CAIP-62-100-114.pdf` |

### Manômetro Padrão

Categoria: `instrumentos-de-pressao`
Subcategoria: `manometro-padrao`

Faltantes:

| Produto sugerido | Slug sugerido | PDF |
|---|---|---|
| Manômetro Padrão CAB1 | `manometro-padrao-cab1` | `manometro-padrao-CAB1-100-160.pdf` |
| Manômetro Padrão CAPI | `manometro-padrao-capi` | `manometro-padrao-CAPI-160.pdf` |

### Pressostato

Categoria: `instrumentos-de-pressao`
Subcategoria: `pressostato`

Faltantes:

| Produto sugerido | Slug sugerido | PDF |
|---|---|---|
| Pressostato CA55 | `pressostato-ca55` | `PRESSOSTATO CA55.pdf` |
| Pressostato SPDC | `pressostato-spdc` | `PRESSOSTATO SPDC.pdf` |
| Pressostato STP | `pressostato-stp` | `PRESSOSTATO STP.pdf` |
| Pressostato Série 0570 | `pressostato-serie-0570` | `PRESSOSTATO_serie-0570.pdf` |
| Pressostato 0161/0162 | `pressostato-0161-0162` | `PRESSOSTATO-0161-0162.pdf` |
| Pressostato 0175 | `pressostato-0175` | `PRESSOSTATO-0175.pdf` |

### Transmissor de Pressão

Categoria: `instrumentos-de-pressao`
Subcategoria: `transmissor-de-pressao`

Faltantes:

| Produto sugerido | Slug sugerido | PDF |
|---|---|---|
| Transmissor de Pressão | `transmissor-de-pressao` | `TRANSMISSAO DE PRESSAO.pdf` |
| Transmissor de Pressão CA 1000 | `transmissor-pressao-ca-1000` | `TRANSMISSAO DE PRESSAO CA 1000.pdf` |
| Transmissor de Pressão CA1000H | `transmissor-pressao-ca1000h` | `TRANSMISSAO DE PRESSAO CA1000H.pdf` |
| Transmissor de Pressão Sanitário RTP420-S | `transmissor-pressao-sanitario-rtp420-s` | `TRANSMISSAO DE PRESSAO SANITARIO RTP420-S.pdf` |
| Transmissor de Pressão SATP20 | `transmissor-pressao-satp20` | `TRANSMISSAO DE PRESSAO SATP20.pdf` |

DOCX de apoio:

- `DESCRIÇAO RESUMIDA TRANSMISSOR PRESSAO.docx`
- `Transmissor de Pressão Diferencial SATPI.docx`

Observação:

- O DOCX `Transmissor de Pressão Diferencial SATPI.docx` pode indicar um produto adicional sem PDF direto visível. Validar manualmente antes de criar produto.

## Termômetros Bimetálicos

Categoria: `termometros-bimetalicos`
Subcategoria: sem subcategoria

Faltantes:

| Produto sugerido | Slug sugerido | PDF |
|---|---|---|
| Termômetro Bimetálico Petroquímico | `termometro-bimetalico-petroquimico` | `termometro-bimetalico-petroquimico.pdf` |
| Termômetro Bimetálico VTS 52/62/80 | `termometro-bimetalico-vts-52-62-80` | `termometro-bimetalico-serie-vts-52-62-80.pdf` |
| Termômetro Capilar | `termometro-capilar` | `termometro-capilar.pdf` |
| Termômetro de Expansão | `termometro-expansao` | `termometro-expansao.pdf` |
| Termômetro Petroquímico Every Angle | `termometro-petroquimico-every-angle` | `termometro-petroquimico-every-angle.pdf` |

Já publicado:

- Termômetro Bimetálico VTS 100/160/200

## Segurança do Trabalho

Estado atual: aparentemente completo para os PDFs finais `Ok`.

### Anemômetros

Todos os 7 produtos `Ok` estão publicados.

### Decibelímetros

O produto com ficha `Ok` está publicado:

- Decibelímetro com Datalogger SDDD

### Luxímetros

Os 2 produtos `Ok` estão publicados:

- HD400/HD450
- SITLD-300

## Plano de execução recomendado

### Bloco 1 - Pressão: itens menores e seguros

1. Bomba C6000
2. Bomba C6001
3. Medidor de Contato Elétrico
4. Manômetros padrão CAB1/CAPI

Motivo: poucos produtos, baixa ambiguidade de subcategoria.

### Bloco 2 - Termômetros

Adicionar os 5 PDFs faltantes de termômetros.

Motivo: categoria única, sem subcategoria, e arquivos bem nomeados.

### Bloco 3 - Pressostatos

Adicionar os 6 pressostatos.

Motivo: subcategoria clara, mas provavelmente precisa extrair specs específicas de cada PDF.

### Bloco 4 - Transmissores

Adicionar os 5 transmissores com PDF e revisar o DOCX do SATPI.

Motivo: nomes parecidos, risco maior de duplicar ou classificar errado.

### Bloco 5 - Manômetros capsulares/petroquímicos/diferenciais

Adicionar os 14 manômetros restantes:

- 4 diferenciais
- 5 capsulares
- 5 petroquímicos

Motivo: maior volume e maior chance de variações por diâmetro/conexão/faixa.

## Critérios para adicionar cada produto

Para cada PDF faltante:

1. Criar um produto em `src/data/products.ts`.
2. Usar `datasheet` apontando para `public/pdfs/produtos/...`.
3. Definir `category` e `subCategory` conforme este documento.
4. Extrair `shortDescription`, `fullDescription`, `specs` e `variantOptions` apenas quando o PDF/DOCX der base confiável.
5. Se não houver imagem, manter placeholder.
6. Rodar `npx tsc --noEmit`.
7. Conferir se o PDF existe no caminho público.

## Observações importantes

- Muitos produtos de Pressão foram removidos anteriormente porque eram genéricos, não porque não existiam fichas. Agora o caminho correto é recriá-los como modelos específicos por PDF.
- A meta final da Fase 5B deve ficar próxima de 48 produtos publicados.
- O estado atual de 13 produtos é consistente, mas incompleto.
