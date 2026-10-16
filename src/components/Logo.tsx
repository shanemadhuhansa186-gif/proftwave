import { siteConfig } from "../config/site";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
};

export function Logo({
  className = "",
  markClassName = "h-10 w-10",
  showWordmark = true,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={siteConfig.logoSrc}
        alt="ProfitWave logo"
        width={160}
        height={160}
        className={`${markClassName} rounded-xl bg-pw-bg object-cover object-[center_32%] ring-1 ring-pw-border`}
      />
      {showWordmark ? (
        <span className="leading-tight">
          <span className="block font-semibold tracking-tight text-pw-text">
            ProfitWave
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-pw-muted sm:block">
            {siteConfig.tagline}
          </span>
        </span>
      ) : null}
    </span>
  );
}
