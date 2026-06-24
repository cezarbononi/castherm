import type { Metadata } from 'next';
import { company } from '@/data/company';

/**
 * Configurações base de SEO para o site Cas Therm.
 * Usadas no layout raiz e referenciadas em metadados de páginas individuais.
 */
export const siteConfig = {
  name: company.shortName,
  title: `${company.shortName} | Instrumentos de Medição Técnica e Segurança do Trabalho`,
  description:
    'Cas Therm: instrumentos de medição técnica, equipamentos industriais e segurança do trabalho. Atendimento consultivo B2B, orçamentos rápidos via WhatsApp.',
  url: company.url,
  ogImage: '/images/og-image.png',
  keywords: [
    'instrumentos de medição',
    'anemômetro',
    'decibelímetro',
    'luxímetro',
    'manômetro',
    'termômetro bimetálico',
    'segurança do trabalho',
    'instrumentos industriais',
    'medição técnica',
    'B2B',
    'Cas Therm',
    'Castherm',
  ],
};

/**
 * Gera metadados SEO consistentes para qualquer página.
 */
export function buildMetadata(options?: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const title = options?.title ? `${options.title} | ${company.shortName}` : siteConfig.title;
  const description = options?.description ?? siteConfig.description;
  const url = options?.path ? `${siteConfig.url}${options.path}` : siteConfig.url;
  const image = options?.image ?? siteConfig.ogImage;

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: options?.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url,
      title,
      description,
      siteName: company.shortName,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
