import { Placeholder } from "./Placeholder";

export function ClosingCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-dark bg-charcoal py-24 text-offwhite md:py-36"
    >
      <div className="container-x grid gap-10 md:grid-cols-12 md:gap-8">
        <h2 id="contact-title" className="text-h2 md:col-span-6">
          Tell us about your project.
        </h2>
        <div className="md:col-span-5 md:col-start-8">
          <p className="max-w-[44ch] text-lead text-offwhite/90">
            Discuss Your Project with our team.
          </p>
          <div className="mt-8">
            <Placeholder block onDark>
              contact form or contact link — destination to be confirmed
            </Placeholder>
          </div>
        </div>
      </div>
    </section>
  );
}

