import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={['flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400', className]
        .filter(Boolean)
        .join(' ')}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1 font-medium text-neutral-600 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-accent"
      >
        <Home size={15} aria-hidden="true" />
        <span>Início</span>
      </Link>

      {items.map((item) => (
        <span key={`${item.label}-${item.href ?? 'current'}`} className="inline-flex min-w-0 items-center gap-2">
          <ChevronRight size={15} className="shrink-0 text-neutral-400" aria-hidden="true" />
          {item.href ? (
            <Link
              href={item.href}
              className="truncate font-medium text-neutral-600 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-accent"
            >
              {item.label}
            </Link>
          ) : (
            <span className="truncate font-semibold text-primary dark:text-neutral-100" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
