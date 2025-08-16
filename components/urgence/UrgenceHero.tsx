// components/urgence/UrgenceHero.tsx

interface UrgenceHeroProps {
  title: string;
  subtitle: string;
  phone: string;
}

export default function UrgenceHero({ title, subtitle, phone }: UrgenceHeroProps) {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#114877] to-[#02BAD6] text-white overflow-hidden">
      {/* Background elements */}
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

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phone.replace(/\./g, '')}`}
                className="bg-[#FFD700] hover:bg-[#FFC107] text-[#114877] font-bold py-4 px-8 rounded-lg shadow-xl text-lg flex items-center justify-center transition transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </a>

              <a
                href="#process"
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Notre intervention
              </a>
            </div>
          </div>

          <div
            className="relative"

          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30">
              <h3 className="text-2xl font-bold mb-4">Urgence Fuite Piscine à Cannes</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intervention en moins de 2h sur Cannes et alentours
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Techniciens spécialisés en fuite piscine
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Équipements haute technologie de détection
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Solutions immédiates pour limiter les dégâts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}