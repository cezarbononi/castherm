import { MessageCircle, BookOpen, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Button, Container } from '@/components/ui';
import { company } from '@/data/company';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const HERO_WHATSAPP_MSG = 'Olá! Gostaria de solicitar um orçamento de instrumentos de medição.';

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl(HERO_WHATSAPP_MSG);

  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-20 dark:bg-neutral-900">
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
            <div className="hero-measurement-scene" role="img" aria-label="Composição abstrata de medição industrial com escala e ponteiro animados">
              <div className="hero-measurement-grid" aria-hidden="true" />
              <div className="hero-measurement-header">
                <span><i /> CAS THERM <b>/</b> CONTROLE DE PROCESSOS</span>
                <span>CT / 2026</span>
              </div>

              <div className="hero-measurement-orbit hero-measurement-orbit-outer" aria-hidden="true" />
              <div className="hero-measurement-orbit hero-measurement-orbit-inner" aria-hidden="true" />

              <div className="hero-measurement-dial" aria-hidden="true">
                <div className="hero-dial-track" />
                <div className="hero-dial-active" />
                <div className="hero-dial-ticks">
                  {Array.from({ length: 31 }, (_, index) => (
                    <span
                      key={index}
                      className={index % 5 === 0 ? 'hero-dial-tick-major' : undefined}
                      style={{ transform: `rotate(${-120 + index * 8}deg)` }}
                    />
                  ))}
                </div>
                <div className="hero-dial-needle" />
                <div className="hero-dial-hub" />
                <div className="hero-dial-center-copy">
                  <Image
                    src="/images/logo/castherm.png"
                    alt=""
                    width={90}
                    height={64}
                    className="hero-dial-logo dark:brightness-0 dark:invert"
                    priority
                  />
                </div>
              </div>

              <div className="hero-measurement-categories">
                <span>Pressão</span>
                <span>Temperatura</span>
                <span>SST</span>
              </div>

              <div className="hero-measurement-footer">
                <span>Instrumentação para cada processo</span>
                <span><i /> Precisão em movimento</span>
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

