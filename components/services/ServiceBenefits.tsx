import { CheckCircleIcon } from "lucide-react";

// components/services/ServiceBenefits.tsx
interface Benefit {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  title: string;
  benefits: Benefit[];
}

export default function ServiceBenefits({ title, benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#114877]">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg flex items-start"

            >
              <CheckCircleIcon className="h-8 w-8 text-[#02BAD6] flex-shrink-0 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#114877]">{benefit.title}</h3>
                <p className="text-[#4A5568]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}