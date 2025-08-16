// components/ContactForm.tsx
"use client";

import { div } from "framer-motion/client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblkldyv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Votre demande a bien été envoyée.");
        form.reset();
      } else {
        setStatus("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className=" p-10 max-w-6xl mx-auto ">
      <h3 className="uppercase text-lg tracking-widest text-[#1b1e3f] font-bold mb-2">
        Contactez-nous
      </h3>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input type="hidden" name="_subject" value="Une nouvelle demande - Fuite Piscine sur Cannes" />

        <input type="text" name="Prénom" placeholder="Prénom" required className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2" />
        <input type="text" name="Nom" placeholder="Nom" required className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2" />
        <input type="email" name="Email" placeholder="Email" required className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2 col-span-2" />
        <input type="tel" name="Téléphone" placeholder="Numéro de téléphone" required className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2 col-span-2" />

        <select name="Besoin" required className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2 col-span-2">
          <option value="">Sélectionnez votre besoin</option>
          <option value="Recherche de fuite encastrée">Recherche de fuite encastrée</option>
          <option value="Fuite plafond / mur / sol">Fuite plafond / mur / sol</option>
          <option value="Détection fuite canalisation">Détection fuite canalisation</option>
          <option value="Diagnostic humidité">Diagnostic humidité</option>
          <option value="Autre intervention plomberie">Autre intervention plomberie</option>
        </select>

        <button
          type="submit"
          className="mt-4 mx-auto w-fit px-6 py-2 bg-[var(--color-pool-primary)] text-white font-semibold rounded hover:bg-[var(--color-pool-dark)] transition col-span-2"
        >
          Obtenir un diagnostic
        </button>

        {status && <p className="col-span-2 text-sm mt-2 text-[#13727B]">{status}</p>}
      </form>
    </div>
  );
}
