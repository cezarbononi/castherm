import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Identidade visual Cas Therm — paleta industrial / B2B
        primary: {
          DEFAULT: '#0F2A44', // azul petróleo escuro - cor principal
          50: '#E6EBF1',
          100: '#C1CCD9',
          200: '#9AAABF',
          300: '#7188A5',
          400: '#4F6E8E',
          500: '#2E5478',
          600: '#1F3F60',
          700: '#0F2A44',
          800: '#0A1F33',
          900: '#061322',
        },
        accent: {
          DEFAULT: '#00B4D8', // ciano técnico - destaques
          50: '#E0F7FB',
          100: '#B3EBF4',
          200: '#80DDED',
          300: '#4DCFE6',
          400: '#26C4E1',
          500: '#00B4D8',
          600: '#0098B8',
          700: '#007A94',
          800: '#005B70',
          900: '#003D4A',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        success: {
          DEFAULT: '#047857', // verde esmeralda técnico - CTAs WhatsApp
          dark: '#065F46',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
