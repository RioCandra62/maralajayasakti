import type { ReactNode } from "react";

/**
 * Visible marker for any content that is not yet approved/verified.
 * Search the codebase for "PLACEHOLDER" to find everything to replace.
 */
export function Placeholder({
  children,
  block = false,
  onDark = false,
}: {
  children: ReactNode;
  block?: boolean;
  onDark?: boolean;
}) {
  return (
    <span
      data-placeholder
      className={[
        "max-w-full break-words border border-dashed font-mono text-[0.8125rem] leading-snug",
        block ? "block px-4 py-3" : "inline-block px-2 py-0.5",
        onDark
          ? "border-sand text-offwhite"
          : "border-sand text-charcoal bg-sand/10",
      ].join(" ")}
    >
      [PLACEHOLDER: {children}]
    </span>
  );
}
