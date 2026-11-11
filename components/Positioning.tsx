import { brand } from "@/lib/site";
import { Placeholder } from "./Placeholder";

export function Positioning() {
  return (
    <section
      aria-labelledby="positioning-title"
      className="bg-offwhite py-24 md:py-36"
    >
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-8">
        <h2
          id="positioning-title"
          className="text-h2 md:col-span-6 lg:col-span-5"
        >
          {brand.positioning}
        </h2>
        <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
          <div className="max-w-[62ch]">
            <Placeholder block>
              company overview paragraph — replace with approved copy; do not
              state history, founding year, scale or credentials until verified
            </Placeholder>
          </div>
        </div>
      </div>
    </section>
  );
}
