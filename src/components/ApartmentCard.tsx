import Image from "next/image";

export interface ApartmentType {
  type: string;
  surface: string;
  config: string;
  features: string[];
  price?: string;
  image: string;
}

export default function ApartmentCard({ apartment }: { apartment: ApartmentType }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-[280px] lg:h-full min-h-[320px] overflow-hidden">
          <Image
            src={apartment.image}
            alt={`Plan appartement ${apartment.type}`}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Surface badge */}
          <div className="absolute top-4 left-4 bg-[#F88732] text-white px-4 py-2 rounded">
            <span className="text-lg font-bold font-[Roboto_Condensed]">{apartment.surface}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#1f2d3d] uppercase tracking-wide mb-5 font-[Roboto_Condensed]">
              {apartment.type}
            </h3>

            {/* Room configuration badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {apartment.config.split(", ").map((item, index) => (
                <span
                  key={index}
                  className="bg-[#FCEEE5] text-[#1f2d3d] text-sm font-medium px-3 py-1.5 rounded"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-2.5 mb-6">
              {apartment.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-[#6b7280] text-[15px]">
                  <span className="text-[#F88732] mt-0.5 flex-shrink-0 font-bold">&#10003;</span>
                  <span className="font-[Roboto]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {apartment.price && (
            <div className="bg-[#faf5f0] rounded-lg px-5 py-4 flex items-center justify-between">
              <span className="text-sm text-[#6b7280] font-[Roboto]">Loyer mensuel</span>
              <span className="text-lg font-bold text-[#F88732] font-[Roboto_Condensed]">{apartment.price}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
