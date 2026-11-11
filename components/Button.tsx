import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  onDark?: boolean;
  className?: string;
};

const base =
  "inline-flex min-h-12 items-center justify-center rounded-[2px] px-6 font-sans text-[0.9375rem] font-medium transition-colors duration-200 motion-reduce:transition-none";

const styles = {
  light: {
    primary: "bg-charcoal text-offwhite hover:bg-charcoal/85",
    secondary:
      "border border-charcoal text-charcoal hover:bg-charcoal hover:text-offwhite",
  },
  dark: {
    primary: "bg-offwhite text-charcoal hover:bg-white",
    secondary:
      "border border-offwhite/70 text-offwhite hover:bg-offwhite hover:text-charcoal",
  },
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  onDark = false,
  className = "",
}: Props) {
  return (
    <a
      href={href}
      className={`${base} ${styles[onDark ? "dark" : "light"][variant]} ${className}`}
    >
      {children}
    </a>
  );
}

