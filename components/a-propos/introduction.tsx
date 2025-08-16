import React from 'react'
import Link from 'next/link'

const Introduction = () => {
    return (
        <section className="py-16 bg-[#f8fafc] rounded-xl px-8 mb-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-8 text-center">
                    Notre engagement pour les piscines de Cannes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#02BAD6]">
                        <h3 className="text-xl font-bold text-[#114877] mb-3">Expertise locale</h3>
                        <p className="text-[#222626]">
                            Basés à Cannes, nous connaissons parfaitement les spécificités des piscines de la région : 
                            problèmes récurrents de canalisation, effets du climat méditerranéen sur les structures, 
                            et particularités des sols du 06.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FFD700]">
                        <h3 className="text-xl font-bold text-[#114877] mb-3">Technologies avancées</h3>
                        <p className="text-[#222626]">
                            Nous investissons chaque année dans des équipements de dernière génération : 
                            détecteurs acoustiques de haute précision, caméras thermiques, traceurs électroniques 
                            et systèmes de pression différentielle.
                        </p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none text-[#222626]">
                    <p>
                        <strong>Notre mission :</strong> Vous éviter des travaux coûteux et destructeurs. Grâce à nos méthodes non invasives, 
                        nous localisons avec précision 98% des fuites sans avoir à casser vos carrelages ou à vider votre piscine.
                    </p>
                    
                    <p>
                        <strong>Notre zone d&apos;intervention :</strong> Nous couvrons tout le bassin cannois et ses environs : 
                        Antibes, Vallauris, Le Cannet, Mougins, Grasse, Mandelieu-la-Napoule, et Théoule-sur-Mer. 
                        Notre service d&apos;urgence intervient dans les 24h sur Cannes et ses alentours proches.
                    </p>
                    
                    <p>
                        Chaque intervention fait l&apos;objet d&apos;un <strong>rapport détaillé</strong> avec photos et explications techniques, 
                        et nos réparations sont garanties jusqu&apos;à 5 ans selon les cas.
                    </p>
                </div>

                <div className="mt-10 text-center">
                    <Link href="/contact" className="inline-block bg-[#114877] hover:bg-[#0a3352] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
                        Obtenir un diagnostic gratuit
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Introduction