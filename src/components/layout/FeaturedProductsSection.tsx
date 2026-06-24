import { MessageCircle } from 'lucide-react';
import { Container, Section, SectionTitle, ProductCard, Button } from '@/components/ui';
import { getFeaturedProducts } from '@/data/products';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

/**
 * Seção de produtos em destaque da landing page.
 * Grid de até 4 produtos marcados como featured: true.
 */
export function FeaturedProductsSection() {
  const featured = getFeaturedProducts().slice(0, 4);
  const whatsappUrl = buildWhatsAppUrl(
    'Olá! Vim pelo site da Cas Therm e gostaria de saber mais sobre os produtos em destaque.'
  );

  return (
    <Section id="produtos" background="default" padding="default">
      <Container>
        <SectionTitle
          eyebrow="Destaques"
          title="Produtos mais solicitados"
          subtitle="Uma seleção dos instrumentos mais buscados pelos nossos clientes. Solicite orçamento direto pelo WhatsApp."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            href="#categorias"
          >
            Ver todas as categorias
          </Button>
        </div>

        {/* CTA WhatsApp inline */}
        <div className="mt-8 rounded-xl border border-success/20 bg-success/5 p-6 dark:border-success/10 dark:bg-success/5">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-bold text-neutral-800 dark:text-neutral-100">
                Não encontrou o que procura?
              </p>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                Temos um catálogo amplo. Fale com nossa equipe e informe o modelo, marca ou aplicação.
              </p>
            </div>
            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappUrl}
              external
              iconLeft={<MessageCircle size={18} />}
              className="shrink-0"
            >
              Consultar via WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
