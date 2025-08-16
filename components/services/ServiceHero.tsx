import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export default function ServiceHero({ title, subtitle, image, alt }: ServiceHeroProps) {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#114877] to-[#02BAD6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h1>
          <p className="text-xl mb-8">{subtitle}</p>
          <div className="flex gap-4">
            <a 
              href="/contact" 
              className="bg-[#FFD700] text-[#114877] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#FFC107] transition"
            >
              Contacter un expert
            </a>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
          <Image 
            src={image} 
            alt={alt} 
            width={600} 
            height={400} 
            className="w-full h-auto object-cover"
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#114877] to-transparent opacity-80"></div> */}
        </div>
      </div>
    </section>
  );
}