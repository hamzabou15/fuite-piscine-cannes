// components/urgence/UrgenceGallery.tsx
import Image from "next/image";

const galleryItems = [
  {
    image: "/images/detection-fuite-camera-thermique.jpg",
    alt: "Détection de fuite par caméra thermique à Cannes",
    title: "Détection par caméra thermique",
    description: "Identification des variations de température révélatrices de fuites"
  },
  {
    image: "/images/intervention-fuite-nocturne.jpg",
    alt: "Intervention de nuit sur une fuite de piscine à Cannes",
    title: "Intervention nocturne",
    description: "Équipes disponibles 24h/24 pour les urgences"
  },
  {
    image: "/images/reparation-fuite-sous-eau.jpg",
    alt: "Réparation de fuite sous l'eau sans vidange",
    title: "Réparation sous l'eau",
    description: "Techniques spéciales sans vidanger la piscine"
  },
  {
    image: "/images/equipe-urgence-piscine.jpg",
    alt: "Notre équipe d'urgence fuite piscine à Cannes",
    title: "Équipe spécialisée",
    description: "Techniciens certifiés avec 10+ ans d'expérience"
  }
];

export default function UrgenceGallery() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#114877]">
          Notre Expertise en Images
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg"

            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#114877] to-transparent opacity-90" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>

              <div className="absolute top-4 right-4 bg-[#FFD700] text-[#114877] px-3 py-1 rounded-full font-bold">
                Urgence
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#114877] mb-4">Pourquoi nos clients nous font confiance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-[#114877] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Certifications</h4>
                <p className="text-gray-600">Techniciens certifiés Qualipiscine®</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#114877] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Expérience</h4>
                <p className="text-gray-600">15 ans d&apos;expertise sur la Côte d&apos;Azur</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#114877] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Transparence</h4>
                <p className="text-gray-600">Reportage vidéo de l&apos;intervention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}