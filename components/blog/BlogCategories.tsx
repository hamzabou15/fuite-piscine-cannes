// components/blog/BlogCategories.tsx

import Image from "next/image";

interface Category {
  name: string;
  count: number;
}

interface BlogCategoriesProps {
  title: string;
  categories: Category[];
}

export default function BlogCategories({ title, categories }: BlogCategoriesProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explorez nos conseils par thématique pour trouver exactement ce dont vous avez besoin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#02BAD6]"
            >
              <div className="w-16 h-16 bg-[#e6f7ff] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#02BAD6] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#114877] group-hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-1 text-[#114877] group-hover:text-[#02BAD6] transition">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.count} articles</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#114877] mb-6">Les sujets les plus recherchés</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Fuite piscine Cannes", "Entretien hivernage 06", "Coût réparation liner",
              "Détection fuite sans casse", "Produits traitement eau", "Rénovation piscine ancienne",
              "Réglementation piscine Alpes-Maritimes", "Piscine écologique Côte d'Azur"
            ].map((topic, index) => (
              <a
                key={index}
                href="#"
                className="bg-[#f8f9fa] hover:bg-[#02BAD6] hover:text-white px-4 py-2 rounded-full text-sm transition"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-8">
          <div>
            <h3 className="text-2xl font-bold text-[#114877] mb-4">Guide PDF gratuit</h3>
            <p className="mb-6">Téléchargez notre guide complet &quot;10 Conseils Essentiels pour l&apos;Entretien de Votre Piscine à Cannes&quot;</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Calendrier d&apos;entretien mensuel</li>
              <li>Tableau des produits indispensables</li>
              <li>Check-list de préparation pour l&apos;hiver</li>
              <li>Contacts utiles dans les Alpes-Maritimes</li>
            </ul>
            <a href="/guide.pdf" download>
              <button className="bg-[#114877] hover:bg-[#02BAD6] text-white font-bold py-3 px-6 rounded-lg flex items-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                Télécharger le guide (PDF)
              </button>
            </a>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[300px] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <h4 className="font-bold">Guide PDF &quot;Entretien Piscine Cannes&quot;</h4>
                <Image
                  width={500}
                  height={500}
                  alt="guide complet"
                  src='/images/guide.png'
                  className="object-contain h-[250px] mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}