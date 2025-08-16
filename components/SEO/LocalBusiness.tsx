// components/SEO/LocalBusiness.tsx
import Head from "next/head";

const SchemaLocalBusiness = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Fuite Piscine Expert Cannes",
    "image": "https://fuitepiscinecannes-expert.fr/images/technicien-piscine-cannes.webp",
    "url": "https://fuitepiscinecannes-expert.fr",
    "telephone": "+33756935200",
    "priceRange": "€€-€€€",
    "description": "Expert en détection et réparation de fuites de piscine à Cannes. Intervention rapide 7j/7, technologies non destructives, garantie écrite sur tous nos services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "45 Avenue Jean Médecin",
      "addressLocality": "Cannes",
      "addressRegion": "Alpes-Maritimes",
      "postalCode": "06400",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.5528,
      "longitude": 7.0174
    },
    "areaServed": ["Cannes", "Antibes", "Nice", "Grasse", "Mandelieu", "Mougins", "Vallauris"],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.97",
      "reviewCount": "243",
      "bestRating": "5"
    },
    "review": [{
      "@type": "Review",
      "author": {"@type": "Person", "name": "Marc Dubois"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5"},
      "reviewBody": "Service exceptionnel! Fuite détectée en moins d'1h sans casser la terrasse. Prix très correct pour Cannes."
    }, {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Sophie Martin"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5"},
      "reviewBody": "Intervention dimanche après-midi pour urgence fuite piscine. Professionnalisme remarquable. Je recommande vivement!"
    }],
    "sameAs": [
      "https://www.facebook.com/fuitepiscinecannes",
      "https://www.instagram.com/fuite_piscine_cannes"
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default SchemaLocalBusiness;