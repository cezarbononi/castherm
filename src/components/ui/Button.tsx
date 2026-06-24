import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

/**
 * Botão reutilizável da Cas Therm.
 *
 * Renderiza como <a> (Link do Next) se receber `href`, ou como <button>.
 *
 * Variantes:
 * - primary   → cor principal (azul petróleo)
 * - accent    → cor de destaque (ciano)
 * - outline   → fundo transparente, borda primária
 * - ghost     → sem fundo nem borda, apenas texto
 * - whatsapp  → verde WhatsApp
 *
 * Tamanhos: sm | md | lg
 */

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps & ComponentProps<'button'> & { href?: undefined };
type ButtonAsLink = BaseProps & {
  href: string;
  /** Para links externos: abre em nova aba com rel adequado */
  external?: boolean;
};
type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-600 focus-visible:ring-primary shadow-sm',
  accent:
    'bg-accent text-white hover:bg-accent-600 focus-visible:ring-accent shadow-sm',
  outline:
    'border border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary',
  ghost:
    'text-primary hover:bg-primary/5 focus-visible:ring-primary dark:text-accent dark:hover:bg-accent/10',
  whatsapp:
    'bg-success text-white hover:bg-success-dark focus-visible:ring-success shadow-sm',
};

const sizeStyles: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm gap-1.5',
  md: 'h-12 px-5 text-sm gap-2',
  lg: 'h-14 px-7 text-base gap-2',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    iconLeft,
    iconRight,
    children,
    className = '',
  } = props;

  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </>
  );

  // Link version
  if ('href' in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  // Button version
  const { variant: _v, size: _s, fullWidth: _f, iconLeft: _il, iconRight: _ir, children: _c, className: _cl, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
