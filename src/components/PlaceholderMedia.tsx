type Props = {
  label: string;
  hint: string;
  className?: string;
};

export function PlaceholderMedia({ label, hint, className = "" }: Props) {
  return (
    <div
      className={`flex min-h-44 flex-col justify-end rounded-2xl border border-dashed border-pw-border bg-pw-elevated p-4 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pw-cyan">
        Placeholder
      </p>
      <p className="mt-2 font-medium text-pw-text">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-pw-muted">{hint}</p>
    </div>
  );
}
