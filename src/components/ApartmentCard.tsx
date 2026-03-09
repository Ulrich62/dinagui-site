import Image from "next/image";

export interface ApartmentType {
  type: string;
  surface: string;
  config: string;
  features: string[];
  price: string;
  image: string;
}

export default function ApartmentCard({ apartment }: { apartment: ApartmentType }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-[280px] lg:h-full min-h-[320px]">
          <Image
            src={apartment.image}
            alt={`Plan appartement ${apartment.type}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          {/* Type name */}
          <div>
            <h3 className="text-2xl font-bold text-dark uppercase tracking-wide mb-4">
              {apartment.type}
            </h3>

            {/* Surface */}
            <div className="flex items-baseline gap-2 mb-5">
              <span className="text-3xl font-bold text-orange">{apartment.surface}</span>
              <span className="text-gray text-sm">de surface</span>
            </div>

            {/* Room configuration badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {apartment.config.split(", ").map((item, index) => (
                <span
                  key={index}
                  className="bg-orange-light text-dark text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {apartment.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray text-[15px]">
                  <span className="text-orange mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="pt-4 border-t border-gray-light">
            <p className="text-sm text-gray mb-1">Loyer mensuel</p>
            <p className="text-xl font-bold text-orange">{apartment.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
