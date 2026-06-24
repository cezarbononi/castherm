# Fase 5A - Auditoria dos PDFs do catalogo

Data: 2026-05-15

## Resumo

- Os arquivos reais do catalogo nao estao em `public/pdfs`; estao em `assets/produtos`.
- `public/pdfs` contem apenas `.gitkeep`.
- Foram encontrados 65 arquivos de origem:
  - 60 PDFs
  - 5 DOCX com descricoes resumidas
- Os 60 PDFs foram copiados para `public/pdfs/produtos`, preservando a estrutura de pastas original.
- Os arquivos DOCX nao foram copiados para `public`, pois sao material de apoio interno para extracao de descricoes.
- Removendo duplicatas entre versoes base e versoes `Ok`, o catalogo aponta para aproximadamente 48 produtos/modelos.
- `src/data/products.ts` contem 12 produtos hoje.
- Existem `datasheet` paths atuais apontando para `/pdfs/...`, mas esses arquivos ainda nao existem em `public/pdfs`.

## Contagem por pasta

| Pasta                                                  | Arquivos | Categoria alvo            | Subcategoria alvo             |
| ------------------------------------------------------ | -------: | ------------------------- | ----------------------------- |
| `assets/produtos/Pressao/Bomba de Calibração`          |        4 | `instrumentos-de-pressao` | `bomba-de-calibracao`         |
| `assets/produtos/Pressao/Contato Eletrico`             |        1 | `instrumentos-de-pressao` | `medidor-de-contato-eletrico` |
| `assets/produtos/Pressao/Diferencial`                  |        6 | `instrumentos-de-pressao` | `manometro-diferencial`       |
| `assets/produtos/Pressao/Manometro Capsular`           |        5 | `instrumentos-de-pressao` | `manometro-capsular`          |
| `assets/produtos/Pressao/Manometro Petroquimico`       |        5 | `instrumentos-de-pressao` | `manometro-petroquimico`      |
| `assets/produtos/Pressao/Padrao para Laboratório`      |        2 | `instrumentos-de-pressao` | `manometro-padrao`            |
| `assets/produtos/Pressao/Pressostato`                  |        6 | `instrumentos-de-pressao` | `pressostato`                 |
| `assets/produtos/Pressao/Transmissor de Pressão`       |        7 | `instrumentos-de-pressao` | `transmissor-de-pressao`      |
| `assets/produtos/Segurança do Trabalho/Anemômetros`    |       15 | `seguranca-do-trabalho`   | `anemometros`                 |
| `assets/produtos/Segurança do Trabalho/Decibelimetros` |        3 | `seguranca-do-trabalho`   | `decibelimetros`              |
| `assets/produtos/Segurança do Trabalho/Luximetros`     |        5 | `seguranca-do-trabalho`   | `luximetros`                  |
| `assets/produtos/Termometro bimetalico`                |        6 | `termometros-bimetalicos` | sem subcategoria              |

## Modelos provaveis por grupo

### Pressao - Bomba de Calibracao

- `Bomba-de-Calibracao-C6000.pdf`
- `Bomba-de-Calibracao-C6001.pdf`
- `Bomba-de-Pressao-Hidraulica-Fluke-700HTP-2.pdf`
- DOCX: `DESCRIÇAO RESUMIDA DE BOMBA DE CALIBRAÇAO.docx`

### Pressao - Contato Eletrico

- `medidor de contato eletrico.pdf`

### Pressao - Diferencial

- `manometro-diferencial-CADI-4005-62-100-114-160.pdf`
- `manometro-diferencial-CADI-CADIG-114-160.pdf`
- `manometro-diferencial-CADI-G2-CADI-G3-62.pdf`
- `manometro-diferencial-CDIB-CDIBG-114-160.pdf`
- `manometros magnehelic seria 2000.pdf`
- DOCX: `DESCRIÇAO RESUMINA MANOMETRO DIFERENCIAL.docx`

### Pressao - Manometro Capsular

- `manometro-industrial-CAFNC114.pdf`
- `manometro-industrial-CAIC.pdf`
- `manometro-industrial-CASC.pdf`
- `manometro-industrial-CASCP-CASCIP.pdf`
- `manometro-industrial-SASCI-62-100-160.pdf`

