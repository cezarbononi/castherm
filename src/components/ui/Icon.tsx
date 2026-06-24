import * as LucideIcons from 'lucide-react';
import type { LucideIcon, LucideProps } from 'lucide-react';

/**
 * Renderiza um ícone Lucide a partir de seu nome em string.
 *
 * Usado quando o nome do ícone vem de um arquivo de dados
 * (ex: categories.ts -> icon: "Wind"), permitindo que dados
 * controlem qual ícone aparece, sem hard-coding na UI.
 *
 * Se o nome não existir, renderiza o ícone "Box" como fallback
 * (e loga aviso no console em desenvolvimento).
 */
interface IconProps extends LucideProps {
  /** Nome do ícone (ex: "Wind", "ShieldCheck"). Veja https://lucide.dev/icons */
  name: string;
}

export function Icon({ name, ...props }: IconProps) {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  const Component = icons[name];

  if (!Component) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`[Icon] Ícone "${name}" não encontrado no Lucide. Usando fallback.`);
    }
    const Fallback = icons['Box'];
    return Fallback ? <Fallback {...props} /> : null;
  }

  return <Component {...props} />;
}
