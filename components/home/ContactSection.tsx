"use client";

import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactSection = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("fr"); // FR par défaut

  // Détection automatique du pays par IP
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          setCountryCode(data.country_code.toLowerCase());
        }
      })
      .catch((err) => console.error("Erreur détection pays :", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("Téléphone", phone);

    try {
      const response = await fetch("https://formspree.io/f/movlrnjq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Votre demande a bien été envoyée.");
        form.reset();
        setPhone("");
      } else {
        setStatus("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section
      className="py-20 px-4 relative bg-top bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/fuite-piscine-expert-cannes-7.webp')",
        backgroundColor: "var(--color-background)",
      }}
      aria-label="Recherche de fuite piscine à Cannes"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden">
        <div></div>
        <div className="bg-white p-10 flex flex-col justify-center">
          <h3 className="uppercase text-sm tracking-widest text-[var(--color-pool-muted)] font-medium mb-2">
            Détection de fuite à Cannes
          </h3>
          <h2 className="text-4xl font-extrabold max-md:text-3xl text-[var(--color-pool-dark)] mb-4 leading-tight">
            Une fuite invisible ? <br />
            Nos experts interviennent sans casse
          </h2>
          <p className="text-[var(--color-pool-muted)] mb-6">
            Perte d’eau dans votre bassin ? <strong>Fuite Piscine Expert</strong> intervient à Cannes avec des
            technologies <strong>non destructives</strong> pour localiser la fuite sans vider la piscine.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="hidden" name="_subject" value="Demande - Fuite Piscine Expert" />

            <input
              type="text"
              name="Prénom"
              placeholder="Prénom"
              required
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2"
            />
            <input
              type="text"
              name="Nom"
              placeholder="Nom"
              required
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2 col-span-2"
            />

            {/* Téléphone avec indicatif */}
            <div className="col-span-2">
              <PhoneInput
                country={countryCode}
                value={phone}
                onChange={(value) => setPhone(value)}
                enableSearch={true}
                preferredCountries={["fr", "be", "ch", "it", "es"]}
                placeholder="Téléphone"
                inputClass="!w-full !border-b !border-gray-300 !py-2 focus:!border-[var(--color-pool-dark)]"
                buttonClass="!border-b !border-gray-300"
              />
            </div>

            <select
              name="Besoin"
              required
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2 col-span-2"
            >
              <option value="">Sélectionnez votre besoin</option>
              <option value="Recherche de fuite piscine enterrée">Fuite piscine enterrée</option>
              <option value="Détection canalisation / skimmer">Détection canalisation / skimmer</option>
              <option value="Fuite piscine coque">Fuite piscine coque</option>
              <option value="Analyse humidité bassin">Analyse humidité bassin</option>
              <option value="Autre besoin">Autre besoin</option>
            </select>

            <textarea
              name="Message"
              placeholder="Votre message"
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2 col-span-2"
              rows={4}
            ></textarea>

            <button
              type="submit"
              className="mt-4 mx-auto w-fit px-6 py-2 bg-[var(--color-pool-primary)] text-white font-semibold rounded hover:bg-[var(--color-pool-dark)] transition col-span-2"
            >
              Obtenir un diagnostic
            </button>

            {status && <p className="text-sm col-span-2 mt-2 text-green-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
