import type { Product } from '@/types';

/**
 * Produtos da Cas Therm.
 *
 * Estrutura atualizada com categoria principal + subcategoria real.
 * Baseado na análise dos PDFs do catálogo.
 *
 * Fase 5B: expandido com todos os modelos que possuem ficha técnica em PDF.
 */
export const products: Product[] = [
  // =============================================
  // SEGURANÇA DO TRABALHO - Anemômetros
  // =============================================
  {
    slug: 'anemometro-kestrel-3000',
    name: 'Anemômetro Portátil Kestrel 3000',
    brand: 'KESTREL',
    model: '3000',
    category: 'seguranca-do-trabalho',
    subCategory: 'anemometros',
    shortDescription:
      'Anemômetro portátil com medição de velocidade do ar, temperatura e sensação térmica. Ideal para SST e laudos ambientais.',
    fullDescription:
      'Estação meteorológica portátil à prova d água para leituras de velocidade do vento, temperatura do ar, água e neve, além de sensação térmica causada pelo vento.',
    specs: [
      { label: 'Velocidade do vento', value: '0,4 a 60 m/s' },
      { label: 'Temperatura', value: '-45 a 125°C' },
      { label: 'Precisão da velocidade', value: '±3% da leitura' },
      { label: 'Tempo de resposta', value: '1 segundo' },
      { label: 'Grau de proteção', value: 'IP67' },
      { label: 'Dimensões', value: '12 x 4,2 x 1,8 cm' },
      { label: 'Alimentação', value: '1 bateria CR2032' },
    ],
    image: '/images/products/anemometro-kestrel-3000.webp',
    featured: true,
  },
  {
    slug: 'anemometro-kestrel-1000',
    name: 'Anemômetro Portátil Kestrel 1000',
    brand: 'KESTREL',
    model: '1000',
    category: 'seguranca-do-trabalho',
    subCategory: 'anemometros',
    shortDescription:
      'Anemômetro portátil à prova d água para medições instantâneas, médias e máximas de velocidade do vento.',
    fullDescription:
      'Modelo portátil multifunção para leitura de velocidade do vento em diferentes unidades, indicado para aplicações profissionais, construção e atividades de campo.',
    specs: [
      { label: 'Velocidade do vento', value: '0,4 a 60 m/s' },
      { label: 'Precisão da velocidade', value: '±3% da leitura' },
      { label: 'Tempo de resposta', value: '1 segundo' },
      { label: 'Grau de proteção', value: 'IP67' },
      { label: 'Dimensões', value: '12,2 x 4,2 x 1,8 cm' },
      { label: 'Alimentação', value: '1 bateria CR2032' },
    ],
    image: '/images/products/anemometro-kestrel-1000.webp',
  },
  {
    slug: 'anemometro-estacionario-an1',
    name: 'Anemômetro Estacionário AN1',
    model: 'AN1',
    category: 'seguranca-do-trabalho',
    subCategory: 'anemometros',
    shortDescription:
      'Anemômetro estacionário para monitoramento contínuo de velocidade do ar em dutos e ambientes industriais.',
    fullDescription:
      'Instrumento para indicação e alarme de velocidade do vento, composto por unidade sensora tipo canecas ou conchas e unidade eletrônica digital com dois presets de velocidade.',
    specs: [
      {
        label: 'Aplicação',
        value: 'Gruas, navios, prédios, pontes-rolantes, mastros, torres e colunas',
      },
      { label: 'Unidade eletrônica', value: 'Caixas 48 x 96 mm ou 96 x 96 mm' },
      { label: 'Recorte do painel', value: '43 x 91 mm ou 91 x 91 mm, conforme caixa' },
      { label: 'Conexão opcional', value: 'Conector DIN tipo rosca de 5 pinos' },
      { label: 'Saídas', value: 'Buzzer, saída >= 42 km/h e saída >= 72 km/h' },
      {
        label: 'Suportes',
        value: 'Fixação horizontal, vertical, giratória ou 90° em aço carbono com pintura epóxi',
      },
    ],
    image: '/images/products/anemometro-estacionario-an1.jpg',
    datasheet:
      '/pdfs/produtos/Segurança do Trabalho/Anemômetros/ANEMOMETRO ESTACIONÁRIO AN1 Ok.pdf',
  },
  {
    slug: 'anemometro-estacionario-an2',
    name: 'Anemômetro Estacionário AN2',
    model: 'AN2',
    category: 'seguranca-do-trabalho',
    subCategory: 'anemometros',
    shortDescription:
      'Anemômetro estacionário para gruas e guindastes, com unidade sinalizadora remota e alertas para limites de vento.',
    fullDescription:
      'Desenvolvido para aplicação em gruas e guindastes, alerta ventos superiores a 42 km/h e 72 km/h com sinalização sonora e visual, apoiando o atendimento às exigências de segurança da NR18.',
    specs: [
      { label: 'Aplicação', value: 'Gruas e guindastes' },
      { label: 'Alarmes de vento', value: '42 km/h e 72 km/h' },
      { label: 'Distância entre sensor e sinalizador', value: 'Até 100 m' },
      { label: 'Grau de proteção', value: 'Sensor IP65; sinalizador IP60' },
      { label: 'Caixa da unidade sinalizadora', value: 'ABS alto impacto, 172 x 80 x 80 mm' },
    ],
    image: '/images/products/anemometro-estacionario-an2.jpg',
    datasheet:
      '/pdfs/produtos/Segurança do Trabalho/Anemômetros/ANEMOMETRO ESTACIONÁRIO PARA GRUA GUINDASTES AN2 Ok.pdf',
  },
  {
    slug: 'anemometro-estacionario-profissional-8368',
    name: 'Anemômetro Estacionário Profissional 8368.3xx',
    model: '8368.3xx',
    category: 'seguranca-do-trabalho',
    subCategory: 'anemometros',
    shortDescription:
      'Anemômetro estacionário profissional para medição de velocidade e direção do vento com saída analógica 4 a 20 mA.',
    fullDescription:
      'Estação anemométrica profissional para aplicações como offshore, usinas eólicas, meteorologia, sistemas de alerta de vento, aeroportos e navios.',
    specs: [
      { label: 'Velocidade do vento', value: '0,3 a 75 m/s' },
      { label: 'Direção do vento', value: '0 a 360°' },
      { label: 'Saída', value: '4 a 20 mA analógica' },
      { label: 'Alimentação', value: '24 VDC (20 a 80 VDC)' },
      { label: 'Grau de proteção', value: 'IP65' },
      { label: 'Temperatura permitida', value: '-40 a 70°C' },
      { label: 'Comprimento do cabo', value: '12 m' },
    ],
    image: '/images/products/anemometro-estacionario-profissional-8368.png',
    datasheet:
      '/pdfs/produtos/Segurança do Trabalho/Anemômetros/ANEMOMETRO ESTACIONÁRIO PROFISSIONAL 8363-3xx Ok.pdf',
  },
  {
    slug: 'anemometro-eletronico-itowa',
    name: 'Anemômetro Eletrônico',
    brand: 'ITOWA',
    model: '400',
    category: 'seguranca-do-trabalho',
    subCategory: 'anemometros',
    shortDescription:
      'Anemômetro eletrônico de precisão para medições de velocidade do ar em aplicações industriais e de ventilação.',
    fullDescription:
      'Anemômetro eletrônico com sinalização sonora e luminosa relativa à velocidade do vento, projetado para aplicações de segurança e atendimento a normas como a NR18.',
    specs: [
      { label: 'Alarmes de vento', value: '42 km/h e 72 km/h' },
      { label: 'Sinalização', value: 'Sonora e luminosa' },
      { label: 'Aplicação', value: 'Monitoramento de vento em equipamentos e áreas operacionais' },
    ],
    image: '/images/products/anemometro-eletronico-itowa.png',
    datasheet:
      '/pdfs/produtos/Segurança do Trabalho/Anemômetros/ANEMOMETRO ELETRONICO ITOWA 400 Ok.pdf',
  },
  {
    slug: 'anemometro-windsonic-sdi-12',
    name: 'Anemômetro Estacionário WindSonic SDI-12',
    brand: 'WINDSONIC',
    model: 'SDI-12',
    category: 'seguranca-do-trabalho',
    subCategory: 'anemometros',
    shortDescription:
      'Anemômetro ultrassônico estacionário para velocidade e direção do vento com saída SDI-12.',
    fullDescription:
      'Anemômetro de baixo custo com tecnologia ultrassônica para fornecer dados de velocidade e direção do vento por saída SDI-12, com baixo consumo de energia em modo de espera.',
    specs: [
      { label: 'Tecnologia', value: 'Ultrassônica' },
      { label: 'Saída', value: 'SDI-12' },
      { label: 'Medições', value: 'Velocidade e direção do vento' },
      {
        label: 'Recurso',
        value: 'Média móvel e velocidade máxima de 1 minuto com direção associada',
      },
    ],
    image: '/images/products/anemometro-windsonic-sdi-12.png',
    datasheet:
      '/pdfs/produtos/Segurança do Trabalho/Anemômetros/ANEMOMETRO WINDSONIC SDI-12 Ok.pdf',
  },

  // =============================================
  // SEGURANÇA DO TRABALHO - Decibelímetros
  // =============================================
  {
    slug: 'decibelimetro-datalogger',
    name: 'Decibelímetro com Datalogger',
    category: 'seguranca-do-trabalho',
    subCategory: 'decibelimetros',
    shortDescription:
      'Decibelímetro tipo 2 com função datalogger, ponderação A/C, saída USB e faixas ajustáveis para avaliação de ruído.',
    fullDescription:
      'Medidor de nível de pressão sonora com display iluminado, barra gráfica, registro de dados e recursos para análise de ruído ocupacional e ambiental.',
    specs: [
      { label: 'Normas', value: 'IEC 61672-1 tipo 2; ANSI S1.4 tipo 2' },
      { label: 'Precisão', value: '±1,4 dB' },
      {
        label: 'Faixas de escala',
        value: 'Lo: 30 a 130 dB; Med: 50 a 100 dB; Hi: 80 a 130 dB; Auto: 30 a 130 dB',
      },
      { label: 'Escala de frequência', value: '31,5 Hz a 8 kHz' },
      { label: 'Escala dinâmica', value: '50 dB' },
      { label: 'Ponderação de tempo', value: 'FAST: 125 ms; SLOW: 1 s' },
      { label: 'Ponderação', value: 'A e C' },
      {
        label: 'Recursos',
        value: 'Data logger, indicação de sobre/sub-escala, valor máximo MAX e mínimo MIN',
      },
      { label: 'Interface', value: 'USB' },
      { label: 'Microfone', value: 'Condensador de eletreto de 1/2 polegada' },
      { label: 'Resolução', value: '0,1 dB' },
      { label: 'Atualização do visor', value: '2 vezes por segundo' },
      { label: 'Saída analógica', value: 'AC/DC; AC = 1 Vrms; DC = 10 mV/dB' },
      { label: 'Dimensões', value: '278 x 76 x 50 mm' },
      { label: 'Peso', value: '350 g' },
      { label: 'Alimentação', value: 'Bateria 9 V ou adaptador 9 V' },
    ],
    image: '/images/products/decibelimetro-datalogger.jpg',
    datasheet:
      '/pdfs/produtos/Segurança do Trabalho/Decibelimetros/decibelimetro-digital-datalogger-sddd Ok.pdf',
    featured: true,
  },

  // =============================================
  // SEGURANÇA DO TRABALHO - Luxímetros
  // =============================================
  {
    slug: 'luximetro-digital-hd400',
    name: 'Luxímetro Digital HD400/HD450',
    model: 'HD-400',
    category: 'seguranca-do-trabalho',
    subCategory: 'luximetros',
    shortDescription:
      'Luxímetro digital para medição de iluminância em ambientes de trabalho, com opção de modelo datalogger HD450.',
    fullDescription:
      'Linha de luxímetros digitais robustos para medição de iluminância em lux ou foot-candle, com correção de cosseno e cor, display iluminado e interface USB.',
    specs: [
      { label: 'Faixa em lux', value: '400, 4.000, 40.000 e 400.000 lux' },
      { label: 'Faixa em Fc', value: '40, 400, 4.000 e 40.000 Fc' },
      { label: 'Precisão', value: '±5% da leitura' },
      { label: 'Resolução máxima', value: '0,01 Fc / 0,1 lux' },
      {
        label: 'Datalogger',
        value: 'HD450: até 16.000 leituras contínuas ou 99 leituras selecionadas',
      },
      { label: 'Interface', value: 'USB' },
      { label: 'Dimensões', value: '170 x 80 x 40 mm' },
    ],
    image: '/images/products/luximetro-digital-hd400.png',
    datasheet: '/pdfs/produtos/Segurança do Trabalho/Luximetros/LUXÍMETRO DIGITAL HD400-450 OK.pdf',
    featured: true,
  },
  {
    slug: 'luximetro-digital-sitld-300',
    name: 'Luxímetro Digital SITLD-300',
    model: 'SITLD-300',
    category: 'seguranca-do-trabalho',
    subCategory: 'luximetros',
    shortDescription:
      'Luxímetro digital robusto com registro de dados em memória, display duplo e interface serial RS-232.',
    fullDescription:
      'Equipamento para medições de iluminância com precisão e qualidade, incluindo funções de armazenamento, comparação, média, retenção de dados e registro automático.',
    specs: [
      { label: 'Faixa de medição', value: '0,01 a 999.900 lux / 0,001 a 92.920 fc' },
      { label: 'Tela', value: 'Display duplo LCD de 4 dígitos' },
      { label: 'Memória manual', value: '99 conjuntos' },
      { label: 'Memória automática', value: '43.000 conjuntos' },
      { label: 'Interface', value: 'RS-232' },
      { label: 'Temperatura de operação', value: '0 a 40°C' },
      { label: 'Alimentação', value: '6 pilhas AAA' },
      { label: 'Dimensões', value: '150 x 72 x 35 mm' },
    ],
    image: '/images/products/luximetro-digital-sitld-300.png',
    datasheet: '/pdfs/produtos/Segurança do Trabalho/Luximetros/LUXÍMETRO DIGITAL SITLD-300 Ok.pdf',
  },

  // =============================================
  // INSTRUMENTOS DE PRESSÃO - Manômetro Diferencial
  // =============================================
  {
    slug: 'manometro-diferencial-magnehelic-2000',
    name: 'Manômetro Diferencial Magnehelic',
    brand: 'DWYER',
    model: 'Série 2000',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-diferencial',
    shortDescription:
      'Manômetro diferencial de alta precisão para medição em sistemas de HVAC, filtros e exaustão.',
    image: '/images/products/manometro-diferencial-magnehelic-2000.avif',
    datasheet: '/pdfs/produtos/Pressao/Diferencial/manometros magnehelic seria 2000.pdf',
    featured: true,
    fullDescription:
      'Manômetro diferencial de alta precisão para baixa pressão de ar e gases não corrosivos, indicado para pressão positiva, negativa ou diferencial. É aplicado em ventiladores, sopradores, filtros, velocidade do ar, tiragem de chaminés, placas de orifício, nível por borbulhador e sistemas de controle gás/ar.',
    specs: [
      {
        label: 'Exatidão',
        value: '±2% do fundo de escala; 3% nos modelos -0 e 4% nos modelos -00',
      },
      { label: 'Temperatura de trabalho', value: '-6,6 °C a 60 °C' },
      { label: 'Capacidade total de pressão', value: '20 inH2O a 15 psig' },
      { label: 'Sobrepressão', value: 'Tampão de alívio abre aproximadamente em 25 psig' },
      { label: 'Conexões', value: 'Entradas alta e baixa em duplicata 1/8 in NPT fêmea' },
      { label: 'Caixa', value: 'Alumínio fundido com acabamento cinza escuro martelado' },
      {
        label: 'Acessórios padrão',
        value: 'Bujões 1/8 in e adaptadores niveladores para montagem embutida',
      },
      { label: 'Peso', value: '510 g' },
    ],
    variantOptions: [
      {
        name: 'Faixa de medição',
        values: ['0-25 Pa', '0-62 Pa', '0-125 Pa', '0-250 Pa', '0-500 Pa', '0-1.000 Pa'],
      },
    ],
  },
  {
    slug: 'manometro-diferencial-cadi-4005',
    name: 'Manômetro Diferencial CADI 4005',
    model: 'CADI 4005',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-diferencial',
    shortDescription:
      'Manômetro diferencial industrial para medição de diferença de pressão em filtros, dutos e sistemas de fluidos.',
    fullDescription:
      'Manômetro diferencial com corpo em alumínio e sensor por pistão magnético, utilizado para monitoramento de pressão diferencial em filtros, vazão de processos, nível de tanques com alto diferencial e processos gasosos.',
    specs: [
      { label: 'Diâmetros nominais', value: '62, 100, 114 e 160 mm' },
      { label: 'Caixa e anel', value: 'Aço inox' },
      { label: 'Corpo', value: 'Alumínio; opcional em aço inox AISI 316' },
      { label: 'Elemento sensor', value: 'Pistão magnético' },
      { label: 'Pressão estática', value: 'Até 200 bar' },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Visor', value: 'Vidro plano' },
      { label: 'Classe de exatidão', value: 'ABNT Classe C' },
    ],
    variantOptions: [
      { name: 'Diâmetro do mostrador', values: ['62mm', '100mm', '114mm', '160mm'] },
    ],
    image: '/images/products/manometro-diferencial-cadi-4005.png',
    datasheet:
      '/pdfs/produtos/Pressao/Diferencial/manometro-diferencial-CADI-4005-62-100-114-160.pdf',
  },
  {
    slug: 'manometro-diferencial-cadi-cadig',
    name: 'Manômetro Diferencial CADI/CADIG',
    model: 'CADI/CADIG',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-diferencial',
    shortDescription:
      'Manômetro diferencial com versão com glicerina (CADIG) para ambientes com vibração e pulsação.',
    fullDescription:
      'Manômetro diferencial em aço inox para meios corrosivos em processos líquidos ou gasosos. A versão CADIG recebe enchimento com líquido antivibração para aplicações com variações bruscas de pressão ou vibração.',
    specs: [
      { label: 'Diâmetros nominais', value: '114 e 160 mm' },
      { label: 'Caixa e anel', value: 'Aço inox AISI 304' },
      { label: 'Corpo/flanges', value: 'Aço inox AISI 304 ou 316' },
      { label: 'Elemento sensor', value: 'Aço inox AISI 316' },
      { label: 'Faixa de pressão', value: 'Até 15 bar' },
      { label: 'Pressão estática máxima', value: '200 bar' },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
      { label: 'Enchimento', value: 'Glicerina bidestilada na série CADIG' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['114mm', '160mm'] }],
    image: '/images/products/manometro-diferencial-cadi-cadig.png',
    datasheet: '/pdfs/produtos/Pressao/Diferencial/manometro-diferencial-CADI-CADIG-114-160.pdf',
  },
  {
    slug: 'manometro-diferencial-cadi-g2-g3',
    name: 'Manômetro Diferencial CADI-G2/CADI-G3',
    model: 'CADI-G2/CADI-G3',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-diferencial',
    shortDescription:
      'Manômetro diferencial compacto séries G2 e G3 para instalações com espaço reduzido.',
    fullDescription:
      'Manômetros diferenciais construídos em bloco único de latão forjado para processos gasosos não corrosivos. As séries G2 e G3 atendem montagens com conexão lateral ou traseira e suportam pressão estática de até 50 bar.',
    specs: [
      { label: 'Diâmetro nominal', value: '62 mm' },
      { label: 'Construção', value: 'Latão forjado' },
      { label: 'Mecanismo', value: 'Aço inox AISI 304' },
      { label: 'Elemento sensor', value: 'Bourdon em aço inox AISI 316' },
      { label: 'Pressão estática', value: 'Até 50 bar' },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Visor', value: 'Policarbonato' },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['62mm'] }],
    image: '/images/products/manometro-diferencial-cadi-g2-g3.jpg',
    datasheet: '/pdfs/produtos/Pressao/Diferencial/manometro-diferencial-CADI-G2-CADI-G3-62.pdf',
  },
  {
    slug: 'manometro-diferencial-cdib-cdibg',
    name: 'Manômetro Diferencial CDIB/CDIBG',
    model: 'CDIB/CDIBG',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-diferencial',
    shortDescription:
      'Manômetro diferencial com Bourdon duplo para medições com alta precisão em processos industriais.',
    fullDescription:
      'Manômetro diferencial para processos com fluidos líquidos ou gasosos, com corpo e sistema Bourdon em aço inox. A construção permite pressão estática máxima na ordem de duas vezes a pressão diferencial máxima, com versão CDIBG para enchimento antivibração.',
    specs: [
      { label: 'Diâmetros nominais', value: '114 e 160 mm' },
      { label: 'Caixa e anel', value: 'Aço inox AISI 304' },
      { label: 'Soquete/corpo', value: 'Aço inox AISI 316' },
      { label: 'Conexões', value: 'Duas inferiores com rosca 1/4 in, 1/2 in BSP ou NPT' },
      { label: 'Elemento sensor', value: 'Bourdon em aço inox AISI 316' },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Pressão estática', value: '2x a pressão final' },
      { label: 'Classe de exatidão', value: 'ABNT Classe A' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['114mm', '160mm'] }],
    image: '/images/products/manometro-diferencial-cdib-cdibg.png',
    datasheet: '/pdfs/produtos/Pressao/Diferencial/manometro-diferencial-CDIB-CDIBG-114-160.pdf',
  },

  // =============================================
  // INSTRUMENTOS DE PRESSÃO - Bomba de Calibração
  // =============================================
  {
    slug: 'bomba-calibracao-hidraulica-fluke',
    name: 'Bomba de Calibração Hidráulica',
    brand: 'FLUKE',
    category: 'instrumentos-de-pressao',
    subCategory: 'bomba-de-calibracao',
    shortDescription:
      'Bomba portátil de alta pressão para calibração de manômetros e transmissores em campo.',
    fullDescription:
      'Bomba hidráulica manual Fluke 700HTP-2 para calibração e testes de pressão. Possui ajuste de curso variável, ajuste fino por vernier, conexão direta com módulos de pressão e duas portas NPT para referência e unidade em teste.',
    specs: [
      { label: 'Modelo', value: 'Fluke 700HTP-2' },
      { label: 'Ajuste de pressão', value: 'Botão vernier integrado para ajuste fino' },
      { label: 'Curso', value: 'Ajuste de curso variável por volume e pressão' },
      { label: 'Portas de pressão', value: 'Duas portas 1/4 in NPT' },
      { label: 'Compatibilidade', value: 'Válvula de alívio Fluke 700PRV opcional' },
      {
        label: 'Inclui',
        value:
          'Adaptador 1/4 in NPT, dois adaptadores BSP fêmea, tee 1/4 in NPT e folha de instruções',
      },
    ],
    image: '/images/products/bomba-calibracao-hidraulica-fluke.webp',
    datasheet:
      '/pdfs/produtos/Pressao/Bomba de Calibração/Bomba-de-Pressao-Hidraulica-Fluke-700HTP-2.pdf',
  },
  {
    slug: 'bomba-calibracao-c6000',
    name: 'Bomba de Calibração C6000',
    model: 'C6000',
    category: 'instrumentos-de-pressao',
    subCategory: 'bomba-de-calibracao',
    shortDescription:
      'Bomba de calibração portátil para geração e ajuste de pressão em campo e laboratório.',
    fullDescription:
      'Bomba de calibração para uso com manômetro padrão, indicada para ensaios de pressão hidráulica e calibração de manômetros. A pressão é ajustada por volante, oferecendo operação rápida em campo ou laboratório.',
    specs: [
      { label: 'Pressão máxima', value: '14223 PSI / 980 bar / 1000 kgf/cm²' },
      { label: 'Vácuo', value: '-4,26 PSI / -0,29 bar / -0,30 kgf/cm²' },
      { label: 'Sobrepressão', value: '17068 PSI / 1176 bar / 1200 kgf/cm²' },
      {
        label: 'Materiais',
        value: 'Volante em alumínio, fuso em aço inox, pistão em latão e base em MDF revestido',
      },
      { label: 'Fluido', value: 'Água, óleo de silicone ou mineral' },
      { label: 'Rosca', value: '1/2 in BSP fêmea' },
      { label: 'Dimensões', value: '350 x 459 x 255 mm' },
      { label: 'Peso', value: '11 kg; envio: 12,5 kg' },
    ],
    image: '/images/products/bomba-calibracao-c6000.jpg',
    datasheet: '/pdfs/produtos/Pressao/Bomba de Calibração/Bomba-de-Calibracao-C6000.pdf',
  },
  {
    slug: 'bomba-calibracao-c6001',
    name: 'Bomba de Calibração C6001',
    model: 'C6001',
    category: 'instrumentos-de-pressao',
    subCategory: 'bomba-de-calibracao',
    shortDescription:
      'Bomba de calibração portátil de alta precisão para aplicações industriais e de laboratório.',
    fullDescription:
      'Bomba de calibração para uso com manômetro padrão, com geração de pressão por volante. É indicada para calibração e testes hidráulicos em aplicações industriais e laboratoriais.',
    specs: [
      { label: 'Pressão máxima', value: '17068 PSI / 1176,8 bar / 1200 kgf/cm²' },
      { label: 'Vácuo', value: '-4,26 PSI / -0,29 bar / -0,30 kgf/cm²' },
      { label: 'Sobrepressão', value: '19912 PSI / 1372 bar / 1400 kgf/cm²' },
      {
        label: 'Materiais',
        value: 'Volante em alumínio, fuso em aço inox, pistão em latão e base em alumínio',
      },
      { label: 'Fluido', value: 'Água, óleo de silicone ou mineral' },
      { label: 'Dimensões', value: '260 x 330 x 190 mm' },
      { label: 'Peso', value: '7 kg; envio: 8 kg' },
      { label: 'Envio', value: '405 x 460 x 425 mm' },
    ],
    image: '/images/products/bomba-calibracao-c6001.jpg',
    datasheet: '/pdfs/produtos/Pressao/Bomba de Calibração/Bomba-de-Calibracao-C6001.pdf',
  },

  // =============================================
  // INSTRUMENTOS DE PRESSÃO - Medidor de Contato Elétrico
  // =============================================
  {
    slug: 'medidor-contato-eletrico',
    name: 'Medidor de Contato Elétrico',
    category: 'instrumentos-de-pressao',
    subCategory: 'medidor-de-contato-eletrico',
    shortDescription:
      'Manômetro com contato elétrico para acionamento de alarmes e controle de processos por faixa de pressão.',
    fullDescription:
      'Manômetro com contato elétrico para medição e controle de pressões, ligando ou desligando circuitos elétricos em pressões ajustadas. Pode atuar com contato simples ou duplo, funcionando como alerta de limite máximo ou mínimo.',
    specs: [
      {
        label: 'Aplicações',
        value: 'Indústrias químicas, farmacêuticas, alimentícias, petroquímicas e têxteis',
      },
      { label: 'Função', value: 'Medição de pressão com controle elétrico por ponto ajustado' },
      { label: 'Contatos', value: 'Contato elétrico simples ou duplo' },
      { label: 'Construção', value: 'Aço inoxidável AISI 303' },
      { label: 'Temperatura de trabalho', value: '-6,6 °C a 60 °C' },
      { label: 'Conexões', value: 'Entradas alta e baixa 1/8 in NPT fêmea' },
      { label: 'Exatidão', value: '±2% do fundo de escala, conforme modelo/faixa' },
      { label: 'Peso', value: '510 g' },
    ],
    image: '/images/products/medidor-contato-eletrico.png',
    datasheet: '/pdfs/produtos/Pressao/Contato Eletrico/medidor de contato eletrico.pdf',
  },

  // =============================================
  // INSTRUMENTOS DE PRESSÃO - Manômetro Padrão
  // =============================================
  {
    slug: 'manometro-padrao-cab1',
    name: 'Manômetro Padrão CAB1',
    model: 'CAB1',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-padrao',
    shortDescription:
      'Manômetro padrão de alta precisão para uso em laboratório e calibração de instrumentos.',
    fullDescription:
      'Manômetro padrão para processos que exigem maior precisão, leitura e repetibilidade. Possui elemento sensor Bourdon, mecanismo com ajuste de angularidade e linearidade e fechamento tipo baioneta para manutenção e calibração rápida.',
    specs: [
      { label: 'Diâmetros nominais', value: '100 e 160 mm' },
      { label: 'Caixa, anel e flange', value: 'Aço carbono com pintura epóxi preta' },
      { label: 'Mecanismo', value: 'Latão; opcional em aço inox AISI 304' },
      { label: 'Soquete/corpo', value: 'Latão; opcional em aço inox AISI 316' },
      {
        label: 'Elemento sensor',
        value: 'Bourdon em ligas de cobre até 70 bar; aço inox AISI 316 acima disso',
      },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Faixa de pressão', value: 'Manômetros de 0,6 a 1000 bar; vacuômetros de vácuo' },
      { label: 'Classe de exatidão', value: 'ABNT Classe A1' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['100mm', '160mm'] }],
    image: '/images/products/manometro-padrao-cab1.jpg',
    datasheet: '/pdfs/produtos/Pressao/Padrao para Laboratório/manometro-padrao-CAB1-100-160.pdf',
  },
  {
    slug: 'manometro-padrao-capi',
    name: 'Manômetro Padrão CAPI',
    model: 'CAPI',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-padrao',
    shortDescription:
      'Manômetro padrão de referência para calibração e verificação de instrumentos de pressão em laboratório.',
    fullDescription:
      'Manômetro padrão de alta precisão para laboratórios de calibração, testes, oficinas de instrumentação e inspeção. Possui escala espelhada para reduzir erro de paralaxe e mecanismo com baixo atrito e ajuste de angularidade e linearidade.',
    specs: [
      { label: 'Diâmetro nominal', value: '160 mm' },
      { label: 'Caixa, anel e flange', value: 'Aço inox AISI 304' },
      { label: 'Soquete/corpo', value: 'Aço inox AISI 316' },
      { label: 'Elemento sensor', value: 'Bourdon em ligas de cobre' },
      { label: 'Mostrador', value: 'Alumínio fundo branco espelhado' },
      {
        label: 'Faixa de pressão',
        value: 'Manômetros de 0,6 a 1000 bar; vacuômetros de vácuo; manovacuômetros até 30 bar',
      },
      { label: 'Classe de exatidão', value: 'ABNT Classe A2 ou A3' },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['160mm'] }],
    image: '/images/products/manometro-padrao-capi.png',
    datasheet: '/pdfs/produtos/Pressao/Padrao para Laboratório/manometro-padrao-CAPI-160.pdf',
  },

  // =============================================
  // INSTRUMENTOS DE PRESSÃO - Manômetro Capsular
  // =============================================
  {
    slug: 'manometro-industrial-cafnc-114',
    name: 'Manômetro Industrial CAFNC 114',
    model: 'CAFNC 114',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-capsular',
    shortDescription:
      'Manômetro industrial capsular para baixas pressões em gases não agressivos, com caixa de aço inox.',
    fullDescription:
      'Manômetro capsular para baixas pressões, com caixa em fenol e internos em aço inox. É indicado para ambientes agressivos, indústrias de papel e celulose, gráficas, chaminés e meios gasosos de baixa pressão.',
    specs: [
      { label: 'Diâmetro nominal', value: '114 mm' },
      { label: 'Caixa', value: 'Fenol' },
      { label: 'Anel roscado', value: 'Polipropileno' },
      { label: 'Soquete/corpo', value: 'Aço inox AISI 316' },
      { label: 'Elemento sensor', value: 'Cápsula em aço inox AISI 316' },
      {
        label: 'Faixa de pressão',
        value: 'Manômetros de 30 a 600 mbar; vacuômetros e manovacuômetros',
      },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['114mm'] }],
    image: '/images/products/manometro-industrial-cafnc-114.png',
    datasheet: '/pdfs/produtos/Pressao/Manometro Capsular/manometro-industrial-CAFNC114.pdf',
  },
  {
    slug: 'manometro-industrial-caic',
    name: 'Manômetro Industrial CAIC',
    model: 'CAIC',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-capsular',
    shortDescription:
      'Manômetro industrial capsular de aço inox para aplicações em gases corrosivos e ambientes agressivos.',
    fullDescription:
      'Manômetro capsular em aço inox para baixas pressões, com alta precisão e durabilidade. É usado em papel e celulose, gráficas, chaminés, equipamentos e meios gasosos de baixa pressão.',
    specs: [
      { label: 'Diâmetros nominais', value: '100, 114 e 160 mm' },
      { label: 'Caixa, anel e flange', value: 'Aço inox AISI 304' },
      { label: 'Soquete/corpo', value: 'Aço inox AISI 316' },
      { label: 'Elemento sensor', value: 'Cápsula em aço inox AISI 316' },
      {
        label: 'Faixa de pressão',
        value: 'Manômetros de 30 a 600 mbar; vacuômetros e manovacuômetros',
      },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Visor', value: 'Vidro plano' },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
    ],
    image: '/images/products/manometro-industrial-caic.jpg',
    datasheet: '/pdfs/produtos/Pressao/Manometro Capsular/manometro-industrial-CAIC.pdf',
  },
  {
    slug: 'manometro-industrial-casc',
    name: 'Manômetro Industrial CASC',
    model: 'CASC',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-capsular',
    shortDescription:
      'Manômetro industrial com caixa de aço carbono para aplicações gerais de pressão.',
    fullDescription:
      'Manômetro capsular industrial para baixa pressão, com caixa em aço carbono e internos em latão. É indicado para meios gasosos não agressivos e aplicações em chaminés, equipamentos, gráficas e papel e celulose.',
    specs: [
      { label: 'Diâmetros nominais', value: '62, 100 e 160 mm' },
      { label: 'Caixa', value: 'Aço carbono com pintura epóxi preta' },
      { label: 'Mecanismo', value: 'Latão' },
      { label: 'Elemento sensor', value: 'Cápsula em ligas de cobre' },
      { label: 'Faixa de pressão', value: '62 mm: 60 a 600 mbar; 100/160 mm: 15 a 600 mbar' },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Visor', value: 'Policarbonato em 62 mm; vidro plano nos demais' },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
    ],
    image: '/images/products/manometro-industrial-casc.jpg',
    datasheet: '/pdfs/produtos/Pressao/Manometro Capsular/manometro-industrial-CASC.pdf',
  },
  {
    slug: 'manometro-industrial-cascp-cascip',
    name: 'Manômetro Industrial CASCP/CASCIP',
    model: 'CASCP/CASCIP',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-capsular',
    shortDescription:
      'Manômetro industrial com contato elétrico para acionamento de alarmes e controle automático de pressão.',
    fullDescription:
      'Manômetro capsular para montagem em painel com fixação traseira por garras. As séries CASCP e CASCIP são indicadas para monitoramento de gases compatíveis com ligas de cobre, com versão em aço inox para ambientes sujeitos a vapores.',
    specs: [
      { label: 'Diâmetros nominais', value: '62 e 100 mm' },
      { label: 'Caixa', value: 'CASCP em aço carbono pintado; CASCIP em aço inox AISI 304' },
      { label: 'Mecanismo', value: 'Latão' },
      { label: 'Elemento sensor', value: 'Cápsula em ligas de cobre' },
      { label: 'Fixação', value: 'Garras para painel' },
      { label: 'Faixa de pressão', value: '62 mm: 60 a 600 mbar; 100 mm: 15 a 600 mbar' },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
    ],
    image: '/images/products/manometro-industrial-cascp-cascip.jpg',
    datasheet: '/pdfs/produtos/Pressao/Manometro Capsular/manometro-industrial-CASCP-CASCIP.pdf',
  },
  {
    slug: 'manometro-industrial-sasci',
    name: 'Manômetro Industrial SASCI',
    model: 'SASCI',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-capsular',
    shortDescription:
      'Manômetro industrial capsular de aço inox com alta resistência à corrosão para processos químicos.',
    fullDescription:
      'Manômetro capsular em aço inox para baixa pressão, com boa resistência à corrosão e versatilidade de montagem. É indicado para meios gasosos de baixa pressão e ambientes sujeitos a vapores.',
    specs: [
      { label: 'Diâmetros nominais', value: '62, 100 e 160 mm' },
      { label: 'Caixa e flange', value: 'Aço inox AISI 304' },
      { label: 'Mecanismo', value: 'Latão' },
      { label: 'Elemento sensor', value: 'Cápsula em ligas de cobre; opcional em aço inox' },
      { label: 'Faixa de pressão', value: '62 mm: 60 a 600 mbar; 100/160 mm: 15 a 600 mbar' },
      {
        label: 'Temperatura',
        value: 'Ambiente/processo: -20 a +60 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Visor', value: 'Policarbonato em 62 mm; vidro plano em 100 e 160 mm' },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['62mm', '100mm', '160mm'] }],
    image: '/images/products/manometro-industrial-sasci.jpg',
    datasheet:
      '/pdfs/produtos/Pressao/Manometro Capsular/manometro-industrial-SASCI-62-100-160.pdf',
  },

  // =============================================
  // INSTRUMENTOS DE PRESSÃO - Manômetro Petroquímico
  // =============================================
  {
    slug: 'manometro-petroquimico-cafn-114',
    name: 'Manômetro Petroquímico CAFN 114',
    model: 'CAFN 114',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-petroquimico',
    shortDescription:
      'Manômetro petroquímico com caixa de aço inox e movimento de latão para aplicações em refinarias e plantas petroquímicas.',
    fullDescription:
      'Manômetro petroquímico com caixa em fenol tipo torre e internos em aço inox, indicado para montagem local ou em superfície. É aplicado em ambientes e fluidos corrosivos compatíveis, processos químicos, petroquímicos e gases especiais.',
    specs: [
      { label: 'Diâmetro nominal', value: '114 mm' },
      { label: 'Caixa', value: 'Fenol' },
      { label: 'Mecanismo', value: 'Aço inox AISI 304' },
      { label: 'Soquete/corpo', value: 'Aço inox AISI 316' },
      { label: 'Elemento sensor', value: 'Bourdon em aço inox AISI 316' },
      {
        label: 'Faixa de pressão',
        value: 'Manômetros de 0,6 a 1000 bar; vacuômetros; manovacuômetros até 30 bar',
      },
      {
        label: 'Temperatura',
        value: 'Ambiente: -20 a +60 °C; processo: -20 a +120 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Classe de exatidão', value: 'ABNT Classe A1' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['114mm'] }],
    image: '/images/products/manometro-petroquimico-cafn-114.png',
    datasheet: '/pdfs/produtos/Pressao/Manometro Petroquimico/manometro-petroquimico-CAFN114.pdf',
  },
  {
    slug: 'manometro-petroquimico-cai',
    name: 'Manômetro Petroquímico CAI',
    model: 'CAI',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-petroquimico',
    shortDescription:
      'Manômetro petroquímico todo em aço inox conforme ASME B40.1, indicado para fluidos corrosivos e alta temperatura.',
    fullDescription:
      'Manômetro petroquímico todo em aço inox para ambientes e fluidos corrosivos compatíveis, processos químicos e petroquímicos, indústria alimentícia e gases especiais. A série CAIG permite enchimento antivibração.',
    specs: [
      { label: 'Diâmetros nominais', value: '100, 114 e 160 mm' },
      { label: 'Caixa, anel e flange', value: 'Aço inox AISI 304' },
      { label: 'Mecanismo', value: 'Aço inox AISI 304' },
      { label: 'Soquete/corpo', value: 'Aço inox AISI 316' },
      { label: 'Elemento sensor', value: 'Bourdon em aço inox AISI 316' },
      {
        label: 'Faixa de pressão',
        value: 'Manômetros de 0,6 a 1000 bar; vacuômetros; manovacuômetros até 30 bar',
      },
      {
        label: 'Temperatura',
        value: 'Ambiente: -20 a +60 °C; processo: -20 a +120 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Classe de exatidão', value: 'ABNT Classe A1' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['100mm', '114mm', '160mm'] }],
    image: '/images/products/manometro-petroquimico-cai.png',
    datasheet:
      '/pdfs/produtos/Pressao/Manometro Petroquimico/manometro-petroquimico-CAI-100-114-160.pdf',
  },
  {
    slug: 'manometro-petroquimico-cai-52-62',
    name: 'Manômetro Petroquímico CAI 52/62',
    model: 'CAI 52/62',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-petroquimico',
    shortDescription:
      'Manômetro petroquímico compacto todo em aço inox para instalações com restrição de espaço.',
    fullDescription:
      'Manômetro petroquímico compacto em aço inox, para aplicações em ambientes e fluidos corrosivos compatíveis. Atende processos químicos, petroquímicos, indústria alimentícia e gases especiais em montagens de 52 e 62 mm.',
    specs: [
      { label: 'Diâmetros nominais', value: '52 e 62 mm' },
      { label: 'Caixa', value: 'Aço inox AISI 304' },
      { label: 'Mecanismo', value: 'Aço inox AISI 304' },
      { label: 'Soquete/corpo', value: 'Aço inox AISI 316' },
      { label: 'Elemento sensor', value: 'Bourdon em aço inox AISI 316' },
      {
        label: 'Faixa de pressão',
        value: 'Manômetros de 1 a 400 bar; vacuômetros; manovacuômetros até 30 bar',
      },
      {
        label: 'Temperatura',
        value: 'Ambiente: -20 a +60 °C; processo: -20 a +120 °C; armazenamento: -40 a +70 °C',
      },
      { label: 'Classe de exatidão', value: 'ABNT Classe B; opcional Classe A' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['52mm', '62mm'] }],
    image: '/images/products/manometro-petroquimico-cai-52-62.jpg',
    datasheet: '/pdfs/produtos/Pressao/Manometro Petroquimico/manometro-petroquimico-CAI5262.pdf',
  },
  {
    slug: 'manometro-petroquimico-caif-114',
    name: 'Manômetro Petroquímico CAIF 114',
    model: 'CAIF 114',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-petroquimico',
    shortDescription:
      'Manômetro petroquímico com flange sanitária para instalações em processos de alimentos e farmacêuticos.',
    fullDescription:
      'Manômetro petroquímico em aço inox com frente sólida, oferecendo maior segurança ao operador em caso de rompimento do elemento sensor. É indicado para ambientes corrosivos, processos químicos, petroquímicos, alimentícios e gases especiais.',
    specs: [
      { label: 'Diâmetro nominal', value: '114 mm' },
      { label: 'Caixa, anel e flange', value: 'Aço inox AISI 304' },
      { label: 'Mecanismo', value: 'Aço inox AISI 304' },
      { label: 'Soquete/corpo', value: 'Aço inox AISI 316' },
      { label: 'Elemento sensor', value: 'Bourdon em aço inox AISI 316' },
      { label: 'Visor', value: 'Vidro plano laminado' },
      {
        label: 'Faixa de pressão',
        value: 'Manômetros de 0,6 a 1000 bar; vacuômetros; manovacuômetros até 30 bar',
      },
      { label: 'Classe de exatidão', value: 'ABNT Classe A1' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['114mm'] }],
    image: '/images/products/manometro-petroquimico-caif-114.jpg',
    datasheet: '/pdfs/produtos/Pressao/Manometro Petroquimico/manometro-petroquimico-CAIF114.pdf',
  },
  {
    slug: 'manometro-petroquimico-caip',
    name: 'Manômetro Petroquímico CAIP',
    model: 'CAIP',
    category: 'instrumentos-de-pressao',
    subCategory: 'manometro-petroquimico',
    shortDescription:
      'Manômetro petroquímico com diafragma de separação em aço inox para fluidos viscosos, pastosos e corrosivos.',
    fullDescription:
      'Manômetro petroquímico para montagem em painel, com fixação traseira por garras e porcas borboleta. É construído em aço inox para ambientes e fluidos corrosivos compatíveis, com opção de enchimento antivibração.',
    specs: [
      { label: 'Diâmetros nominais', value: '62, 100 e 114 mm' },
      { label: 'Caixa e anel', value: 'Aço inox AISI 304' },
      { label: 'Mecanismo', value: 'Aço inox AISI 304' },
      { label: 'Soquete/corpo', value: 'Aço inox AISI 316' },
      { label: 'Elemento sensor', value: 'Bourdon em aço inox AISI 316' },
      { label: 'Faixa de pressão', value: '62 mm: 1 a 400 bar; 100/114 mm: 0,6 a 1000 bar' },
      {
        label: 'Classe de exatidão',
        value: '62 mm: ABNT Classe B, opcional A; 100/114 mm: ABNT Classe A1',
      },
      { label: 'Enchimento', value: 'Glicerina bidestilada na série CAIPG' },
    ],
    variantOptions: [{ name: 'Diâmetro do mostrador', values: ['62mm', '100mm', '114mm'] }],
    image: '/images/products/manometro-petroquimico-caip.png',
    datasheet:
      '/pdfs/produtos/Pressao/Manometro Petroquimico/manometro-petroquimico-CAIP-62-100-114.pdf',
  },

  // =============================================
  // INSTRUMENTOS DE PRESSÃO - Pressostatos
  // =============================================
  {
    slug: 'pressostato-ca55',
    name: 'Pressostato CA55',
    model: 'CA55',
    category: 'instrumentos-de-pressao',
    subCategory: 'pressostato',
    shortDescription:
      'Pressostato industrial de alta confiabilidade para acionamento de alarmes e controle automático em sistemas de pressão.',
    fullDescription:
      'Pressostato da série 55 para fluidos de refrigeração, ar e água até 120 °C. Seu acionamento por micro switch garante chaveamento elétrico confiável, com suporte de montagem standard e contatos SPDT.',
    specs: [
      { label: 'Aplicação', value: 'Fluidos de refrigeração, ar e água' },
      { label: 'Temperatura do fluido', value: 'Até 120 °C' },
      { label: 'Acionamento', value: 'Micro switch' },
      { label: 'Contatos elétricos', value: 'SPDT, duplo contato' },
      { label: 'Montagem', value: 'Suporte de montagem fornecido como padrão' },
      { label: 'Conexões', value: 'Outras opções de rosca sob consulta' },
    ],
    image: '/images/products/pressostato-ca55.png',
    datasheet: '/pdfs/produtos/Pressao/Pressostato/PRESSOSTATO CA55.pdf',
  },
  {
    slug: 'pressostato-spdc',
    name: 'Pressostato SPDC',
    model: 'SPDC',
    category: 'instrumentos-de-pressao',
    subCategory: 'pressostato',
    shortDescription:
      'Pressostato diferencial para monitoramento da diferença de pressão entre dois pontos de um processo.',
    fullDescription:
      'Pressostato robusto e compacto para ambientes críticos e sistemas hidráulicos. O sistema de molas internas permite ajuste preciso em qualquer ponto da faixa de pressão.',
    specs: [
      { label: 'Aplicação', value: 'óleo hidráulico em unidades e sistemas hidráulicos' },
      { label: 'Construção', value: 'Robusta e compacta' },
      { label: 'Ajuste', value: 'Sistema de molas internas com ajuste preciso de set point' },
      { label: 'Faixa exemplo', value: 'Modelo 3: 26 a 365 bar' },
      { label: 'Função', value: 'Controle e monitoramento de pressão em ambientes críticos' },
    ],
    image: '/images/products/pressostato-spdc.png',
    datasheet: '/pdfs/produtos/Pressao/Pressostato/PRESSOSTATO SPDC.pdf',
  },
  {
    slug: 'pressostato-stp',
    name: 'Pressostato STP',
    model: 'STP',
    category: 'instrumentos-de-pressao',
    subCategory: 'pressostato',
    shortDescription:
      'Pressostato de membrana para aplicações em fluidos viscosos, pastosos e processos com sólidos em suspensão.',
    fullDescription:
      'Pressostato para proteção de equipamentos e processos contra sobrepressão ou subpressão. Utiliza sensor, ajuste de set point e chave de duas posições, sendo aplicado em controle liga/desliga e alarmes por pressão.',
    specs: [
      { label: 'Caixa', value: 'Alumínio injetado com acabamento epóxi preto e vedação IP65' },
      { label: 'Montagem', value: 'Local, superfície ou opcional em tubulação de 2 in' },
      { label: 'Conexão elétrica', value: '1/2 in NPT fêmea; 3/4 in opcional' },
      {
        label: 'Sistema sensor',
        value: 'Diafragma Buna N; opcionais Viton, Teflon, Inox 316 ou Monel',
      },
      { label: 'Faixas de pressão', value: '-30 inHg até 400 kgf/cm²' },
      { label: 'Set point', value: 'Ajuste entre 10% e 90% da faixa nominal' },
      { label: 'Sobrepressão', value: 'Até 2 vezes a pressão da faixa' },
      {
        label: 'Temperatura',
        value: 'Ambiente -22 a 65 °C; processo -18 a 150 °C conforme diafragma',
      },
    ],
    image: '/images/products/pressostato-stp.png',
    datasheet: '/pdfs/produtos/Pressao/Pressostato/PRESSOSTATO STP.pdf',
  },
  {
    slug: 'pressostato-serie-0570',
    name: 'Pressostato Série 0570',
    model: 'Série 0570',
    category: 'instrumentos-de-pressao',
    subCategory: 'pressostato',
    shortDescription:
      'Pressostato eletrônico série 0570 com display digital e ajuste de set-point para controle preciso de pressão.',
    fullDescription:
      'Pressostato eletrônico com sensor cerâmico e corpo em alumínio/zinco die-cast. Possui programação por teclado, retardo de acionamento, memória de pico e código de proteção contra adulteração.',
    specs: [
      { label: 'Corpo', value: 'Alumínio e zinco die-cast' },
      { label: 'Sensor', value: 'Cerâmico de alta tecnologia' },
      { label: 'Alimentação', value: '12 a 30 VDC' },
      { label: 'Sobrepressão', value: 'Até 20/150/600, conforme faixa' },
      { label: 'Programação', value: 'Via teclado' },
      { label: 'Recursos', value: 'Retardo no acionamento, memória de pico e código de bloqueio' },
    ],
    image: '/images/products/pressostato-serie-0570.png',
    datasheet: '/pdfs/produtos/Pressao/Pressostato/PRESSOSTATO_serie-0570.pdf',
  },
  {
    slug: 'pressostato-0161-0162',
    name: 'Pressostato 0161/0162',
    model: '0161/0162',
    category: 'instrumentos-de-pressao',
    subCategory: 'pressostato',
    shortDescription:
      'Pressostatos modelos 0161 e 0162 para monitoramento e controle de pressão em sistemas industriais.',
    fullDescription:
      'Pressostato de diafragma/pistão com corpo em alumínio, conector similar ao DIN EN175301 e duplo contato em prata. Indicado para controle elétrico de pressão em sistemas industriais.',
    specs: [
      { label: 'Tipo', value: 'Diafragma/pistão' },
      { label: 'Tensão', value: '250 V' },
      { label: 'Corpo', value: 'Alumínio' },
      { label: 'Conector', value: 'Similar ao DIN EN175301 / DIN 43650' },
      { label: 'Contatos', value: 'Duplo contato em prata' },
      { label: 'Sobrepressão', value: 'Até 200/600 bar' },
      { label: 'Diferencial', value: 'Hysteresis ajustável' },
    ],
    image: '/images/products/pressostato-0161-0162.png',
    datasheet: '/pdfs/produtos/Pressao/Pressostato/PRESSOSTATO-0161-0162.pdf',
  },
  {
    slug: 'pressostato-0175',
    name: 'Pressostato 0175',
    model: '0175',
    category: 'instrumentos-de-pressao',
    subCategory: 'pressostato',
    shortDescription:
      'Pressostato modelo 0175 com alto grau de proteção para aplicações industriais severas.',
    fullDescription:
      'Pressostato de diafragma com corpo em alumínio, conector similar ao DIN EN175301 e duplo contato em prata. É indicado para controle de pressão em aplicações industriais com sobrepressão até 25 bar.',
    specs: [
      { label: 'Tipo', value: 'Diafragma' },
      { label: 'Tensão', value: '250 V' },
      { label: 'Corpo', value: 'Alumínio' },
      { label: 'Conector', value: 'Similar ao DIN EN175301 / DIN 43650' },
      { label: 'Contatos', value: 'Duplo contato em prata' },
      { label: 'Sobrepressão', value: 'Até 25 bar' },
    ],
    image: '/images/products/pressostato-0175.png',
    datasheet: '/pdfs/produtos/Pressao/Pressostato/PRESSOSTATO-0175.pdf',
  },

  // =============================================
  // INSTRUMENTOS DE PRESSÃO - Transmissores de Pressão
  // =============================================
  {
    slug: 'transmissor-de-pressao',
    name: 'Transmissor de Pressão',
    category: 'instrumentos-de-pressao',
    subCategory: 'transmissor-de-pressao',
    shortDescription:
      'Transmissor de pressão industrial com saída 4-20 mA para integração com sistemas de controle e automação.',
    fullDescription:
      'Transmissor de pressão Cas Therm para aplicações industriais severas, com medição confiável, sinal 4-20 mA, versões absoluta e relativa e ampla faixa de conexões elétricas e de pressão.',
    specs: [
      { label: 'Range', value: '-1 a 1200 bar' },
      { label: 'Saída', value: '4-20 mA' },
      { label: 'Precisão', value: '0,1%, 0,25% ou 0,5%, conforme faixa' },
      { label: 'Sobrecarga', value: '1,5 x SPAN típico' },
      { label: 'Alimentação', value: '12 a 36 Vcc, típica 24 Vcc' },
      { label: 'Temperatura operacional', value: '-25 a +60 °C' },
      { label: 'Sensor', value: 'Aço inox 316L' },
      { label: 'Conexão elétrica', value: 'Conector DIN 43650' },
    ],
    image: '/images/products/transmissor-de-pressao.png',
    datasheet: '/pdfs/produtos/Pressao/Transmissor de Pressão/TRANSMISSAO DE PRESSAO.pdf',
  },
  {
    slug: 'transmissor-pressao-ca-1000',
    name: 'Transmissor de Pressão CA 1000',
    model: 'CA 1000',
    category: 'instrumentos-de-pressao',
    subCategory: 'transmissor-de-pressao',
    shortDescription:
      'Transmissor de pressão eletrônico modelo CA 1000 com alta precisão para processos industriais.',
    fullDescription:
      'Transmissor de pressão para processo em invólucro de aço inoxidável, indicado para indústrias petroquímicas, químicas, alimentícias, sistemas hidráulicos e pneumáticos, refrigeração, compressores, controle de vazão e medição de nível.',
    specs: [
      { label: 'Grau de proteção', value: 'IP65/IP67 conforme ABNT' },
      { label: 'Invólucro', value: 'Aço inox AISI 304; opcional AISI 316' },
      { label: 'Sensor', value: 'Piezorresistivo' },
      { label: 'Faixa de pressão', value: '-1 a 1000 bar; baixa pressão até 100 mbar' },
      { label: 'Sobrepressão', value: '2 x fundo de escala' },
      { label: 'Saída', value: '4 a 20 mA; opcionais 0 a 5 Vcc, 0 a 10 Vcc ou 0 a 20 Vcc' },
      { label: 'Precisão', value: '0,5% F.E.; opcional 0,20% F.E.' },
      { label: 'Alimentação', value: '12 a 30 Vcc' },
    ],
    image: '/images/products/transmissor-pressao-ca-1000.png',
    datasheet: '/pdfs/produtos/Pressao/Transmissor de Pressão/TRANSMISSAO DE PRESSAO CA 1000.pdf',
  },
  {
    slug: 'transmissor-pressao-ca1000h',
    name: 'Transmissor de Pressão CA1000H',
    model: 'CA1000H',
    category: 'instrumentos-de-pressao',
    subCategory: 'transmissor-de-pressao',
    shortDescription:
      'Transmissor de pressão CA1000H com alta resistência a sobrecargas e picos de pressão.',
    fullDescription:
      'Transmissor de pressão robusto em aço inox AISI 304 para aplicações de processo, com saída 0 a 10 Vcc, faixa configurável e ajuste de zero e span.',
    specs: [
      { label: 'Invólucro', value: 'Aço inox AISI 304' },
      { label: 'Faixa de pressão', value: '0,1 a 1500 bar, a definir' },
      { label: 'Saída', value: '0 a 10 Vcc' },
      { label: 'Alimentação', value: '22 a 36 Vcc, típica 24 Vcc' },
      { label: 'Conexão elétrica', value: '2 fios ou 3 fios' },
      { label: 'Temperatura de operação', value: '-25 a +85 °C' },
      { label: 'Precisão', value: '0,50% do SPAN, classe A2' },
      { label: 'Peso', value: '0,2 kg' },
    ],
    image: '/images/products/transmissor-pressao-ca1000h.png',
    datasheet: '/pdfs/produtos/Pressao/Transmissor de Pressão/TRANSMISSAO DE PRESSAO CA1000H.pdf',
  },
  {
    slug: 'transmissor-pressao-sanitario-rtp420-s',
    name: 'Transmissor de Pressão Sanitário RTP420-S',
    model: 'RTP420-S',
    category: 'instrumentos-de-pressao',
    subCategory: 'transmissor-de-pressao',
    shortDescription:
      'Transmissor de pressão sanitário com conexão Tri-Clamp para indústrias alimentícia, farmacêutica e de bebidas.',
    fullDescription:
      'Transmissor de pressão sanitário com invólucro em aço inox e sensor piezorresistivo, indicado para aplicações que exigem construção sanitária e controle de pressão em processos alimentícios, farmacêuticos e de bebidas.',
    specs: [
      { label: 'Grau de proteção', value: 'IP65 conforme ABNT' },
      { label: 'Invólucro', value: 'Aço inox AISI 304; opcional AISI 316' },
      { label: 'Sensor', value: 'Piezorresistivo' },
      { label: 'Sobrepressão', value: '2 x fundo de escala' },
      { label: 'Precisão do sinal', value: '< 0,1%' },
      { label: 'Temperatura do fluido', value: '-10 a +100 °C; opcional até 250 °C' },
      { label: 'Precisão', value: '0,5% F.E.; opcionais 0,25% F.E. ou 0,1% F.E.' },
      { label: 'Alimentação', value: '18 a 35 Vcc' },
    ],
    image: '/images/products/transmissor-pressao-sanitario-rtp420-s.png',
    datasheet:
      '/pdfs/produtos/Pressao/Transmissor de Pressão/TRANSMISSAO DE PRESSAO SANITARIO RTP420-S.pdf',
  },
  {
    slug: 'transmissor-pressao-satp20',
    name: 'Transmissor de Pressão SATP20',
    model: 'SATP20',
    category: 'instrumentos-de-pressao',
    subCategory: 'transmissor-de-pressao',
    shortDescription:
      'Transmissor de pressão todo em aço inox com saída 4-20 mA para aplicações em fluidos corrosivos.',
    fullDescription:
      'Transmissor de pressão com diafragma de aço inoxidável perfilhado, preciso e confiável para ampla gama de escalas de pressão em ar, óleo, água e outros fluidos compatíveis.',
    specs: [
      { label: 'Aplicação', value: 'Medição de pressão de ar, óleo, água e fluidos compatíveis' },
      { label: 'Diafragma', value: 'Aço inoxidável' },
      {
        label: 'Faixa de medição',
        value: '-760 mmHg a 0/30 kg/cm² A; 0 a 0,2/350 kg/cm² G; 0 a 1,0/30 kg/cm² Abs',
      },
      { label: 'Sobrepressão', value: '300% do valor máximo' },
      { label: 'Alimentação', value: '15 a 35 VDC' },
      { label: 'Saída', value: '4 a 20 mA DC, 2 fios' },
      { label: 'Precisão', value: '±0,3% FS' },
      { label: 'Peso', value: 'Aproximadamente 320 g' },
    ],
    image: '/images/products/transmissor-pressao-satp20.png',
    datasheet: '/pdfs/produtos/Pressao/Transmissor de Pressão/TRANSMISSAO DE PRESSAO SATP20.pdf',
  },

  // =============================================
  // TERMÔMETROS BIMETÁLICOS
  // =============================================
  {
    slug: 'termometro-bimetalico-vts-160',
    name: 'Termômetro Bimetálico VTS',
    brand: 'VICAL',
    model: 'VTS',
    category: 'termometros-bimetalicos',
    shortDescription:
      'Termômetro bimetálico para indicação local de temperatura em tubulações e tanques industriais.',
    image: '/images/products/termometro-bimetalico-vts-160.png',
    datasheet:
      '/pdfs/produtos/Termometro bimetalico/termometro-bimetalico-serie-vts-100-160-200.pdf',
    featured: true,
    fullDescription:
      'Termômetro bimetálico industrial da linha VTS para indicação local de temperatura em processos e equipamentos diversos, como fornos industriais e caldeiras. Possui caixa em aço carbono, visor de vidro e haste/conexão em latão.',
    specs: [
      { label: 'Diâmetros nominais', value: '100, 160 e 200 mm' },
      {
        label: 'Caixa',
        value: 'Aço carbono com pintura epóxi preta; opcional aço inox AISI 304 exceto 200 mm',
      },
      { label: 'Visor', value: 'Vidro plano' },
      {
        label: 'Haste',
        value: 'Latão Ø1/4 in ou Ø3/8 in; opcional aço inox AISI 316 para Ø1/4 in',
      },
      { label: 'Elemento sensor', value: 'Bimetal helicoidal' },
      { label: 'Faixa de temperatura', value: '-30 °C a +500 °C' },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
      { label: 'Temperatura de armazenamento', value: '-7 a +65 °C' },
    ],
    variantOptions: [
      { name: 'Diâmetro do mostrador', values: ['100mm', '160mm', '200mm'] },
      {
        name: 'Comprimento da haste',
        values: ['50mm', '100mm', '150mm', '200mm', '300mm', '500mm', '700mm'],
      },
      {
        name: 'Faixa de medição',
        values: [
          '-30 a +60°C',
          '0 a +100°C',
          '0 a +200°C',
          '0 a +300°C',
          '0 a +400°C',
          '0 a +500°C',
        ],
      },
      { name: 'Conexão', values: ['1/4" NPT', '3/8" NPT', '1/2" NPT', 'BSP', 'Liso'] },
    ],
  },
  {
    slug: 'termometro-bimetalico-vts-52-62-80',
    name: 'Termômetro Bimetálico VTS 52/62/80',
    brand: 'VICAL',
    model: 'VTS 52/62/80',
    category: 'termometros-bimetalicos',
    shortDescription:
      'Termômetro bimetálico compacto série VTS para indicação local de temperatura em tubulações e reservatórios.',
    fullDescription:
      'Termômetro bimetálico compacto da linha VTS para indicação local de temperatura em tubulações, reservatérios e equipamentos industriais. Oferece boa precisão, repetibilidade, durabilidade e baixo custo.',
    specs: [
      { label: 'Diâmetros nominais', value: '52, 62 e 80 mm' },
      { label: 'Caixa e anel', value: 'Aço carbono com pintura epóxi preta' },
      { label: 'Flange', value: 'Latão cromado; opcional aço carbono preto' },
      { label: 'Visor', value: 'Vidro plano' },
      {
        label: 'Haste',
        value: 'Latão Ø1/4 in ou Ø3/8 in; opcional aço inox AISI 316 para Ø1/4 in',
      },
      { label: 'Elemento sensor', value: 'Bimetal helicoidal' },
      { label: 'Faixa de temperatura', value: '-30 °C a +500 °C' },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
    ],
    variantOptions: [
      { name: 'Diâmetro do mostrador', values: ['52mm', '62mm', '80mm'] },
      { name: 'Comprimento da haste', values: ['50mm', '100mm', '150mm', '200mm', '300mm'] },
      {
        name: 'Faixa de medição',
        values: ['-30 a +60°C', '0 a +100°C', '0 a +200°C', '0 a +300°C'],
      },
      { name: 'Conexão', values: ['1/4" NPT', '3/8" NPT', '1/2" NPT', 'BSP', 'Liso'] },
    ],
    image: '/images/products/termometro-bimetalico-vts-52-62-80.png',
    datasheet: '/pdfs/produtos/Termometro bimetalico/termometro-bimetalico-serie-vts-52-62-80.pdf',
  },
  {
    slug: 'termometro-bimetalico-petroquimico',
    name: 'Termômetro Bimetálico Petroquímico',
    category: 'termometros-bimetalicos',
    shortDescription:
      'Termômetro bimetálico de alto desempenho para aplicações petroquímicas e de refino, com construção todo em aço inox.',
    fullDescription:
      'Termômetro bimetálico petroquímico em aço inox, ideal para ambientes e fluidos corrosivos compatíveis, processos químicos e petroquímicos, indústrias alimentícia, papel e celulose e gases especiais.',
    specs: [
      { label: 'Diâmetros nominais', value: '100, 114 e 160 mm' },
      { label: 'Caixa e anel', value: 'Aço inox AISI 304' },
      { label: 'Haste e adaptador', value: 'Aço inox AISI 316' },
      { label: 'Conexões', value: '1/2 in NPT ou 1/2 in BSP; outras sob consulta' },
      { label: 'Elemento sensor', value: 'Bimetal helicoidal' },
      { label: 'Faixa de temperatura', value: '-30 °C a +500 °C' },
      { label: 'Classe de exatidão', value: 'ABNT Classe A; opcional Classe A1' },
      { label: 'Enchimento', value: 'Glicerina ou silicone na série VTIG' },
    ],
    image: '/images/products/termometro-bimetalico-petroquimico.png',
    datasheet: '/pdfs/produtos/Termometro bimetalico/termometro-bimetalico-petroquimico.pdf',
  },
  {
    slug: 'termometro-capilar',
    name: 'Termômetro Capilar',
    category: 'termometros-bimetalicos',
    shortDescription:
      'Termômetro capilar para indicação remota de temperatura, com bulbo sensível e tubo capilar flexível.',
    fullDescription:
      'Termômetro capilar para controle de temperatura em pontos remotos ao painel de comando. O sistema mede a variação de pressão gerada pela oscilação de temperatura entre o bulbo sensor e o bourdon.',
    specs: [
      { label: 'Diâmetros nominais', value: '52, 60, 62, 80, 100 e 96 x 96 mm' },
      { label: 'Elemento sensor', value: 'Bulbo em cobre' },
      { label: 'Capilar', value: 'Revestido em PVC, comprimento de 0,80 m a 5,00 m' },
      { label: 'Faixas de temperatura', value: '+40/+100 °C ou +40/+120 °C' },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
      { label: 'Caixa', value: 'Aço carbono com pintura epóxi preta' },
      { label: 'Visor', value: 'Vidro plano; policarbonato cristal em 52 mm com capa inox' },
      { label: 'Poço de proteção', value: 'Incluso, em latão; outros materiais sob consulta' },
    ],
    image: '/images/products/termometro-capilar.png',
    datasheet: '/pdfs/produtos/Termometro bimetalico/termometro-capilar.pdf',
  },
  {
    slug: 'termometro-expansao',
    name: 'Termômetro de Expansão',
    category: 'termometros-bimetalicos',
    shortDescription:
      'Termômetro de expansão de gás para medição de temperatura em processos industriais com alta repetibilidade.',
    fullDescription:
      'Termômetro de expansão para controle de temperatura em pontos remotos ao local do instrumento. Utiliza bulbo e capilar, medindo a variação de pressão causada pela temperatura do fluido.',
    specs: [
      { label: 'Diâmetros nominais', value: '52, 62, 80 e 100 mm' },
      { label: 'Elemento sensor', value: 'Bulbo em cobre' },
      { label: 'Capilar', value: 'Revestido em PVC, comprimento de 0,80 m a 5,00 m' },
      { label: 'Faixas de temperatura', value: '+40/+100 °C ou +40/+120 °C' },
      { label: 'Classe de exatidão', value: 'ABNT Classe B' },
      { label: 'Caixa', value: 'Aço carbono com pintura epóxi preta' },
      { label: 'Flange', value: 'Latão cromado em 52, 62 e 80 mm; aço carbono preto em 100 mm' },
      { label: 'Poço de proteção', value: 'Incluso, em latão; outros materiais sob consulta' },
    ],
    image: '/images/products/termometro-expansao.png',
    datasheet: '/pdfs/produtos/Termometro bimetalico/termometro-expansao.pdf',
  },
  {
    slug: 'termometro-petroquimico-every-angle',
    name: 'Termômetro Petroquímico Every Angle',
    category: 'termometros-bimetalicos',
    shortDescription:
      'Termômetro bimetálico petroquímico com mostrador giratório every angle para leitura em qualquer posição de instalação.',
    fullDescription:
      'Termômetro bimetálico petroquímico em aço inox com configuração Every Angle para facilitar a leitura em diferentes posições de instalação. É indicado para ambientes corrosivos, processos químicos e petroquímicos, alimentos, papel e celulose e gases especiais.',
    specs: [
      { label: 'Diâmetro nominal', value: '114 mm' },
      { label: 'Caixa e anel', value: 'Aço inox AISI 304' },
      { label: 'Haste e adaptador', value: 'Aço inox AISI 316' },
      { label: 'Conexões', value: '1/2 in NPT ou 1/2 in BSP; outras sob consulta' },
      { label: 'Elemento sensor', value: 'Bimetal helicoidal' },
      { label: 'Faixa de temperatura', value: '-30 °C a +500 °C' },
      {
        label: 'Classe de exatidão',
        value: 'ABNT Classe A; opcional Classe A1, acrescido de 0,5% pelo ajuste de ângulo',
      },
      { label: 'Enchimento', value: 'Glicerina ou silicone na série FTIG' },
    ],
    image: '/images/products/termometro-petroquimico-every-angle.png',
    datasheet: '/pdfs/produtos/Termometro bimetalico/termometro-petroquimico-every-angle.pdf',
  },
];

/**
 * Busca um produto pelo slug.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * Filtra produtos por categoria principal.
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

/**
 * Filtra produtos por subcategoria.
 */
export function getProductsBySubCategory(subCategorySlug: string): Product[] {
  return products.filter((p) => p.subCategory === subCategorySlug);
}

/**
 * Retorna apenas os produtos marcados como destaque.
 */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
