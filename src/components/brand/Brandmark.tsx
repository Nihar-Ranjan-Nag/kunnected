import { cn } from "@/lib/utils";

import kuLogo from "@/assets/ku-gpt.png";

type BrandmarkProps = {
  className?: string;
  tone?: "core" | "invert";
};

export function Brandmark({
  className,
  tone = "core",
}: BrandmarkProps) {
  return (
    <img
      src={kuLogo}
      alt="KUnnected FM"
      width={340}
      height={96}
      className={cn(
        `
          block

          h-[58px]
          w-auto
          max-w-[300px]

          object-contain
          object-left

          sm:h-[62px]

          lg:h-[68px]

          xl:h-[72px]
        `,
        tone === "invert" &&
          "brightness-0 invert",
        className,
      )}
    />
  );
}

type ArcPatternProps = {
  className?: string;
  opacity?: number;
};

export function ArcPattern({
  className,
  opacity = 0.08,
}: ArcPatternProps) {
  return (
    <svg
      viewBox="0 0 900 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{
        opacity,
      }}
      className={cn(
        `
          pointer-events-none
          select-none
        `,
        className,
      )}
    >
      <circle
        cx="720"
        cy="180"
        r="160"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />

      <circle
        cx="720"
        cy="180"
        r="240"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.72"
      />

      <circle
        cx="720"
        cy="180"
        r="320"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />

      <circle
        cx="120"
        cy="760"
        r="180"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.65"
      />

      <circle
        cx="120"
        cy="760"
        r="270"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
      />

      <path
        d="
          M-80 580
          C110 390 320 300 520 330
          C690 355 820 450 980 640
        "
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />

      <path
        d="
          M-100 665
          C105 450 340 365 545 405
          C720 438 845 550 1010 750
        "
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
}