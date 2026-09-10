import { cn } from "@/lib/utils";
import kuLogo from "@/assets/ku-gpt.png";

export function Brandmark({
  className,
  tone = "core",
}: {
  className?: string;
  tone?: "core" | "invert";
}) {
  return (
    <img
      src={kuLogo}
      alt="KUnnected FM"
      width={280}
      height={80}
      className={cn(
        `
          block
          h-[44px]
          w-auto
          max-w-[240px]
          object-contain
          object-left
        `,
        tone === "invert" && "brightness-0 invert",
        className,
      )}
    />
  );
}

export function ArcPattern({
  className,
  opacity = 0.08,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="kufm-arcs"
          width="280"
          height="280"
          patternUnits="userSpaceOnUse"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            <path d="M0 280a280 280 0 0 1 280-280" />
            <path d="M0 280a210 210 0 0 1 210-210" />
            <path d="M0 280a140 140 0 0 1 140-140" />
            <path d="M0 280a70 70 0 0 1 70-70" />
          </g>
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#kufm-arcs)"
      />
    </svg>
  );
}