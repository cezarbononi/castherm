import { MessageCircle, BookOpen, ChevronDown } from 'lucide-react';
import { Button, Container } from '@/components/ui';
import { company } from '@/data/company';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const HERO_WHATSAPP_MSG = 'Olá! Gostaria de solicitar um orçamento de instrumentos de medição.';

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl(HERO_WHATSAPP_MSG);

  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-20 dark:bg-neutral-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-64 -top-32 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl dark:bg-accent/10" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl dark:bg-primary/20" />
      </div>

      <Container className="flex min-h-[calc(100svh-80px)] items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 py-8 sm:py-10 lg:grid-cols-2 lg:py-12">
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Revenda técnica especializada
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-primary dark:text-neutral-50 sm:text-5xl xl:text-6xl">
              O instrumento{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-accent">certo</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 12"
                  className="absolute -bottom-1 left-0 w-full fill-accent/20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10 Q55 2 110 8 Q165 14 218 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="stroke-accent/40"
                  />
                </svg>
              </span>{' '}
              para cada processo
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              Trabalhamos com instrumentos de medição de precisão para indústria, laboratório e
              segurança do trabalho. Atendimento consultivo, marcas líderes e suporte técnico
              especializado.
            </p>

            <div className="flex flex-wrap gap-3">
              {['VICAL', 'KESTREL', 'FLUKE', 'DWYER', 'ITOWA'].map((brand) => (
                <span
                  key={brand}
                  className="rounded border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {brand}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={whatsappUrl}
                external
                iconLeft={<MessageCircle size={20} />}
              >
                Solicitar orçamento
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#categorias"
                iconLeft={<BookOpen size={18} />}
              >
                Ver catálogo
              </Button>
            </div>

            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              Cotia/SP &nbsp;·&nbsp; {company.emails[0].address} &nbsp;·&nbsp; Atendimento de
              segunda a sexta
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Painel de instrumentação
                  </span>
                  <span className="flex h-2.5 w-2.5 rounded-full bg-success">
                    <span className="h-2.5 w-2.5 animate-ping rounded-full bg-success opacity-75" />
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <InstrumentCard
                    label="Velocidade do Ar"
                    value="12.4"
                    unit="m/s"
                    brand="KESTREL"
                    color="accent"
                  />
                  <InstrumentCard
                    label="Pressão Diferencial"
                    value="2.8"
                    unit="mbar"
                    brand="DWYER"
                    color="primary"
                  />
                  <InstrumentCard
                    label="Temperatura"
                    value="127"
                    unit="°C"
                    brand="VICAL"
                    color="primary"
                  />
                  <InstrumentCard
                    label="Ruído Ocup."
                    value="83"
                    unit="dB(A)"
                    brand="HD-800"
                    color="accent"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 dark:bg-neutral-900/60">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    Todos os instrumentos calibrados
                  </span>
                  <span className="text-xs font-semibold text-success">OK</span>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                  Atendimento
                </p>
                <p className="mt-0.5 text-sm font-bold text-primary dark:text-neutral-100">
                  Consultivo B2B
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-neutral-300 dark:text-neutral-600 lg:flex">
        <span className="text-[10px] font-semibold uppercase tracking-widest">Explorar</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}

interface InstrumentCardProps {
  label: string;
  value: string;
  unit: string;
  brand: string;
  color: 'accent' | 'primary';
}

function InstrumentCard({ label, value, unit, brand, color }: InstrumentCardProps) {
  const colorClass = color === 'accent' ? 'text-accent' : 'text-primary dark:text-accent';
  const bgClass =
    color === 'accent' ? 'bg-accent/5 dark:bg-accent/10' : 'bg-primary/5 dark:bg-accent/5';

  return (
    <div className={['rounded-lg p-3', bgClass].join(' ')}>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
        {label}
      </p>
      <p className={['text-2xl font-extrabold leading-none', colorClass].join(' ')}>
        {value}
        <span className="ml-0.5 text-xs font-semibold opacity-70">{unit}</span>
      </p>
      <p className="mt-1.5 text-[10px] font-semibold text-neutral-400 dark:text-neutral-500">
        {brand}
      </p>
    </div>
  );
}
