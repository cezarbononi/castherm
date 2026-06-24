'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { MessageCircle, Menu, Search, X } from 'lucide-react';
import { Logo, DarkModeToggle, Button } from '@/components/ui';
import { categories, getAllSubCategories } from '@/data/categories';
import { products } from '@/data/products';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const NAV_LINKS = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Categorias', href: '/#categorias' },
  { label: 'Produtos', href: '/#produtos' },
  { label: 'Setores', href: '/#setores' },
  { label: 'Contato', href: '/#contato' },
];

const CTA_MESSAGE = 'Olá! Vim pelo site da Cas Therm e gostaria de mais informações.';

const categoryNameBySlug = new Map(categories.map((category) => [category.slug, category.name]));
const subCategoryNameBySlug = new Map(
  getAllSubCategories().map((subCategory) => [subCategory.slug, subCategory.name]),
);

const SEARCH_INDEX = products.map((product) => {
  const categoryName = categoryNameBySlug.get(product.category) ?? '';
  const subCategoryName = product.subCategory
    ? (subCategoryNameBySlug.get(product.subCategory) ?? '')
    : '';
  const searchableText = normalizeSearchText(
    [
      product.name,
      product.brand,
      product.model,
      categoryName,
      subCategoryName,
      product.shortDescription,
    ]
      .filter(Boolean)
      .join(' '),
  );

  return {
    product,
    categoryName,
    subCategoryName,
    searchableText,
  };
});

function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

interface HeaderSearchProps {
  onNavigate?: () => void;
  variant?: 'desktop' | 'mobile';
}

function HeaderSearch({ onNavigate, variant = 'desktop' }: HeaderSearchProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputId = variant === 'mobile' ? 'mobile-product-search' : 'desktop-product-search';

  const results = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query.trim());
    if (normalizedQuery.length < 2) return [];

    return SEARCH_INDEX.filter((item) => item.searchableText.includes(normalizedQuery)).slice(0, 6);
  }, [query]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const navigateToFirstResult = () => {
    if (!results[0]) return;
    window.location.href = '/produto/' + results[0].product.slug;
  };

  const navigateToProduct = (slug: string) => {
    setOpen(false);
    onNavigate?.();
    window.location.href = '/produto/' + slug;
  };

  const fieldClasses =
    variant === 'mobile'
      ? 'h-11 w-full rounded-md border border-neutral-200 bg-neutral-50 py-0 pl-10 pr-3 text-sm leading-[44px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-accent dark:focus:ring-accent/20'
      : 'h-10 w-56 rounded-md border border-neutral-200 bg-neutral-50 py-0 pl-9 pr-3 text-sm leading-[40px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-accent dark:focus:ring-accent/20';

  return (
    <div ref={wrapperRef} className="relative">
      <form
        role="search"
        aria-label="Buscar produtos"
        className="relative"
        onSubmit={(event) => {
          event.preventDefault();
          navigateToFirstResult();
        }}
      >
        <label htmlFor={inputId} className="sr-only">
          Buscar produtos
        </label>
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400"
          aria-hidden="true"
        />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Buscar produto"
          autoComplete="off"
          className={fieldClasses}
        />
      </form>

      {open && query.trim().length >= 2 && (
        <div
          onPointerDown={(event) => event.stopPropagation()}
          className={[
            'absolute z-50 mt-2 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900',
            variant === 'mobile' ? 'left-0 right-0' : 'right-0 w-80',
          ].join(' ')}
        >
          {results.length > 0 ? (
            <ul className="max-h-96 overflow-y-auto py-2" aria-label="Resultados da busca">
              {results.map(({ product, categoryName, subCategoryName }) => (
                <li key={product.slug}>
                  <a
                    href={'/produto/' + product.slug}
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToProduct(product.slug);
                    }}
                    className="block px-4 py-3 transition-colors hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  >
                    <span className="block text-sm font-semibold leading-tight text-primary dark:text-neutral-100">
                      {product.name}
                    </span>
                    <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">
                      {[product.brand, product.model, subCategoryName || categoryName]
                        .filter(Boolean)
                        .join(' · ')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-300">
              Nenhum produto encontrado.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Header global da landing page.
 *
 * - Sticky no topo com backdrop blur
 * - Scroll: adiciona sombra suave quando rola a página
 * - Links de navegação por âncoras
 * - DarkModeToggle
 * - CTA "Solicitar orçamento" (WhatsApp)
 * - Menu mobile (hamburger) com overlay
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const whatsappUrl = buildWhatsAppUrl(CTA_MESSAGE);

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-200',
          'bg-white/95 backdrop-blur-md dark:bg-neutral-900/95',
          scrolled
            ? 'border-b border-neutral-200 shadow-sm dark:border-neutral-700'
            : 'border-b border-transparent',
        ].join(' ')}
      >
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo size="md" />

          {/* Nav desktop */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações direita */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <HeaderSearch />
            </div>

            <DarkModeToggle />

            {/* CTA desktop */}
            <Button
              variant="whatsapp"
              size="sm"
              href={whatsappUrl}
              external
              iconLeft={<MessageCircle size={15} />}
              className="hidden sm:inline-flex"
            >
              Orçamento
            </Button>

            {/* Hamburger mobile */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 lg:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Drawer mobile */}
      <div
        id="mobile-navigation"
        className={[
          'fixed inset-x-0 top-20 z-40 lg:hidden',
          'border-b border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900',
          'transition-all duration-200',
          mobileOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
        ].join(' ')}
        aria-label="Menu mobile"
      >
        <nav className="flex flex-col px-4 py-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-primary dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="px-3 py-3">
            <HeaderSearch variant="mobile" onNavigate={() => setMobileOpen(false)} />
          </div>
          <div className="mt-3 border-t border-neutral-100 pt-3 dark:border-neutral-800">
            <Button
              variant="whatsapp"
              size="md"
              href={whatsappUrl}
              external
              iconLeft={<MessageCircle size={16} />}
              fullWidth
            >
              Solicitar orçamento via WhatsApp
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
