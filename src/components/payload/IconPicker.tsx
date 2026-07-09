"use client";
import React from "react";
import { useField } from "@payloadcms/ui";
import { EQUIPEMENT_ICONS, EQUIPEMENT_ICONE_DEFAUT } from "@/lib/equipementIcons";

/**
 * Sélecteur d'icône visuel pour une caractéristique.
 * Remplace le champ `icone` (select) : grille d'icônes Lucide cliquables,
 * icône neutre sélectionnée par défaut.
 */
export function IconPicker() {
  // Sans `path` explicite, le hook résout le chemin via le contexte du champ
  // (correct même lors du réordonnancement des lignes du tableau).
  const { value, setValue } = useField<string>({});
  const current = value || EQUIPEMENT_ICONE_DEFAUT;

  return (
    <div className="field-type" style={{ marginBottom: 0 }}>
      <label className="field-label" style={{ display: "block", marginBottom: 6 }}>
        Icône
      </label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {Object.entries(EQUIPEMENT_ICONS).map(([key, { label, Icon }]) => {
          const active = current === key;
          return (
            <button
              key={key}
              type="button"
              title={label}
              aria-label={label}
              aria-pressed={active}
              onClick={() => setValue(key)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 8,
                border: active
                  ? "2px solid #F88732"
                  : "1px solid var(--theme-elevation-200)",
                background: active ? "#FCEEE5" : "var(--theme-elevation-0)",
                color: active ? "#e0752a" : "var(--theme-elevation-700)",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <Icon width={20} height={20} strokeWidth={1.75} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
