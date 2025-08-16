import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#161A1A] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Slogan SEO */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                        Recherche de fuites piscine à Cannes <br /> avec garantie de précision
                    </h2>
                    <p className="text-sm text-gray-300">
                        Intervention rapide – Sans casse – Rapport complet sous 48h.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Adresse */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                        <p className="text-gray-300 text-sm">
                            Fuite Piscine Expert Cannes <br />
                            15 Rue de France, Bureau 302 <br />
                            06000 Cannes, France
                        </p>
                        <div className="flex space-x-3 mt-4">
                            <a href="#" aria-label="Facebook" className="hover:text-[#1B1E3F]">
                                <Facebook size={20} />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-[#1B1E3F]">
                                <Twitter size={20} />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-[#1B1E3F]">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contactez-nous</h3>
                        <div className="text-sm text-gray-300 mb-2">
                            <Mail className="inline w-4 h-4 mr-2" />
                            <a
                                href="mailto:contact@fuitepiscine-cannes.fr"
                                className="hover:text-[#1B1E3F]"
                            >
                                contact@fuitepiscine-cannes.fr
                            </a>
                        </div>
                        <p className="text-xl font-bold text-white">
                            +33756935200
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between">
                <p>&copy; {new Date().getFullYear()} Fuite Piscine Expert Cannes. Tous droits réservés.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <Link href="/" className="hover:text-white">Accueil</Link>
                    <Link href="/services" className="hover:text-white">Services</Link>
                    <Link href="/contact" className="hover:text-white">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
