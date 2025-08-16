// components/urgence/UrgenceServices.tsx

interface UrgenceServicesProps {
  title: string;
  services: string[];
}

export default function UrgenceServices({ title, services }: UrgenceServicesProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nos techniciens spécialisés interviennent rapidement avec du matériel professionnel
            pour diagnostiquer et résoudre votre problème de fuite à Cannes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}

            >
              <div className="bg-[#02BAD6] rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#114877] mb-3">{service}</h3>
              <p className="text-gray-600 flex-grow">
                {service === "Colmatage de fuite temporaire" &&
                  "Mise en place d'une solution d'étanchéité immédiate pour stopper la fuite en attendant une réparation définitive"}
                {service === "Récupération d'eau perdue" &&
                  "Évaluation des pertes et conseils pour réduire votre consommation d'eau"}
                {service === "Diagnostic express" &&
                  "Localisation précise de la fuite par des méthodes non invasives (gaz traceur, caméra thermique, endoscopie)"}
                {service === "Conseils pour limiter les dégâts" &&
                  "Protocole immédiat à appliquer avant l'arrivée de nos techniciens pour minimiser les impacts"}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#114877] mb-4">Technologies de pointe pour détection rapide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-[#114877] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Caméra thermique</h4>
                <p className="text-gray-600">Détection des variations de température révélatrices de fuites</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#114877] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Gaz traceur</h4>
                <p className="text-gray-600">Méthode ultra-précise pour localiser les micro-fuites</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#114877] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Endoscopie numérique</h4>
                <p className="text-gray-600">Inspection visuelle des canalisations sans excavation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}