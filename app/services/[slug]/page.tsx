// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';

import { Metadata } from "next";
import { services } from '@/lib/service';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceContentSection from '@/components/services/ServiceContentSection';
import ServiceBenefitsSection from '@/components/services/ServiceBenefitsSection';
import ServiceProcessSection from '@/components/services/ServiceProcessSection';
import ServiceFaqSection from '@/components/services/ServiceFaqSection';
import ServiceCtaSection from '@/components/services/ServiceCtaSection';


interface ServicesProps {
  params: Promise<{ slug: string }>;

}

export async function generateMetadata({ params }: ServicesProps) {
  const { slug } = await params;

  const service = services.find((s: { slug: string; }) => s.slug === slug);

  if (!service) {
    return {
      title: "Service non trouvé",
      description: "Le service demandé n'existe pas."
    };
  }

  return {
    title: `${service.title} | Fuite Piscine Cannes Expert`,
    description: service.description,
    keywords: [
      ...service.title.toLowerCase().split(' '),
      "Cannes",
      "Alpes-Maritimes",
      "service piscine",
      "expert piscine"
    ],
    alternates: {
      canonical: `https://fuitepiscinecannes-expert.fr/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://fuitepiscinecannes-expert.fr/services/${service.slug}`,
      images: [{
        url: service.image,
        width: 1200,
        height: 630,
        alt: service.alt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicesProps) {
  const { slug } = await params;

  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }
  const content = service.content || `
    <h2>${service.title}</h2>
    <p>Contenu détaillé en préparation. Nos experts préparent actuellement des informations complètes sur ce service.</p>
    <p>En attendant, n'hésitez pas à nous contacter pour plus d'informations.</p>
  `;
  return (
    <div>
      <ServiceDetailHero
        title={service.title}
        description={service.description}
        image={service.image}
        alt={service.alt}
      />

      <ServiceContentSection
        content={service.content}
      />

      <ServiceBenefitsSection
        title="Avantages de Notre Service"
        benefits={service.benefits}
      />

      <ServiceProcessSection
        title="Notre Processus d'Intervention"
        steps={service.process}
      />

      <ServiceFaqSection
        title="Questions Fréquentes sur ce Service"
        faqs={service.faqs}
      />

      <ServiceCtaSection
        title={`Prêt pour un ${service.title.split(' ')[0].toLowerCase()} professionnel?`}
        subtitle="Contactez-nous pour un diagnostic gratuit et sans engagement"
        buttonText="Demander une intervention"
      />
    </div>
  );
}

export async function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }));
}