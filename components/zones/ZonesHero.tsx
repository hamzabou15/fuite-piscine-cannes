// components/zones/ZonesHero.tsx
import Image from "next/image";

interface ZonesHeroProps {
    title: string;
    subtitle: string;
}

export default function ZonesHero({ title, subtitle }: ZonesHeroProps) {
    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#114877] to-[#02BAD6] text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-white/10"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/15"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#FFD700]/20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div

                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                            {subtitle}
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#communes"
                                className="bg-[#FFD700] hover:bg-[#FFC107] text-[#114877] font-bold py-4 px-8 rounded-lg shadow-xl text-lg flex items-center justify-center transition transform hover:scale-105"
                            >
                                Voir les communes
                            </a>
                            <a
                                href="#carte"
                                className="bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center hover:bg-white/30 transition"
                            >
                                Explorer la carte
                            </a>
                        </div>
                    </div>

                    <div
                        className="relative"

                    >
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/images/carte-alpes-maritimes.webp"
                                alt="Carte des Alpes-Maritimes avec zones d'intervention"
                                width={600}
                                height={400}
                                className="w-full h-[450px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#114877] to-transparent opacity-70"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white drop-shadow-md">
                                    Couverture complète du département 06
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}