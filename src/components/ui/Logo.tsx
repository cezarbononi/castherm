import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/data/company';

/**
 * Logo da Cas Therm — usa a imagem PNG oficial em /public/images/logo/castherm.png.
 *
 * Variantes:
 * - "light": fundo claro (logo colorida normal)
 * - "dark":  fundo escuro (inverte para branco via CSS filter)
 *
 * Tamanhos:
 * - "sm": 100x30px  — footer / mobile
 * - "md": 140x42px  — header padrão
 * - "lg": 180x54px  — hero / destaque
 */
type Variant = 'light' | 'dark';
type Size = 'sm' | 'md' | 'lg';

interface LogoProps {
  variant?: Variant;
  size?: Size;
  /** Se true, envolve o logo em um Link para a home. Default: true */
  asLink?: boolean;
  className?: string;
}

const sizeMap: Record<Size, { width: number; height: number }> = {
  sm: { width: 100, height: 30 },
  md: { width: 140, height: 42 },
  lg: { width: 180, height: 54 },
};

export function Logo({ variant = 'light', size = 'md', asLink = true, className = '' }: LogoProps) {
  const { width, height } = sizeMap[size];
  const logoClassName = [
    'object-contain',
    variant === 'dark' ? 'brightness-0 invert' : 'dark:brightness-0 dark:invert',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const logoImage = (
    <Image
      src="/images/logo/castherm.png"
      alt={company.shortName}
      width={width}
      height={height}
      className={logoClassName}
      priority
    />
  );

  if (!asLink) return logoImage;

  return (
    <Link
      href="/"
      className="inline-flex transition-opacity hover:opacity-80"
      aria-label={company.shortName + ' — Ir para a home'}
    >
      {logoImage}
    </Link>
  );
}

/**
 * Logo da Cas Service — para uso no footer (seção Grupo Cas).
 */
interface CasServiceLogoProps {
  size?: Size;
  className?: string;
}

export function CasServiceLogo({ size = 'sm', className = '' }: CasServiceLogoProps) {
  const { width, height } = sizeMap[size];

  return (
    <Image
      src="/images/logo/cas-service.png"
      alt="Cas Service"
      width={width}
      height={height}
      className={['object-contain dark:brightness-0 dark:invert', className]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
