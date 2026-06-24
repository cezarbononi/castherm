import type { Sector } from '@/types';

/**
 * Setores atendidos pela Cas Therm.
 * Lista propositalmente ampla e B2B; ajuste conforme o foco real da empresa.
 */
export const sectors: Sector[] = [
  {
    slug: 'industria',
    name: 'Indústria',
    description: 'Atendimento a indústrias de diversos segmentos e portes.',
    icon: 'Factory',
  },
  {
    slug: 'manutencao',
    name: 'Manutenção',
    description: 'Apoio a equipes de manutenção predial e industrial.',
    icon: 'Wrench',
  },
  {
    slug: 'seguranca-do-trabalho',
    name: 'Segurança do Trabalho',
    description: 'Profissionais e empresas de SST e medicina do trabalho.',
    icon: 'ShieldCheck',
  },
  {
    slug: 'laboratorios',
    name: 'Laboratórios',
    description: 'Laboratórios de análise, controle de qualidade e pesquisa.',
    icon: 'FlaskConical',
  },
  {
    slug: 'facilities',
    name: 'Facilities',
    description: 'Gestão predial, climatização, HVAC e infraestrutura.',
    icon: 'Building2',
  },
  {
    slug: 'engenharia',
    name: 'Engenharia',
    description: 'Engenheiros, técnicos e empresas de projetos e consultoria.',
    icon: 'HardHat',
  },
];
