import type { ReactNode } from 'react';

/**
 * Cabeçalho padronizado de seção:
 * (opcional) eyebrow + título + subtítulo + (opcional) descrição.
 *
 * Mantém consistência visual em todas as seções da landing page.
 */
interface SectionTitleProps {
  /** Pequeno texto antes do título, em maiúsculas (opcional) */
  eyebrow?: string;
  /** Título principal */
  title: ReactNode;
  /** Subtítulo/descrição abaixo */
  subtitle?: ReactNode;
  /** Alinhamento. Default: "center" */
  align?: 'left' | 'center';
  /** Cor de texto adaptada a fundo escuro */
  variant?: 'default' | 'dark';
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  variant = 'default',
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = variant === 'dark' ? 'text-white' : 'text-primary dark:text-neutral-100';
  const subtitleColor = variant === 'dark' ? 'text-neutral-200' : 'text-neutral-600 dark:text-neutral-300';

  return (
    <div className={['max-w-3xl', alignClass, className].filter(Boolean).join(' ')}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className={['text-3xl font-bold leading-tight sm:text-4xl', titleColor].join(' ')}>
        {title}
      </h2>
      {subtitle && (
        <p className={['mt-4 text-base sm:text-lg', subtitleColor].join(' ')}>{subtitle}</p>
      )}
    </div>
  );
}
