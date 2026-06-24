import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CategoryProductList } from '@/components/catalogo/CategoryProductList';
import { Button, Container, Section, SectionTitle } from '@/components/ui';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: 'Categoria não encontrada | Cas Therm',
    };
  }

  return buildMetadata({
    title: `${category.name} | Catálogo`,
    description: category.shortDescription,
    path: `/catalogo/${category.slug}`,
  });
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const subCategories = category.subCategories ?? [];
  const categoryProducts = getProductsByCategory(category.slug);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Início', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: category.name, path: `/catalogo/${category.slug}` },
  ]);

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main id="main-content" className="pt-24 sm:pt-28">
        <Section padding="sm">
          <Container>
            <Breadcrumb
              items={[
                { label: 'Catálogo', href: '/catalogo' },
                { label: category.name },
              ]}
              className="mb-10"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <SectionTitle
                eyebrow="Categoria"
                title={category.name}
                subtitle={category.fullDescription}
                align="left"
              />

              <Button href="/catalogo" variant="ghost" size="sm" iconLeft={<ArrowLeft size={16} />}>
                Voltar ao catálogo
              </Button>
            </div>
          </Container>
        </Section>

        <Section background="muted" padding="default">
          <Container>
            <CategoryProductList
              products={categoryProducts}
              subCategories={subCategories}
            />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
