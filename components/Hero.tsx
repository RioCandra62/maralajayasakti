import Image from "next/image";
import { brand, cta, heroImage } from "@/lib/site";
import { Button } from "./Button";
import { ContourField } from "./ContourField";
import { Placeholder } from "./Placeholder";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="on-dark relative isolate flex min-h-[min(100svh,56rem)] flex-col overflow-hidden bg-charcoal text-offwhite"
    >
      {/* Image layer */}
      {heroImage ? (
        <>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-tr from-charcoal via-charcoal/70 to-charcoal/10"
          />
        </>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,#2c332e_0%,#202522_62%)]" />
        </div>
      )}

      {/* Survey grid + contour overlay (static SVG, sage) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 text-sage"
      >
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "96px 96px",
            maskImage:
              "linear-gradient(to left, black 0%, black 35%, transparent 80%)",
          }}
        />
        <ContourField
          animate
          className="absolute inset-y-0 right-0 h-full w-full opacity-25 md:w-[78%] md:opacity-40"
        />
      </div>

      {/* Content */}
      <div className="container-x relative flex flex-1 flex-col justify-end pb-14 pt-40 md:pb-20">
        <h1
          id="hero-title"
          className="hero-rise max-w-[11ch] text-display"
          style={{ ["--d" as string]: "250ms" }}
        >
          Precision in Every Dimension.
        </h1>
        <p
          className="hero-rise mt-8 max-w-[34ch] text-lead text-offwhite/90"
          style={{ ["--d" as string]: "550ms" }}
        >
          {brand.supporting}
        </p>
        <div
          className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row"
          style={{ ["--d" as string]: "800ms" }}
        >
          <Button href={cta.primary.href} onDark>
            {cta.primary.label}
          </Button>
          <Button href={cta.secondary.href} variant="secondary" onDark>
            {cta.secondary.label}
          </Button>
        </div>
      </div>

      {/* Base strip: approved positioning + coordinate slot */}
      <div className="relative border-t border-sage/40">
        <div className="container-x flex flex-col gap-3 py-5 text-[0.875rem] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-offwhite/85">{brand.positioning}</p>
          {!heroImage && (
            <Placeholder onDark>
              hero aerial image + project coordinates
            </Placeholder>
          )}
        </div>
      </div>
    </section>
  );
}
