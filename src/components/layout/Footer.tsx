import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Logo, CasServiceLogo, Container } from '@/components/ui';
import { company } from '@/data/company';
import { categories } from '@/data/categories';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const NAV_LINKS = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Categorias', href: '/#categorias' },
  { label: 'Produtos em destaque', href: '/#produtos' },
  { label: 'Setores atendidos', href: '/#setores' },
  { label: 'Fale conosco', href: '/#contato' },
];

const FEATURED_SUBCATEGORY_LINKS = [
  {
    label: 'Anemômetros',
    href: '/catalogo/seguranca-do-trabalho?subcategoria=anemometros',
  },
  {
    label: 'Decibelímetros',
    href: '/catalogo/seguranca-do-trabalho?subcategoria=decibelimetros',
  },
  {
    label: 'Manômetros',
    href: '/catalogo/instrumentos-de-pressao',
  },
];

/**
 * Footer global da landing page.
 *
 * Seções:
 * 1. Logo + tagline + botão WhatsApp
 * 2. Categorias de produtos (links)
 * 3. Navegação rápida
 * 4. Contato (e-mails principais)
 * 5. Linha inferior: CNPJ, copyright, Grupo Cas
 */
export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    'Olá! Vim pelo site da Cas Therm e gostaria de mais informações.',
  );

  return (
    <footer className="border-t border-neutral-200 bg-white text-primary dark:border-white/10 dark:bg-primary dark:text-white">
      {/* ===== Corpo principal ===== */}
      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1 — Logo e tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="md" asLink={false} />
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              Revenda consultiva de instrumentos de medição técnica para indústria, laboratório e
              segurança do trabalho.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-success px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-success-dark"
            >
              <MessageCircle size={16} />
              Solicitar orçamento
            </a>
          </div>

          {/* Coluna 2 — Categorias */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Categorias
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`/catalogo/${cat.slug}`}
                    className="text-sm text-neutral-700 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-white"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
              {/* Subcategorias de destaque */}
              {FEATURED_SUBCATEGORY_LINKS.map((link, index) => (
                <li key={link.href} className={index === 0 ? 'pt-1' : undefined}>
                  <a
                    href={link.href}
                    className="text-xs text-neutral-500 transition-colors hover:text-accent dark:hover:text-neutral-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Navegação */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-700 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Contato */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0 text-neutral-500 dark:text-neutral-400"
                />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {company.address.full ?? `${company.address.city} / ${company.address.state}`}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  size={15}
                  className="mt-0.5 shrink-0 text-neutral-500 dark:text-neutral-400"
                />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-700 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-white"
                >
                  {company.whatsapp.display}
                </a>
              </li>
              {company.emails.map((email) => (
                <li key={email.address} className="flex items-start gap-2.5">
                  <Mail
                    size={15}
                    className="mt-0.5 shrink-0 text-neutral-500 dark:text-neutral-400"
                  />
                  <a
                    href={'mailto:' + email.address}
                    className="text-sm text-neutral-700 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-white"
                  >
                    <span className="font-medium text-neutral-500 dark:text-neutral-400">
                      {email.label}:{' '}
                    </span>
                    {email.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* ===== Linha inferior ===== */}
      <div className="border-t border-neutral-200 dark:border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
            {/* Copyright e CNPJ */}
            <div className="text-xs text-neutral-500">
              <p>
                © {new Date().getFullYear()} {company.shortName}. Todos os direitos reservados.
              </p>
              <p className="mt-0.5">{company.legalName.split(' —')[0]}</p>
              <p className="mt-0.5">CNPJ: {company.cnpj}</p>
              <p className="mt-2">Desenvolvido por Cezar Bononi</p>
            </div>

            {/* Grupo Cas */}
            {company.group && (
              <div className="flex flex-col items-center gap-6">
                <p className="w-full text-center text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  Grupo empresarial
                </p>
                <div className="flex flex-wrap items-center justify-center gap-5">
                  {company.group.companies.map((co) => (
                    <div key={co.name} className="flex h-11 items-center" title={co.role}>
                      {co.name === 'Cas Therm' ? (
                        <Logo size="sm" asLink={false} />
                      ) : (
                        <CasServiceLogo size="md" className="max-h-10 w-[150px] opacity-90" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </footer>
  );
}
