// components/services/ServiceTechnologyGallery.tsx
import Image from "next/image";

const technologies = [
  {
    image: "/images/gaz-traceur-piscine.webp",
    alt: "Détection de fuite par gaz traceur à Cannes",
    title: "Gaz traceur haute précision",
    description: "Méthode infaillible pour localiser les micro-fuites dans les canalisations"
  },
  {
    image: "/images/camera-endoscopique-piscine.webp",
    alt: "Inspection par caméra endoscopique pour piscine",
    title: "Caméra endoscopique",
    description: "Inspection visuelle des conduits sans excavation"
  },
  {
    image: "/images/detection-electroacoustique.webp",
    alt: "Détection électroacoustique de fuite",
    title: "Détection électroacoustique",
    description: "Écoute des vibrations sonores spécifiques aux fuites"
  },
  {
    image: "/images/camera-thermique-piscine.webp",
    alt: "Détection thermographique pour fuite piscine",
    title: "Caméra thermique",
    description: "Identification des variations de température révélatrices"
  }
];

export default function ServiceTechnologyGallery() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#114877]">
          Technologies de Détection Avancées
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16">
          Notre équipement de pointe nous permet de localiser les fuites avec précision sans causer de dégâts à votre propriété
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"

            >
              <div className="relative h-56">
                <Image
                  src={tech.image}
                  alt={tech.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#114877] to-transparent opacity-80" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#114877]">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
              <Image
                src="/images/rapport-fuite-piscine.webp"
                alt="Exemple de rapport de recherche de fuite de piscine"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#114877] mb-4">Rapport Complet de Diagnostic</h3>
              <p className="mb-4">
                Chaque intervention donne lieu à un rapport détaillé comprenant :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Localisation précise de la fuite (coordonnées GPS)</li>
                <li>Photos et vidéos de la fuite détectée</li>
                <li>Analyse des causes probables</li>
                <li>Données techniques enregistrées</li>
                <li>Conseils pour éviter les récidives</li>
                <li>Devis détaillé pour la réparation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}