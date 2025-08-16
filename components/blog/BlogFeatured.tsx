// components/blog/BlogFeatured.tsx
import Image from "next/image";

interface Post {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

interface BlogFeaturedProps {
  title: string;
  posts: Post[];
}

export default function BlogFeatured({ title, posts }: BlogFeaturedProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#114877] mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nos articles les plus populaires et utiles pour les propriétaires de piscine à Cannes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"

            >
              <div className="relative h-64">
                <Image
                  src={index === 0 ? "/images/fuite-piscine-signes.webp" : "/images/hivernage-piscine-cote-azur.webp"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#FFD700] text-[#114877] px-3 py-1 rounded-full font-bold">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime} de lecture</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#114877] group-hover:text-[#02BAD6] transition">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>

                <div className="flex justify-between items-center">
                  <a href="#" className="text-[#02BAD6] font-medium hover:underline flex items-center">
                    Lire l&apos;article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>

                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-sm text-gray-600">1.2k</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Comment réparer un liner de piscine sans vidange",
              category: "Réparation",
              image: "/images/reparation-liner-piscine.webp"
            },
            {
              title: "Les 10 erreurs à éviter avec votre piscine en hiver",
              category: "Entretien",
              image: "/images/erreurs-hivernage-piscine.webp"
            },
            {
              title: "Nouvelles réglementations piscine 2024 dans le 06",
              category: "Actualités",
              image: "/images/reglementation-piscine-06.webp"
            }
          ].map((post, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"

            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#114877] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {post.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-[#114877] group-hover:text-[#02BAD6] transition">
                  {post.title}
                </h3>
                <a href="#" className="text-[#02BAD6] text-sm font-medium hover:underline flex items-center">
                  Lire la suite
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-[#114877] font-bold hover:text-[#02BAD6] transition">
            Voir tous les articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}