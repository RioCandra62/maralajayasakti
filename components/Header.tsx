import Link from "next/link";
import { brand, cta, nav } from "@/lib/site";
import { Button } from "./Button";
import { Logo } from "./Logo";

/** Sits over the dark hero (on-dark). Static, no JS. */
export function Header() {
  return (
    <header className="on-dark absolute inset-x-0 top-0 z-20 text-offwhite">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:bg-offwhite focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>
      <div className="container-x flex items-center justify-between gap-6 py-6">
        <Link href="/" aria-label={`${brand.name} — home`} className="shrink-0">
          <Logo onDark />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 text-[0.9375rem] md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="py-2 underline-offset-8 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden sm:block">
            <Button href={cta.primary.href} onDark className="!min-h-11 !px-5">
              {cta.primary.label}
            </Button>
          </div>
          <a
            href="#contact"
            className="py-2 text-[0.9375rem] underline underline-offset-8 sm:hidden"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
