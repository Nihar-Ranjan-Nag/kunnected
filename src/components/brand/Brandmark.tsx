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
        tone === "invert" && "brightness-0 invert",
        className,
      )}
    />
  );
}