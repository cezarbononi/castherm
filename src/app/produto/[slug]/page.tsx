import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, FileText, MessageCircle, Package } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Badge, Button, Container, Section } from '@/components/ui';
import { getCategoryBySlug, getSubCategoryBySlug } from '@/data/categories';
import { getProductBySlug, products } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import { getBreadcrumbJsonLd, getProductJsonLd } from '@/lib/structured-data';
import { buildQuoteMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Produto não encontrado | Cas Therm',
    };
  }

  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/produto/${product.slug}`,
    image: product.image,
  });
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const subCategory = product.subCategory ? getSubCategoryBySlug(product.subCategory) : undefined;
  const whatsappUrl = buildWhatsAppUrl(buildQuoteMessage(product.name));
  const hasTechnicalDetails = Boolean(product.specs?.length || product.variantOptions?.length);
  const productJsonLd = getProductJsonLd(product);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Início', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    ...(category ? [{ name: category.name, path: `/catalogo/${category.slug}` }] : []),
    { name: product.name, path: `/produto/${product.slug}` },
  ]);

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
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
                ...(category ? [{ label: category.name, href: `/catalogo/${category.slug}` }] : []),
                { label: product.name },
              ]}
              className="mb-10"
            />

            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)] lg:items-start">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  {category && <Badge variant="primary">{category.name}</Badge>}
                  {subCategory && <Badge variant="outline">{subCategory.name}</Badge>}
                  {product.featured && <Badge variant="accent">Destaque</Badge>}
                </div>

                <h1 className="text-4xl font-extrabold leading-tight text-primary dark:text-neutral-50 sm:text-5xl">
                  {product.name}
                </h1>

                {(product.brand || product.model) && (
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                    {[product.brand, product.model].filter(Boolean).join(' · ')}
                  </p>
                )}

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {product.fullDescription ?? product.shortDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href={whatsappUrl}
                    external
                    variant="whatsapp"
                    size="lg"
                    iconLeft={<MessageCircle size={18} />}
                  >
                    Solicitar orçamento
                  </Button>

                  {product.datasheet && (
                    <Button
                      href={product.datasheet}
                      external
                      variant="outline"
                      size="lg"
                      iconLeft={<FileText size={18} />}
                    >
                      Abrir ficha técnica
                    </Button>
                  )}

                  {category && (
                    <Button
                      href={`/catalogo/${category.slug}`}
                      variant="ghost"
                      size="lg"
                      iconLeft={<ArrowLeft size={18} />}
                    >
                      Voltar à categoria
                    </Button>
                  )}
                </div>
              </div>

              <aside className="rounded-lg border border-neutral-200 bg-white p-6 shadow-card dark:border-neutral-700 dark:bg-neutral-800">
                <div className="mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white text-neutral-300 dark:bg-white dark:text-neutral-500">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={520}
                      height={390}
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="h-full w-full object-contain p-6"
                    />
                  ) : (
                    <Package size={72} strokeWidth={1.25} aria-hidden="true" />
                  )}
                </div>

                <h2 className="text-lg font-bold text-primary dark:text-neutral-100">Atendimento técnico</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  Envie este produto para a Cas Therm e receba orientação para especificação, disponibilidade e
                  orçamento.
                </p>

                <Button
                  href={whatsappUrl}
                  external
                  variant="whatsapp"
                  size="md"
                  fullWidth
                  className="mt-5"
                  iconLeft={<MessageCircle size={16} />}
                >
                  Chamar no WhatsApp
                </Button>
              </aside>
            </div>
          </Container>
        </Section>

        <Section background="muted" padding="sm">
          <Container>
            {hasTechnicalDetails ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {product.specs && product.specs.length > 0 && (
                  <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
                    <h2 className="text-xl font-bold text-primary dark:text-neutral-100">Especificações técnicas</h2>
                    <dl className="mt-5 divide-y divide-neutral-200 dark:divide-neutral-700">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="grid gap-1 py-3 sm:grid-cols-[180px_1fr]">
                          <dt className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">{spec.label}</dt>
                          <dd className="text-sm text-neutral-700 dark:text-neutral-200">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {product.variantOptions && product.variantOptions.length > 0 && (
                  <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
                    <h2 className="text-xl font-bold text-primary dark:text-neutral-100">Variações disponíveis</h2>
                    <div className="mt-5 space-y-5">
                      {product.variantOptions.map((option) => (
                        <div key={option.name}>
                          <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">{option.name}</h3>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {option.values.map((value) => (
                              <span
                                key={value}
                                className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                              >
                                {value}
                                {option.unit ? ` ${option.unit}` : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-8 text-center dark:border-neutral-700 dark:bg-neutral-800">
                <h2 className="text-xl font-bold text-primary dark:text-neutral-100">Ficha em estruturação</h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  Estamos organizando as informações técnicas deste produto no catálogo. Para detalhes de faixa,
                  conexão, aplicação ou disponibilidade, fale com a equipe da Cas Therm.
                </p>
              </div>
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
