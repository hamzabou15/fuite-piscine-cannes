// app/urgence-fuite-piscine-cannes/page.tsx
import UrgenceComparison from "@/components/urgence/UrgenceComparison";
import UrgenceCta from "@/components/urgence/UrgenceCta";
import UrgenceHero from "@/components/urgence/UrgenceHero";
import UrgenceProcess from "@/components/urgence/UrgenceProcess";
import UrgenceServices from "@/components/urgence/UrgenceServices";
import UrgenceZones from "@/components/urgence/UrgenceZones";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Urgence Fuite Piscine Cannes 🚨 | Intervention 24h/24 7j/7",
  description: "Service d'urgence pour fuite piscine à Cannes. Disponible 24h/24 et 7j/7, notre équipe intervient en moins de 2h pour stopper les dégâts.",
  keywords: "urgence fuite piscine Cannes, dépannage piscine Cannes, réparation fuite piscine 24/7",
  alternates: {
    canonical: "https://fuitepiscinecannes-expert.fr/urgence-fuite-piscine-cannes",
  },
};

export default function UrgenceFuitePiscineCannes() {
  return (
    <div className="bg-gradient-to-b from-[#fff9db] to-white">
      <UrgenceHero
        title="Service d'Urgence Fuite Piscine Cannes"
        subtitle="Intervention rapide 24h/24 - 7j/7"
        phone="+33 7 56 93 52 00"
      />

      <UrgenceProcess
        title="Notre Processus d'Urgence"
        steps={[
          {
            time: "15 min",
            title: "Appel initial",
            description: "Nous analysons votre situation par téléphone"
          },
          {
            time: "45 min",
            title: "Déplacement",
            description: "Un technicien se met en route vers votre domicile"
          },
          {
            time: "1h",
            title: "Diagnostic",
            description: "Localisation rapide de la fuite"
          },
          {
            time: "2h",
            title: "Solution d'urgence",
            description: "Mise en place d'un scellement temporaire"
          }
        ]}
      />
      <UrgenceComparison />

      <UrgenceServices
        title="Nos Interventions d'Urgence"
        services={[
          "Colmatage de fuite temporaire",
          "Récupération d'eau perdue",
          "Diagnostic express",
          "Conseils pour limiter les dégâts"
        ]}
      />

      <UrgenceZones
        title="Zones Couvertes en Urgence"
        zones={[
          "Cannes Centre-ville",
          "La Bocca",
          "Le Cannet",
          "Mougins",
          "Vallauris",
          "Mandelieu",
          "Théoule-sur-Mer"
        ]}
      />

      <UrgenceCta
        title="Une fuite nécessite une intervention immédiate?"
        subtitle="Appelez notre équipe d'urgence disponible 24h/24"
        phone="+33 7 56 93 52 00"
        buttonText="Appeler maintenant"
      />
    </div>
  );
}