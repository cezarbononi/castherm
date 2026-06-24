/**
 * Tipos centrais do projeto Cas Therm.
 * Toda estrutura de dados de produtos, categorias e seções
 * deve seguir essas interfaces para garantir consistência.
 */

// =====================================================
// CATEGORIAS E SUBCATEGORIAS
// =====================================================

export type CategorySlug =
  | 'instrumentos-de-pressao'
  | 'termometros-bimetalicos'
  | 'seguranca-do-trabalho';

export type SubCategorySlug =
  // Instrumentos de Pressão (8 subcategorias)
  | 'manometro-capsular'
  | 'manometro-petroquimico'
  | 'manometro-diferencial'
  | 'manometro-padrao'
  | 'pressostato'
  | 'transmissor-de-pressao'
  | 'bomba-de-calibracao'
  | 'medidor-de-contato-eletrico'
  // Segurança do Trabalho (3 subcategorias)
  | 'anemometros'
  | 'decibelimetros'
  | 'luximetros';

export interface SubCategory {
  /** Identificador único e URL-friendly */
  slug: SubCategorySlug;
  /** Nome exibido na interface */
  name: string;
  /** Descrição curta para cards */
  shortDescription: string;
  /** Nome do ícone (Lucide React) */
  icon: string;
  /** Categoria pai */
  parentSlug: CategorySlug;
}

export interface Category {
  /** Identificador único e URL-friendly */
  slug: CategorySlug;
  /** Nome exibido na interface */
  name: string;
  /** Descrição curta para cards */
  shortDescription: string;
  /** Descrição completa para página da categoria */
  fullDescription: string;
  /** Nome do ícone (Lucide React) */
  icon: string;
  /** Caminho da imagem ilustrativa (opcional) */
  image?: string;
  /** Subcategorias (quando a categoria é um guarda-chuva) */
  subCategories?: SubCategory[];
}

// =====================================================
// VARIANTES DE PRODUTO
// =====================================================

/**
 * Representa um eixo de variação de um produto.
 * Ex: { name: "Diâmetro", values: ["100mm", "160mm", "200mm"] }
 *
 * Não é selecionável para compra (não é e-commerce) — apenas
 * informativo. O orçamento por WhatsApp captura as opções desejadas.
 */
export interface VariantOption {
  /** Nome do eixo de variação (ex: "Diâmetro", "Faixa de medição") */
  name: string;
  /** Valores disponíveis para esse eixo */
  values: string[];
  /** Unidade de medida opcional (ex: "mm", "°C") */
  unit?: string;
}

// =====================================================
// PRODUTOS
// =====================================================

export interface ProductSpec {
  /** Rótulo da especificação (ex: "Faixa de medição") */
  label: string;
  /** Valor da especificação (ex: "0 a 30 m/s") */
  value: string;
}

export interface Product {
  /** Identificador único e URL-friendly */
  slug: string;
  /** Nome do produto */
  name: string;
  /** Marca/fabricante (preservar nome real do PDF) */
  brand?: string;
  /** Modelo (preservar do PDF) */
  model?: string;
  /** Categoria principal */
  category: CategorySlug;
  /** Subcategoria (quando aplicável) */
  subCategory?: SubCategorySlug;
  /** Descrição curta para cards */
  shortDescription: string;
  /** Descrição completa para página do produto */
  fullDescription?: string;
  /** Lista de especificações técnicas fixas */
  specs?: ProductSpec[];
  /**
   * Eixos de variação do produto.
   * Permite exibir as opções disponíveis sem criar SKUs separados.
   */
  variantOptions?: VariantOption[];
  /** Caminho da imagem principal */
  image?: string;
  /** Imagens adicionais */
  gallery?: string[];
  /** Link para PDF/datasheet do produto (relativo a /public) */
  datasheet?: string;
  /** Marca como destaque na home */
  featured?: boolean;
}

// =====================================================
// SETORES
// =====================================================

export interface Sector {
  /** Identificador único */
  slug: string;
  /** Nome do setor */
  name: string;
  /** Descrição curta */
  description: string;
  /** Nome do ícone (Lucide React) */
  icon: string;
}

// =====================================================
// DIFERENCIAIS
// =====================================================

export interface Differentiator {
  /** Título do diferencial */
  title: string;
  /** Descrição do diferencial */
  description: string;
  /** Nome do ícone (Lucide React) */
  icon: string;
}

// =====================================================
// GRUPO EMPRESARIAL
// =====================================================

export interface GroupCompany {
  /** Nome curto da empresa */
  name: string;
  /** Papel/função no grupo */
  role: string;
  /** Logo filename em /public/images/logo/ */
  logo: string;
  /** URL do site (opcional) */
  url?: string;
}

export interface CompanyGroup {
  /** Nome do grupo */
  name: string;
  /** Empresas que compõem o grupo */
  companies: GroupCompany[];
}

// =====================================================
// EMPRESA / CONTATO
// =====================================================

export interface ContactPerson {
  name: string;
  role?: string;
  email?: string;
  phone?: string;
}

export interface CompanyInfo {
  /** Nome curto/marca */
  shortName: string;
  /** Razão social completa */
  legalName: string;
  /** CNPJ */
  cnpj: string;
  /** Endereço */
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full?: string;
  };
  /** Telefone/WhatsApp principal */
  whatsapp: {
    /** Número apenas dígitos com DDI (ex: 5511999999999) */
    number: string;
    /** Versão formatada para exibição */
    display: string;
  };
  /** E-mails de contato */
  emails: {
    label: string;
    address: string;
  }[];
  /** Pessoas de contato */
  contacts: ContactPerson[];
  /** Domínio */
  domain: string;
  /** URL completa */
  url: string;
  /** Redes sociais (opcional) */
  social?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  /** Grupo empresarial ao qual pertence */
  group?: CompanyGroup;
}

// =====================================================
// MARCAS / FABRICANTES
// =====================================================

export interface Brand {
  /** Nome exibido */
  name: string;
  /** Slug para uso interno */
  slug: string;
  /** Logo em /public/images/brands/ (opcional — fallback: nome em texto) */
  logo?: string;
  /** URL do site do fabricante (opcional) */
  website?: string;
}
