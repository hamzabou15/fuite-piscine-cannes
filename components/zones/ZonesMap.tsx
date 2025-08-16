// components/zones/ZonesMap.tsx

import Image from "next/image";

interface ZonesMapProps {
  title: string;
  description: string;
}

export default function ZonesMap({ title, description }: ZonesMapProps) {
  return (
    <section id="carte" className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              {/* Carte interactive - Intégration Leaflet ou Google Maps en réel */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-bold mb-4">Carte Interactive des Zones d&apos;Intervention</h3>
                  <Image
                    src="/images/carte-alpes-maritimes-region.png"
                    alt="Carte des Alpes-Maritimes avec zones d'intervention"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                  <div className="inline-flex gap-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-[#02BAD6] mr-2"></div>
                      <span>Zone prioritaire</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-[#114877] mr-2"></div>
                      <span>Zone étendue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#114877] mb-4">Détails de couverture</h3>

              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#02BAD6] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Zone prioritaire (rayon 20km autour de Cannes)
                </h4>
                <p className="text-gray-600 mb-4">
                  Interventions sous 24h, service premium avec techniciens dédiés
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Interventions 7j/7 de 8h à 20h</li>
                  <li>Urgences traitées en moins de 4h</li>
                  <li>Pas de majoration pour déplacement</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#114877] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Zone étendue (tout le 06)
                </h4>
                <p className="text-gray-600 mb-4">
                  Interventions sous 48h, avec techniciens de secteur
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Interventions du lundi au samedi</li>
                  <li>Majoration de déplacement selon distance</li>
                  <li>Forfait kilométrique transparent</li>
                </ul>
              </div>

              <div className="mt-8 bg-[#f8f9fa] rounded-lg p-4">
                <h4 className="font-bold mb-2">Exemples de distances depuis Cannes</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex justify-between border-b pb-2">
                    <span>Antibes</span>
                    <span className="font-bold">15 km</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Nice</span>
                    <span className="font-bold">32 km</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Grasse</span>
                    <span className="font-bold">18 km</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Menton</span>
                    <span className="font-bold">55 km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#114877] mb-4">Foire aux questions - Zones d&apos;intervention</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Proposez-vous des interventions dans les villages perchés?</h4>
              <p className="text-gray-600">Oui, nos techniciens sont équipés pour intervenir dans toutes les communes des Alpes-Maritimes, y compris les villages de montagne difficiles d&apos;accès comme Gourdon, Tourrettes-sur-Loup ou Saint-Paul-de-Vence.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Quels sont les frais de déplacement?</h4>
              <p className="text-gray-600">Dans un rayon de 20km autour de Cannes, les frais de déplacement sont inclus. Au-delà, nous appliquons un forfait kilométrique transparent de 0,50€/km. Vous serez informé du montant exact avant toute intervention.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Intervenez-vous sur les îles (Lérins, Sainte-Marguerite)?</h4>
              <p className="text-gray-600">Absolument! Nous proposons un service spécial pour les îles avec coordination des traversées. Un supplément de 50€ s&apos;applique pour couvrir les frais de transport maritime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}