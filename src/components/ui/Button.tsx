import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

const variants = {
  primary: "bg-sage-700 text-ivory hover:bg-sage-900",
  light: "bg-ivory text-sage-900 hover:bg-white",
  outline: "border border-sage-700 text-sage-700 hover:bg-sage-700 hover:text-ivory",
} as const;

type ButtonProps = {
  href: string;
  variant?: keyof typeof variants;
  external?: boolean;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

/** Link styled as a button. Handles in-page, mailto/tel and external destinations. */
export function Button({ href, variant = "primary", external = false, arrow = true, className = "", children }: ButtonProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.9375rem] font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
