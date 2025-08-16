// components/home/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Fond aquatique */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#114877] to-[#02BAD6] opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[url('/images/wave-pattern.svg')] bg-repeat-x"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              <span className="block">Expert en Recherche</span>
              <span className="block text-[#FFD700] mt-2">de Fuite Piscine à Cannes</span>
            </h1>
            
            <p className="text-xl text-[#E6F7FF] mb-8 max-w-2xl mx-auto lg:mx-0">
              🔍 Détection précise sans destruction • 🚀 Intervention en moins de 24h • 
              💯 Garantie de résultat sur tout le 06
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact" passHref>
                <Button className="bg-[#FFD700] hover:bg-[#FFC107] text-[#114877] font-bold py-6 px-8 rounded-lg text-lg shadow-lg transform transition hover:scale-105">
                  📞 Urgence Fuite - Appelez-nous!
                </Button>
              </Link>
              <Link href="#services" passHref>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-6 px-8 rounded-lg text-lg">
                  🔧 Nos Services
                </Button>
              </Link>
            </div>
            
            {/* Badges de garantie */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="bg-green-500 rounded-full p-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm">Sans vidange piscine</span>
              </div>
              
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="bg-green-500 rounded-full p-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm">Garantie 2 ans</span>
              </div>
            </div>
          </div>
          
          {/* Image Hero */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3">
              <Image
                src="/images/hero-fuite-piscine-cannes.webp"
                alt="Technicien expert en recherche de fuite piscine à Cannes"
                width={600}
                height={500}
                priority
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#114877] to-transparent p-6">
                <p className="text-white font-bold text-lg">Intervention Express sur Cannes et Alpes-Maritimes</p>
              </div>
            </div>
            
            {/* Badge d'urgence */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold animate-pulse shadow-lg">
              URGENCE 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}