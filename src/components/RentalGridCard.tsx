import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { RentalOffer, getRentalCover } from "@/lib/rentals";

export default function RentalGridCard({ offer }: { offer: RentalOffer }) {
  const cover = getRentalCover(offer);
  const href = `/nos-offres/location-dappartements/${offer.slug}`;

  return (
    <Link
      href={href}
      className="group bg-white rounded-[12px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] bg-[#1f2d3d] overflow-hidden">
        {cover ? (
          <Image
            src={cover}
            alt={offer.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          offer.video && (
            <>
              <video
                src={offer.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70 pointer-events-none"
              />
              <video
                src={offer.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="relative z-10 w-full h-full object-contain"
              />
            </>
          )
        )}
        <div className="absolute top-3 left-3 z-20 inline-flex items-center leading-none bg-[#F88732] text-white px-3 h-7 rounded text-xs font-bold font-[Roboto_Condensed] uppercase tracking-wider">
          {offer.furnished ? "Meublé" : "Non meublé"}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[#1f2d3d] font-[Roboto_Condensed] uppercase leading-tight mb-2">
          {offer.title}
        </h3>

        <div className="flex items-start gap-2 text-[#6b7280] text-sm font-[Roboto] mb-4">
          <FiMapPin className="text-[#F88732] mt-0.5 flex-shrink-0" />
          <span>
            {offer.location}
            {offer.landmark && <span className="text-[#6b7280]/80"> — {offer.landmark}</span>}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-[#FCEEE5] text-[#1f2d3d] text-xs font-medium px-2.5 py-1 rounded font-[Roboto]">
            {offer.bedrooms} chambre{offer.bedrooms > 1 ? "s" : ""}
          </span>
          <span className="bg-[#FCEEE5] text-[#1f2d3d] text-xs font-medium px-2.5 py-1 rounded font-[Roboto]">
            {offer.bathrooms} SDB
          </span>
        </div>

        <p className="text-[#6b7280] text-[14px] font-[Roboto] leading-relaxed mb-6 flex-1">
          {offer.summary}
        </p>

        <span className="inline-flex items-center gap-2 text-[#F88732] font-semibold text-[15px] font-[Roboto] group-hover:gap-3 transition-all">
          Voir les détails <FiArrowRight />
        </span>
      </div>
    </Link>
  );
}
