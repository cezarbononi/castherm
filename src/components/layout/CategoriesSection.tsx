import { Container, Section, SectionTitle, CategoryCard } from '@/components/ui';
import { categories } from '@/data/categories';

/**
 * Seção de categorias principais da landing page.
 * Grid de 3 cards — um por categoria principal do catálogo.
 */
export function CategoriesSection() {
  return (
    <Section id="categorias" background="muted" padding="default">
      <Container>
        <SectionTitle
          eyebrow="Nosso catálogo"
          title="Instrumentos para cada necessidade"
          subtitle="Trabalhamos com instrumentos de medição nas principais categorias da instrumentação industrial e de segurança do trabalho."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
