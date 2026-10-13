"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/site";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { Close, Menu } from "./ui/Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-sage-100 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block py-2 text-[0.9375rem] font-medium text-ink transition-colors hover:text-clay-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button href="#contact" arrow={false} className="min-h-11 px-6 py-2.5">
                Get in touch
              </Button>
            </li>
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-sage-900 hover:bg-sage-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-sage-100 bg-ivory shadow-soft lg:hidden"
        >
          <ul className="mx-auto flex max-w-[1200px] flex-col px-5 pb-6 pt-2 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-sage-100">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl font-medium text-sage-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <Button href="#contact" className="w-full" arrow={false}>
                Get in touch
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
