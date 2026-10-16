import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function DisclaimerBanner({ children }: Props) {
  return (
    <p
      role="note"
      className="rounded-2xl border border-pw-border bg-pw-elevated px-4 py-3 text-sm leading-relaxed text-pw-muted"
    >
      {children}
    </p>
  );
}
