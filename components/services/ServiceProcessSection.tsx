// components/services/ServiceProcessSection.tsx
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

export default function ServiceProcessSection({
  title,
  steps
}: {
  title: string;
  steps: Step[];
}) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#114877]">{title}</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#02BAD6] ml-6 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative pl-24 flex items-start"

              >
                <div className="absolute left-0 top-0 bg-[#114877] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                  {index + 1}
                </div>
                <div className="bg-[#f8f9fa] rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-[#114877]">{step.title}</h3>
                  <p className="text-[#4A5568]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}