### Pressao - Manometro Petroquimico

- `manometro-petroquimico-CAFN114.pdf`
- `manometro-petroquimico-CAI-100-114-160.pdf`
- `manometro-petroquimico-CAI5262.pdf`
- `manometro-petroquimico-CAIF114.pdf`
- `manometro-petroquimico-CAIP-62-100-114.pdf`

### Pressao - Padrao para Laboratorio

- `manometro-padrao-CAB1-100-160.pdf`
- `manometro-padrao-CAPI-160.pdf`

### Pressao - Pressostato

- `PRESSOSTATO CA55.pdf`
- `PRESSOSTATO SPDC.pdf`
- `PRESSOSTATO STP.pdf`
- `PRESSOSTATO-0161-0162.pdf`
- `PRESSOSTATO-0175.pdf`
- `PRESSOSTATO_serie-0570.pdf`

### Pressao - Transmissor de Pressao

- `TRANSMISSAO DE PRESSAO CA 1000.pdf`
- `TRANSMISSAO DE PRESSAO CA1000H.pdf`
- `TRANSMISSAO DE PRESSAO SANITARIO RTP420-S.pdf`
- `TRANSMISSAO DE PRESSAO SATP20.pdf`
- `TRANSMISSAO DE PRESSAO.pdf`
- DOCX: `DESCRIÇAO RESUMIDA TRANSMISSOR PRESSAO.docx`
- DOCX: `Transmissor de Pressão Diferencial SATPI.docx`

### Seguranca do Trabalho - Anemometros

Versoes `Ok` encontradas:

- `ANEMOMETRO DIGITAL KESTREL 3000 Ok.pdf`
- `ANEMOMETRO ELETRONICO ITOWA 400 Ok.pdf`
- `ANEMOMETRO ESTACIONÁRIO AN1 Ok.pdf`
- `ANEMOMETRO ESTACIONÁRIO PARA GRUA GUINDASTES AN2 Ok.pdf`
- `ANEMOMETRO ESTACIONÁRIO PROFISSIONAL 8363-3xx Ok.pdf`
- `ANEMOMETRO KESTREL1000 Ok.pdf`
- `ANEMOMETRO WINDSONIC SDI-12 Ok.pdf`
- DOCX: `DESCRIÇAO RESUMIDA ANEMOMETRO.docx`

Tambem existem versoes base sem `Ok` para os mesmos 7 produtos.

### Seguranca do Trabalho - Decibelimetros

- `decibelimetro-digital-datalogger-sddd Ok.pdf`
- `decibelimetro-digital-datalogger-sddd.pdf`
- Possivel arquivo em pasta errada: `LUXÍMETRO DIGITAL HD400-450.pdf`

### Seguranca do Trabalho - Luximetros

- `LUXÍMETRO DIGITAL HD400-450 OK.pdf`
- `LUXÍMETRO DIGITAL HD400-450.pdf`
- `LUXÍMETRO DIGITAL SITLD-300 Ok.pdf`
- `LUXÍMETRO DIGITAL SITLD-300.pdf`
- Possivel arquivo em pasta errada: `decibelimetro-digital-datalogger-sddd.pdf`

### Termometro bimetalico

- `termometro-bimetalico-petroquimico.pdf`
- `termometro-bimetalico-serie-vts-100-160-200.pdf`
- `termometro-bimetalico-serie-vts-52-62-80.pdf`
- `termometro-capilar.pdf`
- `termometro-expansao.pdf`
- `termometro-petroquimico-every-angle.pdf`

## Comparacao com `src/data/products.ts`

Produtos atuais: 12.

Ja representados parcialmente:

- `anemometro-kestrel-3000` -> existe PDF `ANEMOMETRO DIGITAL KESTREL 3000 Ok.pdf`
- `anemometro-estacionario-an1` -> existe PDF `ANEMOMETRO ESTACIONÁRIO AN1 Ok.pdf`
- `anemometro-eletronico-itowa` -> existe PDF `ANEMOMETRO ELETRONICO ITOWA 400 Ok.pdf`
- `decibelimetro-datalogger` -> existe PDF `decibelimetro-digital-datalogger-sddd Ok.pdf`
- `luximetro-digital-hd400` -> existe PDF `LUXÍMETRO DIGITAL HD400-450 OK.pdf`
- `manometro-diferencial-magnehelic-2000` -> existe PDF `manometros magnehelic seria 2000.pdf`
- `bomba-calibracao-hidraulica-fluke` -> existe PDF `Bomba-de-Pressao-Hidraulica-Fluke-700HTP-2.pdf`
- `transmissor-de-pressao` -> existem varios PDFs de transmissor, precisa separar por modelo
- `pressostato-industrial` -> existem varios PDFs de pressostato, precisa separar por modelo
- `termometro-bimetalico-vts-160` -> deve ser reavaliado contra os PDFs VTS 100/160/200 e 52/62/80

