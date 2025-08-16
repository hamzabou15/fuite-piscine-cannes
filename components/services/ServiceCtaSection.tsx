"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ServiceCtaSection({
  title,
  subtitle,
  buttonText,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
}) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("Téléphone", phone); // On ajoute le numéro formaté

    try {
      const response = await fetch("https://formspree.io/f/movlrnjq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Votre demande a bien été envoyée.");
        form.reset();
        setPhone("");
      } else {
        setStatus("❌ Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-[#114877] to-[#02BAD6] text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{subtitle}</p>

        <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-2xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject" 
              value="Demande - Fuite Piscine Expert Cannes"
            />

            {/* Nom */}
            <div>
              <input
                type="text"
                name="Nom"
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02BAD6] text-[#114877]"
                required
              />
            </div>

            {/* Téléphone avec indicatif */}
            <div className="">
              <PhoneInput
                country={"fr"} // par défaut France
                value={phone}
                onChange={(value) => setPhone(value)}
                enableSearch={true} // recherche dans la liste
                preferredCountries={["fr", "be", "ch", "it", "es"]}
                inputProps={{
                  name: "Téléphone",
                  required: true,
                }}
                containerClass="w-full"
                inputStyle={{
                  width:"70%",
                  marginLeft:"30px"
                }}
                inputClass="!w-full !px-4 !py-3 !rounded-lg !border !border-gray-300 !focus:outline-none !focus:ring-2 !focus:ring-[#02BAD6] !text-[#114877]"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="Email"
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02BAD6] text-[#114877]"
                required
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="Message"
                placeholder="Décrivez votre problème"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02BAD6] text-[#114877]"
                required
              ></textarea>
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="bg-[#114877] hover:bg-[#0d3a5f] text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition w-full"
            >
              {buttonText}
            </button>

            {/* Message de statut */}
            {status && (
              <p
                className={`text-sm mt-2 ${
                  status.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
