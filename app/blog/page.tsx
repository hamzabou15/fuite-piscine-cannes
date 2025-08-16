// app/blog/page.tsx
import BlogCategories from "@/components/blog/BlogCategories";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogHero from "@/components/blog/BlogHero";
import BlogCta from "@/components/blog/BlogCta";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Conseils Piscine Cannes 🧠 | Blog Expert Fuite & Entretien",
  description: "Découvrez nos conseils d'expert pour détecter, réparer et entretenir votre piscine à Cannes. Guides pratiques, astuces et actualités.",
  keywords: "conseils piscine Cannes, blog entretien piscine, détection fuite piscine, astuces piscine 06",
  alternates: {
    canonical: "https://fuitepiscinecannes-expert.fr/blog",
  },
};

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "5 Signes qui Indiquent une Fuite dans Votre Piscine",
      excerpt: "Découvrez les symptômes à surveiller pour détecter une fuite avant qu'elle ne cause des dégâts importants...",
      category: "Détection",
      date: "15/05/2024",
      readTime: "4 min"
    },
    {
      title: "Comment Entretenir sa Piscine en Hiver sur la Côte d'Azur",
      excerpt: "Notre guide complet pour protéger votre piscine pendant l'hiver dans le climat méditerranéen...",
      category: "Entretien",
      date: "10/04/2024",
      readTime: "6 min"
    }
  ];
  
  const categories = [
    { name: "Détection de Fuite", count: 8 },
    { name: "Réparation", count: 5 },
    { name: "Entretien", count: 12 },
    { name: "Rénovation", count: 3 },
    { name: "Actualités", count: 7 }
  ];
  
  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white">
      <BlogHero 
        title="Conseils d'Expert pour Votre Piscine"
        subtitle="Découvrez nos guides pratiques et astuces d'entretien"
      />
      
      <BlogFeatured 
        title="Articles à la Une"
        posts={featuredPosts}
      />
      
      <BlogCategories 
        title="Catégories de Conseils"
        categories={categories}
      />
      
      <BlogCta 
        title="Restez informé!"
        subtitle="Abonnez-vous pour recevoir nos derniers conseils par email"
        buttonText="S'abonner à la newsletter"
      />
    </div>
  );
}