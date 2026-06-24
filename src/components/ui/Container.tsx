import type { ElementType, ReactNode } from 'react';

/**
 * Container com largura máxima e padding horizontal responsivo padrão.
 *
 * Usado dentro de cada Section para manter o conteúdo alinhado e
 * com respiro consistente em todas as resoluções.
 */
interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  /** Largura máxima. Default: "default" (1200px) */
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'max-w-3xl',
  default: 'max-w-container',
  lg: 'max-w-7xl',
};

export function Container({
  children,
  as: Tag = 'div',
  size = 'default',
  className = '',
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeMap[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
