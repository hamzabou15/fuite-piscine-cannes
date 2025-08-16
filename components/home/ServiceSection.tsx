import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Recherche de Fuite",
    description: "Localisation précise sans destruction avec technologies de pointe",
    image: "/images/fuite-recherche.webp",
    link: "/services/recherche-de-fuite"
  },
  {
    title: "Réparation Urgence",
    description: "Intervention rapide 24h/24 pour colmater les fuites",
    image: "/images/reparation-urgence.webp",
    link: "/services/reparation-fuite"
  },
  {
    title: "Contrôle Étanchéité",
    description: "Diagnostic complet pour prévenir les problèmes futurs",
    image: "/images/controle-etancheite.webp",
    link: "/services/controle-etancheite"
  },
  {
    title: "Rénovation Piscine",
    description: "Remise à neuf de votre piscine avec garantie",
    image: "/images/renovation-piscine.webp",
    link: "/services/renovation-piscine"
  }
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-4">
            Nos Services Experts
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Des solutions complètes pour tous vos problèmes de piscine à Cannes et dans les Alpes-Maritimes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={service.image}
                  alt={`Photo ${service.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#114877]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  href={service.link}
                  className="mt-4 inline-flex items-center text-[#02BAD6] font-medium hover:underline"
                >
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center bg-[#114877] hover:bg-[#02BAD6] text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Découvrir tous nos services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
