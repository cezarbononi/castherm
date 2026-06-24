'use client';

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { X } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const STORAGE_KEY = 'castherm-welcome-modal-seen';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const timer = window.setTimeout(() => setIsOpen(true), 700);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const closeModal = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setIsOpen(false);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const message = [
      'Olá! Vim pelo site da Cas Therm e gostaria de receber orientação técnica.',
      name ? `Nome: ${name}` : '',
      email ? `E-mail: ${email}` : '',
      phone ? `Telefone: ${phone}` : '',
    ].filter(Boolean).join('\n');

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    closeModal();
  };

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeModal, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-primary/45 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
      aria-describedby="welcome-modal-description"
    >
      <div className="relative w-full max-w-sm rounded-lg border border-neutral-200 bg-white p-6 text-center shadow-2xl dark:border-neutral-700 dark:bg-neutral-900">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-primary dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
          aria-label="Fechar modal"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <h2 id="welcome-modal-title" className="pr-6 text-2xl font-semibold text-primary dark:text-neutral-100">
          Precisa de apoio para especificar instrumentos?
        </h2>
        <p id="welcome-modal-description" className="mt-3 text-base leading-snug text-primary/85 dark:text-neutral-300">
          A Cas Therm ajuda sua equipe a encontrar soluções de medição para pressão, temperatura e segurança do trabalho.
        </p>
        <p className="mt-3 text-base leading-snug text-primary/85 dark:text-neutral-300">
          Deixe seu contato e retornamos com orientação técnica para o seu processo ou aplicação.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-2.5">
          <label htmlFor="welcome-name" className="sr-only">
            Primeiro nome
          </label>
          <input
            id="welcome-name"
            type="text"
            name="name"
            placeholder="Seu primeiro nome"
            className="h-12 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          />
          <label htmlFor="welcome-email" className="sr-only">
            E-mail
          </label>
          <input
            id="welcome-email"
            type="email"
            name="email"
            placeholder="E-mail"
            className="h-12 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          />
          <label htmlFor="welcome-phone" className="sr-only">
            Telefone
          </label>
          <input
            id="welcome-phone"
            type="tel"
            name="phone"
            placeholder="Telefone"
            className="h-12 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          />
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:bg-accent dark:text-primary dark:hover:bg-accent-600"
          >
            Solicitar contato
          </button>
        </form>
      </div>
    </div>
  );
}
