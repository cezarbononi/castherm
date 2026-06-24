'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/layout/ThemeProvider';

/**
 * Botão de alternância Dark / Light mode.
 *
 * Usa o ThemeContext (ThemeProvider deve estar na raiz do layout).
 * Estilizado para encaixar no Header (fundo transparente, borda sutil).
 *
 * Variantes de contexto:
 * - "header-light" → para header com fundo claro
 * - "header-dark"  → para header com fundo escuro
 */
interface DarkModeToggleProps {
  variant?: 'header-light' | 'header-dark';
  className?: string;
}

export function DarkModeToggle({
  variant = 'header-light',
  className = '',
}: DarkModeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseStyles =
    'inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2';

  const variantStyles =
    variant === 'header-light'
      ? 'text-neutral-500 hover:bg-neutral-100 hover:text-primary dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
      : 'text-neutral-300 hover:bg-white/10 hover:text-white';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDark ? 'Modo claro' : 'Modo escuro'}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {isDark ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
}
