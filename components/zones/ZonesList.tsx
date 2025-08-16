// components/zones/ZonesList.tsx

interface ZonesListProps {
    title: string;
    communes: string[];
    note: string;
}

export default function ZonesList({ title, communes, note }: ZonesListProps) {
    return (
        <section id="communes" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Nous intervenons dans toutes ces communes et leurs alentours pour vos problèmes de fuite de piscine
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {communes.map((commune, index) => (
                        <div
                            key={index}
                            className="bg-[#f8f9fa] rounded-lg p-4 flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#02BAD6] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-medium">{commune}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-[#02BAD6] to-[#114877] text-white rounded-xl p-6 max-w-4xl mx-auto">
                    <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFD700] mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Délais d&apos;intervention</h3>
                            <p>{note}</p>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <h4 className="font-bold">Zone prioritaire</h4>
                                    <p>Cannes et 20km alentour</p>
                                    <p className="text-[#FFD700] font-bold">Intervention sous 24h</p>
                                </div>
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <h4 className="font-bold">Zone étendue</h4>
                                    <p>Reste du département 06</p>
                                    <p className="text-[#FFD700] font-bold">Intervention sous 48h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                    <h3 className="text-2xl font-bold text-[#114877] mb-4">Communes les plus demandées</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#f8f9fa] rounded-lg p-6">
                            <h4 className="font-bold text-lg mb-3 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#02BAD6] mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Cannes
                            </h4>
                            <p className="text-gray-600 mb-4">Centre-ville, La Bocca, Californie, Croisette</p>
                            <div className="text-sm bg-[#114877] text-white px-3 py-1 rounded-full inline-block">
                                200+ interventions/an
                            </div>
                        </div>
                        <div className="bg-[#f8f9fa] rounded-lg p-6">
                            <h4 className="font-bold text-lg mb-3 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#02BAD6] mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Antibes
                            </h4>
                            <p className="text-gray-600 mb-4">Juan-les-Pins, Cap d&apos;Antibes, Sophia Antipolis</p>
                            <div className="text-sm bg-[#114877] text-white px-3 py-1 rounded-full inline-block">
                                120+ interventions/an
                            </div>
                        </div>
                        <div className="bg-[#f8f9fa] rounded-lg p-6">
                            <h4 className="font-bold text-lg mb-3 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#02BAD6] mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Grasse
                            </h4>
                            <p className="text-gray-600 mb-4">Centre historique, zones résidentielles, Plateaux</p>
                            <div className="text-sm bg-[#114877] text-white px-3 py-1 rounded-full inline-block">
                                80+ interventions/an
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}