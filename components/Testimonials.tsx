
export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Cannes, La Bocca",
      img: '/icons/user2.webp',
      text: "Service de recherche de fuite rapide et efficace. Le technicien a trouvé la fuite en moins d'une heure sans casser mon carrelage. Je recommande vivement!",
      rating: 5
    },
    {
      name: "Pierre Martin",
      location: "Antibes",
      img: '/icons/user1.webp',
      text: "J'ai fait appel à eux pour la rénovation complète de ma piscine. Résultat impeccable, délais respectés et équipe très professionnelle.",
      rating: 5
    },
    {
      name: "Sophie Lambert",
      img: '/icons/user3.webp',
      location: "Mougins",
      text: "Contrat d'entretien annuel depuis 2 ans. Ma piscine est toujours parfaite et je n'ai plus eu aucun problème de fuite. Service de qualité!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-4">
            Ils Nous Ont Fait Confiance
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez ce que disent nos clients satisfaits de nos services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] rounded-xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#FFD700]' : 'text-gray-300'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">&quot;{testimonial.text}&quot;</p>
              <div>
                <h3 className="font-bold text-lg text-[#114877]">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/temoignages"
            className="inline-flex items-center text-[#02BAD6] font-bold hover:underline"
          >
            Lire tous les témoignages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}