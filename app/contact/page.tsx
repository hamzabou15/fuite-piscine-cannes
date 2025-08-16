import ContactForm from '@/components/contact/Form';
import LocalBusinessSchema from '@/components/SEO/LocalBusiness';
import { Phone } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Fuite Piscine à Cannes - Interventions rapides & professionnelles",
    description: "Intervention express à Cannes pour dépannage, fuite, débouchage, chauffe-eau et plus. Fuite Piscine expérimenté, devis gratuit et service garanti.",
    openGraph: {
        title: "Fuite Piscine à Cannes - Interventions rapides & professionnelles",
        description: "Intervention express à Cannes pour dépannage, fuite, débouchage, chauffe-eau et plus.",
        url: "https://fuitepiscinecannes-expert.fr",
        siteName: "Fuite Piscine Cannes Expert",
        images: [
            {
                url: "https://fuitepiscinecannes-expert.fr/images/fuite-piscine-beton-cannes.webp",
                width: 800,
                height: 600,
                alt: "Fuite Piscine professionnel à Cannes",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fuite Piscine à Cannes - Interventions rapides & professionnelles",
        description: "Fuite Piscine expérimenté pour dépannage, fuite, chauffe-eau, rénovation à Cannes. Service rapide, devis gratuit.",
        images: ["https://fuitepiscinecannes-expert.fr/images/fuite-piscine-beton-cannes.webp"],
    },
};

const Page = () => {
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Fuite Piscine Expert",
                            image: "https://fuitepiscinecannes-expert.fr/images/fuite-piscine-expert-cannes-7.webp",
                            "@id": "https://fuitepiscinecannes-expert.fr/",
                            url: "https://fuitepiscinecannes-expert.fr/",
                            telephone: "+33756935200",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "12 Rue de France",
                                addressLocality: "Cannes",
                                postalCode: "06000",
                                addressCountry: "FR",
                            },
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                        "Sunday",
                                    ],
                                    opens: "08:00",
                                    closes: "20:00",
                                },
                            ],
                            sameAs: [],
                        }),
                    }}
                />
            </Head>

            <LocalBusinessSchema />

            {/* Section contact principale */}
            <section className="py-20 bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff]">
                <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Texte à gauche */}
                    <div className="space-y-6">
                        <p className="text-sm font-semibold tracking-widest text-[#02BAD6] uppercase">
                            Contact & intervention
                        </p>

                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#114877] leading-tight">
                            Contactez Fuite Piscine Saint-Tropez — Diagnostic gratuit & intervention rapide
                        </h1>

                        <p className="text-lg text-gray-700">
                            Besoin d&apos;un diagnostic pour une perte d’eau ? Nous intervenons discrètement pour localiser la
                            fuite (liner, coque, canalisations, skimmer) avec des techniques non destructives.
                            Devis sous 24h, rapport illustré sous 48h.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <Link
                                href="tel:+33756935200"
                                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg shadow bg-[#02BAD6] hover:bg-[#029bb6] text-white font-semibold transition"
                            >
                                <Phone className="w-5 h-5" />
                                +33 7 56 93 52 00
                            </Link>

                            <Link
                                href="/recherche-de-fuite-piscine-saint-tropez"
                                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-[#114877] text-[#114877] font-semibold hover:bg-[#f0f8ff] transition"
                            >
                                En savoir plus (services)
                            </Link>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
                            <div className="p-4 bg-[#f0f8ff] rounded-lg text-center">
                                <p className="text-sm text-gray-600">Devis</p>
                                <p className="text-xl font-bold text-[#02BAD6]">24h</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg border text-center">
                                <p className="text-sm text-gray-600">Rapport technique</p>
                                <p className="text-xl font-bold text-[#114877]">48h</p>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire à droite */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-8 bg-gradient-to-r from-[#e6f7ff] to-[#ffffff]">
                <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-[#114877]">Urgence fuite ?</h3>
                        <p className="text-sm text-gray-600">Intervention prioritaire selon disponibilité</p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="tel:+33756935200"
                            className="px-5 py-3 rounded-lg bg-[#02BAD6] text-white font-semibold hover:bg-[#029bb6] transition"
                        >
                            Appeler maintenant
                        </Link>
                        <Link
                            href="/contact"
                            className="px-5 py-3 rounded-lg border border-[#114877] text-[#114877] font-semibold hover:bg-[#f0f8ff] transition"
                        >
                            Envoyer une demande
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
