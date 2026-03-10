"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

const galleryImages = [
  "/images/apartments/f3-appartement.jpg",
  "/images/services/gestion-immobiliere.avif",
  "/images/services/btp-workers.avif",
  "/images/services/gardiennage.avif",
];

const faqItems = [
  {
    question: "TRAVAILLEZ-VOUS UNIQUEMENT AVEC DES PARTICULIERS ET ENTREPRISES PRIVÉES ?",
    answer:
      "Non, nous travaillons aussi bien avec des particuliers que des entreprises privées et des collectivités publiques. Notre offre de services est adaptée à chaque type de clientèle, avec un accompagnement personnalisé quel que soit l'envergure du projet.",
  },
  {
    question: "POUVEZ-VOUS FOURNIR DES PLANS ET VISUELS AVANT LE DÉBUT DU CHANTIER ?",
    answer:
      "Oui, absolument. Nous fournissons des plans détaillés, des rendus 3D et des échantillons de matériaux avant le début de tout chantier. Cela vous permet de visualiser le résultat final et de valider chaque étape du projet en toute confiance.",
  },
  {
    question: "ÊTES-VOUS UNIQUEMENT SPÉCIALISÉS DANS LE BTP ?",
    answer:
      "Non, DINAGUI SARL est une entreprise pluridisciplinaire. Nous intervenons dans plus de 10 domaines d'expertise allant du BTP à la gestion immobilière, en passant par le nettoyage, le gardiennage, la logistique, le commerce général et le consulting.",
  },
  {
    question: "QUELS AVANTAGES OFFRE UN ACCOMPAGNEMENT PAR DINAGUI SARLU ?",
    answer:
      "En choisissant DINAGUI, vous bénéficiez d'un interlocuteur unique, d'un suivi personnalisé et d'une coordination rigoureuse de tous les corps de métier. Cela simplifie la gestion de votre projet, réduit les délais et garantit une cohérence globale dans l'exécution des travaux.",
  },
];

export default function AProposPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="À propos de DINAGUI SARL"
        subtitle="Votre spécialiste en BTP et partenaire pluridisciplinaire"
        backgroundImage="/images/services/btp-hero.avif"
        ctaText="Contactez-nous"
        ctaLink="/contact"
      />

      {/* L'excellence BTP - with image carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              {galleryImages.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Réalisation DINAGUI ${i + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-700 ease-in-out ${
                    currentImage === i ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ))}
            </div>
            {/* Dots navigation */}
            <div className="flex items-center justify-center gap-3 mt-5">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`rounded-full transition-all duration-300 ${
                    currentImage === i
                      ? "w-8 h-3 bg-[#F88732]"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#F88732]" />
              <span className="text-[#F88732] font-medium text-sm tracking-[0.15em] uppercase font-[Roboto]">
                Qui sommes-nous
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] mb-6 font-[Roboto_Condensed] uppercase leading-tight">
              L&apos;excellence BTP à votre service
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
              DINAGUI SARL est votre partenaire de confiance pour la construction et l&apos;aménagement, en <strong className="text-[#1f2d3d]">macro-lots, tous corps d&apos;état ou clé en main</strong>.
              Notre équipe d&apos;architectes, ingénieurs et artisans expérimentés vous accompagne de la <strong className="text-[#1f2d3d]">conception à la réalisation</strong>, avec un engagement constant pour la <strong className="text-[#1f2d3d]">qualité, la durabilité et le respect des délais</strong>.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
              Nous transformons vos idées en <strong className="text-[#1f2d3d]">espaces fonctionnels, esthétiques et adaptés</strong> à vos besoins, qu&apos;il s&apos;agisse de projets <strong className="text-[#1f2d3d]">résidentiels, commerciaux, industriels ou institutionnels</strong>. Grâce à notre expertise en construction neuve, rénovation et aménagement, nous vous proposons des solutions sur mesure adaptées à vos besoins et à vos contraintes.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-8 font-[Roboto]">
              Notre vision repose sur l&apos;innovation, la fiabilité et l&apos;excellence afin de garantir des résultats qui dépassent vos attentes et contribuent directement à la réussite de vos projets.
            </p>

            {/* Progress bars */}
            <div className="space-y-5 mb-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#1f2d3d] font-bold text-lg font-[Roboto_Condensed] uppercase">Fiable</span>
                  <span className="text-[#1f2d3d] font-bold font-[Roboto]">100%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[#1f2d3d] rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#1f2d3d] font-bold text-lg font-[Roboto_Condensed] uppercase">Satisfaction</span>
                  <span className="text-[#1f2d3d] font-bold font-[Roboto]">100%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="h-full bg-[#F88732] rounded-full"
                  />
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#F88732] text-[#F88732] font-semibold px-8 py-3 rounded hover:bg-[#F88732] hover:text-white transition-colors duration-300 font-[Roboto]"
            >
              Demandez un devis
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery of realizations */}
      <section className="py-20 bg-[#faf5f0]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Réalisation ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#F88732]/0 group-hover:bg-[#F88732]/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                    <svg className="w-5 h-5 text-[#F88732]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] mb-8 font-[Roboto_Condensed] uppercase">
            Pourquoi choisir DINAGUI ?
          </h2>
          <div className="text-[#6b7280] leading-relaxed space-y-4 text-[17px] font-[Roboto]">
            <p>
              Chez DINAGUI SARL, nous nous engageons à fournir un service sur mesure,
              adapté aux besoins spécifiques de chaque client. Nous proposons des <strong className="text-[#1f2d3d]">solutions sur mesure adaptées à vos besoins et à vos contraintes</strong>.
            </p>
            <p>
              Notre équipe d&apos;architectes, d&apos;ingénieurs et d&apos;artisans qualifiés veille à chaque étape du projet pour garantir des <strong className="text-[#1f2d3d]">résultats durables, esthétiques et fonctionnels</strong>, tout en respectant les délais et le budget convenus.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#faf5f0]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border-b border-gray-200 transition-all duration-300 ${
                  openFaq === index ? "border-l-4 border-l-[#F88732] bg-white rounded-r-lg" : "border-l-4 border-l-transparent"
                }`}
              >
                <button
                  className="w-full text-left px-6 py-6 flex items-center justify-between gap-4 font-bold text-[#1f2d3d] hover:text-[#F88732] transition-colors font-[Roboto_Condensed] uppercase text-base"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`text-2xl flex-shrink-0 transition-all duration-300 ${
                      openFaq === index ? "rotate-45 text-[#F88732]" : "text-[#6b7280]"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-[#6b7280] leading-relaxed font-[Roboto]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - consistent with homepage */}
      <section className="bg-[#F88732] py-16">
        <div className="max-w-[900px] mx-auto text-center px-6">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <div className="w-12 h-px bg-white/60" />
            <div className="w-2 h-2 rounded-full bg-white/60" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[Roboto_Condensed] uppercase">
            Besoin d&apos;architectes, d&apos;ingénieurs et d&apos;artisans expérimentés ?
          </h2>
          <p className="text-white/85 mb-8 font-[Roboto]">
            Bénéficiez de l&apos;expertise de nos professionnels pour concrétiser vos projets de construction du concept à la réalisation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#F88732] font-semibold px-10 py-3.5 rounded hover:bg-gray-100 transition-all duration-300 font-[Roboto] hover:shadow-lg"
          >
            Contactez-nous maintenant
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
