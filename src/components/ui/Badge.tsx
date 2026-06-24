import type { ReactNode } from 'react';

/**
 * Badge / tag pequena para destaques.
 * Usado em: "Destaque", "Novo", indicação de categoria, etc.
 */
type Variant = 'default' | 'accent' | 'primary' | 'outline';
type Size = 'sm' | 'md';

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variantMap: Record<Variant, string> = {
  default: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300',
  accent: 'bg-accent/10 text-accent dark:bg-accent/20',
  primary: 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent',
  outline: 'border border-neutral-300 text-neutral-700 bg-white dark:border-neutral-600 dark:text-neutral-300 dark:bg-neutral-800',
};

const sizeMap: Record<Size, string> = {
  sm: 'text-[10px] px-2 py-0.5',
  md: 'text-xs px-2.5 py-1',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold uppercase tracking-wider ${variantMap[variant]} ${sizeMap[size]} ${className}`}
    >
      {children}
    </span>
  );
}
