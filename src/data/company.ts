import type { CompanyInfo } from '@/types';

/**
 * Dados centrais da empresa Cas Therm.
 *
 * IMPORTANTE: Este é o arquivo único de configuração da empresa.
 * Para alterar telefone, e-mails, endereço ou CNPJ, edite aqui.
 * Todos os componentes do site puxam dados deste arquivo.
 *
 * Campos marcados como PLACEHOLDER devem ser substituídos pelos dados reais.
 */
export const company: CompanyInfo = {
  shortName: 'Cas Therm',
  legalName: 'Cas Therm - Comércio e Serviços de Instrumentos de Medição e Automatização Ltda.',
  cnpj: '18.625.711/0001-17',

  address: {
    street: 'Rua Zaquia, 162, Parque São George',
    city: 'Cotia',
    state: 'SP',
    postalCode: '06708-060',
    country: 'BR',
    full: 'Rua Zaquia, 162, Parque São George, Cotia - São Paulo - 06708-060',
  },

  whatsapp: {
    // PLACEHOLDER - substituir pelo número real (formato: 55 + DDD + número, só dígitos)
    number: '5511985373838',
    display: '(11) 98537-3838',
  },

  emails: [
    { label: 'Vendas', address: 'vendas@castherm.com.br' },
    { label: 'Vendas', address: 'vendas1@castherm.com.br' },
    { label: 'Vendas', address: 'vendas2@castherm.com.br' },
    { label: 'Nota Fiscal', address: 'nfe@castherm.com.br' },
    { label: 'Contato', address: 'contato@castherm.com.br' },
  ],

  contacts: [
    { name: 'Wilson', role: 'Atendimento' },
    { name: 'Ligia', role: 'Atendimento' },
    { name: 'Yasmin', role: 'Atendimento' },
  ],

  domain: 'castherm.com.br',
  url: 'https://www.castherm.com.br',

  social: {
    // PLACEHOLDERS - preencher se houver redes sociais
    instagram: '',
    linkedin: '',
    facebook: '',
  },

  group: {
    name: 'Grupo Cas',
    companies: [
      {
        name: 'Cas Therm',
        role: 'Revenda técnica de instrumentos de medição',
        logo: 'castherm.png',
        url: 'https://www.castherm.com.br',
      },
      {
        name: 'Cas Service',
        role: 'Assistência técnica e calibração',
        logo: 'cas-service.png',
      },
    ],
  },
};
