'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button, ProductCard } from '@/components/ui';
import type { Product, SubCategory } from '@/types';

interface CategoryProductListProps {
  products: Product[];
  subCategories: SubCategory[];
}

export function CategoryProductList({
  products,
  subCategories,
}: CategoryProductListProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>();

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      setSelectedSlug(params.get('subcategoria') ?? undefined);
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);

    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  const selectedSubCategory = useMemo(
    () => subCategories.find((subCategory) => subCategory.slug === selectedSlug),
    [selectedSlug, subCategories],
  );

  const visibleProducts = selectedSubCategory
    ? products.filter((product) => product.subCategory === selectedSubCategory.slug)
    : products;

  const updateFilter = (slug?: string) => {
    const url = new URL(window.location.href);

    if (slug) {
      url.searchParams.set('subcategoria', slug);
    } else {
      url.searchParams.delete('subcategoria');
    }

    window.history.pushState(null, '', url);
    setSelectedSlug(slug);
  };

  return (
    <>
      {subCategories.length > 0 && (
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            Filtrar por subcategoria
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              variant={!selectedSubCategory ? 'primary' : 'outline'}
              size="sm"
              onClick={() => updateFilter()}
            >
              Todos
            </Button>
            {subCategories.map((subCategory) => (
              <Button
                key={subCategory.slug}
                type="button"
                variant={selectedSubCategory?.slug === subCategory.slug ? 'primary' : 'outline'}
                size="sm"
                onClick={() => updateFilter(subCategory.slug)}
              >
                {subCategory.name}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary dark:text-neutral-100">
            {selectedSubCategory ? selectedSubCategory.name : 'Produtos da categoria'}
          </h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            {visibleProducts.length}{' '}
            {visibleProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>
        </div>

        {selectedSubCategory && (
          <Button type="button" variant="ghost" size="sm" onClick={() => updateFilter()}>
            Limpar filtro
          </Button>
        )}
      </div>

      {visibleProducts.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-8 text-center dark:border-neutral-700 dark:bg-neutral-800">
          <h3 className="text-lg font-bold text-primary dark:text-neutral-100">
            Nenhum produto encontrado
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            Ainda não há produtos cadastrados para este filtro. A equipe da Cas Therm pode ajudar a
            encontrar uma alternativa adequada para sua aplicação.
          </p>
          <Button href="/#contato" variant="primary" size="sm" className="mt-5" iconRight={<ArrowRight size={16} />}>
            Solicitar orientação
          </Button>
        </div>
      )}
    </>
  );
}
