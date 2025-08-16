"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { MdLocalPhone } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

export default function HeaderWithCTA() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pages = [
        { title: "Accueil", href: "/" },
        { title: "À propos", href: "/a-propos" },
        // { title: "Blog", href: "/blog" },
        { title: "Recherche fuite piscine", href: "/recherche-fuite-piscine-cannes" },
        { title: "Services", href: "/services" },
        { title: "Urgence fuite piscine", href: "/urgence-fuite-piscine-cannes" },
        { title: "Villages desservis", href: "/villages-desservis-06" },
        { title: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 shadow-lg bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-5">
                {/* Logo */}
                <Link href="/" className=" w-1/6">
                    <Image
                        src="/images/logo-fuite-pscine-cannes.png"
                        alt="Fuite Piscine Expert Cannes"
                        width={180}
                        height={60}
                        className="object-cover h-[50px] w-[200px] max-md:max-w-none"
                    />
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden  w-3/6 lg:flex items-center gap-6 gap-y-3 font-medium text-[#114877] flex-wrap justify-center">
                    {pages.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className="hover:text-[#FFD700] transition-colors"
                        >
                            {page.title}
                        </Link>
                    ))}
                </nav>

                {/* Menu Mobile Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-[#114877]"
                    >
                        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {/* Contact Desktop */}
                <div className="hidden lg:flex gap-4 w-2/6">
                    {/* Téléphone */}
                    <a
                        href="tel:+33756935200"
                        className="flex items-center text-[14px]   gap-2 bg-[#FFD700] text-[#114877] font-bold px-4 py-2 rounded-xl shadow-lg hover:bg-[#FFC107] transition transform hover:scale-105"
                    >
                        <Phone className="w-5 h-5" />
                        <span className="flex w-full text-[12px]">
                            +33 7 56 93 52 00

                        </span>
                    </a>

                    {/* Devis */}
                    <Link href="/contact" className="flex items-center gap-2 bg-[#02BAD6] text-white font-bold px-4 py-2 rounded-xl shadow-lg hover:bg-[#114877] transition transform hover:scale-105">
                        <IoNewspaperOutline className="w-5 h-5" />
                        Obtenir un devis
                    </Link>
                </div>
            </div>

            {/* Menu Mobile */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white px-6 py-6 space-y-4 text-[#114877] font-medium shadow-md animate-slideDown">
                    {pages.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block hover:text-[#FFD700] transition-colors"
                        >
                            {page.title}
                        </Link>
                    ))}

                    <div className="flex flex-col gap-3 mt-4">
                        {/* Téléphone */}
                        <a
                            href="tel:+33756935200"
                            className="flex items-center gap-2 bg-[#FFD700] text-[#114877] font-bold px-4 py-3 rounded-xl shadow-lg hover:bg-[#FFC107] transition transform hover:scale-105"
                        >
                            <MdLocalPhone className="w-6 h-6" />
                            +33 7 56 93 52 00
                        </a>

                        {/* Devis */}
                        <Link href="/contact" className="flex items-center gap-2 bg-[#02BAD6] text-white font-bold px-4 py-3 rounded-xl shadow-lg hover:bg-[#114877] transition transform hover:scale-105">
                            <IoNewspaperOutline className="w-6 h-6" />
                            Devis gratuit
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
