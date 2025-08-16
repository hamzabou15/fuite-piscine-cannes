import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Intro() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white">
                        <Image
                            src="/images/expert-fuite-piscine-canalisation-cannes.webp"
                            alt="Expert recherche fuite piscine Cannes"
                            width={800}
                            height={600}
                            className="object-cover w-full h-[450px]"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-[#114877] text-white py-3 px-6 rounded-lg shadow-lg">
                        <span className="font-bold">Depuis 1999</span>
                        <p className="text-sm">au service des Cannois</p>
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-6 leading-tight">
                        Votre expert en détection de fuite <span className="text-[#02BAD6]">sans casse</span> à Cannes
                    </h2>
                    
                    <div className="space-y-4 text-[#222626] mb-8">
                        <p className="flex items-start">
                            <span className="text-[#FFD700] mr-2 font-bold">✓</span>
                            <span>Spécialistes des piscines coque, liner et béton</span>
                        </p>
                        <p className="flex items-start">
                            <span className="text-[#FFD700] mr-2 font-bold">✓</span>
                            <span>Technologies de pointe : caméra endoscopique, gaz traceur</span>
                        </p>
                        <p className="flex items-start">
                            <span className="text-[#FFD700] mr-2 font-bold">✓</span>
                            <span>Intervention rapide dans tout le 06</span>
                        </p>
                        <p className="flex items-start">
                            <span className="text-[#FFD700] mr-2 font-bold">✓</span>
                            <span>Réparations durables avec garantie écrite</span>
                        </p>
                    </div>
                    
                    <p className="text-lg text-[#222626] mb-8">
                        Fondée en 1999, notre entreprise s&apos;est spécialisée dans la détection non destructive de fuites de piscines sur Cannes et sa région. 
                        Notre équipe de techniciens certifiés maîtrise les dernières technologies pour localiser et réparer vos fuites sans démolition.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <Link href="/services">
                            <Button className="bg-[#114877] hover:bg-[#0a3352] text-white py-6 px-8 text-lg">
                                Découvrir nos services
                            </Button>
                        </Link>
                        <a 
                            href="tel:+33756935200" 
                            className="flex items-center gap-2 text-[#114877] font-bold py-6 px-6 border-2 border-[#114877] rounded-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            07 56 93 52 00
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}