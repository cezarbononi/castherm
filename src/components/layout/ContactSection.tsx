import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Container, Section, SectionTitle, Button } from '@/components/ui';
import { company } from '@/data/company';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const CONTACT_MSG = 'Olá! Vim pelo site da Cas Therm e gostaria de solicitar um orçamento.';

/**
 * Seção de contato / atendimento.
 *
 * Layout:
 * - Esquerda: informações de contato (WhatsApp, e-mail, endereço, horário)
 * - Direita: CTA card com botão WhatsApp em destaque
 */
export function ContactSection() {
  const whatsappUrl = buildWhatsAppUrl(CONTACT_MSG);

  return (
    <Section id="contato" background="default" padding="default">
      <Container>
        <SectionTitle
          eyebrow="Fale conosco"
          title="Atendimento rápido e especializado"
          subtitle="Nossa equipe está pronta para ajudar na escolha e no orçamento do instrumento ideal para a sua aplicação."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* ===== COLUNA ESQUERDA — Informações ===== */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                <MessageCircle size={22} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-bold text-primary dark:text-neutral-100">WhatsApp</p>
                <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
                  Forma mais rápida de receber orçamento. Informe o modelo e a aplicação.
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Nossa equipe: Ligia · Yasmin
                </p>
              </div>
            </div>

            {/* E-mails */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent">
                <Mail size={22} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-bold text-primary dark:text-neutral-100">E-mail</p>
                <ul className="mt-1 space-y-1">
                  {company.emails.map((email) => (
                    <li key={email.address}>
                      <a
                        href={'mailto:' + email.address}
                        className="text-sm text-neutral-600 transition-colors hover:text-accent dark:text-neutral-400 dark:hover:text-accent"
                      >
                        <span className="font-medium text-neutral-400 dark:text-neutral-500">
                          {email.label}:{' '}
                        </span>
                        {email.address}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Localização */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent">
                <MapPin size={22} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-bold text-primary dark:text-neutral-100">Localização</p>
                <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
                  {company.address.full ?? `${company.address.city} / ${company.address.state}`} —
                  Atendemos todo o Brasil
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent">
                <Clock size={22} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-bold text-primary dark:text-neutral-100">
                  Horário de atendimento
                </p>
                <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
                  Segunda a sexta-feira, horário comercial
                </p>
              </div>
            </div>
          </div>

          {/* ===== COLUNA DIREITA — CTA card ===== */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-8 shadow-card-hover dark:border-neutral-700 dark:bg-neutral-800">
              <div className="mb-2 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-success/10 text-success">
                <MessageCircle size={30} strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary dark:text-neutral-100">
                Solicite seu orçamento agora
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                Informe o instrumento, a aplicação e as condições de processo. Nossa equipe retorna
                rapidamente com a melhor opção.
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                href={whatsappUrl}
                external
                iconLeft={<MessageCircle size={18} />}
                fullWidth
                className="mt-6"
              >
                Abrir WhatsApp
              </Button>
              <p className="mt-3 text-center text-xs text-neutral-400 dark:text-neutral-500">
                Resposta em até 1 dia útil
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
