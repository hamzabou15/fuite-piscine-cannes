import Image from "next/image";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  img: string;
}

interface ServiceTestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export default function ServiceTestimonials({ title, testimonials }: ServiceTestimonialsProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#114877] to-[#02BAD6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover w-16 h-16"
                />
                <div className="ml-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-white/80">{testimonial.location}</p>
                </div>
              </div>
              <p className="italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}