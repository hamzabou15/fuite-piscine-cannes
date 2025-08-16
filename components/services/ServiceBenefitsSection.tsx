// components/services/ServiceBenefitsSection.tsx
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";

export default function ServiceBenefitsSection({ 
  title, 
  benefits 
}: {
  title: string;
  benefits: string[];
}) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#c2e6ff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#114877]">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex items-start"
           
            >
              <CheckCircleIcon className="h-8 w-8 text-[#02BAD6] flex-shrink-0 mr-4" />
              <span className="text-lg font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}