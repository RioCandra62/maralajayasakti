import { brand, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { Placeholder } from "./Placeholder";

export function Footer() {
  return (
    <footer className="border-t border-sage bg-offwhite pb-10 pt-16">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-[30ch] text-[0.9375rem]">{brand.tagline}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3 md:col-start-6">
          <ul className="space-y-3 text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block py-1 underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="space-y-3 not-italic md:col-span-4 md:col-start-9">
          <p>
            <Placeholder>office address</Placeholder>
          </p>
          <p>
            <Placeholder>phone number</Placeholder>
          </p>
          <p>
            <Placeholder>email address</Placeholder>
          </p>
        </address>
      </div>

      <div className="container-x mt-16 border-t border-sage pt-6 text-[0.875rem]">
        <p>© {brand.name}</p>
      </div>
    </footer>
  );
}

