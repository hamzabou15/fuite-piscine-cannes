"use client"
// components/services/ServiceFaqSection.tsx
import { useState } from "react";
import {  AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function ServiceFaqSection({ 
  title, 
  faqs 
}: {
  title: string;
  faqs: FaqItem[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#f8f9fa] to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#114877]">{title}</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full py-4 text-left font-medium text-lg text-[#114877]"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-[#02BAD6] text-xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <div
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-[#4A5568]">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}