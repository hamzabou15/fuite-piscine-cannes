'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatsCard = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { value: 2500, label: 'Piscines réparées' },
        { value: 98, label: 'Taux de réussite' },
        { value: 25, label: "Ans d'expérience" },
        { value: 15, label: 'Techniciens experts' },
    ];

    return (
        <section 
            className='py-16 bg-gradient-to-r from-[#114877] to-[#02BAD6]  text-white'
            ref={ref}
        >
            <div className='max-w-7xl mx-auto px-4 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-16'>
                    Notre impact dans le 06
                </h2>
                
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            value={stat.value}
                            label={stat.label}
                            delay={index * 0.2}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatItem = ({
    value,
    label,
    delay,
    isInView
}: {
    value: number;
    label: string;
    delay: number;
    isInView: boolean;
}) => {
    return (
        <div
            className='flex flex-col items-center'
        >
            <div className='text-4xl md:text-5xl lg:text-6xl font-bold mb-2'>
                {isInView ? value : "0"}
                {label === "Taux de réussite" && <span className="text-2xl">%</span>}
            </div>
            <div className='text-lg md:text-xl'>{label}</div>
        </div>
    );
};

export default StatsCard;