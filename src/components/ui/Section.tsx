import type { ElementType, ReactNode } from 'react';

/**
 * Wrapper de seção com padding vertical consistente.
 *
 * Cada seção da landing page deve ser envolta por um <Section>,
 * que aplica fundo, padding e id (para navegação por âncoras).
 *
 * Variantes de fundo:
 * - "default"  → branco / dark: cinza escuro
 * - "muted"    → cinza muito claro / dark: cinza escuro médio
 * - "dark"     → fundo escuro primário (para CTA, footer)
 */
type Background = 'default' | 'muted' | 'dark';

interface SectionProps {
  children: ReactNode;
  id?: string;
  background?: Background;
  /** Padding vertical. Default: "default" */
  padding?: 'sm' | 'default' | 'lg';
  as?: ElementType;
  className?: string;
}

const backgroundMap: Record<Background, string> = {
  default: 'bg-white dark:bg-neutral-900',
  muted: 'bg-neutral-50 dark:bg-neutral-800/60',
  dark: 'bg-primary text-white',
};

const paddingMap = {
  sm: 'py-12 sm:py-16',
  default: 'py-16 sm:py-20 lg:py-24',
  lg: 'py-20 sm:py-28 lg:py-32',
};

export function Section({
  children,
  id,
  background = 'default',
  padding = 'default',
  as: Tag = 'section',
  className = '',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={[backgroundMap[background], paddingMap[padding], className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  );
}
