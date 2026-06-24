import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button, Container, Section } from '@/components/ui';
import { DEFAULT_WHATSAPP_MESSAGE, buildWhatsAppUrl } from '@/lib/whatsapp';

export default function NotFound() {
  const whatsappUrl = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 sm:pt-28">
        <Section padding="lg">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                Erro 404
              </p>
              <h1 className="text-3xl font-extrabold text-primary dark:text-neutral-50 sm:text-4xl">
                Página não encontrada
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-neutral-600 dark:text-neutral-300">
                A página que você procura não existe ou foi movida. Você pode voltar para a home ou falar com a Cas Therm.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/" variant="primary" iconLeft={<ArrowLeft size={18} />}>
                  Voltar para a home
                </Button>
                <Button href={whatsappUrl} external variant="whatsapp" iconLeft={<MessageCircle size={18} />}>
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
