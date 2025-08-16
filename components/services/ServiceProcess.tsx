import { motion } from "framer-motion";

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  steps: Step[];
}

export default function ServiceProcess({ title, steps }: ServiceProcessProps) {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#114877]">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-[#f8f9fa] rounded-xl p-6 text-center"
             
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#114877]">{step.title}</h3>
              <p className="text-[#4A5568]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}