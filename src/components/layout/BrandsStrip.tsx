/**
 * Faixa horizontal de marcas parceiras.
 *
 * Exibe os logos (em forma de texto estilizado) dos fabricantes.
 * No futuro, pode ser substituida por imagens reais dos logos
 * salvos em /public/images/brands/.
 *
 * Efeito: grayscale no repouso, colorido no hover.
 */

import { Container } from '@/components/ui';

const BRANDS = [
  { name: 'VICAL', description: 'Termometros Bimetalicos' },
  { name: 'KESTREL', description: 'Anemometros Portateis' },
  { name: 'FLUKE', description: 'Calibracao de Pressao' },
  { name: 'DWYER', description: 'Manometros Diferenciais' },
  { name: 'ITOWA', description: 'Medicao de Velocidade' },
  { name: 'WINDSONIC', description: 'Anemometros Sonicos' },
];

export function BrandsStrip() {
  return (
    <div className="border-y border-neutral-200 bg-white py-10 dark:border-neutral-700 dark:bg-neutral-900">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
          Marcas parceiras
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-7">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="group flex min-w-[118px] flex-col items-center gap-1.5 transition-opacity"
              title={brand.description}
            >
              <span className="text-xl font-extrabold tracking-tight text-neutral-400 transition-colors group-hover:text-primary dark:text-neutral-500 dark:group-hover:text-accent">
                {brand.name}
              </span>
              <span className="text-center text-xs leading-snug text-neutral-500 opacity-0 transition-all group-hover:opacity-100 dark:text-neutral-400">
                {brand.description}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
