import { motion } from "framer-motion";
import Image from "next/image";

const keyPoints = [
  {
    title: "Sans Destruction",
    description: "Technologies non invasives sans casser vos carrelages",
    icon: "🔍"
  },
  {
    title: "Disponible 24h/24",
    description: "Service d'urgence 7j/7 pour les fuites importantes",
    icon: "⏱️"
  },
  {
    title: "Garantie Écrite",
    description: "Toutes nos interventions sont garanties 2 ans",
    icon: "📝"
  },
  {
    title: "Expertise Locale",
    description: "Spécialistes des piscines de la Côte d'Azur",
    icon: "🏆"
  }
];

export default function KeyPointsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-4">
            Pourquoi Choisir Notre Expertise?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Notre approche professionnelle et nos engagements pour votre satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#114877]">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#114877] mb-4">Notre Processus en 4 Étapes</h3>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <span className="font-bold">Diagnostic initial</span> - Analyse de votre problème par téléphone
                </li>
                <li>
                  <span className="font-bold">Intervention rapide</span> - Déplacement sous 24h sur Cannes
                </li>
                <li>
                  <span className="font-bold">Recherche de pointe</span> - Utilisation de technologies non destructives
                </li>
                <li>
                  <span className="font-bold">Solution durable</span> - Réparation garantie avec rapport complet
                </li>
              </ol>
            </div>
            <div className="">
              <Image
                width={500}
                height={500}
                src={"/images/infographie-processus.webp"}
                alt="infographie du processus"
                className=" object-cpntain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}