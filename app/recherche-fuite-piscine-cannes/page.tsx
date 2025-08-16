// app/recherche-fuite-piscine-cannes/page.tsx
import { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ServiceCta from "@/components/services/ServiceCta";
import ServiceTechnologyGallery from "@/components/services/ServiceTechnologyGallery";

export const metadata: Metadata = {
  title: "Recherche Fuite Piscine Cannes 🔍 | Expert Local | Méthodes Non Destructives",
  description: "Expert en détection de fuites piscine à Cannes. Technologies avancées sans destruction. Intervention rapide 24h/7, rapport complet sous 48h. Garantie résultats!",
  keywords: "recherche fuite piscine Cannes, détection fuite piscine, fuite liner Cannes, réparation piscine 06, technicien piscine Cannes",
  alternates: {
    canonical: "https://fuitepiscinecannes-expert.fr/recherche-fuite-piscine-cannes",
  },
};

export default function RechercheFuitePiscineCannes() {
  return (
    <div className="bg-gradient-to-b from-[#e6f7ff] to-white">
      <ServiceHero
        title="Expert en Recherche de Fuite Piscine à Cannes"
        subtitle="Localisation précise sans destruction avec technologies de pointe"
        image="/images/recherche-fuite-piscine-cannes-hero.webp"
        alt="Technicien recherche fuite piscine Cannes"
      />

      <ServiceProcess
        title="Notre Processus d'Intervention"
        steps={[
          {
            icon: "📞",
            title: "Diagnostic téléphonique",
            description: "Analyse initiale de votre problème pour préparer l'intervention"
          },
          {
            icon: "🔍",
            title: "Recherche technologique",
            description: "Utilisation de gaz traceur, caméra thermique et électroacoustique"
          },
          {
            icon: "📊",
            title: "Rapport détaillé",
            description: "Remise d'un dossier complet avec localisation précise"
          },
          {
            icon: "🔧",
            title: "Devis réparation",
            description: "Proposition de solution curative adaptée à votre budget"
          }
        ]}
      />
      <ServiceTechnologyGallery />
      <ServiceBenefits
        title="Pourquoi choisir notre service de recherche?"
        benefits={[
          {
            title: "Équipements haute technologie",
            description: "Caméras endoscopiques, détecteurs acoustiques, gaz traceurs"
          },
          {
            title: "Sans destruction",
            description: "Aucun carrelage cassé, aucune tranchée inutile"
          },
          {
            title: "Expertise locale",
            description: "Spécialiste des piscines de la Côte d'Azur depuis 12 ans"
          },
          {
            title: "Garantie écrite",
            description: "2 ans sur toutes nos interventions"
          }
        ]}
      />

      <ServiceFaq
        title="Questions fréquentes sur la recherche de fuite"
        faqs={[
          {
            question: "Combien de temps prend une recherche de fuite?",
            answer: "En moyenne 2 à 4 heures selon la complexité de votre installation"
          },
          {
            question: "Dois-je vider ma piscine avant votre intervention?",
            answer: "Absolument pas! Nos méthodes fonctionnent avec la piscine pleine"
          },
          {
            question: "Quels types de piscines pouvez-vous diagnostiquer?",
            answer: "Tous types: liner, coque, béton, enterrées ou hors-sol"
          },
          {
            question: "Proposez-vous une garantie?",
            answer: "Oui, 24 mois sur toutes nos interventions de détection"
          }
        ]}
      />

      <ServiceTestimonials
        title="Ils nous ont fait confiance à Cannes"
        testimonials={[
          {
            name: "Marc Dubois",
            location: "Cannes, La Bocca",
            img: '/icons/user1.webp',
            text: "Fuite détectée en moins d'1h sans casser ma terrasse en pierre. Service professionnel et prix très correct pour Cannes!"
          },
          {
            name: "Sophie Martin",
            location: "Cannes, Centre-ville",
            img: '/icons/user2.webp',
            text: "Intervention dimanche après-midi pour urgence fuite. Technicien arrivé en 30 minutes et problème résolu. Je recommande!"
          },
          {
            name: "Marine Dupont",
            location: "Cannes, Super Cannes",
            img: '/icons/user3.webp',
            text: "Après 3 tentatives infructueuses avec d'autres sociétés, Fuite Piscine Expert a localisé la fuite dans ma piscine à débordement. Expertise remarquable !"
          }
        ]}
      />
      <ServiceCta
        title="Prêt à résoudre votre problème de fuite?"
        subtitle="Contactez-nous pour un diagnostic rapide à Cannes"
        buttonText="Demander une intervention"
      />
    </div>
  );
}