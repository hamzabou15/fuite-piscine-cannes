
export default function InfoSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div

                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-6">
                            Questions Fréquentes sur les Fuites de Piscine
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "Comment détecter une fuite dans ma piscine?",
                                    answer: "Les signes courants incluent une baisse anormale du niveau d'eau, des factures d'eau élevées, des zones humides autour de la piscine ou une difficulté à maintenir l'équilibre chimique."
                                },
                                {
                                    question: "Combien coûte une recherche de fuite?",
                                    answer: "Le coût dépend de la complexité de la recherche. Nous proposons un diagnostic initial gratuit par téléphone, puis un devis précis après évaluation sur place."
                                },
                                {
                                    question: "Faut-il vider la piscine pour réparer une fuite?",
                                    answer: "Dans la plupart des cas, non. Nos techniques de réparation sous l'eau permettent d'intervenir sans vidange, sauf dans certaines situations particulières."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="border-b border-gray-200 pb-6">
                                    <h3 className="text-xl font-bold text-[#02BAD6] mb-2">{faq.question}</h3>
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* <div className="mt-8">
                            <a
                                href="/faq"
                                className="inline-flex items-center text-[#114877] font-bold hover:text-[#02BAD6] hover:underline"
                            >
                                Voir toutes les questions fréquentes
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div> */}
                    </div>

                    <div

                        className="bg-gradient-to-br from-[#114877] to-[#02BAD6] text-white rounded-xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Zone d&apos;Intervention</h3>
                        <p className="mb-6">Nous intervenons dans tout le département des Alpes-Maritimes (06), avec un service prioritaire sur Cannes et ses environs.</p>

                        <ul className="columns-2 gap-8 mb-6">
                            {[
                                "Cannes", "Antibes", "Nice", "Grasse",
                                "Mandelieu", "Mougins", "Vallauris", "Le Cannet",
                                "Théoule-sur-Mer", "Pégomas", "La Roquette-sur-Siagne",
                                "Auribeau-sur-Siagne", "Mouans-Sartoux", "Valbonne", "Biot"
                            ].map((city, index) => (
                                <li key={index} className="flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {city}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="/villages-desservis-06"
                            className="inline-flex items-center bg-[#FFD700] hover:bg-[#FFC107] text-[#114877] font-bold py-2 px-4 rounded-lg"
                        >
                            Voir toutes les communes
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}