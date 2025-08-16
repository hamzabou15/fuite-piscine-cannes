import Intro from '@/components/a-propos/Intro'
import Introduction from '@/components/a-propos/introduction'
import StatsCard from '@/components/a-propos/Stats'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/home/ProjectSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <Head>
                <title>À Propos - Expert Fuite Piscine Cannes | Spécialistes depuis 25 ans</title>
                <meta name="description" content="Découvrez Fuite Piscine Expert Cannes : 25 ans d'expérience en détection et réparation de fuites sans casse. Techniciens certifiés intervenant dans tout le 06." />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Fuite Piscine Expert Cannes",
                            image: "https://fuitepiscinecannes-expert.fr/images/logo-fuite-piscine-cannes.webp",
                            "@id": "https://fuitepiscinecannes-expert.fr/a-propos",
                            url: "https://fuitepiscinecannes-expert.fr/a-propos",
                            telephone: "+33756935200",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "12 Rue de France",
                                addressLocality: "Cannes",
                                postalCode: "06400",
                                addressRegion: "Alpes-Maritimes",
                                addressCountry: "FR",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: "43.552847",
                                longitude: "7.017369"
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
                                        "Saturday"
                                    ],
                                    opens: "08:00",
                                    closes: "20:00",
                                },
                            ],
                            sameAs: [
                                "https://www.facebook.com/FuitePiscineCannes",
                                "https://www.instagram.com/FuitePiscineCannes"
                            ],
                        }),
                    }}
                />
            </Head>
            <LocalBusinessSchema />
            <main className='relative text-[#222626] '>
                <HeroSection
                    title='À propos de notre expertise'
                    subtitle='25 ans de savoir-faire dans la détection de fuites à Cannes et ses environs'
                />
                <section className='px-4 sm:px-6 max-w-7xl mx-auto'>
                    <Intro />
                </section>
                <section className='px-4 sm:px-6 max-w-7xl mx-auto'>
                    <Introduction />
                </section>
                <section className='px-4 sm:px-6 max-w-7xl mx-auto'>
                    <StatsCard />
                </section>

                {/* Image de présentation */}
                <section className='px-4 sm:px-6 max-w-7xl mx-auto'>

                    <div className='flex justify-center my-16'>
                        <Image
                            src="/images/fuite-piscine-beton-cannes.webp"
                            alt="Technicien expert en recherche de fuite piscine à Cannes"
                            width={1000}
                            height={667}
                            className='w-full max-w-4xl h-auto object-cover rounded-xl shadow-xl'
                            priority
                        />
                    </div>
                </section>

                {/* Section des projets */}
                <section className=''>
                    <ProjectSection />
                </section>
            </main>
        </>
    )
}

export default page