Provavelmente genericos demais e precisam virar modelos especificos:

- `manometro-analogico`
- `transmissor-de-pressao`
- `pressostato-industrial`
- `termometro-bimetalico-vts-160`

Ponto importante:

- O placeholder `kit-seguranca-basico` citado no `PROJECT_STATE.md` nao existe mais em `src/data/products.ts`.

## Problemas encontrados

1. `public/pdfs` esta vazio, mas `products.ts` aponta alguns datasheets para `/pdfs/...`.
2. Alguns arquivos estao duplicados em versao base e versao `Ok`; para SST, usar preferencialmente `Ok`.
3. Em Pressao e Termometros, a maioria dos PDFs nao tem sufixo `Ok`; provavelmente esses sao os unicos arquivos disponiveis para essas linhas.
4. Ha arquivos aparentemente trocados entre `Decibelimetros` e `Luximetros`.
5. Existem nomes com acentos e espacos; antes de expor em `public/pdfs`, vale padronizar nomes ou preservar caminhos com cuidado.
6. Alguns produtos atuais sao guarda-chuvas, mas os PDFs indicam modelos especificos que devem virar produtos separados.

## Recomendacao para a Fase 5B

1. Primeiro copiar/publicar os PDFs em `public/pdfs` com estrutura normalizada.
2. Atualizar `datasheet` para caminhos realmente acessiveis pelo site.
3. Expandir `products.ts` por blocos:
   - Seguranca do Trabalho primeiro, porque tem mais arquivos `Ok`.
   - Depois Termometros.
   - Depois Pressao, por subcategoria.
4. Evitar criar produto a partir de DOCX; usar DOCX apenas como apoio para `shortDescription`/`fullDescription`.
5. Preferir um produto por PDF/modelo quando o arquivo representar uma ficha tecnica especifica.

## Fase 5B - Progresso iniciado

Bloco implementado: `Seguranca do Trabalho`.

Alteracoes realizadas em `src/data/products.ts`:

- Catalogo chegou a 18 produtos durante a expansao inicial de SST e foi consolidado em 13 produtos publicados apos a regra de manter apenas itens com ficha tecnica.
- Anemometros agora totalizam 7 produtos, cobrindo os PDFs `Ok` encontrados:
  - Kestrel 3000
  - Kestrel 1000
  - Estacionario AN1
  - Estacionario AN2
  - Estacionario Profissional 8368.3xx
  - Eletronico ITOWA 400
  - WindSonic SDI-12
- Luximetros agora totalizam 2 produtos:
  - HD400/HD450
  - SITLD-300
- Todos os `datasheet` adicionados neste bloco foram conferidos contra arquivos existentes em `public/pdfs/produtos`.
- Foram adicionados `fullDescription` e `specs` quando a extracao de texto dos PDFs/DOCX trouxe dados confiaveis.
- Decisao de catalogo: manter publicados apenas produtos com ficha tecnica (`datasheet`) existente.
- Produtos sem ficha removidos temporariamente de `products.ts`:
  - `decibelimetro-digital-hd800`
  - `manometro-analogico`
  - `transmissor-de-pressao`
  - `pressostato-industrial`
- Apos a limpeza, `products.ts` ficou com 13 produtos, todos com ficha tecnica validada.

Pendencias dentro de `Seguranca do Trabalho`:

- `decibelimetro-digital-hd800` foi removido por nao ter PDF correspondente claro.
- `decibelimetro-datalogger` recebeu specs a partir de leitura manual enviada por print.
- Os arquivos que estavam trocados entre `Decibelimetros` e `Luximetros` foram corrigidos manualmente pelo projeto.
