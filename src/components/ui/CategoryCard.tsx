import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Icon } from './Icon';
import type { Category } from '@/types';

/**
 * Card de categoria — usado no grid de categorias da landing
 * e em outras seções onde categorias são listadas.
 *
 * - Clicável (leva para /catalogo/[slug])
 * - Ícone Lucide no topo, com fundo de destaque
 * - Hover sutil (eleva o card, muda cor da borda)
 */
interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className = '' }: CategoryCardProps) {
  return (
    <Link
      href={`/catalogo/${category.slug}`}
      className={`group relative flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-card-hover dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-accent/60 ${className}`}
    >
      {/* Ícone */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent dark:bg-accent/10 dark:text-accent">
        <Icon name={category.icon} size={24} strokeWidth={1.75} aria-hidden="true" />
      </div>

      {/* Título */}
      <h3 className="mb-2 text-lg font-bold text-primary dark:text-neutral-100">{category.name}</h3>

      {/* Descrição */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {category.shortDescription}
      </p>

      {/* CTA visual */}
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5">
        Ver produtos
        <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
