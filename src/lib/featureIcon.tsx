import type { ComponentType, SVGProps } from "react";
import {
  ArrowUpDown,
  Bath,
  BedDouble,
  Car,
  Check,
  ChefHat,
  Refrigerator,
  Shield,
  WashingMachine,
  Zap,
} from "lucide-react";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const RULES: { test: RegExp; icon: Icon }[] = [
  { test: /chambre/i, icon: BedDouble },
  { test: /salle de bain|\bsdb\b|toilette|douche/i, icon: Bath },
  { test: /frigo|r[ée]frig[ée]rateur/i, icon: Refrigerator },
  { test: /cuisine|[ée]quip[ée]e/i, icon: ChefHat },
  { test: /machine à laver|lave[- ]linge/i, icon: WashingMachine },
  { test: /s[ée]curis|acc[èe]s/i, icon: Shield },
  { test: /parking|voiture/i, icon: Car },
  { test: /[ée]lectricit[ée]|edg|[ée]lectrog[èe]ne/i, icon: Zap },
  { test: /ascenseur/i, icon: ArrowUpDown },
];

export function featureIcon(text: string): Icon {
  for (const rule of RULES) {
    if (rule.test.test(text)) return rule.icon;
  }
  return Check;
}
