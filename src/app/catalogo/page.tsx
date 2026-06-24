import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Button, CategoryCard, Container, Section, SectionTitle } from '@/components/ui';
import { categories } from '@/data/categories';
import { buildMetadata } from '@/lib/seo';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = buildMetadata({
  title: 'Catálogo',
  description:
    'Conheça as categorias de instrumentos de medição técnica da Cas Therm: pressão, temperatura e segurança do trabalho.',
  path: '/catalogo',
});

export default function CatalogPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Início', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
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
            <Breadcrumb items={[{ label: 'Catálogo' }]} className="mb-10" />

            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
              <SectionTitle
                eyebrow="Catálogo"
                title="Instrumentos técnicos para indústria, manutenção e SST"
                subtitle="Selecione uma categoria para ver os produtos disponíveis e encontrar a linha adequada para sua aplicação."
                align="left"
              />

              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-800/70">
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  A Cas Therm trabalha com soluções para medição de pressão, temperatura e variáveis ambientais,
                  com atendimento consultivo para especificação e orçamento.
                </p>
                <Button href="/#contato" variant="outline" size="sm" className="mt-4" iconRight={<ArrowRight size={16} />}>
                  Falar com especialista
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        <Section background="muted" padding="default">
          <Container>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
