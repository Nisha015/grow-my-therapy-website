import Link from "next/link";
import { site } from "@/content/site";
import { Leaf } from "./ui/Icons";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          dark ? "bg-sage-800 text-sage-200" : "bg-sage-700 text-ivory"
        }`}
      >
        <Leaf className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-xl font-semibold ${dark ? "text-ivory" : "text-sage-900"}`}>{site.shortName}</span>
        <span className={`hidden text-[0.6875rem] font-semibold uppercase tracking-[0.2em] min-[380px]:block ${dark ? "text-sage-300" : "text-clay-dark"}`}>
          PsyD · Clinical Psychologist
        </span>
      </span>
    </Link>
  );
}
