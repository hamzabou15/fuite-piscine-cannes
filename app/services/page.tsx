// app/services/page.tsx
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCta from "@/components/services/ServiceCta";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import { Metadata } from "next";
import { services } from "@/lib/service";

export const metadata: Metadata = {
  title: "Services Fuite Piscine Cannes 🔧 | Détection & Réparation",
  description: "Découvrez tous nos services spécialisés pour piscines à Cannes : recherche de fuite, réparation, entretien et rénovation. Solutions complètes et garanties.",
  keywords: "services piscine Cannes, réparation fuite piscine, entretien piscine 06, rénovation piscine Alpes-Maritimes",
  alternates: {
    canonical: "https://fuitepiscinecannes-expert.fr/services",
  },
};

export default function ServicesPage() {
  // const services = [
  //   {
  //     title: "Recherche de Fuite",
  //     description: "Localisation précise des fuites sans destruction avec technologies de pointe (gaz traceur, caméra endoscopique, électroacoustique)",
  //     image: "/images/services/recherche-fuite.webp",
  //     alt: "Technicien effectuant une recherche de fuite de piscine à Cannes"
  //   },
  //   {
  //     title: "Réparation de Fuite",
  //     description: "Scellement durable des fuites dans liner, coque ou canalisations avec matériaux de qualité professionnelle",
  //     image: "/images/services/reparation-fuite.webp",
  //     alt: "Réparation de fuite sur une piscine à Cannes"
  //   },
  //   {
  //     title: "Contrôle d'Étanchéité",
  //     description: "Test complet de votre bassin et réseau hydraulique pour prévenir les problèmes futurs",
  //     image: "/images/services/controle-etancheite.webp",
  //     alt: "Contrôle d'étanchéité d'une piscine à Cannes"
  //   },
  //   {
  //     title: "Rénovation de Piscine",
  //     description: "Remplacement de liner, réparation de coque, carrelage, et mise à niveau des équipements",
  //     image: "/images/services/renovation-piscine.webp",
  //     alt: "Rénovation complète d'une piscine à Cannes"
  //   },
  //   {
  //     title: "Entretien Préventif",
  //     description: "Maintenance régulière pour éviter les problèmes futurs et prolonger la durée de vie de votre piscine",
  //     image: "/images/services/entretien-preventif.webp",
  //     alt: "Entretien préventif d'une piscine à Cannes"
  //   },
  //   {
  //     title: "Expertise Technique",
  //     description: "Diagnostic complet avant achat ou après sinistre avec rapport détaillé",
  //     image: "/images/services/expertise-technique.webp",
  //     alt: "Expertise technique d'une piscine à Cannes"
  //   }
  // ];

  const benefits = [
    {
      title: "Équipements de dernière génération",
      description: "Nous utilisons des technologies de pointe pour un diagnostic précis"
    },
    {
      title: "Techniciens certifiés",
      description: "Nos experts sont formés et certifiés pour toutes les interventions"
    },
    {
      title: "Garantie écrite 2 ans",
      description: "Tous nos travaux sont garantis par contrat pendant 24 mois"
    },
    {
      title: "Devis gratuit sous 24h",
      description: "Obtenez un devis détaillé sans engagement dans la journée"
    },
    {
      title: "Intervention rapide 7j/7",
      description: "Disponibles même le week-end pour vos urgences"
    }
  ];

  const processSteps = [
    {
      icon: "📞",
      title: "Contact initial",
      description: "Appel ou formulaire en ligne pour décrire votre problème"
    },
    {
      icon: "📅",
      title: "Rendez-vous rapide",
      description: "Planification d'une intervention sous 48h"
    },
    {
      icon: "🔍",
      title: "Diagnostic expert",
      description: "Analyse complète par nos techniciens spécialisés"
    },
    {
      icon: "✅",
      title: "Solution adaptée",
      description: "Proposition de service personnalisé avec devis clair"
    }
  ];

  const faqItems = [
    {
      question: "Quel est le délai moyen d'intervention?",
      answer: "Nous intervenons généralement sous 48h à Cannes et dans les Alpes-Maritimes. Pour les urgences, nous proposons des créaux le jour même."
    },
    {
      question: "Proposez-vous des services d'entretien annuel?",
      answer: "Oui, nous proposons des contrats d'entretien annuel adaptés à tous types de piscines avec des visites trimestrielles ou semestrielles."
    },
    {
      question: "Travaillez-vous sur tous types de piscines?",
      answer: "Absolument! Nous intervenons sur piscines enterrées, hors-sol, liners, coques polyester, béton, et tous les systèmes de filtration."
    },
    {
      question: "Quelles sont vos zones d'intervention?",
      answer: "Nous couvrons tout le département des Alpes-Maritimes (06) avec une priorité sur Cannes et sa région. Contactez-nous pour vérifier la couverture de votre commune."
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Cannes, La Bocca",
      img:'/icons/user2.webp',
      text: "Service de recherche de fuite rapide et efficace. Le technicien a trouvé la fuite en moins d'une heure sans casser mon carrelage. Je recommande vivement!"
    },
    {
      name: "Pierre Martin",
      location: "Antibes",
      img:'/icons/user1.webp',
      text: "J'ai fait appel à eux pour la rénovation complète de ma piscine. Résultat impeccable, délais respectés et équipe très professionnelle."
    },
    {
      name: "Sophie Lambert",
      location: "Mougins",
      img:'/icons/user3.webp',
      text: "Contrat d'entretien annuel depuis 2 ans. Ma piscine est toujours parfaite et je n'ai plus eu aucun problème de fuite. Service de qualité!"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white">
      <ServiceHero
        title="Nos Services Spécialisés pour Piscines"
        subtitle="Des solutions complètes de la détection à la rénovation"
        image="/images/services-hero.webp"
        alt="Services experts pour piscines à Cannes"
      />

      <ServiceProcess
        title="Notre Processus de Service"
        steps={processSteps}
      />

        <ServiceGrid
        title="Découvrez Notre Expertise"
        services={services}
      />

      <ServiceBenefits
        title="Pourquoi Choisir Nos Services?"
        benefits={benefits}
      />

      <ServiceFaq
        title="Questions Fréquentes sur Nos Services"
        faqs={faqItems}
      />

      <ServiceTestimonials
        title="Témoignages de Nos Clients"
        testimonials={testimonials}
      />

      <ServiceCta
        title="Prêt à Profiter d'une Piscine Sans Problème?"
        subtitle="Contactez-nous pour un diagnostic gratuit et sans engagement"
        buttonText="Demander un Devis"
      />
    </div>
  );
}