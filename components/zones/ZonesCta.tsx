// components/zones/ZonesCta.tsx

interface ZonesCtaProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function ZonesCta({ title, subtitle, buttonText }: ZonesCtaProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#114877] to-[#02BAD6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-white/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div

            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
              <p className="text-xl mb-8">{subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-[#FFD700] hover:bg-[#FFC107] text-[#114877] font-bold py-4 px-8 rounded-lg shadow-xl text-lg flex items-center justify-center transition transform hover:scale-105"
                >
                  {buttonText}
                </a>

                <a
                  href="tel:+33 7 56 93 52 00"
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center hover:bg-white/10 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +33 7 56 93 52 00
                </a>
              </div>
            </div>

            <div

              className="bg-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">Comment vérifier notre disponibilité?</h3>
              <ol className="list-decimal pl-5 space-y-3">
                <li>Contactez-nous par téléphone ou formulaire</li>
                <li>Précisez votre commune exacte</li>
                <li>Nous confirmons sous 1h notre intervention</li>
                <li>Vous recevez un créneau horaire précis</li>
              </ol>
              <div className="mt-6 bg-[#114877] text-white rounded-lg p-4">
                <p className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Service de rappel immédiat disponible de 8h à 20h</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80">
            <strong>Horaires du service client :</strong> Lundi au Samedi - 8h à 20h | Dimanche - 9h à 12h
          </p>
        </div>
      </div>
    </section>
  );
}