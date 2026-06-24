import { Container, Section, SectionTitle, Icon } from '@/components/ui';
import { differentiators } from '@/data/differentiators';

/**
 * Seção de diferenciais da Cas Therm.
 * Grid de cards com ícone, título e descrição.
 */
export function DifferentiatorsSection() {
  return (
    <Section background="muted" padding="default" className="dark:!bg-primary">
      <Container>
        <SectionTitle
          eyebrow="Por que escolher a Cas Therm"
          title="Diferenciais que fazem a diferença"
          subtitle="Mais do que vender instrumentos — ajudamos você a encontrar a solução certa para sua necessidade."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((diff) => (
            <div
              key={diff.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card transition-colors hover:border-accent/40 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-sm dark:hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-accent/15 dark:text-accent">
                <Icon name={diff.icon} size={24} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-base font-bold text-primary dark:text-white">{diff.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{diff.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
