"use client";
import React from "react";
import { useField } from "@payloadcms/ui";
import { FEATURE_ICONS, DEFAULT_FEATURE_ICON } from "@/lib/featureIcons";

/**
 * Visual icon picker for a feature.
 * Replaces the `icon` select field: a grid of clickable Lucide icons,
 * neutral icon selected by default.
 */
export function IconPicker() {
  // Without an explicit `path`, the hook resolves it from the field context
  // (correct even when array rows are reordered).
  const { value, setValue } = useField<string>({});
  const current = value || DEFAULT_FEATURE_ICON;

  return (
    <div className="field-type" style={{ marginBottom: 0 }}>
      <label className="field-label" style={{ display: "block", marginBottom: 6 }}>
        Icône
      </label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {Object.entries(FEATURE_ICONS).map(([key, { label, Icon }]) => {
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
