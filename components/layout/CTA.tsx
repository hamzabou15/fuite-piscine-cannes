"use client";

import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import Link from "next/link";

const CTA = () => {
    return (
        <div className="fixed bottom-6 right-4 flex flex-col items-end z-50 space-y-3">

            {/* Bouton téléphone */}
            <a
                href="tel:+33756935200"
                className="flex items-center gap-3 px-5 py-3 bg-[#FFD700] text-[#114877] font-bold rounded-xl shadow-lg hover:bg-[#FFC107] transition transform hover:scale-105"
            >
                <MdLocalPhone className="w-6 h-6" />
                <span className="block md:hidden text-base text-[#114877]">+33 7 56 93 52 00</span>
                <span className="hidden md:block md:opacity-100 transition-all duration-300 opacity-0 group-hover:opacity-100 " style={{color:"#114877!important"}}>
                    Appelez-nous
                </span>
            </a>

            {/* Bouton Devis */}
            <Link href="/contact" className="flex items-center gap-3 px-5 py-3 bg-[#02BAD6] text-white font-bold rounded-xl shadow-lg hover:bg-[#114877] transition transform hover:scale-105">
                <IoNewspaperOutline className="w-6 h-6" />
                <span className="block md:hidden text-base ">Devis gratuit</span>
                <span className="hidden md:block md:opacity-100 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    Obtenir un devis
                </span>
            </Link>

        </div>
    );
};

export default CTA;
