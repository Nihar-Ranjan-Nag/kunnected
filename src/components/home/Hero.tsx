import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
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
    <section
      id="top"
      className="
        relative
        w-full
        overflow-hidden
        bg-core

        pt-20
        pb-8

        sm:pt-[88px]
        sm:pb-10

        lg:min-h-[calc(100svh-96px)]
        lg:pt-24
        lg:pb-0
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        style={reduced ? undefined : { y }}
        className="
          absolute
          inset-0
          h-[118%]
        "
      >
        <img
          src={heroAsset}
          alt="A modern university campus at golden hour with a long reflecting pool"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="
            h-full
            w-full
            object-cover
          "
        />
      </motion.div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#201A57]/70" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#201A57]/96
          via-[#201A57]/28
          to-[#201A57]/50
        "
      />

      <ArcPattern
        className="
          absolute
          inset-0
          h-full
          w-full
          text-[#3F80CF]
        "
        opacity={0.055}
      />

      {/* CONTENT */}
      <div
        className="
          shell
          relative
          z-10
          flex
          flex-col

          py-8

          sm:py-10

          lg:min-h-[calc(100svh-96px)]
          lg:justify-center
          lg:py-14
        "
      >
        {/* Eyebrow */}
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="
            eyebrow
            max-w-full
            text-[9px]
            leading-5
            tracking-[0.16em]
            text-[#6FA9EF]

            sm:text-[10px]
            sm:tracking-[0.2em]

            md:text-[11px]
            lg:text-[12px]
          "
        >
          {company.purpose}
        </motion.p>

        {/* Main Heading */}
        <h1
          className="
            mt-4
            w-full
            max-w-full

            text-[clamp(1.65rem,6.6vw,2.05rem)]
            font-medium
            leading-[1.08]
            tracking-[-0.025em]
            text-white

            min-[390px]:text-[clamp(1.78rem,6.8vw,2.25rem)]

            sm:mt-5
            sm:max-w-[16ch]
            sm:text-[2.8rem]
            sm:leading-[1.04]
            sm:tracking-[-0.03em]

            md:text-[3.45rem]

            lg:text-[4.2rem]
            lg:leading-[1]

            xl:text-[4.8rem]
          "
        >
          <LineReveal
            delay={0.25}
            lines={[
              "Smarter Student",
              "Accommodation",
              "Operations",
            ]}
            lineClassName="
              block
              whitespace-nowrap
              font-medium
              text-white
            "
          />
        </h1>

        {/* Bottom hero content */}
        <div
          className="
            mt-5
            grid
            gap-4
            border-t
            border-white/10
            pt-4

            sm:mt-6
            sm:gap-5
            sm:pt-5

            lg:mt-8
            lg:grid-cols-[1fr_auto]
            lg:items-end
            lg:gap-10
            lg:pt-7
          "
        >
          {/* Subheadline */}
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              max-w-xl
              text-[13.5px]
              leading-6
              text-white/82

              sm:text-[15px]
              sm:leading-7

              md:text-[16px]
              md:leading-8

              lg:text-[18px]
            "
          >
            {company.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:flex-wrap
            "
          >
            <a
              href="#services"
              className="
                inline-flex
                min-h-[46px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-active
                bg-active
                px-6
                text-[13.5px]
                font-semibold
                text-white
                transition-all

                hover:bg-active/90
                hover:shadow-[0_0_20px_rgba(63,128,207,0.35)]

                sm:min-h-[50px]
                sm:px-7
                sm:text-[15px]

                lg:text-base
              "
            >
              Explore Services
            </a>

            <a
              href="#projects"
              className="
                inline-flex
                min-h-[46px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/20
                px-6
                text-[13.5px]
                font-semibold
                text-white
                transition-all

                hover:bg-white/10

                sm:min-h-[50px]
                sm:px-7
                sm:text-[15px]

                lg:text-base
              "
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
          className="
            mt-4
            max-w-2xl
            text-[13px]
            leading-6
            text-white/68

            sm:mt-5
            sm:text-[14px]
            sm:leading-7

            lg:text-base
          "
        >
          {company.tagline}
        </motion.p>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        style={reduced ? undefined : { opacity: fade }}
        className="
          absolute
          bottom-7
          right-6
          hidden
          items-center
          gap-2
          text-[0.6875rem]
          uppercase
          tracking-[0.18em]
          text-white/50

          lg:flex
        "
      >
        Scroll
        <ArrowDown className="h-3.5 w-3.5" />
      </motion.div>
    </section>
  );
}