import Image from "next/image";
import PageHero from "@/components/PageHero";

const teamMembers = [
  {
    name: "Dine DIALLO",
    role: "Directeur Général",
  },
  {
    name: "Fatoumata Binta Bah",
    role: "Directrice Générale Adjointe",
  },
  {
    name: "Mamadou Diao Bah",
    role: "Gestionnaire de site",
  },
  {
    name: "Mohamed Saifon Toure",
    role: "Gestionnaire Administratif",
  },
  {
    name: "Zeinab Souma",
    role: "Secrétaire",
  },
  {
    name: "Aboubacar Yatara",
    role: "Gestionnaire de Site Adjointe",
  },
];

export default function NotreEquipePage() {
  return (
    <>
      <PageHero title="Notre équipe" />

      <section className="py-20 bg-beige">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/images/team/portrait-team.png"
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                  <p className="text-gray mt-1 text-[15px]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
