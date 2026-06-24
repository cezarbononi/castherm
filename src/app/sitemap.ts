import type { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { company } from '@/data/company';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: company.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${company.url}/catalogo`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...categories.map((category) => ({
      url: `${company.url}/catalogo/${category.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${company.url}/produto/${product.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: product.featured ? 0.8 : 0.7,
    })),
  ];
}
