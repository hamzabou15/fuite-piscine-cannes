// components/blog/BlogCta.tsx

interface BlogCtaProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function BlogCta({ title, subtitle, buttonText }: BlogCtaProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#114877] to-[#02BAD6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-white/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
              <p className="text-xl mb-8">{subtitle}</p>
              
              <form className="space-y-4 max-w-lg">
                <div>
                  <label htmlFor="email" className="block mb-2">Votre email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="votre@email.com" 
                    className="w-full py-4 px-6 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="mr-3 h-5 w-5 text-[#02BAD6] focus:ring-[#02BAD6]"
                    required
                  />
                  <label htmlFor="consent" className="text-sm">
                    J&apos;accepte de recevoir les conseils et offres de Fuite Piscine Cannes Expert (désabonnement à tout moment)
                  </label>
                </div>
                <button 
                  type="submit"
                  className="bg-[#FFD700] hover:bg-[#FFC107] text-[#114877] font-bold py-4 px-8 rounded-lg shadow-xl text-lg w-full transition transform hover:scale-[1.02]"
                >
                  {buttonText}
                </button>
              </form>
            </div>
            
            <div
             
              className="bg-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">Ce que vous recevrez</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Conseils exclusifs</h4>
                    <p>Astuces d&apos;entretien spécifiques au climat méditerranéen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Alertes saisonnières</h4>
                    <p>Rappels pour préparer votre piscine avant chaque saison</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Offres spéciales</h4>
                    <p>Promotions réservées à nos abonnés sur les services d&apos;entretien</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 bg-[#114877] rounded-lg p-4">
                <p className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Nous ne partageons jamais votre email et vous pouvez vous désinscrire à tout moment</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex gap-8">
            <a href="#" className="text-white/80 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-white/80">
            Suivez-nous sur les réseaux pour plus de conseils au quotidien!
          </p>
        </div>
      </div>
    </section>
  );
}