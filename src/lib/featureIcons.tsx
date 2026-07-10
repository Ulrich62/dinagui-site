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
 * Feature icon set — STRICTLY within the Lucide family already used across the
 * site. Do not add icons from another style: they must stay visually consistent.
 * `label` is the French UI label shown to the (French-speaking) editor.
 */
export const FEATURE_ICONS = {
  neutral: { label: "Neutre (✓)", Icon: Check },
  bedroom: { label: "Chambre", Icon: BedDouble },
  bathroom: { label: "Salle de bain", Icon: Bath },
  hotWater: { label: "Eau chaude", Icon: Droplets },
  kitchen: { label: "Cuisine équipée", Icon: ChefHat },
  fridge: { label: "Réfrigérateur", Icon: Refrigerator },
  washer: { label: "Machine à laver", Icon: WashingMachine },
  airConditioning: { label: "Climatisation", Icon: AirVent },
  wifi: { label: "Wifi / Internet", Icon: Wifi },
  furnished: { label: "Meublé", Icon: Sofa },
  security: { label: "Sécurité / accès", Icon: Shield },
  parking: { label: "Parking", Icon: Car },
  electricity: { label: "Électricité", Icon: Zap },
  elevator: { label: "Ascenseur", Icon: ArrowUpDown },
} satisfies Record<string, { label: string; Icon: Icon }>;

export type FeatureIconKey = keyof typeof FEATURE_ICONS;

export const DEFAULT_FEATURE_ICON: FeatureIconKey = "neutral";

/** Options for the Payload select field (label / value). */
export const featureIconOptions = Object.entries(FEATURE_ICONS).map(
  ([value, { label }]) => ({ label, value }),
);

/** Icon component for a key (falls back to the neutral icon). */
export function featureIcon(key?: string | null): Icon {
  const map = FEATURE_ICONS as Record<string, { label: string; Icon: Icon }>;
  return (key && map[key]?.Icon) || FEATURE_ICONS.neutral.Icon;
}

/**
 * Guess an icon key from free text — used to migrate legacy feature strings
 * to the new { label, icon } model.
 */
const RULES: { test: RegExp; key: FeatureIconKey }[] = [
  { test: /chambre|bedroom/i, key: "bedroom" },
  { test: /salle de bain|\bsdb\b|toilette|douche|bath/i, key: "bathroom" },
  { test: /eau chaude|hot water/i, key: "hotWater" },
  { test: /frigo|r[ée]frig|fridge/i, key: "fridge" },
  { test: /cuisine|[ée]quip|kitchen/i, key: "kitchen" },
  { test: /machine à laver|lave[- ]linge|washer|laundry/i, key: "washer" },
  { test: /clim|air.?con/i, key: "airConditioning" },
  { test: /wifi|internet/i, key: "wifi" },
  { test: /meubl|furnish/i, key: "furnished" },
  { test: /s[ée]curis|acc[èe]s|gardien|secur/i, key: "security" },
  { test: /parking|voiture|car/i, key: "parking" },
  { test: /[ée]lectricit|edg|[ée]lectrog|24h|electric/i, key: "electricity" },
  { test: /ascenseur|elevator|lift/i, key: "elevator" },
];

export function guessIconKey(text: string): FeatureIconKey {
  for (const r of RULES) if (r.test.test(text)) return r.key;
  return DEFAULT_FEATURE_ICON;
}
