// app/Villes-desservis-06/page.tsx
import ZonesCta from "@/components/zones/ZonesCta";
import ZonesHero from "@/components/zones/ZonesHero";
import ZonesList from "@/components/zones/ZonesList";
import ZonesMap from "@/components/zones/ZonesMap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zones Desservies 06 🗺️ | Recherche Fuite Piscine Alpes-Maritimes",
  description: "Intervention dans tout le département 06 : Cannes, Antibes, Nice, Grasse, Mandelieu, Mougins, Vallauris et toutes les communes environnantes.",
  keywords: "intervention fuite piscine Alpes-Maritimes, recherche fuite piscine 06, technicien piscine Cannes région",
  alternates: {
    canonical: "https://fuitepiscinecannes-expert.fr/Villes-desservis-06",
  },
};

export default function VillesDesservis06() {
  const communes = [
    "Cannes",
    "Antibes",
    "Nice",
    "Grasse",
    "Mandelieu-la-Napoule",
    "Mougins",
    "Vallauris",
    "Le Cannet",
    "Théoule-sur-Mer",
    "Pégomas",
    "La Roquette-sur-Siagne",
    "Auribeau-sur-Siagne",
    "Mouans-Sartoux",
    "Valbonne",
    "Biot",
    "Cagnes-sur-Mer",
    "Saint-Laurent-du-Var",
    "Vence",
    "Saint-Paul-de-Vence",
    "Carros"
  ];
  
  return (
    <div className="bg-gradient-to-b from-[#e6f7ff] to-white">
      <ZonesHero 
        title="Intervention dans tout le 06"
        subtitle="Notre équipe se déplace rapidement dans toutes les Alpes-Maritimes"
      />
      
      <ZonesList 
        title="Communes desservies"
        communes={communes}
        note="Délai moyen d'intervention : 24-48h (urgences : moins de 2h)"
      />
      
      <ZonesMap 
        title="Carte de notre zone d'intervention"
        description="Nous couvrons tout le département des Alpes-Maritimes avec une priorité sur la région cannoise"
      />
      
      <ZonesCta 
        title="Vous ne voyez pas votre commune?"
        subtitle="Contactez-nous pour vérifier notre disponibilité"
        buttonText="Vérifier la couverture"
      />
    </div>
  );
}