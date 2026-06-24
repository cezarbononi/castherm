'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

/**
 * ThemeProvider — gerencia dark/light mode com persistência via localStorage.
 *
 * Estratégia:
 * 1. Lê preferência salva em localStorage
 * 2. Fallback para prefers-color-scheme do sistema
 * 3. Aplica classe "dark" no <html>
 * 4. Persiste mudanças no localStorage
 *
 * Coloque na raiz do layout para envolver toda a aplicação.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    // Lê preferência salva ou detecta preferência do sistema
    const saved = localStorage.getItem('castherm-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial: Theme =
      saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light';

    setTheme(initial);

    // Aplica a classe imediatamente (evita flash)
    if (initial === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const next: Theme = isDark ? 'light' : 'dark';

    localStorage.setItem('castherm-theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
