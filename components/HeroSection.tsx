interface HeroSectionProps {
    title: string;
    subtitle?: string;
}

const HeroSection = ({
    title,
    subtitle
}: HeroSectionProps) => {
    return (
        <div className='w-full py-24 md:py-32 flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-[#114877] to-[#02BAD6] text-white  shadow-xl mb-16 px-6'>
            <div className='max-w-4xl text-center'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                    {title}
                </h1>
                {subtitle && (
                    <p className='text-xl md:text-2xl text-[#FFD700] font-medium max-w-3xl mx-auto'>
                        {subtitle}
                    </p>
                )}
            </div>
            
            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                <a 
                    href="tel:+33756935200" 
                    className="bg-[#FFD700] hover:bg-[#FFC107] text-[#114877] font-bold py-4 px-8 rounded-lg text-lg shadow-lg flex items-center gap-2 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    07 56 93 52 00
                </a>
                <a 
                    href="/contact" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-4 px-8 rounded-lg text-lg flex items-center gap-2 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Demander un devis
                </a>
            </div>
        </div>
    )
}

export default HeroSection