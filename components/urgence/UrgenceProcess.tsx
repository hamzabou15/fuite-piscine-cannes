// components/urgence/UrgenceProcess.tsx

interface Step {
  time: string;
  title: string;
  description: string;
}

interface UrgenceProcessProps {
  title: string;
  steps: Step[];
}

export default function UrgenceProcess({ title, steps }: UrgenceProcessProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#114877]">
          {title}
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Notre protocole d&apos;intervention d&apos;urgence pour stopper rapidement les fuites 
          de piscine à Cannes et limiter les dégâts sur votre propriété
        </p>
        
        <div className="relative">
          {/* Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#02BAD6] z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff] rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#114877] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {step.time}
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-[#114877]">{step.title}</h3>
                </div>
                <p className="text-gray-700">{step.description}</p>
                
                {index !== steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#02BAD6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-[#f8f9fa] rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#114877] mb-4">Pourquoi une intervention rapide est cruciale ?</h3>
          <p className="text-gray-700 mb-4">
            Une fuite de piscine non traitée peut entraîner des conséquences graves : 
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Affaissement du terrain et fragilisation des structures</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Augmentation significative de votre facture d&apos;eau</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Dégradation des équipements de filtration</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Problèmes d&apos;humidité et développement de moisissures</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}