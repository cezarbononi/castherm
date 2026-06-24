import type { Product } from '@/types';
import { company } from '@/data/company';

interface BreadcrumbJsonLdItem {
  name: string;
  path: string;
}

function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${company.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getOrganizationJsonLd() {
  const sameAs = Object.values(company.social ?? {}).filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.shortName,
    legalName: company.legalName,
    url: company.url,
    logo: absoluteUrl('/images/logo/castherm.png'),
    taxID: company.cnpj,
    telephone: `+${company.whatsapp.number}`,
    email: company.emails[0]?.address,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbJsonLdItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getProductJsonLd(product: Product) {
  const productUrl = absoluteUrl(`/produto/${product.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.fullDescription ?? product.shortDescription,
    url: productUrl,
    ...(product.image ? { image: absoluteUrl(product.image) } : {}),
    ...(product.brand ? { brand: { '@type': 'Brand', name: product.brand } } : {}),
    ...(product.model ? { model: product.model } : {}),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: productUrl,
    },
  };
}
