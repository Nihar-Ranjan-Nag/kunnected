import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroAsset from "@/assets/hero-campus.jpg";
import { ArcPattern } from "@/components/brand/Brandmark";
import { LineReveal } from "@/components/motion/Reveal";
import { company } from "@/lib/site";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 160]);
  const fade = useTransform(scrollY, [0, 620], [1, 0]);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-core lg:h-dvh lg:min-h-[42rem]">
      <motion.div style={reduced ? undefined : { y }} className="absolute inset-0 h-[118%]">
        <img
          src={heroAsset}
          alt="A modern university campus at golden hour with a long reflecting pool"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#201A57]/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#201A57]/95 via-transparent to-[#201A57]/50" />
      <ArcPattern className="text-[#3F80CF]" opacity={0.06} />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-12 pt-24 sm:pb-16 lg:h-full lg:min-h-0 lg:pb-28 lg:pt-20">
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="eyebrow text-[#3F80CF]"
        >
          {company.purpose}
        </motion.p>

        <h1 className="display-xl mt-6 max-w-[16ch] text-white">
          <LineReveal
            delay={0.25}
            lines={["Smarter Student", "Accommodation", "Operations"]}
            lineClassName="text-white font-extrabold"
          />
        </h1>

        <div className="mt-7 grid gap-6 border-t border-white/10 pt-6 sm:mt-10 sm:gap-10 sm:pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            {company.subheadline}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-active bg-active px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-active/90 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
              Explore Services
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-8 sm:text-base"
        >
          {company.tagline}
        </motion.p>
      </div>

      <motion.div
        style={reduced ? undefined : { opacity: fade }}
        className="absolute bottom-7 right-6 hidden items-center gap-2 text-[0.6875rem] tracking-[0.18em] text-white/50 uppercase lg:flex"
      >
        Scroll <ArrowDown className="h-3.5 w-3.5" />
      </motion.div>
    </section>
  );
}
