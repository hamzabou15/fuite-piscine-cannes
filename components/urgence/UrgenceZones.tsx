// components/urgence/UrgenceZones.tsx

interface UrgenceZonesProps {
    title: string;
    zones: string[];
}

export default function UrgenceZones({ title, zones }: UrgenceZonesProps) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Nous intervenons 24h/24 et 7j/7 dans toute la région de Cannes
                        et ses environs pour vos urgences fuite piscine
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div

                    >
                        <div className="bg-[#f8f9fa] rounded-xl p-8">
                            <h3 className="text-xl font-bold text-[#114877] mb-6">Communes couvertes en urgence</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {zones.map((zone, index) => (
                                    <div key={index} className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#02BAD6] mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {zone}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-[#114877] text-white rounded-lg p-4">
                                <h4 className="font-bold mb-2">Hors zone ? Contactez-nous !</h4>
                                <p>Nous étudions toutes les demandes d&apos;intervention dans un rayon élargi autour de Cannes</p>
                            </div>
                        </div>
                    </div>

                    <div

                    >
                        <div className="bg-gradient-to-br from-[#114877] to-[#02BAD6] rounded-xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-6">Disponibilité 24h/24 - 7j/7</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold">Jours ouvrables</h4>
                                        <p>8h - 20h : Intervention express sous 2h</p>
                                        <p>20h - 8h : Service premium avec majoration</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold">Weekends et jours fériés</h4>
                                        <p>Service d&apos;urgence avec équipe dédiée</p>
                                        <p>Majoration de 30% appliquée</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold">Garantie d&apos;intervention</h4>
                                        <p>Engagement contractuel de délai maximum</p>
                                        <p>Pénalités en cas de retard non justifié</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}