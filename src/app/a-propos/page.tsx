"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
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
      <section className="py-20 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={galleryImages[currentImage]}
                alt="Réalisation DINAGUI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={prevImage}
                className="bg-[#F88732] text-white w-10 h-10 flex items-center justify-center rounded hover:bg-[#e0752a] transition-colors"
              >
                &larr;
              </button>
              <button
                onClick={nextImage}
                className="bg-[#F88732] text-white w-10 h-10 flex items-center justify-center rounded hover:bg-[#e0752a] transition-colors"
              >
                &rarr;
              </button>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] mb-6 font-[Roboto_Condensed] uppercase">
              L&apos;excellence BTP à votre service
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
              DINAGUI SARL est votre partenaire de confiance pour la construction et l&apos;aménagement, en <strong className="text-[#1f2d3d]">macro-lots, tous corps d&apos;état ou clé en main</strong>.
              Notre équipe d&apos;architectes, ingénieurs et artisans expérimentés vous accompagne de la <strong className="text-[#1f2d3d]">conception à la réalisation</strong>, avec un engagement constant pour la <strong className="text-[#1f2d3d]">qualité, la durabilité et le respect des délais</strong>.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-4 font-[Roboto]">
              Nous transformons vos idées en <strong className="text-[#1f2d3d]">espaces fonctionnels, esthétiques et adaptés</strong> à vos besoins, qu&apos;il s&apos;agisse de projets <strong className="text-[#1f2d3d]">résidentiels, commerciaux, industriels ou institutionnels</strong>. Grâce à notre expertise en construction neuve, rénovation et aménagement, nous vous proposons des solutions sur mesure adaptées à vos besoins et à vos contraintes.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-6 font-[Roboto]">
              Notre vision repose sur l&apos;innovation, la fiabilité et l&apos;excellence afin de garantir des résultats qui dépassent vos attentes et contribuent directement à la réussite de vos projets.
            </p>

            {/* Progress bar */}
            <div className="mb-6">
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

            <Link
              href="/contact"
              className="inline-block border-2 border-[#F88732] text-[#F88732] font-semibold px-8 py-3 rounded hover:bg-[#F88732] hover:text-white transition-colors duration-300 font-[Roboto]"
            >
              Demandez un devis
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery of realizations */}
      <section className="py-16 bg-[#faf5f0]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={img}
                  alt={`Réalisation ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-[#faf5f0]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                <button
                  className="w-full text-left px-2 py-6 flex items-center justify-between gap-4 font-bold text-[#1f2d3d] hover:text-[#F88732] transition-colors font-[Roboto_Condensed] uppercase text-base"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`text-[#6b7280] text-2xl flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-2 text-[#6b7280] leading-relaxed font-[Roboto]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#F88732]">
        <div className="max-w-[1340px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-white font-[Roboto_Condensed] uppercase">
            Besoin d&apos;architectes, d&apos;ingénieurs et d&apos;artisans expérimentés ?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#F88732] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors duration-300 font-[Roboto] whitespace-nowrap"
          >
            Contactez-nous maintenant
          </Link>
        </div>
      </section>
    </>
  );
}
