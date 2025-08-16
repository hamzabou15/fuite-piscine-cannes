// components/blog/BlogHero.tsx
import Image from "next/image";

interface BlogHeroProps {
  title: string;
  subtitle: string;
}

export default function BlogHero({ title, subtitle }: BlogHeroProps) {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#114877] to-[#02BAD6] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/10"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-white/15"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-[#FFD700]/20"></div>
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

          </div>

          <div
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3">
              <Image
                src="/images/blog-hero-piscine-cannes.webp"
                alt="Conseils piscine par des experts à Cannes"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#114877] to-transparent p-6">
                <div className="bg-[#FFD700] text-[#114877] px-4 py-1 rounded-full font-bold inline-block mb-2">
                  Nouveauté
                </div>
                <h3 className="text-xl font-bold text-white">Guide complet de l&apos;entretien saisonnier</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}