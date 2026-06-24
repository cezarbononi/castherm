import type { Category, SubCategory } from '@/types';

/**
 * Categorias e subcategorias de produtos da Cas Therm.
 *
 * Estrutura hierárquica real do catálogo:
 *
 * 📁 Instrumentos de Pressão (8 subcategorias)
 *    ├── Manômetro Capsular
 *    ├── Manômetro Petroquímico
 *    ├── Manômetro Diferencial
 *    ├── Manômetro Padrão (Laboratório)
 *    ├── Pressostato
 *    ├── Transmissor de Pressão
 *    ├── Bomba de Calibração
 *    └── Medidor de Contato Elétrico
 *
 * 📁 Termômetros Bimetálicos (sem subcategorias)
 *
 * 📁 Segurança do Trabalho (guarda-chuva de medição ambiental SST)
 *    ├── Anemômetros
 *    ├── Decibelímetros
 *    └── Luxímetros
 */

// =====================================================
// SUBCATEGORIAS — Instrumentos de Pressão
// =====================================================

export const pressaoSubCategories: SubCategory[] = [
  {
    slug: 'manometro-capsular',
    name: 'Manômetro Capsular',
    shortDescription:
      'Manômetros de baixa pressão com elemento sensor capsular, ideais para gases e vapores limpos.',
    icon: 'Gauge',
    parentSlug: 'instrumentos-de-pressao',
  },
  {
    slug: 'manometro-petroquimico',
    name: 'Manômetro Petroquímico',
    shortDescription:
      'Manômetros robustos para aplicações severas em indústrias petroquímicas e de processos.',
    icon: 'Gauge',
    parentSlug: 'instrumentos-de-pressao',
  },
  {
    slug: 'manometro-diferencial',
    name: 'Manômetro Diferencial',
    shortDescription:
      'Instrumentos para medição da diferença de pressão entre dois pontos do processo.',
    icon: 'ArrowLeftRight',
    parentSlug: 'instrumentos-de-pressao',
  },
  {
    slug: 'manometro-padrao',
    name: 'Manômetro Padrão (Laboratório)',
    shortDescription: 'Alta precisão para calibração e referência em laboratórios metrológicos.',
    icon: 'FlaskConical',
    parentSlug: 'instrumentos-de-pressao',
  },
  {
    slug: 'pressostato',
    name: 'Pressostato',
    shortDescription: 'Chaves de pressão para controle e proteção de sistemas de processo.',
    icon: 'ToggleRight',
    parentSlug: 'instrumentos-de-pressao',
  },
  {
    slug: 'transmissor-de-pressao',
    name: 'Transmissor de Pressão',
    shortDescription: 'Conversores pressão/sinal para integração com CLPs e sistemas de automação.',
    icon: 'Radio',
    parentSlug: 'instrumentos-de-pressao',
  },
  {
    slug: 'bomba-de-calibracao',
    name: 'Bomba de Calibração',
    shortDescription:
      'Equipamentos portáteis para geração de pressão em campo, usados na calibração de manômetros.',
    icon: 'Wrench',
    parentSlug: 'instrumentos-de-pressao',
  },
  {
    slug: 'medidor-de-contato-eletrico',
    name: 'Medidor de Contato Elétrico',
    shortDescription:
      'Manômetros com contatos elétricos integrados para alarme ou controle de pressão.',
    icon: 'Zap',
    parentSlug: 'instrumentos-de-pressao',
  },
];

// =====================================================
// SUBCATEGORIAS — Segurança do Trabalho
// =====================================================

export const sstSubCategories: SubCategory[] = [
  {
    slug: 'anemometros',
    name: 'Anemômetros',
    shortDescription:
      'Equipamentos para medição de velocidade e vazão do ar em ambientes industriais e prediais.',
    icon: 'Wind',
    parentSlug: 'seguranca-do-trabalho',
  },
  {
    slug: 'decibelimetros',
    name: 'Decibelímetros',
    shortDescription:
      'Medidores de nível de pressão sonora para avaliação de ruído ocupacional e ambiental.',
    icon: 'Volume2',
    parentSlug: 'seguranca-do-trabalho',
  },
  {
    slug: 'luximetros',
    name: 'Luxímetros',
    shortDescription:
      'Instrumentos para medição de iluminância (lux) em ambientes de trabalho e estudos luminotécnicos.',
    icon: 'Sun',
    parentSlug: 'seguranca-do-trabalho',
  },
];

// =====================================================
// CATEGORIAS PRINCIPAIS
// =====================================================

export const categories: Category[] = [
  {
    slug: 'instrumentos-de-pressao',
    name: 'Instrumentos de Pressão',
    shortDescription:
      'Manômetros, pressostatos, transmissores e equipamentos para medição de pressão em processos industriais.',
    fullDescription:
      'Linha completa de instrumentos para medição, indicação, transmissão e controle de pressão em processos industriais. Inclui manômetros de diversas tecnologias, pressostatos, transmissores eletrônicos, bombas de calibração e equipamentos para laboratório. Trabalhamos com marcas como Dwyer (Magnehelic) e Fluke, com soluções para diferentes faixas de pressão, fluidos e graus de severidade de processo.',
    icon: 'Gauge',
    subCategories: pressaoSubCategories,
  },
  {
    slug: 'termometros-bimetalicos',
    name: 'Termômetros Bimetálicos',
    shortDescription:
      'Termômetros mecânicos para indicação local de temperatura em tubulações, tanques e equipamentos industriais.',
    fullDescription:
      'Termômetros de princípio bimetálico para indicação local de temperatura em tubulações, tanques e equipamentos industriais. Disponíveis em diversas faixas de medição (de –30 a +500°C), diâmetros de mostrador (100, 160 e 200mm), tipos de conexão (NPT, BSP, liso) e comprimentos de haste (50 a 700mm). Linha de revenda técnica com marca VICAL, fabricante nacional com ampla disponibilidade e suporte técnico.',
    icon: 'Thermometer',
  },
  {
    slug: 'seguranca-do-trabalho',
    name: 'Segurança do Trabalho',
    shortDescription:
      'Instrumentos de medição ambiental para SST: anemômetros, decibelímetros e luxímetros.',
    fullDescription:
      'Instrumentos de medição ambiental voltados à Saúde e Segurança do Trabalho (SST). Inclui anemômetros para medição de velocidade do ar, decibelímetros para avaliação de ruído ocupacional e luxímetros para análise de iluminância. Ferramentas essenciais para elaboração de laudos técnicos, atendimento às NRs e programas de higiene ocupacional. Trabalhamos com marcas como KESTREL, ITOWA e WINDSONIC.',
    icon: 'ShieldCheck',
    subCategories: sstSubCategories,
  },
];

// =====================================================
// HELPERS
// =====================================================

/**
 * Retorna todas as subcategorias de todas as categorias.
 */
export function getAllSubCategories(): SubCategory[] {
  return categories.flatMap((c) => c.subCategories ?? []);
}

/**
 * Busca uma categoria pelo slug.
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/**
 * Busca uma subcategoria pelo slug.
 */
export function getSubCategoryBySlug(slug: string): SubCategory | undefined {
  return getAllSubCategories().find((sc) => sc.slug === slug);
}

/**
 * Retorna as subcategorias de uma categoria.
 */
export function getSubCategoriesByParent(parentSlug: string): SubCategory[] {
  return getAllSubCategories().filter((sc) => sc.parentSlug === parentSlug);
}
