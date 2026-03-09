"use client";

import { useState, FormEvent } from "react";
import PageHero from "@/components/PageHero";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'e-mail est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'e-mail n'est pas valide";
    }
    if (!formData.telephone.trim())
      newErrors.telephone = "Le téléphone est requis";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <>
      <PageHero title="Contactez-nous" />

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1f2d3d] mb-4 font-[Roboto_Condensed] uppercase">
                Vous avez un projet ou un besoin spécifique ?
              </h2>
              <p className="text-[#6b7280] mb-10 leading-relaxed font-[Roboto]">
                Notre équipe est à votre écoute pour vous conseiller et vous accompagner à chaque étape de vos projets.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-light flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-orange text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Téléphone</h4>
                    <p className="text-gray">(+224) 613 50 04 04</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-light flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-orange text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">E-mail</h4>
                    <p className="text-gray">dinagui.sarlu@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-light flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-orange text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Adresse</h4>
                    <p className="text-gray">
                      Conakry / Kipé C/Ratoma Centre émetteur Cité Plaza
                      Platinium
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-green-600">
                    Merci pour votre message. Notre équipe vous répondra dans les
                    plus brefs délais.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-beige rounded-2xl p-8 space-y-5"
                  noValidate
                >
                  <h3 className="text-xl font-bold text-[#1f2d3d] text-center mb-4 font-[Roboto_Condensed] uppercase">
                    Formulaire de devis
                  </h3>
                  <p className="text-sm font-bold text-[#1f2d3d] mb-2">Nom complet <span className="text-[#F88732]">*</span></p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="prenom"
                        className="block text-sm font-medium text-dark mb-1"
                      >
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.prenom ? "border-red-400" : "border-gray-200"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-orange/40 transition`}
                      />
                      {errors.prenom && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.prenom}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-sm font-medium text-dark mb-1"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.nom ? "border-red-400" : "border-gray-200"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-orange/40 transition`}
                      />
                      {errors.nom && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.nom}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark mb-1"
                    >
                      E-mail <span className="text-[#F88732]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-400" : "border-gray-200"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-orange/40 transition`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-dark mb-1"
                    >
                      Téléphone <span className="text-[#F88732]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.telephone ? "border-red-400" : "border-gray-200"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-orange/40 transition`}
                    />
                    {errors.telephone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.telephone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? "border-red-400" : "border-gray-200"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-orange/40 transition resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange text-white py-4 rounded-full text-lg font-medium hover:bg-orange-dark transition-colors"
                  >
                    Envoyer
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2!2d-13.6!3d9.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzMnMzYuMCJOIDEzwrAzNicwMC4wIlc!5e0!3m2!1sfr!2sgn!4v1696000000000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation DINAGUI SARL - Kipé, Conakry"
          className="w-full"
        />
      </section>
    </>
  );
}
