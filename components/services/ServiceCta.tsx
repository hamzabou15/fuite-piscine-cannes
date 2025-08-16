export default function ServiceCta({ title, subtitle, buttonText }: {
  title: string;
  subtitle: string;
  buttonText: string;
}) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#114877]">{title}</h2>
        <p className="text-xl mb-8 text-[#4A5568]">{subtitle}</p>
        
        <a 
          href="/contact" 
          className="inline-block bg-[#02BAD6] hover:bg-[#029db4] text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}