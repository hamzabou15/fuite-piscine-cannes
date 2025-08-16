// components/urgence/UrgenceComparison.tsx
import Image from "next/image";

export default function UrgenceComparison() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#114877]">
                    Interventions Urgence Fuite Piscine & Cannes
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div

                        className="bg-[#f8f9fa] rounded-xl p-6"
                    >
                        <h3 className="text-2xl font-bold text-[#114877] mb-4 text-center">
                            Avant Intervention
                        </h3>
                        <div className="relative rounded-xl overflow-hidden h-[450px]">
                            <Image
                                src="/images/fuite-piscine-avant.png"
                                alt="Fuite de piscine non traitée à Cannes"
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                                <p>Fuite non traitée causant des dégâts structurels - piscine Cannes</p>
                            </div>
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                Perte d&apos;eau importante (jusqu&apos;à 500L/jour)
                            </li>
                            <li className="flex items-start text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                Risque d&apos;affaissement du terrain
                            </li>
                            <li className="flex items-start text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                Dégradation des équipements
                            </li>
                        </ul>
                    </div>

                    <div

                        className="bg-[#f8f9fa] rounded-xl p-6"
                    >
                        <h3 className="text-2xl font-bold text-[#114877] mb-4 text-center">
                            Après Intervention
                        </h3>
                        <div className="relative rounded-xl overflow-hidden h-[450px]">
                            <Image
                                src="/images/fuite-piscine-apres.png"
                                alt="Piscine réparée par nos soins à Cannes"
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                                <p>Solution définitive appliquée par nos experts - piscine Cannes</p>
                            </div>
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Fuite colmatée en moins de 2h
                            </li>
                            <li className="flex items-start text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Économies d&apos;eau immédiates
                            </li>
                            <li className="flex items-start text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Garantie 2 ans sur les réparations
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-r from-[#114877] to-[#02BAD6] text-white rounded-xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Notre Expertise en Chiffres</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-4xl font-bold">24/7</div>
                            <p>Disponibilité</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">&lt;2h</div>
                            <p>Délai moyen d&apos;intervention</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">98%</div>
                            <p>Fuites détectées</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">500+</div>
                            <p>Interventions/an</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}