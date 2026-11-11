import Image from "next/image";
import { logo } from "@/lib/site";

/**
 * Official logo renderer. The logo file has not been supplied yet, so this
 * shows a clearly marked pending slot. It never draws a substitute mark.
 */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  if (logo) {
    return (
      <Image
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={logo.alt}
        priority
        className="h-9 w-auto"
      />
    );
  }
  return (
    <span
      data-placeholder
      role="img"
      aria-label="PT Marala Jaya Sakti (official logo pending)"
      className={[
        "inline-flex h-9 min-w-36 items-center justify-center border border-dashed px-3 font-mono text-[0.75rem]",
        onDark ? "border-sand text-offwhite" : "border-sand text-charcoal",
      ].join(" ")}
    >
      [LOGO — PENDING]
    </span>
  );
}

