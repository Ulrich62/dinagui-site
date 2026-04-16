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
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSending(true);
    setSendError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Nouveau message de ${formData.prenom} ${formData.nom} - DINAGUI SARL`,
          from_name: `${formData.prenom} ${formData.nom}`,
          name: `${formData.prenom} ${formData.nom}`,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSendError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setSendError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setSending(false);
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

      <section className="py-24 bg-white">
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

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F88732]/10 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-[#F88732] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1f2d3d] mb-1 font-[Roboto_Condensed]">Téléphone</h4>
                    <p className="text-[#6b7280] font-[Roboto]">(+224) 613 50 04 04</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F88732]/10 flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-[#F88732] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1f2d3d] mb-1 font-[Roboto_Condensed]">E-mail</h4>
                    <p className="text-[#6b7280] font-[Roboto]">contact@dinagui.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F88732]/10 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-[#F88732] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1f2d3d] mb-1 font-[Roboto_Condensed]">Adresse</h4>
                    <p className="text-[#6b7280] font-[Roboto]">
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
                  className="bg-[#faf5f0] rounded-2xl p-8 space-y-5"
                  noValidate
                >
                  <h3 className="text-xl font-bold text-[#1f2d3d] text-center mb-4 font-[Roboto_Condensed] uppercase">
                    Formulaire de devis
                  </h3>
                  <p className="text-sm font-bold text-[#1f2d3d] mb-2 font-[Roboto]">Nom complet <span className="text-[#F88732]">*</span></p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="prenom"
                        className="block text-sm font-medium text-[#1f2d3d] mb-1 font-[Roboto]"
                      >
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          errors.prenom ? "border-red-400" : "border-gray-200 focus:border-[#F88732]"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#F88732]/20 transition-all duration-200`}
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
                        className="block text-sm font-medium text-[#1f2d3d] mb-1 font-[Roboto]"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          errors.nom ? "border-red-400" : "border-gray-200 focus:border-[#F88732]"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#F88732]/20 transition-all duration-200`}
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
                      className="block text-sm font-medium text-[#1f2d3d] mb-1 font-[Roboto]"
                    >
                      E-mail <span className="text-[#F88732]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.email ? "border-red-400" : "border-gray-200 focus:border-[#F88732]"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-[#F88732]/20 transition-all duration-200`}
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
                      className="block text-sm font-medium text-[#1f2d3d] mb-1 font-[Roboto]"
                    >
                      Téléphone <span className="text-[#F88732]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.telephone ? "border-red-400" : "border-gray-200 focus:border-[#F88732]"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-[#F88732]/20 transition-all duration-200`}
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
                      className="block text-sm font-medium text-[#1f2d3d] mb-1 font-[Roboto]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.message ? "border-red-400" : "border-gray-200 focus:border-[#F88732]"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-[#F88732]/20 transition-all duration-200 resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {sendError && (
                    <p className="text-red-500 text-sm text-center">{sendError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-[#F88732] text-white py-4 rounded-lg text-lg font-medium hover:bg-[#e0752a] hover:shadow-lg hover:shadow-[#F88732]/25 transition-all duration-300 font-[Roboto] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Envoi en cours..." : "Envoyer"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps with separator */}
      <section className="w-full">
        <div className="border-t-4 border-[#F88732]" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d-13.6285!3d9.5655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3530779e70c67d%3A0x5c8bf4c5e6f3c8a!2sCit%C3%A9+Plaza+Platinium!5e0!3m2!1sfr!2sgn!4v1710000000000"
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
