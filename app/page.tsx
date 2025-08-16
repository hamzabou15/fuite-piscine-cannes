// app/page.tsx
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import LeakPoolIntro from "@/components/home/LeakPoolIntro";
import ProjectSection from "@/components/home/ProjectSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonials from "@/components/Testimonials";
import StatsCard from "@/components/StatsCard";
import SchemaLocalBusiness from "@/components/SEO/LocalBusiness";
import KeyPointsSection from "@/components/home/KeyPointsSection";

export const metadata = {
  title: "Recherche Fuite Piscine Cannes 🔍 | Expert Local Sans Casse | 24h/7j",
  description: "🔧 Spécialiste en détection de fuites piscine à Cannes et Alpes-Maritimes. Technologie non destructive, intervention rapide 7j/7, rapport complet sous 48h. Garantie résultats ou remboursé!",
  keywords: "recherche fuite piscine Cannes, détection fuite piscine, fuite liner Cannes, réparation piscine 06, technicien piscine Cannes, fuite coque piscine, fuite canalisation piscine",
  robots: "index, follow",
  canonical: "https://fuitepiscinecannes-expert.fr",
  openGraph: {
    title: "Expert Recherche Fuite Piscine Cannes - Sans Destruction | 06",
    description: "Intervention rapide pour détecter et réparer les fuites de piscine à Cannes. Technologie de pointe, sans casse, avec garantie écrite.",
    url: "https://fuitepiscinecannes-expert.fr",
    siteName: "Fuite Piscine Cannes Expert",
    images: [
      {
        url: "https://fuitepiscinecannes-expert.fr/images/og-fuite-piscine.jpg",
        width: 1200,
        height: 630,
        alt: "Technicien expert en détection fuite piscine à Cannes",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🚑 Urgence Fuite Piscine Cannes - Intervention 24h/24",
    description: "Service express de recherche et réparation de fuites piscine sur Cannes et le 06. Sans vidange, avec diagnostic précis.",
    images: ["https://fuitepiscinecannes-expert.fr/images/og-fuite-piscine.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <SchemaLocalBusiness />
      <main className="font-sans bg-gradient-to-b from-[#e6f7ff] to-white text-[#114877]">
        <Hero />

        {/* Ajout des nouveaux composants */}
        <ServiceSection />
        <KeyPointsSection />
        <LeakPoolIntro />
        <ProjectSection />
        <Testimonials />
        <StatsCard />
        <ContactSection />
        <InfoSection />

        {/* Section de contact supplémentaire en bas de page */}
        <div className="py-16 bg-gradient-to-r from-[#114877] to-[#02BAD6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Résoudre Votre Problème de Fuite?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Contactez-nous dès maintenant pour une intervention rapide et professionnelle
            </p>
            <a
              href="/contact"
              className="bg-[#FFD700] hover:bg-[#FFC107] text-[#114877] font-bold py-4 px-8 rounded-lg shadow-xl text-lg inline-block transition transform hover:scale-105"
            >
              Demander un Diagnostic
            </a>
          </div>
        </div>
      </main>
    </>
  );
}