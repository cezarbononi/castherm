import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { BrandsStrip } from '@/components/layout/BrandsStrip';
import { CategoriesSection } from '@/components/layout/CategoriesSection';
import { FeaturedProductsSection } from '@/components/layout/FeaturedProductsSection';
import { SectorsSection } from '@/components/layout/SectorsSection';
import { DifferentiatorsSection } from '@/components/layout/DifferentiatorsSection';
import { ContactSection } from '@/components/layout/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { WelcomeModal } from '@/components/layout/WelcomeModal';

/**
 * Landing page principal da Cas Therm — Fase 3
 *
 * Estrutura da página:
 * 1. Header      — sticky, logo + nav + dark toggle + CTA WhatsApp
 * 2. Hero        — headline forte + visual de instrumentos + 2 CTAs
 * 3. BrandsStrip — faixa de marcas parceiras
 * 4. Categorias  — 3 categorias principais em cards clicáveis
 * 5. Produtos    — destaques do catálogo com orçamento WhatsApp
 * 6. Setores     — quem atendemos (indústria, SST, lab, etc.)
 * 7. Diferenciais— por que escolher a Cas Therm (fundo escuro)
 * 8. Contato     — WhatsApp + e-mails + localização
 * 9. Footer      — links + CNPJ + Grupo Cas
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <BrandsStrip />
        <CategoriesSection />
        <FeaturedProductsSection />
        <SectorsSection />
        <DifferentiatorsSection />
        <ContactSection />
      </main>
      <Footer />
      <WelcomeModal />
    </>
  );
}
