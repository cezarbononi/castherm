import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ArrowRight, Package } from 'lucide-react';
import { Badge } from './Badge';
import { buildWhatsAppUrl, buildQuoteMessage } from '@/lib/whatsapp';
import { getCategoryBySlug } from '@/data/categories';
import type { Product } from '@/types';

/**
 * Card de produto — usado em listagens (home, catálogo, busca).
 *
 * Estrutura:
 * - Área de imagem (com placeholder de ícone se sem imagem)
 * - Categoria (badge)
 * - Nome + marca/modelo
 * - Descrição curta
 * - Botões: "Ver detalhes" e "Orçamento WhatsApp"
 */
interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const category = getCategoryBySlug(product.category);
  const whatsappUrl = buildWhatsAppUrl(buildQuoteMessage(product.name));

  return (
    <article
      className={[
        'group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover',
        'dark:border-neutral-700 dark:bg-neutral-800',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Imagem ou placeholder */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white dark:bg-white">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-300 dark:text-neutral-500">
            <Package size={56} strokeWidth={1.25} aria-hidden="true" />
          </div>
        )}

        {product.featured && (
          <div className="absolute right-3 top-3">
            <Badge variant="accent" size="sm">
              Destaque
            </Badge>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-5">
        {category && (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {category.name}
          </p>
        )}

        <h3 className="mb-1 text-base font-bold leading-tight text-primary dark:text-neutral-100">
          {product.name}
        </h3>

        {(product.brand || product.model) && (
          <p className="mb-2 text-xs text-neutral-500 dark:text-neutral-400">
            {[product.brand, product.model].filter(Boolean).join(' · ')}
          </p>
        )}

        <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {product.shortDescription}
        </p>

        {/* Ações */}
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={'/produto/' + product.slug}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent dark:text-accent dark:hover:text-accent-300"
          >
            Ver detalhes
            <ArrowRight size={14} aria-hidden="true" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-success px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-success-dark"
            aria-label={'Solicitar orçamento de ' + product.name + ' via WhatsApp'}
          >
            <MessageCircle size={14} aria-hidden="true" />
            Orçamento
          </a>
        </div>
      </div>
    </article>
  );
}
