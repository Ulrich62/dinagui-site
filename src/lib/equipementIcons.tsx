import type { ComponentType, SVGProps } from "react";
import {
  AirVent,
  ArrowUpDown,
  Bath,
  BedDouble,
  Car,
  Check,
  ChefHat,
  Droplets,
  Refrigerator,
  Shield,
  Sofa,
  WashingMachine,
  Wifi,
  Zap,
} from "lucide-react";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Jeu d'icônes des caractéristiques — STRICTEMENT dans la famille Lucide déjà
 * utilisée sur le site (cf. featureIcon.tsx). Ne pas ajouter d'icônes d'un autre
 * style : elles doivent rester visuellement cohérentes avec l'existant.
 */
export const EQUIPEMENT_ICONS = {
  neutre: { label: "Neutre (✓)", Icon: Check },
  chambre: { label: "Chambre", Icon: BedDouble },
  sdb: { label: "Salle de bain", Icon: Bath },
  eauChaude: { label: "Eau chaude", Icon: Droplets },
  cuisine: { label: "Cuisine équipée", Icon: ChefHat },
  frigo: { label: "Réfrigérateur", Icon: Refrigerator },
  laver: { label: "Machine à laver", Icon: WashingMachine },
  climatisation: { label: "Climatisation", Icon: AirVent },
  wifi: { label: "Wifi / Internet", Icon: Wifi },
  meuble: { label: "Meublé", Icon: Sofa },
  securite: { label: "Sécurité / accès", Icon: Shield },
  parking: { label: "Parking", Icon: Car },
  electricite: { label: "Électricité", Icon: Zap },
  ascenseur: { label: "Ascenseur", Icon: ArrowUpDown },
} satisfies Record<string, { label: string; Icon: Icon }>;

export type EquipementIconKey = keyof typeof EQUIPEMENT_ICONS;

export const EQUIPEMENT_ICONE_DEFAUT: EquipementIconKey = "neutre";

/** Options pour le champ select Payload (label / value). */
export const equipementIconeOptions = Object.entries(EQUIPEMENT_ICONS).map(
  ([value, { label }]) => ({ label, value }),
);

/** Composant icône associé à une clé (repli sur l'icône neutre). */
export function equipementIcon(key?: string | null): Icon {
  const map = EQUIPEMENT_ICONS as Record<string, { label: string; Icon: Icon }>;
  return (key && map[key]?.Icon) || EQUIPEMENT_ICONS.neutre.Icon;
}

/**
 * Devine une clé d'icône depuis un texte libre — utilisé pour migrer les
 * caractéristiques existantes (chaînes) vers le nouveau modèle { label, icône }.
 */
const REGLES: { test: RegExp; key: EquipementIconKey }[] = [
  { test: /chambre/i, key: "chambre" },
  { test: /salle de bain|\bsdb\b|toilette|douche/i, key: "sdb" },
  { test: /eau chaude/i, key: "eauChaude" },
  { test: /frigo|r[ée]frig/i, key: "frigo" },
  { test: /cuisine|[ée]quip/i, key: "cuisine" },
  { test: /machine à laver|lave[- ]linge/i, key: "laver" },
  { test: /clim/i, key: "climatisation" },
  { test: /wifi|internet/i, key: "wifi" },
  { test: /meubl/i, key: "meuble" },
  { test: /s[ée]curis|acc[èe]s|gardien/i, key: "securite" },
  { test: /parking|voiture/i, key: "parking" },
  { test: /[ée]lectricit|edg|[ée]lectrog|24h/i, key: "electricite" },
  { test: /ascenseur/i, key: "ascenseur" },
];

export function devinerIconeKey(text: string): EquipementIconKey {
  for (const r of REGLES) if (r.test.test(text)) return r.key;
  return EQUIPEMENT_ICONE_DEFAUT;
}
