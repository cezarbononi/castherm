import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {import('next').NextConfig} */
const createNextConfig = (phase) => ({
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Adicione aqui domínios externos de imagens, se necessário no futuro.
    ],
  },
  // Habilita compressão padrão do Next.js
  compress: true,
  // Powered-by header pode ser removido para segurança
  poweredByHeader: false,
});

export default createNextConfig;
