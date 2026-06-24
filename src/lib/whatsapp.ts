import { company } from '@/data/company';

/**
 * Gera uma URL do WhatsApp (wa.me) com mensagem pré-preenchida.
 *
 * @param message Mensagem opcional a ser pré-preenchida
 * @returns URL pronta para uso em <a href="">
 *
 * @example
 *   buildWhatsAppUrl('Olá, gostaria de um orçamento.')
 */
export function buildWhatsAppUrl(message?: string): string {
  const number = company.whatsapp.number;
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Mensagem padrão para orçamento de um produto específico.
 */
export function buildQuoteMessage(productName: string): string {
  return `Olá! Gostaria de solicitar um orçamento para: ${productName}.`;
}

/**
 * Mensagem padrão para contato geral.
 */
export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Gostaria de mais informações sobre os produtos da Cas Therm.';
