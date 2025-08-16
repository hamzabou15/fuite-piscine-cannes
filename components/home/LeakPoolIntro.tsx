import Image from "next/image";

export default function LeakPoolIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-6">
              Expertise en Détection de Fuite de Piscine à Cannes
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Une fuite dans votre piscine peut causer des dégâts considérables et augmenter votre consommation d&apos;eau de manière significative. Notre équipe d&apos;experts intervient rapidement avec des technologies de pointe pour localiser et réparer la fuite sans destruction.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Grâce à notre matériel professionnel (caméra thermique, gaz traceur, endoscopie), nous identifions avec précision l&apos;origine de la fuite, qu&apos;elle se situe dans le liner, la coque, les canalisations ou le système de filtration.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/recherche-fuite-piscine-cannes"
                className="bg-[#02BAD6] hover:bg-[#028EAB] text-white font-bold py-3 px-6 rounded-lg transition"
              >
                En savoir plus sur notre méthode
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-[#114877] text-[#114877] font-bold py-3 px-6 rounded-lg hover:bg-[#114877] hover:text-white transition"
              >
                Demander un diagnostic
              </a>
            </div>
          </div>

          <div
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                <Image
                  src={"/images/detection-fuite-piscine.webp"}
                  width={500}
                  height={500}
                  alt="détection de fuite"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#114877] text-white p-6 rounded-xl shadow-lg w-3/4">
                <h3 className="text-xl font-bold mb-2">Urgence Fuite Piscine?</h3>
                <p className="mb-4">Nous intervenons en moins de 2h sur Cannes et ses environs</p>
                <a
                  href="tel:0612345678"
                  className="bg-[#FFD700] hover:bg-[#FFC107] text-[#114877] font-bold py-2 px-4 rounded-lg flex items-center w-max"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +33756935200
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}