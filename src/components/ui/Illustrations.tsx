import type { ServiceArtVariant } from "@/content/site";

/** Decorative botanical branch. Purely ornamental (aria-hidden). */
export function Botanical({ className = "" }: { className?: string }) {
  const leaves = Array.from({ length: 8 }, (_, i) => {
    const y = 300 - i * 34;
    const side = i % 2 === 0 ? -1 : 1;
    return { y, side, rot: side * 38, tone: i % 3 === 0 ? "#B9805F" : "#6B8872", op: 0.55 + (i % 4) * 0.1 };
  });
  return (
    <svg viewBox="0 0 240 360" className={className} aria-hidden="true" focusable="false" fill="none">
      <path d="M120 350C116 270 124 170 120 36" stroke="#3E5647" strokeWidth="2.5" strokeLinecap="round" />
      {leaves.map((l, i) => (
        <ellipse
          key={i}
          cx={120 + l.side * 34}
          cy={l.y}
          rx="34"
          ry="12"
          fill={l.tone}
          opacity={l.op}
          transform={`rotate(${l.rot} ${120 + l.side * 34} ${l.y})`}
        />
      ))}
      <ellipse cx="120" cy="26" rx="12" ry="30" fill="#6B8872" opacity="0.8" />
    </svg>
  );
}

/** Soft abstract scenes for the three service cards (decorative, not photography). */
export function ServiceArt({ variant, className = "" }: { variant: ServiceArtVariant; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {variant === "calm" && (
        <>
          <rect width="400" height="260" fill="#DDE7DF" />
          <circle cx="200" cy="140" r="150" fill="#C3D3C6" opacity="0.55" />
          <circle cx="200" cy="140" r="108" fill="#A3BAA8" opacity="0.5" />
          <circle cx="200" cy="140" r="68" fill="#6B8872" opacity="0.55" />
          <circle cx="200" cy="140" r="30" fill="#FAF7F2" />
        </>
      )}
      {variant === "grounded" && (
        <>
          <rect width="400" height="260" fill="#EAD6C8" />
          <circle cx="285" cy="92" r="40" fill="#FAF7F2" opacity="0.9" />
          <path d="M0 170C70 120 130 130 200 160S340 170 400 125V260H0Z" fill="#A3BAA8" />
          <path d="M0 205C80 165 150 185 220 200S340 205 400 175V260H0Z" fill="#6B8872" />
          <path d="M0 238C90 214 170 232 250 236S360 232 400 222V260H0Z" fill="#3E5647" />
        </>
      )}
      {variant === "renew" && (
        <>
          <rect width="400" height="260" fill="#F1EBE0" />
          <circle cx="200" cy="260" r="170" fill="#DDE7DF" />
          <path d="M200 236C198 196 204 168 200 128" stroke="#3E5647" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M200 170C168 168 148 148 144 116 176 116 198 134 200 170Z" fill="#6B8872" />
          <path d="M201 140C228 140 248 120 252 90 224 92 204 108 201 140Z" fill="#B9805F" opacity="0.85" />
          <circle cx="300" cy="64" r="22" fill="#EAD6C8" />
        </>
      )}
    </svg>
  );
}
