import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="border-y border-hairline bg-light-mesh relative overflow-hidden">
      {/* Floating Animated Circles */}
      <div className="blur-circle-1 -left-20 -top-20 pointer-events-none" />
      <div className="blur-circle-2 -right-40 -bottom-40 pointer-events-none" />

      <div className="shell relative z-10 grid gap-4 py-14 sm:grid-cols-2 sm:gap-6 sm:py-16 lg:grid-cols-4 lg:py-20">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={0.06 * i}
            className="rounded-xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
          >
            <p className="font-display text-4xl leading-none font-bold tracking-[-0.04em] text-active sm:text-5xl lg:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="text-slate-600 mt-5 text-sm font-medium leading-relaxed">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionUnderline() {
  const reduced = useReducedMotion();
  return (
    <motion.span
      initial={reduced ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="section-underline"
    />
  );
}

export { SectionUnderline };
