import { ContourField } from "./ContourField";
import { Placeholder } from "./Placeholder";

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="bg-offwhite py-24 md:py-36"
    >
      <div className="container-x grid items-center gap-12 md:grid-cols-12 md:gap-8">
        {/* Supporting image slot */}
        <div
          className="relative aspect-[4/5] overflow-hidden bg-sage md:col-span-5"
          role="img"
          aria-label="Placeholder for a supporting aerial or survey image"
        >
          <ContourField
            levels={26}
            seed={4}
            className="absolute inset-0 h-full w-full text-charcoal opacity-30"
          />
          <div className="absolute bottom-4 left-4 right-4">
            <Placeholder>supporting aerial / survey image</Placeholder>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <h2 id="approach-title" className="text-h2">
            Approach
          </h2>
          <div className="mt-8 max-w-[62ch] space-y-4">
            <Placeholder block>
              how the company works — replace with the verified method or
              process from the approved brief
            </Placeholder>
            <Placeholder block>
              if the brief defines a sequence of steps, list them here
            </Placeholder>
          </div>
        </div>
      </div>
    </section>
  );
}

