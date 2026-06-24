import { Container, Section, SectionTitle, Icon } from '@/components/ui';
import { sectors } from '@/data/sectors';

/**
 * Seção de setores atendidos pela Cas Therm.
 */
export function SectorsSection() {
  return (
    <Section id="setores" background="muted" padding="default">
      <Container>
        <SectionTitle
          eyebrow="Quem atendemos"
          title="Setores que confiam na Cas Therm"
          subtitle="Atendemos empresas, técnicos e profissionais de diversas áreas que necessitam de instrumentos de medição confiáveis."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector.slug}
              className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-800"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent">
                <Icon name={sector.icon} size={22} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-primary dark:text-neutral-100">{sector.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
