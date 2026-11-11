import { Placeholder } from "./Placeholder";

/**
 * Service rows are placeholders until the approved project brief supplies
 * verified service names and descriptions.
 */
const rows = [1, 2, 3, 4];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="bg-white py-24 md:py-36"
    >
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <h2 id="capabilities-title" className="text-h2 md:col-span-5">
            Capabilities
          </h2>
          <div className="max-w-[48ch] md:col-span-5 md:col-start-8">
            <Placeholder block>
              one-sentence capabilities introduction from the approved brief
            </Placeholder>
          </div>
        </div>

        <ul className="mt-16 border-t border-sage md:mt-24">
          {rows.map((n) => (
            <li
              key={n}
              className="grid gap-4 border-b border-sage py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <h3 className="text-h3 md:col-span-4">
                <Placeholder>service name {n}</Placeholder>
              </h3>
              <div className="md:col-span-5 md:col-start-6">
                <Placeholder block>
                  verified service description from the approved brief
                </Placeholder>
              </div>
              <p className="font-mono text-[0.8125rem] text-charcoal md:col-span-2 md:col-start-11 md:text-right">
                <Placeholder>ref</Placeholder>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
